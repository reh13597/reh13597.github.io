import EmailForm from '../components/EmailForm';
import ChatBubble from '../components/ChatBubble';
import cat from '../assets/images/cool_cat.jpg';
import me from '../assets/images/me3.jpg';

export default function Contact() {
    return(
        <>
        {/* <div className="grid grid-cols-1 xl:grid-cols-2 mt-30 xl:mt-0 md:mt-15 sm:mt-30 gap-10 p-10">
                <div className="space-y-3">
                    <ChatBubble
                        className1='chat-start'
                        className2='chat-bubble-neutral'
                        pfp={cat}
                        altText={'Profile picture of a black and white cat with one massive eye, like a cyclops. The background is a white wall with 2 blurred out decorations. One is rectangular, orange, and has white text. The other one is circular and red.'}
                        username={'cool_cat_37@sfu.ca'}
                        message={'How can I send you a message or get to know you better?'}
                    />
                    <ChatBubble
                        className1='chat-end'
                        className2='chat-bubble-primary'
                        pfp={me}
                        altText={"Profile picture of Alex Guo smiling. The picture was taken with flash on. He is wearing a jacket with a navy blue collar and floral designs on top of a white background, located near the top of the jacket. He is wearing a silver piercing on his right ear. There is a dark background because it's at night and outside, at the PNE. Behind him is the bottom of the purple and yellow amusement ride, Atmosfear."}
                        username={'alg17@sfu.ca'}
                        message={'You can fill out the email form or check out my socials in the navbar.'}
                    />
                    <ChatBubble
                        className1='chat-start'
                        className2='chat-bubble-neutral'
                        pfp={cat}
                        altText={'Profile picture of a black and white cat with one massive eye, like a cyclops. The background is a white wall with 2 blurred out decorations. One is rectangular, orange, and has white text. The other one is circular and red.'}
                        username={'cool_cat_37@sfu.ca'}
                        message={'Thank you so much, now I know!'}
                    />
                    <ChatBubble
                        className1='chat-end'
                        className2='chat-bubble-primary'
                        pfp={me}
                        altText={"Profile picture of Alex Guo smiling. The picture was taken with flash on. He is wearing a jacket with a navy blue collar and floral designs on top of a white background, located near the top of the jacket. He is wearing a silver piercing on his right ear. There is a dark background because it's at night and outside, at the PNE. Behind him is the bottom of the purple and yellow amusement ride, Atmosfear."}
                        username={'alg17@sfu.ca'}
                        message={'No worries. Have a great day!'}
                    />
                </div>
            </div> */}

            <div className="flex w-full justify-center">
                <div className="lg:max-w-3xl md:max-w-2xl max-w-xl w-full px-5">
                    <EmailForm />
                </div>
            </div>
        </>
    );
}

