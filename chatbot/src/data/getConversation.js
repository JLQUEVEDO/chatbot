export async function getConversation() {
    const response = await fetch("http://localhost:3002/conversation")
    const data = await response.json()
    return data
}