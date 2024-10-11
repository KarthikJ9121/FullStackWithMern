const express = require('express');
const app = express();
const port = 8080;

/* MiddleWares */
app.use(express.urlencoded({extended : true}));     //for handling the every request
app.use(express.json());                           //it is for json format, and is understood by the server through request    

app.get('/register', (req, res) => {
    let {user, password} = req.query;             //req.query has the get(response) data
    res.send(`hey ${user} you are in GET request \n and your password is ${password}`);
});

app.post('/register', (req, res) => {
    // console.log(req.body);
    let {user, password} = req.body;              //req.body has the post(request) data
    res.send(` hey ${user} you are in POST req \n and ur password is ${password} `)
});

app.listen(port, (req, res) => {
    console.log("listening");
});
