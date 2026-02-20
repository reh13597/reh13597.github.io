import Conveyor from '../components/SkillsConveyor';
import { faJs, faPython, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
    return(
        <div className="flex justify-center">
            <Conveyor skills={[faJs, faPython, faHtml5, faCss3]}/>
        </div>
    )
}