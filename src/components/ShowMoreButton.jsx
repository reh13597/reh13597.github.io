import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function ShowMoreButton({ expanded, onClick, controls, hiddenCount }) {
    return(
        <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
            aria-expanded={expanded}
            aria-controls={controls}
            className="btn btn-soft btn-primary px-8 text-base-content hover:text-base-300 shadow-2xl shadow-primary/15 hover:shadow-primary/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
            {expanded ? 'Show less' : `Show more${hiddenCount ? ` (${hiddenCount})` : ''}`}
            <FontAwesomeIcon
                icon={faChevronDown}
                aria-hidden="true"
                className={`text-xs transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            />
        </motion.button>
    );
}
