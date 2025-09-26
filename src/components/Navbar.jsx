import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import instagramIcon from '../assets/icons/instagram.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import githubIcon from '../assets/icons/github.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

export default function Navbar() {
    const location = useLocation();
    const pathName = location.pathname;
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300)
    }, [])

    return(
        <div className={`navbar bg-base-300 shadow-sm transition ${isVisible ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-5'}`}>
            <div className="navbar-start">
                <div className="flex flex-1">
                    <Link
                        to="/"
                        className="btn btn-ghost btn-primary text-2xl transition duration-200 hover:scale-103">
                        Alex Guo
                    </Link>
                </div>
            </div>
            <div className="navbar-center">
                <div role="tablist" className="flex-auto tabs tabs-border tabs-xl text-primary">
                    <Link
                        role="tab"
                        to="/"
                        className={`tab transition duration-200 hover:scale-108 ${pathName === '/' ? 'tab tab-active' : ''}`}>
                        Home
                    </Link>
                    <Link
                        role="tab"
                        to="/coding"
                        className={`tab transition duration-200 hover:scale-108 ${pathName === '/coding' ? 'tab tab-active' : ''}`}>
                        Coding
                    </Link>
                    <Link
                        role="tab"
                        to="/contact"
                        className={`tab transition duration-200 hover:scale-108 ${pathName === '/contact' ? 'tab tab-active' : ''}`}>
                        Contact
                    </Link>
                </div>
            </div>
            <div className="navbar-end">
                <div className="flex flex-none gap-3">
                    <a
                        target="_blank"
                        href="https://www.instagram.com/alex_guo_888/"
                        className="btn btn-ghost btn-primary transition duration-200 hover:scale-108">
                        <img src={instagramIcon} alt="Instagram Hyperlink" className="h-6 w-6" />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.facebook.com/alex.guo.334839/"
                        className="btn btn-ghost btn-primary transition duration-200 hover:scale-108">
                        <img src={facebookIcon} alt="Facebook Hyperlink" className="h-6 w-6" />
                    </a>
                    <a
                        target="_blank"
                        href="https://github.com/reh13597"
                        className="btn btn-ghost btn-primary transition duration-200 hover:scale-108">
                        <img src={githubIcon} alt="GitHub Hyperlink" className="h-6 w-6" />
                    </a>
                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/alex-guo-3088461ba/"
                        className="btn btn-ghost btn-primary transition duration-200 hover:scale-108">
                        <img src={linkedinIcon} alt="LinkedIn Hyperlink" className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </div>
    );
}

