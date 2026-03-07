import './SkillsConveyor.css';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SkillsConveyor({ skills = [], labels = {} }) {
  const firstSetRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollDist, setScrollDist] = useState(null);
  const getLabel = (icon) => labels[icon.iconName] ?? icon.iconName;

  useEffect(() => {
    if (!firstSetRef.current) {
      return;
    }

    const width = firstSetRef.current.getBoundingClientRect().width;
    setScrollDist(width);
  }, [skills]);

  return (
    <div className="belt" aria-label="Tech skills">
      <div
        className="track"
        ref={trackRef}
        style={scrollDist ? { '--scroll-dist': `-${scrollDist + 32}px` } : {}}
      >
        <div ref={firstSetRef} className="flex gap-8 py-5">
          {skills.map((s, idx) => (
            <div className="tooltip tooltip-top" data-tip={getLabel(s)} key={`a-${idx}`}>
              <FontAwesomeIcon
                icon={s}
                size="3x"
                className=" text-white hover:text-primary hover:scale-110 transition duration-300 shrink-0"
                key={`a-${idx}`}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-8 py-5">
          {skills.map((s, idx) => (
            <div className="tooltip tooltip-top" data-tip={getLabel(s)} key={`b-${idx}`}>
              <FontAwesomeIcon
                icon={s}
                size="3x"
                className=" text-white hover:text-primary hover:scale-110 transition duration-300 shrink-0"
                key={`b-${idx}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
