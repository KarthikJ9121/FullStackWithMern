/* Files Required */
const Chat = require("./models/chat.js");
const express = require('express');
const mongoose = require("mongoose");
const methodOverride = require("method-override")    //to override the method of the html verbs
const path = require("path");            //This is for to set the path for running from any path,
const app = express();
const port = 3000;

/* MiddleWares */
app.use(express.urlencoded({extended : true}));     //for handling the every request
app.use(express.json());                           //it is for json format      
app.use(methodOverride("_method"));


// let {user, password} = req.body; 
// let {user, password} = req.query; 
// let {username} = req.params;


app.set("view engine", "ejs");               //searches for view folder
app.set("views", path.join(__dirname, "views"));   // to run server outside the server and to Access html
app.use(express.static(path.join(__dirname, "cssFiles")));   //to access css Files
app.use(express.static(path.join(__dirname, "jsFiles")));   //to access css Files

/* To Setup MongoDb Server */
async function main()
{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
        console.log("Database connected");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
main();



/* new Route */
app.get("/", (req, res) => {
    res.send("Server Connected");
});

// /* Chats Route */
app.get("/chats", async (req, res) => {
    try {
        let chats = await Chat.find();
        res.render("chatsHome.ejs", { chats });
    } catch (err) {
        console.error(err);
        res.send("Error fetching chats");
    }
});

/*  New Route */
app.get("/chats/new", (req, res) => {
    res.render("newChat.ejs");
});

/* Create Route */
app.post("/chats", async (req, res) => {
    let {from, msg, to} = req.body;
    if(from == '' || msg == '' || to == '')
    {
        console.log("Fields Cannot be Empty");
        res.send("Fileds Cannot be Empty");
    }
    try {
        let newChat = new Chat({
            from,
            msg,
            to,
            createdAt: new Date()
        });
        await newChat.save();
        console.log("Chat Added Successfully");
        res.redirect("/chats");
    } catch (err) {
        console.error(err);
        res.send("Chat Addition Error");
    }
});

/* Edit Route */
app.get("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let chat = await Chat.findById(id)
    .then((result) => {
        res.render("chatsEdit.ejs", {chat: result});
    })
    .catch((err) => {
        console.log(err);
    });
});

/* Update Route */
app.patch("/chats/:id/edit", async (req, res) => {
    let {id} = req.params;
    let {msg : newMsg} = req.body;
    let chat = await Chat.findByIdAndUpdate(id, {createdAt: new Date(), msg: newMsg}, {runValidators: true, new : true})
    .then((result) => {
        // console.log(result);
        console.log(result.createdAt);
        res.redirect('/chats');
    })
    .catch((err) => {
        console.log(err);
    });
});

/* Delete Route */
app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id)
    .then((result) => {
        console.log("Data Deleted Successfully");
        res.redirect("/chats");
    })
    .catch((err) => {
        console.log(err);
    });
});

app.listen(port, (req, res) => {
    console.log("Listening");
});