import { motion, useReducedMotion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ShowMoreButton from '../components/ShowMoreButton';
import useExpandableList from '../hooks/useExpandableList';
import Descent from '../assets/images/projects/descent.JPG';
import GridLock from '../assets/images/projects/gridlock.JPG';
import Resume from '../assets/images/projects/resume.jpg';
import MRI from '../assets/images/projects/mri.webp';
import Subscriptions from '../assets/images/projects/subscriptions.jpg';
import MCServers from '../assets/images/projects/mcserver.webp';
import RecipeBook from '../assets/images/projects/recipebook.jpg';
// import WIP from '../assets/images/projects/wip.jpg';

const VISIBLE_COUNT = 3;

const projects = [
    {
        title: 'Server Nexus',
        items: ['Svelte', 'TypeScript', 'Tailwind CSS', 'Daisy UI', 'Supabase', 'MCStatus API', 'EmailJS'],
        desc: 'A full-stack website that lets users fetch Minecraft server information and leave ratings/reviews.',
        link: 'https://github.com/reh13597/ServerNexus',
        picture: MCServers,
        altText: 'Screenshot of an in-game UI showing a Minecraft server list with multiple servers like Hypixel and Mineplex.',
    },
    {
        title: 'SubTrak',
        items: ['Next.js + API Routes', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Google Gemini API', 'AWS Amplify', 'AWS RDS (MySQL) + S3', 'AWS Cognito + Lambda'],
        desc: 'A full-stack website that lets users track their subscriptions, spending, and under/over-utilized services.',
        link: 'https://github.com/reh13597/subtrak',
        picture: Subscriptions,
        altText: 'Picture of multiple subscription cards featuring popular subscriptions like Netflix and Amazon Prime.',
    },
    {
        title: 'Recipedia',
        items: ['React', 'JavaScript', 'Tailwind CSS', 'Daisy UI', 'TheMealDB API', 'APINinjas', 'GitHub Actions', 'EmailJS'],
        desc: 'A website for finding recipes and scanning images for nutritional information.',
        link: 'https://github.com/reh13597/recipedia',
        picture: RecipeBook,
        altText: 'Picture of a recipe for Spicy Vodka Rigatoni with drawings of ingredients and real peppers scattered on top.',
    },
    {
        title: 'CerebralVision',
        items: ['PyTorch', 'scikit-learn', 'pandas', 'numPy', 'matplotlib', 'seaborn'],
        desc: 'An AI pipeline that detects the presence of brain tumors in MRI scans.',
        link: 'https://github.com/sfu-cmpt419/2026_1_project_01',
        picture: MRI,
        altText: 'Picture of 2 MRI scans of a brain.',
    },
    {
        title: 'Resume-to-Job Recommender',
        items: ['Python', 'scikit-learn', 'pandas', 'numPy', 'spaCy', 'matplotlib', 'seaborn'],
        desc: 'An AI pipeline that ranks and matches the top N job postings to a resume.',
        link: 'https://github.com/reh13597/CMPT310-Resume-Parser',
        picture: Resume,
        altText: 'Picture of multiple peoples arms raised wearing different colored sweaters, all holding a resume in the air, with a sky blue background.',
    },
    {
        title: 'GridLock',
        items: ['Python', 'PyGame', 'TCP Sockets'],
        desc: 'A Pacman-esque 2D multiplayer game with shared objects and object locking.',
        link: 'https://github.com/danieldawdaSFU/CMPT-371-Project',
        picture: GridLock,
        altText: 'Screenshot of gameplay of GridLock, featuring a black grid with white lines, yellow square obstacles with black crosses, circular players with different colors named P1 through P4, and multiple squares with the number 40 and colors corresponding to the players.',
    },
    {
        title: 'Descent Into Madness',
        items: ['Roblox Studio', 'Lua'],
        desc: 'A 3D single-player horror game built during the 2025 Mountain Madness Hackathon.',
        link: 'https://devpost.com/software/descent-into-madness',
        picture: Descent,
        altText: 'Picture of the Descent Into Madness Roblox Game depicting a crazed person drawn by black scribbles, featured on a red background.',
    },
];

export default function Projects() {
    const { visible, extra, hasMore, expanded, showExtra, toggle, wrapperRef } = useExpandableList(projects, VISIBLE_COUNT);
    const reduceMotion = useReducedMotion();
    const y = reduceMotion ? 0 : 20;

    return(
        <div className="flex flex-col items-center mt-40 mb-10">
            <div ref={wrapperRef}>
                <div id="projects-list" className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {visible.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                    {showExtra && extra.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            data-extra
                            initial={{ opacity: 0, y }}
                            animate={{ opacity: expanded ? 1 : 0, y: 0 }}
                            transition={expanded
                                ? { duration: 0.4, ease: 'easeOut', delay: idx * 0.08 }
                                : { duration: 0.3, ease: 'easeOut' }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {hasMore && (
                <div className="mt-8">
                    <ShowMoreButton
                        expanded={expanded}
                        onClick={toggle}
                        controls="projects-list"
                        hiddenCount={extra.length}
                    />
                </div>
            )}
        </div>
    );
}
