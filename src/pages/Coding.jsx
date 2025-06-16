import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';
import Descent from '../assets/images/descent.JPG';
import ServerNexus from '../assets/images/servernexus.JPG';

export default function Coding() {
   return(
        <div className="grid grid-rows-2">
            <div className="bg-base-300 rounded-2xl p-6 shadow-lg h-80 w-280 mx-auto mt-8">
                <h1 className="flex justify-center text-4xl font-semibold">Skills</h1>
                <div className="grid grid-cols-3 gap-5 mt-5">
                    <div className="flex justify-center">
                        <SkillCard title={'Languages'} items={['Java', 'JavaScript', 'TypeScript', 'HTML', 'Python', 'C/C++', 'C#', 'Lua']} />
                    </div>
                    <div className="flex justify-center">
                        <SkillCard title={'Frameworks'} items={['React', 'MUI', 'Svelte', 'TailwindCSS', 'DaisyUI']} />
                    </div>
                    <div className="flex justify-center">
                        <SkillCard title={'Tools'} items={['Supabase', 'Visual Studio Code', 'Unity', 'Roblox Studio', 'GitHub', 'Figma']} />
                    </div>
                </div>
            </div>
            <div className="bg-base-300 rounded-2xl p-6 shadow-lg h-110 w-430 mx-auto -mt-7">
                <h1 className="flex justify-center text-4xl font-semibold">Projects</h1>
                <div className="grid grid-cols-2 gap-3 mt-5">
                    <div className="flex justify-center">
                        <ProjectCard
                            title={'Descent Into Madness'}
                            description={'Descent Into Madness was a Roblox horror game developed by me and 3 others during the Mountain Madness 2025 Hackathon. Over the course of 24 hours, we planned, designed, and coded the game in Roblox Studio using Lua. The game delves into the theme of the hackathon, "Descent Into Madness", by plunging the player into a terrifying experience in a small town with mysterious entities, which quickly gets out of hand.'}
                            link={'https://devpost.com/software/descent-into-madness'}
                            picture={Descent}
                            altText={'Picture of Descent Into Madness Roblox Game depicting a crazed person drawn by black scribbles, featured on a red background.'}
                        />
                    </div>
                    <div className="flex justify-center">
                        <ProjectCard
                            title={'Server Nexus'}
                            description={'Server Nexus is a full-stack website that I am currently working on. I am building the frontend with Svelte, TailwindCSS, and DaisyUI. The backend is handled by Supabase. It is a website where users can create an account to: find the status of any Minecraft server, create Minecraft server "profiles" that are either public or private, and view profiles posted by other users. A server profile includes the server status, live server chat, player stats & achievements, and a server map.'}
                            link={'https://server-nexus.vercel.app/'}
                            picture={ServerNexus}
                            altText={'Logo of Server Nexus website depicting a computer network with one big white circle in the middle, and 6 smaller white circles connecting to it, featured on a gray background with a light shadow.'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
