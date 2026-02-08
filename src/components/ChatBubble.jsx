export default function ChatBubble({ className1 = '', className2 = '', pfp, altText, username, message }) {
    return(
        <div className={`chat xl:max-w-full lg:max-w-3xl ${className1}`}>
            <div className="chat-image avatar">
                <div className="w-15 rounded-full transition duration-200 hover:scale-108">
                    <img alt={altText} src={pfp} />
                </div>
            </div>
            <div
                className="chat-header cursor-default select-none xl:text-lg lg:text-md md:text-sm text-sm">
                {username}
            </div>
            <div
                className={`chat-bubble p-5 text-white select-none xl:text-lg lg:text-md md:text-sm text-sm ${className2}`}>
                {message}
            </div>
        </div>
    );
}

