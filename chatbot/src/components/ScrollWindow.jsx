import { Bubble } from "./Bubble";


export function ScrollWindow({ conversation }) {

    return (
        <div className="chatbot-scroll">
            <div>
                {conversation.map(item => {
                    return <Bubble key={item.id} message={item.message} time={item.messageTimestamp} type={item.messageEventType} />;
                })}
            </div>
        </div>
    )
}