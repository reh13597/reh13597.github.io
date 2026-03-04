import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SkillsConveyor({ skills = [] }) {
    const duplicatedSkills = [...skills, ...skills, ...skills, ...skills, ...skills, ...skills];

    return (
      <div className="belt" aria-label="Tech skills">
        <div className="track">
          {duplicatedSkills.map((s, idx) => (
            <FontAwesomeIcon
              icon={s}
              size="3x"
              className="text-white hover:text-primary"
              key={`skill-${idx}-${s.iconName || s}`}
              style={{ flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
    );
  }
