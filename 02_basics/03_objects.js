// If objects are created by constructor it will create singleton
// Object.create

// use symbols in the object as a key
const mySym=Symbol("Key1")
// Object Literals
const JSuser={
    name:"Supriya",
    "Full Name":"Supriya Batabyal",
    mySym:"myKey1",  //here the type of "mySym" is string not Symbol
    [mySym]:"myKey1",  //Now the type of mySym is Symbol
    age:22,
    location:"Purba barddhaman",
    email:"supriyabatabyal@email.com",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Sunday"]
}
// Accessing objects
// console.log(JSuser.name)
// Another way to access object member
// console.log(JSuser["email"]);
// console.log(JSuser[mySym])

// Change a value of a object member
JSuser.email="Supriyabatabyal346@gmail.com"

// To freeze the object
// Object.freeze(JSuser)
// console.log(JSuser)

JSuser.greeting=function(){
    console.log("Hello Js User");
}
console.log(JSuser.greeting);  //It will print Function(anonymous)
JSuser.greeting();

JSuser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`);
}
JSuser.greetingTwo()
