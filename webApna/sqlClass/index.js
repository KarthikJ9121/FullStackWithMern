const { faker } = require('@faker-js/faker');
let mysql = require("mysql2");
const express = require("express");
const path = require('path');

let app = express();
let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'webdevelopment',
  password: 'J.9010048072'
});

/* Home Route */
app.get("/", (req, res) => {
    let q = 'Select count(*) from user';

    try {
    connection.query(q, (err, result) => {
        if(err) throw err;
        let count = result[0]["count(*)"];
        res.render("home.ejs", {count});
    });
    
    } catch (error) {
      console.log(err);
      res.send("Some Error in the Database");
    }
});

/*


app.listen(port, (req, res) => {
  console.log("Listening To the Server");
});









/* To Create Random Data */
// let createRandomUser = () => {
//   return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//    faker.internet.email(),
//    faker.internet.password(),
//   ];
// }

// let data = [];
// for(let i = 0; i < 100; i++)
// {
//     data.push(createRandomUser());
// }

// let q = "insert into user values ?"

// try {
//   connection.query(q, [data], (err, result) => {
//       if(err) throw err;
//       console.log(result);
//       console.log(result.length);
//   });
  
// } catch (error) {
//   console.log(err);
// }

// connection.end();


/* sample Data */
// console.log(createRandomUser());

// let q = "insert into temp values ?";
// let temp = [                              //sample multi insert into the table
//   [2, "nav"],
//   [3, "chandu"],
//   [4, "chandana"]
// ];