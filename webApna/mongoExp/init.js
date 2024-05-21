const Chat = require("./models/chat.js");
const mongoose = require("mongoose");

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
        console.log("Database connected");
        
        let chat1 = new Chat({
            from: "Karthik", 
            to: "Navadeep", 
            msg: "Hello",
            createdAt: new Date()
        });

        let savedChat = await chat1.save();
        console.log(savedChat);
    } catch (err) {
        console.error(err);
    }
}

main();
