import { useLocation } from 'react-router-dom';
import instagramIcon from '../assets/instagram.svg';
import facebookIcon from '../assets/facebook.svg';
import githubIcon from '../assets/github.svg';
import linkedinIcon from '../assets/linkedin.svg';

export default function Navbar() {
    const location = useLocation();
    const pathName = location.pathname;

    return(
        <div className="navbar bg-base-300 shadow-sm">
            <div className="navbar-start">
                <div className="flex-1">
                    <a href="/" className="btn btn-primary btn-ghost text-2xl">Alex Guo</a>
                </div>
            </div>
            <div className="navbar-center">
                <div role="tablist" className="flex-auto tabs tabs-border tabs-xl text-primary">
                    <a role="tab" href="/" className={pathName === '/' ? 'tab tab-active' : 'tab'}>Home</a>
                    <a role="tab" href="/coding" className={pathName === '/coding' ? 'tab tab-active' : 'tab'}>Coding</a>
                    <a role="tab" href="contact" className={pathName === '/contact' ? 'tab tab-active' : 'tab'}>Contact</a>
                </div>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <a target="_blank" href="https://www.instagram.com/alex_guo_888/" className="btn btn-primary btn-ghost"><img src={instagramIcon} alt="Instagram Hyperlink" className="h-6 w-6" /></a>
                    <a target="_blank" href="https://www.facebook.com/alex.guo.334839/"className="btn btn-primary btn-ghost"><img src={facebookIcon} alt="Facebook Hyperlink" className="h-6 w-6" /></a>
                    <a target="_blank" href="https://github.com/reh13597"className="btn btn-primary btn-ghost"><img src={githubIcon} alt="GitHub Hyperlink" className="h-6 w-6" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/alex-guo-3088461ba/"className="btn btn-primary btn-ghost"><img src={linkedinIcon} alt="LinkedIn Hyperlink" className="h-6 w-6" /></a>
                </div>
            </div>
        </div>
    );
}

