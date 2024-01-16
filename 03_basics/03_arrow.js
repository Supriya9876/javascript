const user={
    userName:"Supriya",
    price:999,

    welcomeMessege: function(){
        console.log(`${this.userName} , welcome to my course and it's price is only ${this.price} rupees`)
        console.log(this)  //this refers corrent context
    }
}
// user.welcomeMessege()
// user.userName="Saheb"
// user.price=10000
// user.welcomeMessege()

// console.log(this)  //This will return window object in the browser but here it will return empty

function chai(){
    const userName="supriya"
    console.log(this.userName);  //This is not working in the function
}
// chai()

// Arrow Function
const code=()=>{
    let userName="Supriya"
    console.log(this.userName)

}
// code()
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(4,7))

// Implicit Return
// const addTwo=(num1,num2)=> num1+num2
// console.log(addTwo(7,9))


// Returning an object
const addTwo=(num1,num2)=> ({userName:"Supriya"})
console.log(addTwo(6,8))
