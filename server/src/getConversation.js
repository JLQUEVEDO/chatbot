const conversation = require("../../conversation.json")

function getConversation(req,res){
    res.send (conversation);
}

module.exports = getConversation;