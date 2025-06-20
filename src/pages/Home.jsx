import { useEffect, useState } from 'react';
import pic1 from '../assets/images/me1.jpg';
import pic2 from '../assets/images/me2.jpg';

export default function Home() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300)
    })

    return(
        <div className={`bg-base-300 rounded-4xl p-10 shadow-lg w-[90%] m-auto mt-10 transition ${isVisible ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-10'} `}>
            <div className="grid grid-cols-3 gap-5">
                <div className={`flex justify-center mt-1 transition ${isVisible ? 'opacity-100 translate-y-0 delay-1100' : 'opacity-0 translate-y-30'}`}>
                    <img
                        src={pic1}
                        alt="Picture of Alex Guo smiling and eyes wide open, with hands up and fingers forming a picture frame. The picture was taken with flash on. He is wearing a navy blue jacket with floral designs on top of a white background, located near the top of the jacket. He is also wearing a navy blue shirt underneath the jacket. There is a dark background because it's at night and outside, at the PNE. There are 2 neon lights and an amusement ride slightly in view behind him."
                        className="h-140 w-100 rounded-4xl transition duration-300 hover:scale-105"
                    />
                </div>
                <div className={`text-center mt-10 transition ${isVisible ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-15'}`}>
                    <div className="cursor-default select-none transition duration-300 hover:scale-110">
                        <span className="text-8xl">Hi! I'm </span>
                        <span className="text-8xl text-primary">Alex</span>
                        <span className="text-8xl">. </span>
                        <p
                            className={`text-4xl mt-5 transition ${isVisible ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-15'}`}>
                            A third year CS student at SFU who is passionate about building clean, scalable software.
                        </p>
                        <p
                            className={`text-4xl mt-5 transition ${isVisible ? 'opacity-100 translate-y-0 delay-700' : 'opacity-0 translate-y-20'}`}>
                            In my free time, I love to play video games, watch anime, go on hikes, and ski with my buddies.
                        </p>
                        <p
                            className={`text-4xl mt-5 transition ${isVisible ? 'opacity-100 translate-y-0 delay-900' : 'opacity-0 translate-y-25'}`}>
                            Driven by curiosity, I'm always ready to learn something new!
                        </p>
                    </div>
                </div>
                <div className={`flex justify-center mt-1 transition ${isVisible ? 'opacity-100 translate-y-0 delay-1300' : 'opacity-0 -translate-y-30'}`}>
                    <img
                        src={pic2}
                        alt="Picture of Alex Guo standing with his hands in his pockets and hood on, on top of a large spotted gray rock. He is wearing a black and gray Harley Davidson Jacket, silver pants, and white shoes. There are other rocks beside him on the ground, small green shrubs and bushes behind him on the ground, a small pier behind him to the left, sea water behind him, and Toronto city's skyline behind him. There is a little bit of sun to the top left, and everywhere else above him are clouds."
                        className="h-140 w-100 rounded-4xl transition duration-300 hover:scale-105"
                    />
                </div>
            </div>
        </div>
    );
}

