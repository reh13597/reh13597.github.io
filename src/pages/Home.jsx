import pic1 from '../assets/images/me1.jpg';
import pic2 from '../assets/images/me2.jpg';

export default function Home() {
    return(
        <div className="grid grid-cols-3">
            <div className="flex justify-center mt-15">
                <img src={pic1} alt="Picture of Alex Guo" className="h-110 w-80 rounded-4xl"></img>
            </div>
            <div className="text-center mt-28">
                <span className="text-8xl">Hi! I'm </span>
                <span className="text-8xl text-primary">Alex</span>
                <span className="text-8xl">. </span>
                <span className="text-4xl">A third year CS student at SFU who is passionate about building clean, scalable software. Driven by curiosity, I'm always ready to learn something new!</span>
            </div>
            <div className="flex justify-center mt-15 ">
                <img src={pic2} alt="Picture of Alex Guo" className="h-110 w-80 rounded-4xl"></img>
            </div>
        </div>
    );
}

