const express = require("express");
const app = express();

let port = 3000;

// console.dir(app); //to Print the dir of the express

/* To actually run the sample server */

/* Sending the Data */3

app.use((req, res) => {
    console.log("Request Received to server");
});

/* Receiving it from server */

// app.get('/', (req, res) => {
//     res.send("Running Sample Server");
// });

/* Creating Multiple Routes */

// app.get('/', (req, res) => {
//     res.send("Running Sample Server");
// });

// app.get("/home", (req, res) => {
//     res.send("You are in /home Page");
// });

// app.get("/main", (req, res) => {
//     res.send("You are in /main Page");
// });

// app.get("/sub", (req, res) => {
//     res.send("You are in /sub Page");
// });

// app.get("/home/main", (req, res) => {
//     res.send("You are in /home/main Page");
// });

// app.get("/home/main/sub", (req, res) => {
//     res.send("You are in home/main/sub Page");
// });

// app.get("*", (req, res) => {
//     res.send("This page doesn't Exist");       //custom Response(* is wildCard)
// });




/* Sending Parameters */

// app.get("/:username", (req, res) => {
//     console.log(req.params);            //{ username: 'Karthik' }
//     res.send("Username Field Added");       
// });

    //OR

// app.get("/:username/:id", (req, res) => {
//     let {username, id} = req.params;
//     console.log(req.params);
//     res.send(`Username : ${username}, id: ${id}`);       
// });

/* Handling the query Strings */

// app.get("/search", (req, res) => {
//     let {q} = req.query;
//     if(!q)
//         res.send("Nothing Searched");
//     else
//     {
//         console.log(req.query);
//         res.send("Handling the query String")
//     }
// });


app.listen(port, (req, res) => {
    console.log(`port is listening on ${port}`);
});
