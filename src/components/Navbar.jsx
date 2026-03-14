import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    const linkClass2 = (section) =>
        `inline-flex w-fit transition duration-200 hover:scale-108 hover:text-primary hover:bg-transparent text-sm md:text-lg lg:text-xl
        ${activeSection === section ? "text-primary" : "text-white"}`;

    const iconWrap = "inline-flex w-fit";
    const iconClass = "text-white hover:text-primary transition-colors";

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'skills', 'alex'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return(
        <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.2 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-fit max-w-[95%]"
        >            <div className="bg-base-200/50 backdrop-blur-xs rounded-2xl px-6 py-3 shadow-2xl shadow-primary/10 hover:shadow-primary/20 border border-neutral hover:border-primary/80 transition-all duration-300">
                <div className="flex items-center gap-3 md:gap-6 lg:gap-10">
                    <div className="flex items-center gap-3 md:gap-5 lg:gap-8">
                        <a href="#home" className={linkClass2("home")}>Home</a>
                        <a href="#projects" className={linkClass2("projects")}>Projects</a>
                        <a href="#skills" className={linkClass2("skills")}>Skills</a>
                        <a href="#alex" className={linkClass2("alex")}>Alex</a>
                    </div>

                    <div className="h-4 md:h-6 w-px bg-white/50" />

                    <div className="flex items-center gap-3 md:gap-5 lg:gap-8">
                        <motion.a whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} target="_blank" rel="noreferrer" href="https://github.com/reh13597" className={iconWrap}>
                            <FontAwesomeIcon icon={faGithub} className={`${iconClass} text-md md:text-xl lg:text-2xl`} />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/-alex-guo-/" className={iconWrap}>
                            <FontAwesomeIcon icon={faLinkedin} className={`${iconClass} text-md md:text-xl lg:text-2xl`} />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2, rotate: 5}} transition={{ type: "spring", stiffness: 300 }} rel="noreferrer" href="mailto:alg17@sfu.ca" className={iconWrap}>
                            <FontAwesomeIcon icon={faEnvelope} className={`${iconClass} text-md md:text-xl lg:text-2xl`} />
                        </motion.a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
