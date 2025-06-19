export default function ChatBubble({ className1 = '', className2 = '', pfp, altText, username, message }) {
    return(
        <div className={`chat ${className1}`}>
            <div className="chat-image avatar">
                <div className="w-15 rounded-full">
                    <img alt={altText} src={pfp} />
                </div>
            </div>
            <div className="chat-header text-lg">{username}</div>
            <div className={`chat-bubble text-base-content text-lg ${className2}`}>{message}</div>
        </div>
    );
}

