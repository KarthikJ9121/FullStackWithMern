const mongoose = require("mongoose");
 
/* To connect With the MongoDb */
async function main()
{
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

main()
.then(() => {
    console.log("Connection Success");
})
.catch(() => {
    console.log("Error");
});

/* Schema validations */
let bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true    // Constraint
    },
    author : {
        type : String
    },
    price : {
        type : Number
    }
});

let book = new mongoose.model("book", bookSchema);


let book1 = new book({
    title : "Mongo",
    author : "Nav",
    price : 123
});

book1.save()
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});