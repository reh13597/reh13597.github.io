import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'alex', 'contact'];
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
        <ul className="menu fixed top-1/2 -translate-y-1/2 left-5 z-50 w-fit">
            <li className="my-2 mx-1">
                <a
                    href="#home"
                    className={`inline-flex w-fit text-xl transition duration-200 hover:scale-108 hover:text-primary hover:bg-transparent ${activeSection === 'home' ? 'text-primary' : 'text-white'}`}>
                    Home
                </a>
            </li>
            <li className="my-2 mx-1">
                <a
                    href="#projects"
                    className={`inline-flex w-fit text-xl transition duration-200 hover:scale-108 hover:text-primary hover:bg-transparent ${activeSection === 'projects' ? 'text-primary' : 'text-white'}`}>
                    Projects
                </a>
            </li>
            <li className="my-2 mx-1">
                <a
                    href="#alex"
                    className={`inline-flex w-fit text-xl transition duration-200 hover:scale-108 hover:text-primary hover:bg-transparent ${activeSection === 'alex' ? 'text-primary' : 'text-white'}`}>
                    Alex
                </a>
            </li>
            <li className="my-2 mx-1">
                <a
                    href="#contact"
                    className={`inline-flex w-fit text-xl transition duration-200 hover:scale-108 hover:text-primary hover:bg-transparent ${activeSection === 'contact' ? 'text-primary' : 'text-white'}`}>
                    Contact
                </a>
            </li>
            <li className="border-none h-3 bg-transparent"></li>
            <li className="my-2">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/alex_guo_888/"
                    className="inline-flex w-fit transition duration-200 hover:scale-115 hover:bg-transparent">
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-primary" />
                </a>
            </li>
            <li className="my-2">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/reh13597"
                    className="inline-flex w-fit transition duration-200 hover:scale-115 hover:bg-transparent">
                    <FontAwesomeIcon icon={faGithub} size="2x" className="text-white hover:text-primary" />
                </a>
            </li>
            <li className="my-2">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/alex-guo-3088461ba/"
                    className="inline-flex w-fit transition duration-200 hover:scale-115 hover:bg-transparent">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white hover:text-primary" />
                </a>
            </li>
        </ul>
    );
}

