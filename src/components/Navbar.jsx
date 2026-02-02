import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    const linkBase = "inline-flex w-fit transition duration-200 hover:text-primary hover:bg-transparent";

    const linkText = "text-base sm:text-lg md:text-xl";

    const linkScale = "hover:scale-108";

    const linkClass = (section) =>
        `${linkBase} ${linkText} ${linkScale} ${activeSection === section ? "text-primary" : "text-white"}`;

    const iconWrap = "inline-flex w-fit transition duration-200 hover:scale-115 hover:bg-transparent";

    const iconClass = "text-white hover:text-primary";

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
        <>
            {/* Normal Navbar */}
            <ul className="menu fixed top-1/2 -translate-y-1/2 left-5 z-50 w-fit hidden md:block">
                <li className="my-2 mx-1">
                    <a href="#home" className={linkClass("home")}>Home</a>
                </li>
                <li className="my-2 mx-1">
                    <a href="#projects" className={linkClass("projects")}>Projects</a>
                </li>
                <li className="my-2 mx-1">
                    <a href="#alex" className={linkClass("alex")}>Alex</a>
                </li>
                <li className="my-2 mx-1">
                    <a href="#contact" className={linkClass("contact")}>Contact</a>
                </li>

                <li className="border-none h-3 bg-transparent"></li>

                <li className="my-2">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/alex_guo_888/"
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
                        href="https://www.linkedin.com/in/alex-guo-3088461ba/"
                        className={iconWrap}
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className={iconClass} />
                    </a>
                </li>
            </ul>

            {/* Mobile Navbar */}
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
                <div className="bg-base-200/80 backdrop-blur rounded-2xl px-3 py-2 shadow-lg">
                    <div className="flex items-center gap-1">
                        <a href="#home" className={`btn btn-ghost btn-sm ${activeSection === "home" ? "text-primary" : "text-white"}`}>
                            Home
                        </a>
                        <a href="#projects" className={`btn btn-ghost btn-sm ${activeSection === "projects" ? "text-primary" : "text-white"}`}>
                            Projects
                        </a>
                        <a href="#alex" className={`btn btn-ghost btn-sm ${activeSection === "alex" ? "text-primary" : "text-white"}`}>
                            Alex
                        </a>
                        <a href="#contact" className={`btn btn-ghost btn-sm ${activeSection === "contact" ? "text-primary" : "text-white"}`}>
                            Contact
                        </a>

                        <div className="mx-1 h-6 w-px bg-base-content/20" />

                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.instagram.com/alex_guo_888/"
                            className="btn btn-ghost btn-sm px-2"
                            aria-label="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} className={activeSection ? "" : ""} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/reh13597"
                            className="btn btn-ghost btn-sm px-2"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/alex-guo-3088461ba/"
                            className="btn btn-ghost btn-sm px-2"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

