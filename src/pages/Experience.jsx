import { motion, useReducedMotion } from 'framer-motion';
import ExperienceCard from '../components/ExperienceCard';
import ShowMoreButton from '../components/ShowMoreButton';
import useExpandableList from '../hooks/useExpandableList';
import PWX from '../assets/images/exp/powerex.jfif';
import SFURS from '../assets/images/exp/sfurs.png';
import Descent from '../assets/images/projects/descent.JPG';
import SFU from '../assets/images/exp/sfu.png';

const VISIBLE_COUNT = 3;

// Newest first. Only `title`, `year` and `description` are required.
// Optional: `team`, `date`, `duration`, `image` (+ `imageAlt`).
const experiences = [
    {
        title: 'Developer Analyst Co-op',
        org: 'Powerex',
        org_site: 'https://www.powerex.com',
        team: 'MBOSS Teams',
        year: '2026',
        date: 'Sep - Present',
        description: 'Taking on the responsibilities of a full-stack developer, business analyst, and business intelligence developer, working within the MBOSS teams (mid office, back office, and shared services).',
        image: PWX,
        imageAlt: 'Powerex company logo.',
    },
    {
        title: 'Software Developer',
        org: 'SFU Robot Soccer Club',
        org_site: 'https://www.sfurobotsoccer.com/',
        team: 'Agent and W3 & Discord Bot Teams',
        date: 'Jun - Present',
        description: 'Analyzing robot behavior for penalty and free kicks in an open-source system, and comparing its decision logic against our team’s C++ agent to find gaps in positioning and shot selection.',
        image: SFURS,
        imageAlt: 'SFU Robot Soccer Club logo.',
    },
    {
        title: 'Descent Into Madness',
        org: 'Mountain Madness Hackathon',
        org_site: 'https://devpost.com/software/descent-into-madness',
        team: 'Simon Fraser University',
        year: '2025',
        date: 'Mar 8 - 9',
        description: 'A 3D single-player horror game built with Lua on Roblox Studio, centered on the theme "Descent Into Madness."',
        image: Descent,
        imageAlt: 'Descent Into Madness theme image.',
    },
    {
        title: 'SFU-ZJU DDP',
        org: 'Simon Fraser University',
        org_site: 'https://www.sfu.ca/fas/study/future-undergraduates/programs/joint-major/sfu-zhejiang-dual.html',
        year: '2023',
        date: 'Sep - Present',
        description: 'I\'m currently enrolled in the SFU-ZJU Dual Degree Program, so after I get my bachelor\'s in CS, I\'ll embark to Zhejiang University in China to get a master\'s in Finance!',
        image: SFU,
        imageAlt: 'Simon Fraser University logo.',
    },
];

function TimelineItem({ experience, isFirst, isLast, ...motionProps }) {
    const { year, date, duration, ...card } = experience;

    return(
        <motion.li
            {...motionProps}
            className="grid grid-cols-[3.75rem_1rem_minmax(0,1fr)] md:grid-cols-[6.5rem_1.25rem_minmax(0,1fr)] gap-x-3 md:gap-x-6"
        >
            <div className="pt-5 text-right">
                <p className="text-sm md:text-lg font-bold text-primary leading-none">{year}</p>
                {(date || duration) && (
                    <p className="mt-1.5 text-[10px] md:text-xs text-white/60 leading-snug">
                        {date}
                        {date && duration && ' · '}
                        {duration && <span className="whitespace-nowrap">{duration}</span>}
                    </p>
                )}
            </div>

            <div aria-hidden="true" className="relative flex justify-center">
                {!(isFirst && isLast) && (
                    <span className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-primary/30 ${isFirst ? 'top-5' : 'top-0'} ${isLast ? 'h-5' : 'bottom-0'}`} />
                )}
                <span className="relative mt-5 size-4 md:size-5 rounded-full bg-primary ring-4 ring-base-300 shadow-lg shadow-primary/40" />
            </div>

            <div className="pb-8 min-w-0">
                <ExperienceCard {...card} />
            </div>
        </motion.li>
    );
}

export default function Experience() {
    const { visible, extra, hasMore, expanded, showExtra, toggle, wrapperRef } = useExpandableList(experiences, VISIBLE_COUNT);
    const reduceMotion = useReducedMotion();
    const shown = showExtra ? visible.length + extra.length : visible.length;
    const y = reduceMotion ? 0 : 20;

    return(
        <div className="w-full max-w-4xl mx-auto mt-40 mb-10 px-4 md:px-10 flex flex-col items-center">
            <div ref={wrapperRef} className="w-full">
                <ol id="experience-list" className="w-full">
                    {visible.map((experience, idx) => (
                        <TimelineItem
                            key={`${experience.year}-${experience.title}`}
                            experience={experience}
                            isFirst={idx === 0}
                            isLast={idx === shown - 1}
                            initial={{ opacity: 0, y }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.1 }}
                        />
                    ))}
                    {showExtra && extra.map((experience, idx) => (
                        <TimelineItem
                            key={`${experience.year}-${experience.title}`}
                            data-extra
                            experience={experience}
                            isFirst={false}
                            isLast={VISIBLE_COUNT + idx === shown - 1}
                            initial={{ opacity: 0, y }}
                            animate={{ opacity: expanded ? 1 : 0, y: 0 }}
                            transition={expanded
                                ? { duration: 0.4, ease: 'easeOut', delay: idx * 0.08 }
                                : { duration: 0.3, ease: 'easeOut' }}
                        />
                    ))}
                </ol>
            </div>

            {hasMore && (
                <ShowMoreButton
                    expanded={expanded}
                    onClick={toggle}
                    controls="experience-list"
                    hiddenCount={extra.length}
                />
            )}
        </div>
    );
}
