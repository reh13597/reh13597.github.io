import pic1 from '../assets/images/me1.jpg';
import pic2 from '../assets/images/me2.jpg';
import { useEffect, useState } from 'react';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 500)
    }, [])

    return(
        <div className="grid grid-cols-3">
            <div className={`flex justify-center mt-15 transition ${isVisible ? 'opacity-100 translate-y-0 delay-1500' : 'opacity-0 translate-y-5'}`}>
                <img src={pic1} alt="Picture of Alex Guo" className="h-110 w-80 rounded-4xl transition duration-300 hover:scale-120"></img>
            </div>
            <div className={`text-center mt-24 transition ${isVisible ? 'opacity-100 translate-y-0 delay-1000' : 'opacity-0 translate-y-5'}`}>
                <p className="text-4xl mt-1 transition duration-300 hover:scale-120">
                    <span className="text-8xl">Hi! I'm </span>
                    <span className="text-8xl text-primary">Alex</span>
                    <span className="text-8xl">. </span>
                    A third year CS student at SFU who is passionate about building clean, scalable software. Driven by curiosity, I'm always ready to learn something new!</p>
            </div>
            <div className={`flex justify-center mt-15 transition ${isVisible ? 'opacity-100 translate-y-0 delay-1500' : 'opacity-0 translate-y-5'}`}>
                <img src={pic2} alt="Picture of Alex Guo" className="h-110 w-80 rounded-4xl transition duration-300 hover:scale-120"></img>
            </div>
        </div>
    );
}

