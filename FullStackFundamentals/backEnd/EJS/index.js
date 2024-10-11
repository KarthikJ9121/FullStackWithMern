const express = require("express");
const app = express();
const path = require("path");            //This is for to set the path for running from any path,
const port = 8080;                       //after server runs

/* Sample Check */
// app.get('/main', (req, res) => {
//     res.send("Welcome to Ejs");
// });

/* Ejs actually render the paths given */

app.set("view engine", "ejs");               //searches for view folder
app.set("views", path.join(__dirname, "views"));   // to run server outside the server and to Access html
app.use(express.static(path.join(__dirname, "cssFiles")));   //to access css Files
app.use(express.static(path.join(__dirname, "jsFiles")));   //to access css Files

app.get('/', (req, res) => {
    res.render("home.ejs");       //defaultly takes up the file in /views folder,
                        // and checks the /views folder only in the folder where server running
});

app.get('/rolldice', (req, res) => {
    let randValue = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", {num : randValue});
});

app.get('/ig/:username', (req, res) => {
    let followers = ['navadeep', 'srinu', 'chandu', 'chandana'];
    let {username} = req.params;
    res.render("instagram", {username, followers});          //is instagram.ejs from /views, & is username = username
});

app.get('/instapage/:username', (req, res) => {
    let {username} = req.params;
    let instaData = require("./data.json");            //This is InstaPage from database
    let data = instaData[username];
    if(data)
        res.render("instaPage", {data});
    else
        res.send("No Such Account Found");
});

app.get('*', (req, res) => {
    res.send("No Route Found For this page");
});

app.get('/template', (req, res) => {
    res.render("includeHeader");
});

app.listen(port, () => {
    console.log("Server is Listening");
});