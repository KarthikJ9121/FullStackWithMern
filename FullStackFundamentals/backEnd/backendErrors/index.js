const express = require("express");
const app = express();                  //async error can be handled by try-catch block and using next(err), 
const port = 8080;                     //lastly using a middleware which takes up the error msg
                                       
//                                    //Mongoose Errors can be handled by the knowing err.name and next(err)
/* Files Required */
const Chat = require("./models/chat.js");
const mongoose = require("mongoose");
const methodOverride = require("method-override")    //to override the method of the html verbs
const path = require("path");            //This is for to set the path for running from any path,

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


const ExpressError = require("./ExpressError");

/* Own MiddleWare */                              //Request ---MiddleWare---Response
// app.use((req, res, next) => {
//     console.log("MiddleWare1");                //MiddleWares are written at the beginning of the request
//     next();
// });

// app.use((req, res, next) => {
//     console.log("MiddleWare2");.
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
// let checkToken =  (req, res, next) => {
//     let {token} = req.query;
//     if(token === "giveaccess")               //https://localhost:8080/api?token=giveaccess
//         next();
//     res.send("ACCESS DENIED");
// };

// app.get("/api", checkToken, (req, res) => {
//     res.send("Data Fetched Successfully");
// });


/* Error Handler */
// app.get("/error", (req, res) => {
//     abcd = abcd;
// });

// app.use((err, req, res, next) => {
//     console.log("------Error-----");
//     next();
// });

// app.use((req, res) => {
//     res.send("Page Not Found");
// });


/* Own Errors */
let checkToken =  (err, req, res, next) => {
    let {token} = req.query;
    if(token === "giveaccess")               //https://localhost:8080/api?token=giveaccess
        next();
    throw new ExpressError( "ACCESS DENIED");
};

app.use((err, req, res, next) => {
    let {status = 500, message = "There is an error"} = err;
    res.send(status).send(message)
});

app.get("/api", checkToken, (req, res) => {
    res.send("Data Fetched Successfully");
});

app.get((err, req, res, next) => {
    throw new ExpressError(403, "Access is Forbidden");
});


/* Asynchronous JavaScript */
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

    /* Error Handling MiddleWare */
    app.use((err, req, res, next) => {
        let {status = 500, message = "There is an Error"} = err;     /* Asynchronous Error are handled by try - catch Block */
        res.send(status).send(message);                             /* or can be handled by the asuncWrap(async(req, res, next)) fn */
    });




/* Sample testing */
// app.get('/', (req, res) => {
//     res.send("Server Connected");
// });

// app.get('/chats', (req, res) => {
//     res.send("you are in chats");
// });

app.listen(port, (req, res) => {
    console.log("listening");
});