export default function ChatBubble({ className1 = '', className2 = '', pfp, altText, username, message }) {
    return(
        <div className={`chat ${className1}`}>
            <div className="chat-image avatar">
                <div className="w-15 rounded-full transition duration-300 hover:scale-115">
                    <img alt={altText} src={pfp} />
                </div>
            </div>
            <div
                className="chat-header text-lg cursor-default select-none transition duration-300 hover:scale-110 hover:text-primary">
                {username}
            </div>
            <div
                className={`chat-bubble text-base-content text-lg transition duration-300 hover:scale-103 ${className2}`}>
                {message}
            </div>
        </div>
    );
}

