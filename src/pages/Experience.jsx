import { useEffect, useState } from 'react';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import Descent from '../assets/images/descent.JPG';
import ServerNexus from '../assets/images/servernexus.JPG';
import GridLock from '../assets/images/gridlock.JPG';
import Recipedia from '../assets/images/recipedia.JPG';
import Resume from '../assets/images/resume.jpg';

export default function Experience() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300)
    })

    return(
        <div className="flex flex-col gap-10 mt-10">
            <div className={`bg-base-300 rounded-4xl p-6 shadow-lg h-fit w-[90%] m-auto transition ${isVisible ? 'opacity-100 translate-x-0 delay-100' : 'opacity-0 translate-x-20'}`}>
                <div className="flex">
                    <h1 className="text-4xl font-semibold transition duration-200 hover:scale-105 hover:text-primary cursor-default select-none">Skills</h1>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-5 justify-items-center">
                    <div className={`flex transition ${isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-15'}`}>
                        <SkillCard
                            title={'Languages'}
                            items={['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'C/C++', 'C#', 'x86 Assembly', 'Lua']}
                        />
                    </div>
                    <div className={`flex transition ${isVisible ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-15'}`}>
                        <SkillCard
                            title={'Frameworks'}
                            items={['React', 'MUI', 'Svelte', 'TailwindCSS', 'DaisyUI']}
                        />
                    </div>
                    <div className={`flex transition ${isVisible ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-15'}`}>
                        <SkillCard
                            title={'Tools'}
                            items={['Supabase', 'Git', 'GitHub', 'Docker', 'Toggl Track', 'Jira', 'Linux', 'Neovim', 'Vercel', 'Figma', 'Visual Studio Code', 'Unity', 'Roblox Studio']}
                        />
                    </div>
                </div>
            </div>
            <div className={`bg-base-300 rounded-4xl p-6 shadow-lg h-fit w-[90%] m-auto transition ${isVisible ? 'opacity-100 translate-x-0 delay-900' : 'opacity-0 -translate-x-20'}`}>
                <div className="flex">
                    <h1 className="text-4xl font-semibold transition duration-200 hover:scale-105 hover:text-primary cursor-default select-none">Projects</h1>
                </div>
                <div className="grid grid-cols-2 gap-5 mt-5">
                    <div className={`flex transition ${isVisible ? 'opacity-100 translate-y-0 delay-1100' : 'opacity-0 translate-y-5'}`}>
                        <ProjectCard
                            title={'Recipedia'}
                            items={['React', 'TailwindCSS', 'DaisyUI', 'TheMealDB API', 'APINinjas', 'CI/CD', 'Agile Scrum & Kanban', 'Meal Planning', 'Nutrition', 'Recipe Search', 'Image Scanner']}
                            link={'https://recipedia-mtvj.onrender.com/'}
                            picture={Recipedia}
                            altText={'Logo of the Recipedia website depicting an orange cookbook with a white chefs hat on the cover, situated on a white background.'}
                        />
                    </div>
                    <div className={`flex transition ${isVisible ? 'opacity-100 translate-y-0 delay-1300' : 'opacity-0 translate-y-5'}`}>
                        <ProjectCard
                            title={'Server Nexus'}
                            items={['Svelte', 'TailwindCSS', 'DaisyUI', 'Supabase', 'MCStatus API', 'Signup/Login', 'Minecraft Servers', 'Server Status', 'World Maps', 'Player Stats & Achievements']}
                            link={'https://server-nexus.vercel.app/'}
                            picture={ServerNexus}
                            altText={'Logo of the Server Nexus website depicting a computer network with one big white circle in the middle, and 6 smaller white circles connecting to it, featured on a gray background with a light shadow.'}
                        />
                    </div>
                    <div className={`flex transition ${isVisible ? 'opacity-100 translate-y-0 delay-1700' : 'opacity-0 translate-y-5'}`}>
                        <ProjectCard
                            title={'Resume-to-Job Recommender'}
                            items={['Python', 'HuggingFace', 'AI', 'scikit-learn', 'pandas/numpy', 'matplotlib/seaborn', 'spaCy', 'scipy', 'joblib', 'Logistic Regression', 'Cosine Similarity', 'Job/Co-op Applications']}
                            link={'https://github.com/reh13597/CMPT310-Resume-Parser'}
                            picture={Resume}
                            altText={'Picture of multiple peoples arms raised wearing different colored sweaters, all holding a resume in the air, with a sky blue background.'}
                        />
                    </div>
                    <div className={`flex transition ${isVisible ? 'opacity-100 translate-y-0 delay-1500' : 'opacity-0 translate-y-5'}`}>
                        <ProjectCard
                            title={'Descent Into Madness'}
                            items={['Roblox Studio', 'Lua', 'Hackathon', '3D Singleplayer Game', 'Horror', 'Puzzle', 'Sanity Drain', 'Monsters']}
                            link={'https://devpost.com/software/descent-into-madness'}
                            picture={Descent}
                            altText={'Picture of the Descent Into Madness Roblox Game depicting a crazed person drawn by black scribbles, featured on a red background.'}
                        />
                    </div>
                    <div className={`flex transition ${isVisible ? 'opacity-100 translate-y-0 delay-1700' : 'opacity-0 translate-y-5'}`}>
                        <ProjectCard
                            title={'GridLock'}
                            items={['Python', 'PyGame', 'TCP Sockets', '2D Multiplayer Game', 'Shared Objects', 'Object Locking', 'PacMan-esque']}
                            link={'https://github.com/danieldawdaSFU/CMPT-371-Project'}
                            picture={GridLock}
                            altText={'Screenshot of gameplay of GridLock, featuring a black grid with white lines, yellow square obstacles with black crosses, circular players with different colors named P1 through P4, and multiple squares with the number 40 and colors corresponding to the players.'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
