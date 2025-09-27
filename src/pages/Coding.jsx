import { useEffect, useState } from 'react';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import Descent from '../assets/images/descent.JPG';
import ServerNexus from '../assets/images/servernexus.JPG';
import GridLock from '../assets/images/gridlock.JPG';
import Recipedia from '../assets/images/recipedia.JPG';

export default function Coding() {
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
                            items={['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'C/C++', 'C#', 'Lua']}
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
                            items={['Supabase', 'Git', 'GitHub', 'Docker', 'Linux', 'Figma', 'Visual Studio Code', 'Unity', 'Roblox Studio']}
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
                            altText={'Logo of Server Nexus website depicting a computer network with one big white circle in the middle, and 6 smaller white circles connecting to it, featured on a gray background with a light shadow.'}
                        />
                    </div>
                    <div className={`flex transition ${isVisible ? 'opacity-100 translate-y-0 delay-1300' : 'opacity-0 translate-y-5'}`}>
                        <ProjectCard
                            title={'Server Nexus'}
                            items={['Svelte', 'TailwindCSS', 'DaisyUI', 'Supabase', 'MCStatus API', 'Signup/Login', 'Minecraft Servers', 'Server Status', 'World Maps', 'Player Stats & Achievements']}
                            link={'https://server-nexus.vercel.app/'}
                            picture={ServerNexus}
                            altText={'Logo of Server Nexus website depicting a computer network with one big white circle in the middle, and 6 smaller white circles connecting to it, featured on a gray background with a light shadow.'}
                        />
                    </div>
                    <div className={`flex transition ${isVisible ? 'opacity-100 translate-y-0 delay-1700' : 'opacity-0 translate-y-5'}`}>
                        <ProjectCard
                            title={'GridLock'}
                            items={['Python', 'PyGame', 'TCP Sockets', '2D Multiplayer Game', 'Shared Objects', 'Object Locking', 'PacMan-esque']}
                            link={'https://github.com/danieldawdaSFU/CMPT-371-Project'}
                            picture={GridLock}
                            altText={'Logo of Server Nexus website depicting a computer network with one big white circle in the middle, and 6 smaller white circles connecting to it, featured on a gray background with a light shadow.'}
                        />
                    </div>
                    <div className={`flex transition ${isVisible ? 'opacity-100 translate-y-0 delay-1500' : 'opacity-0 translate-y-5'}`}>
                        <ProjectCard
                            title={'Descent Into Madness'}
                            items={['Roblox Studio', 'Lua', 'Hackathon', '3D Singleplayer Game', 'Horror', 'Puzzle', 'Sanity Drain', 'Monsters']}
                            link={'https://devpost.com/software/descent-into-madness'}
                            picture={Descent}
                            altText={'Picture of Descent Into Madness Roblox Game depicting a crazed person drawn by black scribbles, featured on a red background.'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
