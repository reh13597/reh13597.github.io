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
        <div className="flex flex-row gap-10">
            <div className="bg-base-300 rounded-4xl pt-10 px-15 shadow-lg w-[60%] mt-10">
                <EmailForm />
            </div>
            <div className="w-[50%] m-auto">
                <ChatBubble
                    className='chat-start'
                    pfp={cat}
                    altText={'Profile picture of a black and white cat with one massive eye, like a cyclops. The background is a white wall with 2 blurred out decorations. One is rectangular, orange, and has white text. The other one is circular and red.'}
                    username={'cool_cat_37'}
                    message={'How can I send you a message? I want to work with you.'}
                />
                <ChatBubble
                    className='chat-end'
                    pfp={me}
                    altText={"Profile picture of Alex Guo smiling. The picture was taken with flash on. He is wearing a jacket with a navy blue collar and floral designs on top of a white background, located near the top of the jacket. He is wearing a silver piercing on his right ear. There is a dark background because it's at night and outside, at the PNE. Behind him is the bottom of the purple and yellow amusement ride, Atmosfear."}
                    username={'alex_guo_888'}
                    message={'Get in touch with me by filling out the email form on the left!'}
                />
                <ChatBubble
                    className='chat-start'
                    pfp={cat}
                    altText={'Profile picture of a black and white cat with one massive eye, like a cyclops. The background is a white wall with 2 blurred out decorations. One is rectangular, orange, and has white text. The other one is circular and red.'}
                    username={'cool_cat_37'}
                    message={'Where can I look to get to know you better?'}
                />
                <ChatBubble
                    className='chat-end'
                    pfp={me}
                    altText={"Profile picture of Alex Guo smiling. The picture was taken with flash on. He is wearing a jacket with a navy blue collar and floral designs on top of a white background, located near the top of the jacket. He is wearing a silver piercing on his right ear. There is a dark background because it's at night and outside, at the PNE. Behind him is the bottom of the purple and yellow amusement ride, Atmosfear."}
                    username={'alex_guo_888'}
                    message={'Check out my socials by clicking on the links above!'}
                />
            </div>
        </div>
    );
}

