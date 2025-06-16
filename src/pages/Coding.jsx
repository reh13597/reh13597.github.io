import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';

export default function Coding() {
   return(
        <div className="grid grid-rows-2">
            {/* <div className="text-center mt-10">
                <h1 className="text-6xl text-primary">Skills</h1>
            </div> */}
            <div className="grid grid-cols-3 mt-10">
                <div className="flex justify-center">
                    <SkillCard title={'Languages'} items={['Java', 'JavaScript', 'TypeScript', 'Lua']} />
                </div>
                <div className="flex justify-center">
                    <SkillCard title={'Frameworks'} items={['React', 'Svelte']} />
                </div>
                <div className="flex justify-center">
                    <SkillCard title={'Tools'} items={['Figma', 'Supabase']} />
                </div>
            </div>
           {/*  <div className="text-center mt-10">
                <h1 className="text-6xl text-primary">Projects</h1>
            </div> */}
            <div className="grid grid-cols-2">
                <div className="flex justify-center">
                    <ProjectCard title={'Descent Into Madness'} description={'Descent Into Madness ...'}/>
                </div>
                <div className="flex justify-center">
                    <ProjectCard title={'Server Nexus'} description={'Server Nexus ...'}/>
                </div>
            </div>
        </div>
    );
}
