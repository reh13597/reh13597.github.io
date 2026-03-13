import Conveyor from '../../components/SkillsConveyor/SkillsConveyor';
import './Skills.css';
import { faVim, faClaude, faAtlassian, faGithub, faAws, faLinux, faDocker, faGitAlt, faPostgresql, faTailwindCss, faSvelte, faReact, faJs, faTypescript, faPython, faJava, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

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
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="belt-wrapper flex justify-center overflow-x-hidden w-full"
        >
            <Conveyor
                skills={[faVim, faAtlassian, faClaude, faGithub, faAws, faLinux, faDocker, faGitAlt, faPostgresql, faTailwindCss, faSvelte, faReact, faJs, faPython, faJava, faTypescript, faHtml5, faCss3]}
                labels={skillLabels}
            />
        </motion.div>
    )
}