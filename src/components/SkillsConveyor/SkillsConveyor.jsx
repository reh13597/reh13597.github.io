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
    const updateWidth = () => {
      if (firstSetRef.current) {
        const width = firstSetRef.current.getBoundingClientRect().width;
        setScrollDist(width);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [skills]);

  const SkillIcon = ({ s, idx, prefix }) => (
    <div className="tooltip tooltip-top tooltip-primary" data-tip={getLabel(s)} key={`${prefix}-${idx}`}>
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center justify-center"
      >
        <FontAwesomeIcon
          icon={s}
          className="text-white hover:text-primary transition-colors duration-300 shrink-0 text-3xl md:text-5xl lg:text-6xl"
        />
      </motion.div>
    </div>
  );

  return (
    <div className="w-[80%] p-10">
      <div className="belt p-3 md:p-5 lg:p-7 bg-base-100 border-2 border-neutral hover:border-primary/60 rounded-4xl transition-all duration-300 shadow-2xl shadow-primary/10 hover:shadow-primary/30" aria-label="Tech skills">
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
    </div>
  );
}
