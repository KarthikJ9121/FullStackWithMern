const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4 : uuidv4} = require("uuid");

const methodOverride = require("method-override")    //to override the method of the html verbs
app.use(methodOverride("_method"));

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.send("Server set Successfully");
});

let posts = [
    {
        id : uuidv4(),
        username : "apnaCollege",
        content : "We Create Tons of Content"
    },
    {
        id : uuidv4(),
        username : "striver",
        content : "Largest Ds algo"
    },
    {
        id : uuidv4(),
        username : "rahul",
        content : "Software Engineer"
    }
]


//To quoraMain
app.get("/posts", (req, res) => {
    res.render("quoraMain.ejs", {posts});
});


//From quoraMain anchor
app.get("/posts/new", (req, res) => {
   res.render("quoraNewPost.ejs");
});


//From quoraNewPost 
app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    posts.push({id: uuidv4(), username, content});
    // console.log(posts);  
    res.redirect("/posts")
    // console.log("New Post Created");
});


// From quoraMain
app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => (id ===   p.id));
    console.log(post);
    res.render("viewDetails.ejs", {post});
});


// From edit
app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect(`/posts/${id}`)
});


// From quoraMain anchor
app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
});


// From quoraMain button
app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id != p.id);
    console.log(posts);
    res.redirect("/posts");
});


app.listen(port, (req, res) => {
    console.log("Listening");
});