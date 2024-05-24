let obj = 
{
    name : "Karthik",
    id : "b191016",
    dept : "Computer Science And Engineering",
    year : "E3"
}

// module.exports = obj

export let sum = (a, b) =>  a + b;
export let diff = (a, b) => a - b;
export let pro = (a, b) => a * b;
export let quo = (a, b) =>
{
    if(b == 0)
        return "Denominator must be Greater than zero";
    else
        return a / b;
}