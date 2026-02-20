import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    const linkClass1 = (section) =>
        `inline-flex w-fit transition duration-200 hover:text-primary hover:bg-transparent hover:scale-108 text-xl lg:text-xl xl:text-2xl
        ${activeSection === section ? "text-primary" : "text-white"}`;

    const linkClass2 = (section) =>
        `inline-flex w-fit transition duration-200 hover:text-primary hover:bg-transparent hover:scale-110 text-lg
        ${activeSection === section ? "text-primary" : "text-white"}`;

    const iconWrap = "inline-flex w-fit transition duration-200 hover:scale-115 hover:bg-transparent";
    const iconClass = "text-white hover:text-primary";

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
        <>
            {/* Normal Navbar */}
            <ul className="menu fixed top-1/2 -translate-y-1/2 left-5 z-50 w-fit hidden md:block">
                <li className="my-2 mx-1">
                    <a href="#home" className={linkClass1("home")}>Home</a>
                </li>
                <li className="my-2 mx-1">
                    <a href="#projects" className={linkClass1("projects")}>Projects</a>
                </li>
                {/* <li className="my-2 mx-1">
                    <a href="#skills" className={linkClass1("skills")}>Skills</a>
                </li> */}
                <li className="my-2 mx-1">
                    <a href="#alex" className={linkClass1("alex")}>Alex</a>
                </li>

                <li className="border-none h-3 bg-transparent"></li>

                <li className="my-2">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://instagram.com/alex_guo_888/"
                        className={iconWrap}
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" className={iconClass} />
                    </a>
                </li>
                <li className="my-2">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/reh13597"
                        className={iconWrap}
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" className={iconClass} />
                    </a>
                </li>
                <li className="my-2">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/-alex-guo-/"
                        className={iconWrap}
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className={iconClass} />
                    </a>
                </li>
                <li className="my-2">
                    <a
                        rel="noreferrer"
                        href="mailto:alg17@sfu.ca"
                        className={iconWrap}
                    >
                        <FontAwesomeIcon icon={faEnvelope} size="2x" className={iconClass} />
                    </a>
                </li>
            </ul>

            {/* Small/Mobile Navbar */}
            <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 md:hidden">
                <div className="bg-base-200 rounded-2xl px-5 py-3 shadow-2xl">
                    <div className="flex items-center gap-5">
                        <a href="#home" className={linkClass2("home")}>
                            Home
                        </a>
                        <a href="#projects" className={linkClass2("projects")}>
                            Projects
                        </a>
                        {/* <a href="#skills" className={linkClass2("skills")}>
                            Skills
                        </a> */}
                        <a href="#alex" className={linkClass2("alex")}>
                            Alex
                        </a>

                        <div className="h-6 w-px bg-base-content/20" />

                        <div className="flex items-center gap-4">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://instagram.com/alex_guo_888/"
                                className={iconWrap}
                            >
                                <FontAwesomeIcon icon={faInstagram} className={iconClass} />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://github.com/reh13597"
                                className={iconWrap}
                            >
                                <FontAwesomeIcon icon={faGithub} className={iconClass} />
                            </a>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/-alex-guo-/"
                                className={iconWrap}
                            >
                                <FontAwesomeIcon icon={faLinkedin} className={iconClass} />
                            </a>
                            <a
                                rel="noreferrer"
                                href="mailto:alg17@sfu.ca"
                                className={iconWrap}
                            >
                                <FontAwesomeIcon icon={faEnvelope} className={iconClass} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

