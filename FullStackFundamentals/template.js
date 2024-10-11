const express = require('express');
const path = require("path");            //This is for to set the path for running from any path,
const app = express();
const port = 8080;

/* MiddleWares */
app.use(express.urlencoded({extended : true}));     //for handling the every request
app.use(express.json());                           //it is for json format      


// let {user, password} = req.body; 
// let {user, password} = req.query; 
// let {username} = req.params;


app.set("view engine", "ejs");               //searches for view folder
app.set("views", path.join(__dirname, "views"));   // to run server outside the server and to Access html
app.use(express.static(path.join(__dirname, "cssFiles")));   //to access css Files
app.use(express.static(path.join(__dirname, "jsFiles")));   //to access css Files



const path = require("path");
const {v4 : uuidv4} = require("uuid");
const methodOverride = require("method-override")    //to override the method of the html verbs

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride("_method"));
