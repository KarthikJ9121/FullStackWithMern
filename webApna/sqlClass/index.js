const { faker } = require('@faker-js/faker');
let mysql = require("mysql2");
const express = require("express");
const path = require('path');
const methodOverride = require("method-override")    //to override the method of the html verbs

let app = express();
let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "cssFiles")));   //to access css Files
app.use(express.static(path.join(__dirname, "jsFiles")));   //to access css Files
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

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

/*Users Route */
app.get("/users", (req, res) => {
    let q = 'Select * from user';

    try {
    connection.query(q, (err, result) => {
        if(err) throw err;
        // console.log(result);
        res.render("users.ejs", {result});
    });
    
    } catch (error) {
      console.log(err);
      res.send("Some Error in the Database");
    }
});


/* Edit Route */

app.get("/users/:id/edit", (req, res) => {
    let {id} = req.params;
    let q = `select * from user where id = '${id}'`
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            console.log(user);
            res.render("edit.ejs", {user});
        });
        
      } catch (error) {
        console.log(err);
      }
}); 


/* Update Route */
app.patch("/users/:id", (req, res) => {
  let {id} = req.params;
  let {password: formPass, name: UserName} = req.body;
  let q = `select * from user where id = '${id}'`;
  try {
      connection.query(q, (err, result) => {
        if(err) throw err;
        let user = result[0];
        if(formPass != user.password)
          res.send('Wrong Password');
        else
        {
            let q = `update user set name = '${UserName}' where id = '${id}'`;
            try {
            connection.query(q, (err, result) => {
                if(err) throw err;
                res.redirect("/users");
            });
            
          } catch (error) {
            console.log(err);
          }
          
        }
      });
      
    } catch (error) {
      console.log(err);
    }
});


/* Add Route */
app.get("/users/add", (req, res) => {
   res.render("add.ejs");
});

app.post("/users/add", (req, res) => {
    let {id, name, email, password} = req.body;
    if(id != '' && name != '' && email != '' && password != '')
    {
        let q = 'insert into user values(?, ?, ?, ?)';
        let data = [id, name, email, password];
        try {
          connection.query(q, data, (err, result) => {
              if(err) throw err;
              res.redirect('/users');
          });
          
        } catch (error) {
          console.log(err);
        }
    }
    else
    {
        console.log("Please Enter the Required Fields");
        res.redirect("/users/add");
    }
});

app.get("/users/delete", (req, res) => {
    res.render("delete.ejs");
});



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