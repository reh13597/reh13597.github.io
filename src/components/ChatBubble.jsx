export default function ChatBubble({ className = '', pfp, altText, username, message }) {
    return(
        <div className={`chat ${className}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                <img alt={altText} src={pfp} />
                </div>
            </div>
            <div className="chat-header">{username}</div>
            <div className="chat-bubble">{message}</div>
        </div>
    );
}

