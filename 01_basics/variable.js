const accountId=12234   //Can't be changed later
let email="myemail@gmail.com"
var accountPassword="123456"
accountCity="Kolkata"
let accountState


/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,email,accountPassword,accountCity,accountState])
