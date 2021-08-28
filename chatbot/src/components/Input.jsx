import { useState } from "react"

export function Input() {
    const [text, setText] = useState("hi")
    const handleChange = event => { setText(event.target.value) }

    return (
        <input onChange={handleChange} value={text} className="chatbot-Input" />


    )
}