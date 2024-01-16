
function sayMyName(){
    console.log(("S"));
    console.log(("U"));
    console.log(("P"));
    console.log(("R"));
    console.log(("I"));
}
// sayMyName()

function addTwoNumber(number1,number2){
     console.log(number1+number2);
}
addTwoNumber(7,9)
function addTwoNumber(number1,number2){
    const res=(number1+number2);
    return res
}
const result=addTwoNumber(6,9)
console.log("Result:",result)

function loginUserMessege(UserName="Saheb"){
    if(UserName===undefined){
        console.log("Please enter a username")
        return
    }
    return `${UserName} is just Loggedin`
}
const s=loginUserMessege("supriya")
console.log(s)

//  ...=>refers as REST as well as SPREAD operator but Use Case is Different
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(300,783,87653,5241))

// Pass the objects in the function
const user={
    name:"Supriya",
    price:1000
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and he bought a product of ${anyObject.price} rupees`)
}
// handleObject(user)

// We can pass the object while calling the functiuon
handleObject({
    name:"Saheb",
    price:300
})

const myNewArray=[100,200,300]

function returnSecondValue(newarray){
    return newarray[1]
}
console.log(returnSecondValue(myNewArray))