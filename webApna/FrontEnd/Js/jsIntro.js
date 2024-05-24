/*
console.log("------------------PROMPTS AND ALERTS-----------");

console.log("Welcome");
let name = prompt("Your name Please")
alert(`Welcome ${name}`);
console.log(`Hey ${name} you are Welcome`); */

console.log("-------------------STRINGS----------------------") 

let a = " Karthik is going   " 
console.log(a)

console.log("---------------Methods Without arguments-------")
console.log(a.trim())
console.log(a.toLowerCase())
console.log(a.toUpperCase())

console.log("-----------------Strings With Arguments-----------")
console.log(a.indexOf('i'))
console.log(a.lastIndexOf('i'))
console.log(a.indexOf('is'))

console.log("-------------Method Chaining---------------------")
console.log(a.toUpperCase().trim())
console.log(a.slice(3,7))
console.log(a.slice(-1,-4))
console.log(a.replace("come", "go"))
console.log(a.replace('a', 'A'))

console.log("-------------Arrays---------------------------")
let arr = ['anan', 'b', 1, 2, 3]
console.log(arr)
b = arr.shift()
console.log(b)

c = arr.pop()
console.log(c)
console.log(arr)

console.log(arr.push('Kar'))
console.log(arr)

console.log(arr.unshift("Nav"))
console.log(arr)

console.log(arr.indexOf('b'))
console.log(arr.includes("Nav"))

let brr = arr.concat(['b', 'kart', 123, 345])
console.log(brr)

console.log(arr.reverse())

console.log(arr.slice(-1))
console.log(brr.slice(2, 5))

console.log(arr)
console.log(arr.splice(1, 3, "new", "Array", "is", "added"))
console.log(arr)
console.log(arr.splice(0, 1))
console.log(arr)

console.log(arr)
console.log(arr.sort())

crr = arr
arr.push("Added")
console.log(arr)
console.log(crr)

let nums = [[2,4], [3, 5], [6, 7]]
console.log(nums)
console.log(nums[0])



console.log("-------------------------this Keyword------------")
let obj = 
{
    name : "Karthik",
    id   : "b191016",
    fun  : function()
    {
        console.log(this.name, this.id);   //this is obj itself
        console.log(this);
    }
}

console.log(obj.fun());

let sum = (a, b) =>
{
    return a + b;
}

console.log(sum(4, 5)); //this is window here
console.log(this);


console.log("----------------------------try-catch--------------")

let x = 10;
console.log(x);

try{
    console.log(y);
}catch(err){
    console.log("Error: \n", err);
}


console.log("-----------------------Arrow Functions--------------------")

let m = (c, d) =>
{
    console.log(c * d);
}

m(5, 6);


let print = () =>
{
    console.log("Hello");
}

print();

let xy = (a, b) => a * b
console.log(xy(5, 6))


console.log("-----------------Callbacks------------");
/* console.log("hi");

setTimeout(() => 
{
    console.log("welcome")
}, 4000);

console.log("Karthik")




let id = setInterval(() => 
{
    console.log("welcome")
}, 4000);

        
clearInterval(id); */


console.log("--------------------------this with arrow----------");

let arun = 
{
    name : "arun",
    id : "b191016",
    fun1 : function()
    {
        console.log(this);            // object's scope - here arun
        console.log(this.name);        
    },

    fun2 : () =>
    {
        console.log(this);            // lexical/parent's Scope - here window
        console.log(this.name);       
    }
}
arun.fun1();
arun.fun2();


console.log("---------------------Callbacks functions---------");


arr.forEach(element => {
    console.log(element);
});



let num = [1,2,4,7,2,0]

let db = num.map((el) => el **2);
console.log(db);

let even = num.filter((num) => num %2 == 0);
console.log(even)

console.log(num.every((el) => el % 2 == 0));
console.log([2, 4, 6].every((ele) => ele % 2 == 0));

console.log(num.some((el) => el % 2 == 0));
console.log([1, 3, 5].some((ele) => ele % 2 == 0));

console.log(num.reduce((res, el) => res + el));
console.log([1,2,4,6].reduce((res, el) => res + el));

let max = num.reduce((max, el) =>
{
    if(max < el)
        return el;
    return max;
});
console.log(max);

console.log("-------Spread Operator-----------");

let sp = (a, b, c) =>
{
    return a * b * c ;
}
let s = [1, 2, 3];
console.log(sp(...s));

let sp2 = (a, b, c, ...rest) =>
{
    console.log(rest);
    return a * b * c * rest[2];
} 
console.log(sp2(1, 2, 3, 5, 6, 6));

console.log(..."Karthik");

let barr = [...s];
let st = [..."Karthik"];
console.log(barr);
console.log(st);

let data = 
{
    email : "Karthik",
    id : "b191016"
};

let datacpy = {...data, place : "srply"};
console.log(datacpy)


console.log("----------------------Destructuring------------")
let [y , z, ...args] = st;
console.log(y, z);
console.log(args);

let ob = 
{
    name2 : "name",
    id : "id",
    sln0 : "1234"
};

let {name2, sln0} = ob;
console.log(name2);
console.log(sln0);