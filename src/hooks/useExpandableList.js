import { useCallback, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { animate } from 'framer-motion';

const DURATION = 0.5;
const EASE = [0.4, 0, 0.2, 1];

// Splits a list into always-visible and expandable items, and animates the list's height on
// expand/collapse. Attach `wrapperRef` to an element wrapping the list; mark extra items with
// `data-extra`. `expanded` is the toggle state; `showExtra` stays true until a collapse finishes,
// so extras can fade out while the height shrinks.
export default function useExpandableList(items, limit) {
    const [expanded, setExpanded] = useState(false);
    const [showExtra, setShowExtra] = useState(false);
    const wrapperRef = useRef(null);
    const running = useRef([]);
    const runId = useRef(0);

    const toggle = useCallback(() => {
        const wrapper = wrapperRef.current;
        running.current.forEach((animation) => animation.stop());
        running.current = [];
        const id = ++runId.current;

        if (!wrapper || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setExpanded(!expanded);
            setShowExtra(!expanded);
            return;
        }

        const from = wrapper.offsetHeight;
        const reset = () => {
            wrapper.style.height = '';
            wrapper.style.overflowY = '';
        };
        // Clip only vertically, so card shadows and hover effects aren't cut off at the sides
        wrapper.style.overflowY = 'clip';

        if (!expanded) {
            flushSync(() => {
                setExpanded(true);
                setShowExtra(true);
            });
            wrapper.style.height = '';
            const to = wrapper.offsetHeight;
            wrapper.style.height = `${from}px`;
            const grow = animate(wrapper, { height: [from, to] }, { duration: DURATION, ease: EASE });
            grow.then(() => { if (id === runId.current) reset(); });
            running.current = [grow];
            return;
        }

        // Height the list will have once extras are gone: bottom of the last always-visible item
        const top = wrapper.getBoundingClientRect().top;
        const baseItems = [...(wrapper.firstElementChild?.children ?? [])].filter((el) => !el.hasAttribute('data-extra'));
        const to = Math.max(0, ...baseItems.map((el) => el.getBoundingClientRect().bottom - top));

        setExpanded(false);
        const shrink = animate(wrapper, { height: [from, to] }, { duration: DURATION, ease: EASE });
        shrink.then(() => {
            if (id !== runId.current) return;
            flushSync(() => setShowExtra(false));
            reset();
        });
        running.current = [shrink];

        // If scrolled down into the list, glide back to the section's top alongside the collapse
        const section = wrapper.closest('section');
        if (section) {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            if (sectionTop < window.scrollY - 1) {
                running.current.push(animate(window.scrollY, sectionTop, {
                    duration: DURATION,
                    ease: EASE,
                    onUpdate: (y) => window.scrollTo({ top: y, behavior: 'instant' }),
                }));
            }
        }
    }, [expanded]);

    return {
        visible: items.slice(0, limit),
        extra: items.slice(limit),
        hasMore: items.length > limit,
        expanded,
        showExtra,
        toggle,
        wrapperRef,
    };
}
