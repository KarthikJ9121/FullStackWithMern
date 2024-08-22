//-------------------Sample Programs--------------
// console.log("Welcome Karthik");
// let n = 5
// for(let i = 0; i < 10; i++)
//     console.log(i);


//-----------------Command Line Arguments--------------
// console.log(process.argv);
// let args = process.argv;
// for(let i = 2; i < args.length; i++)
//     console.log("Hello ", args[i]);

/* --------------Imports------------          */
let object = require("./object.js");
console.log(object);
console.log(object.name);
console.log(object.sum(5, 6));


/* For Directory Create another file(index.js) and
import all the other files and then export 
from the same file, now import the folder */
// let info = require("./fruits");
// console.log(info);

/*using import Keyword */

// import {sum, quo} from "./object.js";

// console.log(sum(1, 3));
// console.log(quo(25, 5));