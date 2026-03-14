import Conveyor from '../components/SkillsConveyor/SkillsConveyor';
import { faVim, faClaude, faAtlassian, faGithub, faAws, faLinux, faDocker, faGitAlt, faPostgresql, faTailwindCss, faSvelte, faReact, faJs, faTypescript, faPython, faJava, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';

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
  'github': 'GitHub',
  'java': 'Java',
  'html5': 'HTML5',
  'css3': 'CSS3',
  'atlassian': 'Atlassian',
  'claude': 'Claude',
  'vim': 'Vim',
};

export default function Skills() {
    return(
        <div className="flex justify-center overflow-x-hidden w-full">
            <Conveyor
                skills={[faVim, faAtlassian, faClaude, faGithub, faAws, faLinux, faDocker, faGitAlt, faPostgresql, faTailwindCss, faSvelte, faReact, faJs, faPython, faJava, faTypescript, faHtml5, faCss3]}
                labels={skillLabels}
            />
        </div>
    )
}