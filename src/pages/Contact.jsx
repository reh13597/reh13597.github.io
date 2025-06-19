import { useEffect, useState } from 'react';
import EmailForm from '../components/EmailForm';
import ChatBubble from '../components/ChatBubble';
import cat from '../assets/images/cool_cat.jpg';
import me from '../assets/images/me3.jpg';

export default function Contact() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300)
    })

    return(
        <div className="flex flex-row gap-10 px-25">
            <div className={`bg-base-300 rounded-4xl pt-10 px-15 shadow-lg w-[50%] mt-10 transition ${isVisible ? 'opacity-100 translate-y-0 delay-100' : 'opacity-0 translate-y-20'}`}>
                <EmailForm />
            </div>
            <div className={`bg-base-300 rounded-4xl pt-10 px-15 shadow-lg w-[50%] mt-10 transition ${isVisible ? 'opacity-100 translate-y-0 delay-1100' : 'opacity-0 -translate-y-20'}`}>
                <div className="mt-5">
                    <div className={`transition ${isVisible ? 'opacity-100 translate-x-0 delay-1300' : 'opacity-0 -translate-x-20'}`}>
                        <ChatBubble
                            className1='chat-start'
                            className2='chat-bubble-neutral'
                            pfp={cat}
                            altText={'Profile picture of a black and white cat with one massive eye, like a cyclops. The background is a white wall with 2 blurred out decorations. One is rectangular, orange, and has white text. The other one is circular and red.'}
                            username={'cool_cat_37'}
                            message={'How can I send you a message? I want to work with you.'}
                        />
                    </div>
                    <div className={`transition ${isVisible ? 'opacity-100 translate-x-0 delay-1400' : 'opacity-0 translate-x-20'}`}>
                        <ChatBubble
                            className1='chat-end'
                            className2='chat-bubble-primary'
                            pfp={me}
                            altText={"Profile picture of Alex Guo smiling. The picture was taken with flash on. He is wearing a jacket with a navy blue collar and floral designs on top of a white background, located near the top of the jacket. He is wearing a silver piercing on his right ear. There is a dark background because it's at night and outside, at the PNE. Behind him is the bottom of the purple and yellow amusement ride, Atmosfear."}
                            username={'alex_guo_888'}
                            message={'Get in touch with me by filling out the email form on the left!'}
                        />
                    </div>
                    <div className={`transition ${isVisible ? 'opacity-100 translate-x-0 delay-1500' : 'opacity-0 -translate-x-20'}`}>
                        <ChatBubble
                            className1='chat-start'
                            className2='chat-bubble-neutral'
                            pfp={cat}
                            altText={'Profile picture of a black and white cat with one massive eye, like a cyclops. The background is a white wall with 2 blurred out decorations. One is rectangular, orange, and has white text. The other one is circular and red.'}
                            username={'cool_cat_37'}
                            message={'Where can I look to get to know you better?'}
                        />
                    </div>
                    <div className={`transition ${isVisible ? 'opacity-100 translate-x-0 delay-1600' : 'opacity-0 translate-x-20'}`}>
                        <ChatBubble
                            className1='chat-end'
                            className2='chat-bubble-primary'
                            pfp={me}
                            altText={"Profile picture of Alex Guo smiling. The picture was taken with flash on. He is wearing a jacket with a navy blue collar and floral designs on top of a white background, located near the top of the jacket. He is wearing a silver piercing on his right ear. There is a dark background because it's at night and outside, at the PNE. Behind him is the bottom of the purple and yellow amusement ride, Atmosfear."}
                            username={'alex_guo_888'}
                            message={'Check out my socials by clicking on the links above!'}
                        />
                    </div>
                    <div className={`transition ${isVisible ? 'opacity-100 translate-x-0 delay-1700' : 'opacity-0 -translate-x-20'}`}>
                        <ChatBubble
                            className1='chat-start'
                            className2='chat-bubble-neutral'
                            pfp={cat}
                            altText={'Profile picture of a black and white cat with one massive eye, like a cyclops. The background is a white wall with 2 blurred out decorations. One is rectangular, orange, and has white text. The other one is circular and red.'}
                            username={'cool_cat_37'}
                            message={'Thank you so much, now I know!'}
                        />
                    </div>
                    <div className={`transition ${isVisible ? 'opacity-100 translate-x-0 delay-1800' : 'opacity-0 translate-x-20'}`}>
                        <ChatBubble
                            className1='chat-end'
                            className2='chat-bubble-primary'
                            pfp={me}
                            altText={"Profile picture of Alex Guo smiling. The picture was taken with flash on. He is wearing a jacket with a navy blue collar and floral designs on top of a white background, located near the top of the jacket. He is wearing a silver piercing on his right ear. There is a dark background because it's at night and outside, at the PNE. Behind him is the bottom of the purple and yellow amusement ride, Atmosfear."}
                            username={'alex_guo_888'}
                            message={'No worries. I hope you have a great day!'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

