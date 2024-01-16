// Primitive Data Types
// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt


// JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

// Symbol
let id= Symbol('234')
let anotherId= Symbol('234')

console.log(id==anotherId);  //This will return false

console.log(id);
console.log(typeof id);

let bigNumber=23885324570865332256888543322224567887654332222344n
console.log(typeof bigNumber);


// Reference (Non-Primitive)
// Array,Objects,Functions

const heroes=["hanuman","saktiman",67]
let myobj={
    name: "Supriya",
    age:22,
}

const myFunction=function(Number){
    console.log("hello world");
}
console.log(heroes);
console.log(myobj);
console.log(typeof myFunction);
console.log(typeof heroes);
console.log(typeof myobj);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// There are two types of memory in javascript
// 1.Stack Memory(Primitive)-> If two variable has same value then second variable has the copied value of the first one

let firstNumber=2665786;
let secondNumber=firstNumber;
secondNumber=98265;
 console.log(firstNumber)
 console.log(secondNumber)
// Here the both value are different because a copy of first number is given to second number.So changing in second number doesn't effect firstNumber

// 2.Heap(Non-Primitive)

let firstUser={
    name:"Supriya",
    email: "firstuser@email.com"
}
let secondUser=firstUser
secondUser.name="Saheb"
console.log(firstUser.name)

// Here FirstUser name also changed because both firstUser and SecondUser pointing a same reference