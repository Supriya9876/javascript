// const userEmail="supriya@gmail.com"    //Truthy value return if statement
const userEmail=[]  //Falsy value return else statement

if (userEmail) {
    console.log("Got the email")
}
else{
    console.log("Didn't receive the email")
}

// falsy values => false,0,-0, BigInt 0n,"",null,undefined,NaN
// truthy values => "0",'false'," ",[],{},function(){}

if (userEmail.length==0) {
    console.log("Executed")
}

const emptyObject={}

if (Object.keys(emptyObject).length==0) {
    console.log("Object is empty")
}

// Nullish Coalescing Operator (??):null  undefined
let val1;
// val1=5??67
// val1=null??65
// val1=undefined??65
// val1=null??undefined
 console.log(val1)


//  Ternary Operator
// condition ?true:false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("Lesser than 80") :console.log("Greater than 80")
