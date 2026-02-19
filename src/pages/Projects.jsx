import ProjectCard from '../components/ProjectCard';
import Descent from '../assets/images/descent.JPG';
import ServerNexus from '../assets/images/servernexus.JPG';
import GridLock from '../assets/images/gridlock.JPG';
import Recipedia from '../assets/images/recipedia.JPG';
import Resume from '../assets/images/resume.jpg';

export default function Projects() {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 md:mt-15 md:mb-15 mt-30 mb-10">
            <ProjectCard
                title={'Server Nexus'}
                items={['Svelte', 'TailwindCSS', 'DaisyUI', 'Supabase', 'MCStatus API']}
                desc={'A website that displays Minecraft server information such as server status, player count, user reviews, and more.'}
                link={'https://server-nexus.vercel.app/'}
                picture={ServerNexus}
                altText={'Logo of the Server Nexus website depicting a computer network with one big white circle in the middle, and 6 smaller white circles connecting to it, featured on a gray background with a light shadow.'}
            />
            <ProjectCard
                title={'Recipedia'}
                items={['React', 'TailwindCSS', 'DaisyUI', 'TheMealDB API', 'APINinjas']}
                desc={'A website for finding recipes, nutrition facts, image scanning, and more.'}
                link={'https://rcpdia.vercel.app/'}
                picture={Recipedia}
                altText={'Logo of the Recipedia website depicting an orange cookbook with a white chefs hat on the cover, situated on a white background.'}
            />
            <ProjectCard
                title={'Resume-to-Job Recommender'}
                items={['Python', 'scikit-learn', 'pandas', 'numPy', 'matplotlib']}
                desc={'An AI pipeline that ranks and matches the top N job postings to a resume.'}
                link={'https://github.com/reh13597/CMPT310-Resume-Parser'}
                picture={Resume}
                altText={'Picture of multiple peoples arms raised wearing different colored sweaters, all holding a resume in the air, with a sky blue background.'}
            />
            <ProjectCard
                title={'GridLock'}
                items={['Python', 'PyGame', 'TCP Sockets']}
                desc={'A Pacman-esque 2D multiplayer game with shared objects and object locking.'}
                link={'https://github.com/danieldawdaSFU/CMPT-371-Project'}
                picture={GridLock}
                altText={'Screenshot of gameplay of GridLock, featuring a black grid with white lines, yellow square obstacles with black crosses, circular players with different colors named P1 through P4, and multiple squares with the number 40 and colors corresponding to the players.'}
            />
            <ProjectCard
                title={'Descent Into Madness'}
                items={['Roblox Studio', 'Lua']}
                desc={'A 3D single-player horror game built during the 2025 Mountain Madness Hackathon.'}
                link={'https://devpost.com/software/descent-into-madness'}
                picture={Descent}
                altText={'Picture of the Descent Into Madness Roblox Game depicting a crazed person drawn by black scribbles, featured on a red background.'}
            />
        </div>
    );
}
