                /* Visualizing the call Stack through Sources */

//  function one()
// {
//     return 1;
// }
// function two()
// {
//     return one() + one();
// }
// function three()
// {
//     console.log(two() + one());
// }
// three(); 


                /* Aynchronous With the callbacks */
                
// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColor)
// {
//     setTimeout(() =>{
//         h1.style.color = color;
//         if(nextColor) 
//             nextColor();
//     }, delay);
    
// }

// changeColor("red", 1000);
// changeColor("green", 2000);
// changeColor("orange", 3000);



                /* Nesting CallBacks Using CallBack Hell */

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColor)
// {
//     setTimeout(() =>{
//         h1.style.color = color;
//         if(nextColor) 
//             nextColor();
//     }, delay);
    
// }

// changeColor("red", 1000, () =>{
//     changeColor("green", 1000, () =>{
//         changeColor("orange", 1000, () =>{
//             changeColor("blue", 1000, () =>{
//                 changeColor("pink", 1000, () =>{
//                     changeColor("purple", 1000)
//                 });
//             });
//         });
//     });
// });


                /* Case-Study Call-Back Hell */

// function saveToDb(data, success, failure)
// {
//     let internetSpeed = Math.floor(Math.random() * 10);
//     if(internetSpeed > 4)
//         success();
//     else 
//         failure();
// }

// saveToDb("Karthik", () =>
//     {
//         console.log("Success : Data Saved SuccessFully");
//         saveToDb("Hello", () => {
//             console.log("Success2 : Data2 Saved SuccessFully");
//             saveToDb("World", () => {
//                 console.log("Success3 : Data2 Saved SuccessFully");
//             }, 
//             () => {
//                 console.log("Failure3 : Data2 was Not Saved");
//             });
//         }, 
//         () => {
//             console.log("Failure2 : Data2 was Not Saved");
//         });
//     }, 
//     () => {
//         console.log("Failure : Data was Not Saved");
// });



                /*Case-Study Promises */
    
function saveTodb(data)
{
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10);
        if(internetSpeed > 4)
            resolve("Success : Data Was Saved");
        else
            reject("Failure: Data Was Not Saved");
    });
}

saveTodb("Karthik")
    .then((result) => {
        console.log(result);
        console.log("Promise Was Resovled");
    }) 
    .catch((result) => {
        console.log(result);
        console.log("Promise Was Rejected");
    })


                /*Improved version Of Promises - Promise chaining */

// function saveTodb(data)
// {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10);
//         if(internetSpeed > 4)
//             resolve("Success : Data Was Saved");
//         else
//             reject("Failure: Data Was Not Saved");
//     });
// }

// saveTodb("Karthik")
//     .then(() => {
//         console.log("Promise1 Was Resovled");
//         // saveTodb("Hello")
//         // .then(() => {
//         //     console.log("Promise2 Was Resolved");
//         // })
//         // .catch(() => {
//         //     console.log("Promise2 Was Rejected");
//         // }) 
//         // [OR]
//         return saveTodb("Hello");
//     }) 
//     .then(() => {
//         console.log("Promise2 Was Resolved")
//         return saveTodb("world");
//     })
//     .then(() => {
//         console.log("Promise3 Was Resolved");
//     })
//     .catch(() => {
//         console.log("Promise Was Rejected");
//     })


                /* Best Version Of the Promises */

// function saveTodb(data)
// {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10);
//         if(internetSpeed > 4)
//             resolve("Success : Data Was Saved");
//         else
//             reject("Failure: Data Was Not Saved");
//     });
// }

// saveTodb("Karthik")
//     .then((result) => {
//         console.log("Promise1 Was Resovled");
//         // saveTodb("Hello")
//         // .then(() => {
//         //     console.log("Promise2 Was Resolved");
//         // })
//         // .catch(() => {
//         //     console.log("Promise2 Was Rejected");
//         // }) 
//         // [OR]
//         console.log("Result Of the Promise: \n", result);
//         return saveTodb("Hello");
//     }) 
//     .then((result) => {
//         console.log("Promise2 Was Resolved")
//         console.log("Result Of the Promise: \n", result);
//         return saveTodb("world");
//     })
//     .then((result) => {
//         console.log("Promise3 Was Resolved");
//         console.log("Result Of the Promise: \n", result);
//     })
//     .catch((error) => {
//         console.log("Promise Was Rejected");
//         console.log("Result Of the Promise: \n", error);
//     });


                    /* Refractoring The Previous Code */

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColor)
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             h1.style.color = color;
//             resolve(`Color Changed to ${color}`);
//         }, delay); 
//     });
// }

// changeColor("red", 1000)
//     .then((result) => {
//         console.log(result);
//         return changeColor("green", 1000);
//     })
//     .then((result) => {
//         console.log(result);
//         return changeColor("orange", 1000);
//     })
//     .then((result) => {
//         console.log(result);
//         return changeColor("blue", 1000);
//     })
//     .then((result) => {
//         console.log(result);
//        return changeColor("pink", 1000);
//     })
//     .then((result) => {
//        console.log(result);
//        return changeColor("purple", 1000);
//     })
//     .then((result) => {
//         console.log(result);
//         console.log("Color Changed Successfully");
//     });


                /*Async-await Keyword*/ //works like Threading

// async function greet(name)
// {
//     return `Hello ${name}`;
// }

// greet("Karthik")
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })




/* Await Keyword */ 
// function genRandomNum()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let randomNum = Math.floor(Math.random() * 10) + 1;
//             console.log(randomNum);
//             resolve();
//         }, 1000);
//     });
// }

// async function fun()
// {
//     await genRandomNum();
//     await genRandomNum()
//     await genRandomNum();

//     console.log("Generated Random Numbers");
// }
// fun();



/* RandomColor(Improved Version) - Async & Await */
// let h1 = document.querySelector("h1");

// function changeColor(color, delay)
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             let randomNumber = Math.floor(Math.random() * 10) + 1;
//             console.log(randomNumber);
//             if(randomNumber < 5)
//                 reject("Promise Rejected");
//             h1.style.color = color;
//             resolve(`Color Changed to ${color}`);
//         }, delay); 
//     });
// }

// async function change()
// {
//     try
//     {
//         await changeColor("red", 1000);
//         await changeColor("green", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("blue", 1000);
//         await changeColor("pink", 1000);
//         await changeColor("purple", 1000);
//     }
//     catch(err)
//     {
//         console.log(err);
//     }
// }
// change();



/* Fetching urls using async-await */

// let url = "https://catfact.ninja/fact"; 

// async function facts()
// {
//     /* as if in the exceptions */
//     // throw "error";
//     // let res = await fetch(url);
//     // let data = await res.json();
//     // console.log(data);

//     try
//     {
//         // throw "rejected data";
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data);
//     }
//     catch(err)
//     {
//         console.log("error: ", err);
//     }
// }
// facts();



/* Using Axios */


// let url = "https://catfact.ninja/fact"; 
// async function facts()
// {
//    try
//    {
//         let res = await axios.get(url);
//         console.log(res.data);
//    }
//    catch(err)
//    {
//         console.log("Error");
//    }
// }
// facts();
