

export function Bubble({message, time, type}){
    return(
        <div className={`chatbot-bubble ${type === "endUser" ? "user-bubble" : "bot-bubble" }` }>
            <div className="bubble-content">
                <span>{time}</span>
                <p>{message}</p>
            </div>
        </div>
    )
}