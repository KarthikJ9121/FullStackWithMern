const mongoose = require("mongoose");

let chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String, 
        required: true
    }, 
    msg: {
        type: String, 
        maxLength: 50
    }, 
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;
