import './SkillsConveyor.css';
import { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

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

  const SkillIcon = ({ s, idx, prefix }) => (
    <div className="tooltip tooltip-top tooltip-primary" data-tip={getLabel(s)} key={`${prefix}-${idx}`}>
      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center justify-center"
      >
        <FontAwesomeIcon
          icon={s}
          size="3x"
          className="text-white hover:text-primary transition-colors duration-300 shrink-0"
        />
      </motion.div>
    </div>
  );

  return (
    <div className="belt" aria-label="Tech skills">
      <div
        className="track"
        ref={trackRef}
        style={scrollDist ? { '--scroll-dist': `-${scrollDist + 48}px` } : {}}
      >
        <div ref={firstSetRef} className="flex gap-12 py-5">
          {skills.map((s, idx) => (
            <SkillIcon s={s} idx={idx} prefix="a" key={`a-${idx}`} />
          ))}
        </div>
        <div className="flex gap-12 py-5">
          {skills.map((s, idx) => (
            <SkillIcon s={s} idx={idx} prefix="b" key={`b-${idx}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
