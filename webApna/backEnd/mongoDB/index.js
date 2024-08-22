    const mongoose = require("mongoose");
 
/* To connect With the MongoDb - mongoose, it is an async func*/
async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

main() 
.then(() => {
    console.log("Connection Success");
})
.catch(() => {
    console.log("Error");
}); 


/* dataBase */
 
let userSchema = new mongoose.Schema({
    name : String,
    email : String,      //acts as Class
    age : Number
});

// let user = mongoose.model("user", userSchema);      //Model(acts as object)
let student = mongoose.model("student", userSchema);

/* To store into the Db works as if Class - Obj Model */ 
let stu1 = new student({
    name : "navadeep",
    email : "Navadeep@gmail.com",  // stu1 = new student([{}, {}]) - to insert many
    age : 22
});

/* to print to inserted data  - is an async func */ 
// stu1.save()                     //to insert into db
// .then((res) => {
//     console.log(res);
// })
// .catch((res) => {
//     console.log(err);
// });
  
/* to Print the Data using the model */
// student.find({})
// .then((res) => {
//     console.log(res);
// })
// .catch((res) => {
//     console.log(err);
// });

//can use stu1.insertMany([{}, {}]) to insert many obj's into db

/* Update the Data using Model */
// student.updateOne({name : "Karthik"},  {name : "kart"})
// .then((res) => {
//     console.log(res);      //Prints meta data of the updated document
// }).catch((err) => {
//     console.log(err);
// });

// student.findOneAndUpdate({name : "karthik"}, {name : "kar123"}, {new : true})
// .then((res) => {
//     console.log(res);          //Prints updated document
// })
// .catch((err) => 
// {
//     console.log(err);
// });


/* Delte the Data */
// student.deleteOne({name : "kar123"})
// .then((res) => {
//     console.log(res);        //printts meta data
// });

// student.findOneAndDelete({name : "navadeep"})
// .then((res) => {
//     console.log(res);     //prints the deleted data
// });

// student.find()
// .then((res) => {
//     console.log(res);
// });

