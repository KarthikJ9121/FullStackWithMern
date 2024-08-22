let obj = 
{
    name : "Karthik",
    id : "b191016",
    dept : "Computer Science And Engineering",
    year : "E3"
}

// module.exports = obj


/* Used when require object is used to import obj's */
exports.sum = (a, b) =>  a + b;
exports.diff = (a, b) => a - b;
exports.pro = (a, b) => a * b;
module.exports.quo = (a, b) =>
{
    if(b == 0)
        return "Denominator must be Greater than zero";
    else
        return a / b;
}


/* used when import is used for importing obj's */
// export let sum = (a, b) =>  a + b;
// export let diff = (a, b) => a - b;
// export let pro = (a, b) => a * b;
// export let quo = (a, b) =>
// {
//     if(b == 0)
//         return "Denominator must be Greater than zero";
//     else
//         return a / b;
// }