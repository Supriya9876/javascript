// var is global variable
// const power=200
// if(power>100){
//     var character="fly"
//     console.log(`You can ${character}`)
// }
// console.log(`You can ${character}`)

//Thats why var is ignored

// const power=200
// if(power>100){
//     let character="fly"
//     console.log(`You can ${character}`)
// }
// console.log(`You can ${character}`)  //It will not executed

const userLoggedIn=true;
const debitCard=true;
if(userLoggedIn && debitCard){
    console.log(`Allow to log in`);
}