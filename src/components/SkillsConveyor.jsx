import './SkillsConveyor.css';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SkillsConveyor({ skills = [] }) {
  const firstSetRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollDist, setScrollDist] = useState(null);

  useEffect(() => {
    if (!firstSetRef.current) return;
    const width = firstSetRef.current.getBoundingClientRect().width;
    setScrollDist(width);
  }, [skills]);

  return (
    <div className="belt" aria-label="Tech skills">
      <div
        className="track"
        ref={trackRef}
        style={scrollDist ? { '--scroll-dist': `-${scrollDist + 20}px` } : {}}
      >
        <div ref={firstSetRef} className="flex gap-5">
          {skills.map((s, idx) => (
            <FontAwesomeIcon icon={s} size="3x"
              className="text-white hover:text-primary hover:scale-110 transition duration-300 shrink-0"
              key={`a-${idx}`}
            />
          ))}
        </div>
        <div className="flex gap-5">
          {skills.map((s, idx) => (
            <FontAwesomeIcon icon={s} size="3x"
              className="text-white hover:text-primary hover:scale-110 transition duration-300 shrink-0"
              key={`b-${idx}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
