const express = require("express");
const app = express();
const port = 8080;

/* Own MiddleWare */                              //Request ---MiddleWare---Response
// app.use((req, res, next) => {
//     console.log("MiddleWare1");                //MiddleWares are written at the beginning of the request
//     next();
// });

// app.use((req, res, next) => {
//     console.log("MiddleWare2");
//     next();
// });

/* Utility MiddleWare - Logger(morger - famous middleware functions same as the logger) */
// app.use((req, res, next) => {
//     // console.log(res);
//     req.time = new Date(Date.now()).toDateString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

// app.use((req, res, next) => {
//     res.status(404).send(("Page Not Found"));
// });


/* using API Tokens */
// app.use("/api", (req, res, next) => {
//     let {token} = req.query;
//     if(token === "giveaccess")               //https://localhost:8080/api?token=giveaccess
//         next();
//     res.send("ACCESS DENIED");
// });

// app.get("/api", (req, res) => {
//     res.send("Data");
// });

/*Can also be passed as the function to the */

let checkToken =  (req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess")               //https://localhost:8080/api?token=giveaccess
        next();
    res.send("ACCESS DENIED");
};

app.get("/api", checkToken, (req, res) => {
    res.send("Data Fetched Successfully");
});

/* Sample testing */
app.get('/', (req, res) => {
    res.send("Server Connected");
});

// app.get('/chats', (req, res) => {
//     res.send("you are in chats");
// });

app.listen(port, (req, res) => {
    console.log("listening");
});