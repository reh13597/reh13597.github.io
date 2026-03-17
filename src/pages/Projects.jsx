import ProjectCard from '../components/ProjectCard';
import Descent from '../assets/images/projects/descent.JPG';
import GridLock from '../assets/images/projects/gridlock.JPG';
import Resume from '../assets/images/projects/resume.jpg';
import MRI from '../assets/images/projects/mri.webp';
import Subscriptions from '../assets/images/projects/subscriptions.jpg';
import MCServers from '../assets/images/projects/mcserver.webp';
import RecipeBook from '../assets/images/projects/recipebook.jpg';
import WIP from '../assets/images/projects/wip.jpg';

export default function Projects() {
    return(
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-40 mb-10">
            <ProjectCard
                title={'Server Nexus'}
                items={['Svelte', 'TypeScript', 'Tailwind CSS', 'Daisy UI', 'Supabase', 'MCStatus API']}
                desc={'A full-stack website that lets users fetch Minecraft server information and leave ratings/reviews.'}
                link={'https://server-nexus.vercel.app/'}
                picture={MCServers}
                altText={'Screenshot of an in-game UI showing a Minecraft server list with multiple servers like Hypixel and Mineplex.'}
            />
            <ProjectCard
                title={'SubTrak'}
                items={['Next.js + API Routes', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Google Gemini API', 'AWS Amplify', 'AWS RDS (MySQL) + S3', 'AWS Cognito + Lambda']}
                desc={'A full-stack website that lets users track their subscriptions, spending, and under/over-utilized services.'}
                link={'https://main.d3vzykb0ipd68k.amplifyapp.com/'}
                picture={Subscriptions}
                altText={'Picture of multiple subscription cards featuring popular subscriptions like Netflix and Amazon Prime.'}
            />
            <ProjectCard
                title={'Recipedia'}
                items={['React.js', 'Tailwind CSS', 'Daisy UI', 'TheMealDB API', 'APINinjas']}
                desc={'A website for finding recipes and scanning images for nutritional information.'}
                link={'https://rcpdia.vercel.app/'}
                picture={RecipeBook}
                altText={'Picture of a recipe for Spicy Vodka Rigatoni with drawings of ingredients and real peppers scattered on top.'}
            />
            <ProjectCard
                title={'CerebralVision'}
                items={['PyTorch', 'scikit-learn', 'pandas', 'numPy', 'matplotlib', 'seaborn']}
                desc={'An AI pipeline that detects the presence of brain tumors in MRI scans.'}
                link={'https://github.com/sfu-cmpt419/2026_1_project_01'}
                picture={MRI}
                altText={'Picture of 2 MRI scans of a brain.'}
            />
            <ProjectCard
                title={'Resume-to-Job Recommender'}
                items={['Python', 'scikit-learn', 'pandas', 'numPy', 'spaCy', 'matplotlib', 'seaborn']}
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
