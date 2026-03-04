import Conveyor from '../components/SkillsConveyor/SkillsConveyor';
import { faAws, faLinux, faDocker, faGitAlt, faPostgresql, faTailwindCss, faSvelte, faReact, faJs, faTypescript, faPython, faJava, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
    return(
        <div className="flex justify-center overflow-x-hidden w-full">
            <Conveyor skills={[faAws, faLinux, faDocker, faGitAlt, faPostgresql, faTailwindCss, faSvelte, faReact, faJs, faPython, faJava, faTypescript, faHtml5, faCss3]}/>
        </div>
    )
}