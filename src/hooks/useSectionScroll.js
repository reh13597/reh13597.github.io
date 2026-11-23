import { useEffect } from 'react';

const SECTION_SELECTOR = 'main > section, footer';
// Duration of the glide between sections
const DURATION_MS = 800;
// Fraction of the remaining distance covered per 60fps frame when scrolling inside a tall
// section. Lower = more delayed and smoother.
const SMOOTHING = 0.1;
// Largest distance a single wheel event can add, so fast flicks don't lurch
const MAX_WHEEL_STEP = 120;
// Wheel events closer together than this belong to the same gesture (incl. trackpad inertia)
const GESTURE_GAP_MS = 200;
// Minimum accumulated wheel delta before a gesture counts as a section jump
const WHEEL_THRESHOLD = 40;
const ARROW_STEP = 80;

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

const isTextInput = (el) =>
    el instanceof HTMLElement && (el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName));

// Space activates focused buttons/links, so only treat it as scrolling elsewhere
const isActivatable = (el) => el instanceof HTMLElement && ['BUTTON', 'A', 'SUMMARY'].includes(el.tagName);

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Where scroll position y sits relative to the page sections
const getPosition = (y) => {
    const vh = window.innerHeight;
    const maxScroll = document.documentElement.scrollHeight - vh;
    const sections = [...document.querySelectorAll(SECTION_SELECTOR)].map((el) => {
        const top = el.getBoundingClientRect().top + window.scrollY;
        return { top: Math.min(top, maxScroll), bottom: top + el.offsetHeight };
    });
    const idx = Math.max(0, sections.findLastIndex((s) => s.top <= y + 1));
    const current = sections[idx];
    const isTall = Boolean(current) && current.bottom - current.top > vh + 1;
    return { y, vh, sections, idx, current, isTall };
};

// True when the current section still has content beyond the viewport in this direction
const hasMoreInSection = ({ y, vh, current, isTall }, direction) =>
    isTall && (direction > 0 ? current.bottom > y + vh + 1 : current.top < y - 1);

// Full-page section scrolling for mouse/trackpad + keyboard users. A scroll gesture at a
// section edge glides to the next/previous section. Inside sections taller than the viewport,
// scrolling is eased toward a target (smooth, slightly delayed) and stops at the section edge;
// a new gesture is needed to move on, so momentum never overshoots. Touch devices keep native
// scrolling with CSS scroll-snap (see index.css).
export default function useSectionScroll() {
    useEffect(() => {
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

        let gliding = false;
        let smoothing = false;
        let cooldown = false;
        let frame = null;
        let lastWheel = 0;
        let accumulated = 0;
        // Where in-section scrolling is heading, and where we've actually drawn it so far
        let targetY = window.scrollY;
        let currentY = window.scrollY;
        // Whether the current wheel gesture started at a section edge (and so may jump)
        let gestureCanJump = false;
        let gestureDirection = 0;

        const scrollToY = (top) => window.scrollTo({ top, behavior: 'instant' });

        const stopFrame = () => {
            if (frame) cancelAnimationFrame(frame);
            frame = null;
            smoothing = false;
        };

        // Glide to another section with a fixed-duration ease
        const glideTo = (target) => {
            stopFrame();
            const start = window.scrollY;
            const distance = target - start;
            targetY = currentY = target;
            if (Math.abs(distance) < 1) return;

            if (prefersReducedMotion()) {
                scrollToY(target);
                cooldown = true;
                return;
            }

            gliding = true;
            let startTime = null;
            const step = (now) => {
                // Start timing on the first frame (see smoothTo) so progress never goes negative
                startTime ??= now;
                const progress = Math.min((now - startTime) / DURATION_MS, 1);
                scrollToY(start + distance * easeInOutCubic(progress));
                if (progress < 1) {
                    frame = requestAnimationFrame(step);
                } else {
                    frame = null;
                    gliding = false;
                    cooldown = true;
                }
            };
            frame = requestAnimationFrame(step);
        };

        // Ease toward targetY a fraction per frame (frame-rate independent)
        const smoothTo = (target) => {
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            targetY = Math.max(0, Math.min(target, maxScroll));
            if (prefersReducedMotion()) {
                currentY = targetY;
                scrollToY(targetY);
                return;
            }
            if (smoothing) return;
            smoothing = true;
            currentY = window.scrollY;
            let last = null;
            const step = (now) => {
                // rAF timestamps can precede performance.now() taken before the request, so measure
                // from the first frame and clamp, or the first step could go backwards or lurch
                const elapsed = last === null ? 1000 / 60 : Math.min(Math.max(now - last, 0), 100);
                const factor = 1 - Math.pow(1 - SMOOTHING, elapsed / (1000 / 60));
                last = now;
                currentY += (targetY - currentY) * factor;
                if (Math.abs(targetY - currentY) < 0.5) {
                    currentY = targetY;
                    scrollToY(targetY);
                    frame = null;
                    smoothing = false;
                    return;
                }
                scrollToY(currentY);
                frame = requestAnimationFrame(step);
            };
            frame = requestAnimationFrame(step);
        };

        // Scroll by delta inside a tall section (clamped to its edge), or move to the adjacent
        // section when allowed. Returns false if there was nowhere to go.
        const move = (direction, delta, canJump) => {
            const pos = getPosition(targetY);
            const { y, vh, sections, idx, current } = pos;
            if (!current) return false;

            if (hasMoreInSection(pos, direction)) {
                const edge = direction > 0 ? current.bottom - vh : current.top;
                smoothTo(direction > 0 ? Math.min(y + delta, edge) : Math.max(y - delta, edge));
                return true;
            }
            if (!canJump) return false;

            if (direction < 0 && current.top < y - 1) {
                // Partway into a short section: settle back on its top
                glideTo(current.top);
                return true;
            }

            const target = sections[idx + direction];
            if (!target) return false;
            // Going up into a tall section, land on its bottom so scrolling up continues through it
            glideTo(direction > 0 ? target.top : Math.max(target.top, target.bottom - vh));
            return true;
        };

        const onWheel = (e) => {
            if (e.ctrlKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
            e.preventDefault();

            const now = performance.now();
            const gap = now - lastWheel;
            lastWheel = now;

            // Swallow the rest of the gesture (and trackpad inertia) that triggered a glide
            if (gliding || (cooldown && gap < GESTURE_GAP_MS)) return;
            cooldown = false;

            const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1;
            const delta = Math.max(-MAX_WHEEL_STEP, Math.min(MAX_WHEEL_STEP, e.deltaY * unit));
            const direction = Math.sign(delta);
            if (!direction) return;

            // A new gesture (or a reversal) may jump only if it starts with nothing left to scroll
            if (gap > GESTURE_GAP_MS || direction !== gestureDirection) {
                gestureDirection = direction;
                gestureCanJump = !hasMoreInSection(getPosition(targetY), direction);
                accumulated = 0;
            }

            if (hasMoreInSection(getPosition(targetY), direction)) {
                move(direction, Math.abs(delta), false);
                return;
            }
            if (!gestureCanJump) return;

            // Small nudges are held until they add up to a real gesture
            accumulated += delta;
            if (Math.abs(accumulated) < WHEEL_THRESHOLD) return;
            accumulated = 0;
            move(direction, 0, true);
        };

        const onKeyDown = (e) => {
            if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey || isTextInput(e.target)) return;

            const vh = window.innerHeight;
            let direction = 0;
            let delta = 0;
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                direction = e.key === 'ArrowDown' ? 1 : -1;
                delta = ARROW_STEP;
            } else if (e.key === 'PageDown' || e.key === 'PageUp') {
                direction = e.key === 'PageDown' ? 1 : -1;
                delta = vh * 0.9;
            } else if (e.key === ' ' && !isActivatable(e.target)) {
                direction = e.shiftKey ? -1 : 1;
                delta = vh * 0.9;
            }
            if (!direction) return;

            e.preventDefault();
            if (!gliding) move(direction, delta, !e.repeat || !smoothing);
        };

        // Keep the target in sync with scrolling we didn't drive (navbar links, scrollbar drag,
        // Show less scrolling back up), so the next wheel continues from the real position
        const onScroll = () => {
            if (gliding || smoothing) return;
            targetY = currentY = window.scrollY;
        };

        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('keydown', onKeyDown);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('wheel', onWheel);
            window.removeEventListener('keydown', onKeyDown);
            window.removeEventListener('scroll', onScroll);
            stopFrame();
        };
    }, []);
}
