import Conveyor from '../../components/SkillsConveyor/SkillsConveyor';
import './Skills.css';
import { faAws, faLinux, faDocker, faGitAlt, faPostgresql, faTailwindCss, faSvelte, faReact, faJs, faTypescript, faPython, faJava, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

const skillLabels = {
  'react': 'React',
  'docker': 'Docker',
  'aws': 'AWS',
  'python': 'Python',
  'js': 'JavaScript',
  'typescript': 'TypeScript',
  'git-alt': 'Git',
  'linux': 'Linux',
  'postgresql': 'PostgreSQL',
  'tailwind-css': 'Tailwind CSS',
  'svelte': 'Svelte',
  'java': 'Java',
  'html5': 'HTML5',
  'css3': 'CSS3'
};

export default function Skills() {
    return(
        <div className="belt-wrapper flex justify-center overflow-x-hidden w-full">
            <Conveyor
                skills={[faAws, faLinux, faDocker, faGitAlt, faPostgresql, faTailwindCss, faSvelte, faReact, faJs, faPython, faJava, faTypescript, faHtml5, faCss3]}
                labels={skillLabels}
            />
        </div>
    )
}