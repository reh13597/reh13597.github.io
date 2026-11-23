import { useId, useLayoutEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CLAMP_LINES = 3;

export default function ExperienceCard({ title, org, org_site, team, description, image, imageAlt = '' }) {
    const descId = useId();
    const textRef = useRef(null);
    const reduceMotion = useReducedMotion();
    const [expanded, setExpanded] = useState(false);
    const [overflows, setOverflows] = useState(false);
    const [collapsedHeight, setCollapsedHeight] = useState(null);
    // Only animate height after the user clicks, so mount/resize measurements snap instantly
    const [interacted, setInteracted] = useState(false);

    useLayoutEffect(() => {
        const el = textRef.current;
        const measure = () => {
            const style = getComputedStyle(el);
            const lineHeight = parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.5;
            const clamp = Math.ceil(lineHeight * CLAMP_LINES);
            setCollapsedHeight(clamp);
            setOverflows(el.scrollHeight > clamp + 1);
        };
        measure();
        const observer = new ResizeObserver(measure);
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const clamped = overflows && !expanded;

    const toggle = () => {
        setInteracted(true);
        setExpanded(!expanded);
    };

    return(
        <article className="card sm:flex-row bg-base-100 border-3 border-neutral hover:border-primary/80 overflow-hidden transition-all duration-300 hover:scale-102 shadow-2xl shadow-primary/15 hover:shadow-xl hover:shadow-primary/20">
            {image && (
                <figure className="relative h-36 sm:h-auto sm:min-h-32 sm:w-40 md:w-48 shrink-0 overflow-hidden">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 w-full h-full object-cover"
                        src={image}
                        alt={imageAlt}
                        loading="lazy"
                    />
                </figure>
            )}
            <div className="card-body gap-0 px-5 py-4 min-w-0">
                <h3 className="xl:text-lg lg:text-md md:text-sm text-xs font-bold">
                    {title} <a href={org_site} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">@ {org}</a>
                </h3>
                {team && (
                    <p className="md:text-sm text-xs font-semibold italic">
                        {team}
                    </p>
                )}
                <motion.div
                    id={descId}
                    className="relative mt-2 overflow-hidden"
                    initial={false}
                    animate={{ height: clamped && collapsedHeight ? collapsedHeight : 'auto' }}
                    transition={{ duration: interacted && !reduceMotion ? 0.35 : 0, ease: 'easeOut' }}
                >
                    <p
                        ref={textRef}
                        className="xl:text-md md:text-sm text-xs leading-relaxed text-white/80 whitespace-pre-line">
                        {description}
                    </p>
                    {clamped && (
                        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-5 bg-linear-to-t from-base-100 to-transparent" />
                    )}
                </motion.div>
                {overflows && (
                    <button
                        type="button"
                        onClick={toggle}
                        aria-expanded={expanded}
                        aria-controls={descId}
                        className="self-start mt-2 md:text-sm text-xs font-semibold text-primary hover:underline cursor-pointer rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                        {expanded ? 'Read less' : 'Read more'}
                    </button>
                )}
            </div>
        </article>
    );
}
