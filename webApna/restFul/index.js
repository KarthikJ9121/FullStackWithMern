const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4 : uuidv4} = require("uuid");

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.send("Server set Successfully");
});

let posts =[
    {
        id : uuidv4(),
        username : "apnaCollege",
        content : "Welcome to apnacollege"
    },
    {
        id : uuidv4(),
        username : "striver",
        content : "Welcome to striver"
    },
    {
        id : uuidv4(),
        username : "rahul",
        content : "Welcome to rahul"
    }
]

app.get("/posts", (req, res) => {
    res.render("quoraMain.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
   res.render("quoraNewPost.ejs")
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({username, content});
    res.redirect("/posts")
    console.log("New Post Created");
});

app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => (id === p.id));
    console.log(post);
    res.render("viewDetails.ejs", {post});
});

app.listen(port, (req, res) => {
    console.log("Listening");
});