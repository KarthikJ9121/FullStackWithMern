/* normal object */
// function createPerson(name, age) 
// {
//     let person =
//     {
//         name : name,
//         age : age,             
//         bio() {
//             console.log(`Hi i'm ${this.name} , age is ${this.age}`);
//         }
//     }

//     return person;    
// }

// let p1 = createPerson("kar", 22); //has own copy hence own memory      //hence Drawback
// let p2 = createPerson("nav", 17); //has own copy hence own memory



/* Better thareeqa */

// function Person(name, age)      //Uppercase, constructor 
// {
//     this.name = name;
//     this.age = age;
//     console.log(this);
// }

// Person.prototype.bio = function()
// {
//     console.log(`I'm ${this.name}, age is ${this.age}`);     //aur best tareeqa is to classes
// }

// let p1 = new Person("kar", 22);  //same reference
// let p2 = new Person("nav", 17);   // same reference  // hence better version


/* Best Tareeqa */

// class Person
// {
//     constructor(name, age)
//     {
//         this.name = name;
//         this.age = age;
//     }

//     bio()
//     {
//         console.log(`Hi i'm ${this.name} , age is ${this.age}`);
//     }
// }

// let p1 = new Person("kar", 22);
// let p2 = new Person("nav", 17);


/* Inheritance */
class Person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
    bio()
    {
        console.log(`Hi i'm ${this.name} , age is ${this.age}`);
    }
}

class Student extends Person
{
    constructor(name, age, marks)
    {
        super(name, age);
        this.marks = marks;
    }
    getMarks()
    {
        console.log(`My marks are ${this.marks}`);
    }
}

class Teacher extends Person
{
    constructor(name, age, sub)
    {
        super(name, age);
        this.sub = sub;
    }
    getSub()
    {
        console.log(`My Sub is ${this.sub}`);
    }
}

let stu = new Student("kar", 22, 45);
let teach = new Teacher("sharath", 34, "Telugu");