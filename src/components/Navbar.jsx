import { useLocation } from 'react-router-dom';
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
        setTimeout(() => setIsVisible(true), 500)
    }, [])

    return(
        <div className={`navbar bg-base-300 shadow-sm transition ${isVisible ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-5'}`}>
            <div className="navbar-start">
                <div className="flex-1">
                    <a href="/" className="btn text-2xl transition duration-300 hover:scale-110 hover:text-primary">Alex Guo</a>
                </div>
            </div>
            <div className="navbar-center">
                <div role="tablist" className="flex-auto tabs tabs-border tabs-xl text-primary">
                    <a role="tab" href="/" className={`tab transition duration-300 hover:scale-110 ${pathName === '/' ? 'tab tab-active' : ''}`}>Home</a>
                    <a role="tab" href="/reh13597.github.io/coding" className={`tab transition duration-300 hover:scale-110 ${pathName === '/coding' ? 'tab tab-active' : ''}`}>Coding</a>
                    <a role="tab" href="/reh13597.github.io/contact" className={`tab transition duration-300 hover:scale-110 ${pathName === '/contact' ? 'tab tab-active' : ''}`}>Contact</a>
                </div>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <a target="_blank" href="https://www.instagram.com/alex_guo_888/" className="btn transition duration-300 hover:scale-120"><img src={instagramIcon} alt="Instagram Hyperlink" className="h-6 w-6" /></a>
                    <a target="_blank" href="https://www.facebook.com/alex.guo.334839/"className="btn transition duration-300 hover:scale-120"><img src={facebookIcon} alt="Facebook Hyperlink" className="h-6 w-6" /></a>
                    <a target="_blank" href="https://github.com/reh13597"className="btn transition duration-300 hover:scale-120"><img src={githubIcon} alt="GitHub Hyperlink" className="h-6 w-6" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/alex-guo-3088461ba/"className="btn transition duration-300 hover:scale-120"><img src={linkedinIcon} alt="LinkedIn Hyperlink" className="h-6 w-6" /></a>
                </div>
            </div>
        </div>
    );
}

