let score="44abc"

// console.log(typeof score)
// console.log(typeof(score))
// console.log(score)

let value=Number(score)
// By pointing perticular data type name we can convert any data type to another data type
// console.log(value)
// console.log(typeof value)

let newValue=undefined
// console.log(typeof newValue)

let nv=Number(newValue)
// console.log(nv)  //It will give NotaNumber(NaN) as a output as it can't be converted to Number type

let anothernewValue=null
// console.log(anothernewValue)
// console.log(typeof anothernewValue)

let anv=Number(anothernewValue)
// console.log(anv)  //Null will be converted in 0
// console.log(typeof anv)

// "44abc"=NaN
// "44"=44
// true=1   false=0

// Convert number to boolean
let loggedIn=456

let booleanloggedIn=Boolean(loggedIn)
// console.log(booleanloggedIn)
// console.log(typeof booleanloggedIn)
// 1 or >1=true  0=false

// Covert string to boolean
let mname=" "

let booleanname=Boolean(mname)
// console.log(booleanname)
// console.log(typeof booleanname)
// "abc"=true ;""=false

// Convert number to string
let nnum=54

let snum=String(nnum)
// console.log(snum)
// console.log(typeof snum)

// ******************  Operations  *********************

let nvalue=6
let negvalue=-nvalue
// console.log(negvalue)

// Basic operations
// console.log(nvalue+nvalue)
// console.log(nvalue-nvalue)
// console.log(nvalue*nvalue)
// console.log(nvalue/nvalue)
// console.log(nvalue**nvalue)
// console.log(nvalue%nvalue)

// console.log("1"+2)  //give 12
// console.log(1+"2")  //give 12
// console.log("1"+2+2) //give 122 because if string is a first position it will store all the numbers sequencially
// console.log(1+2+"2") // give 32 because if string is a last position then it will add all the previous numbers 

let nm="1"+2
// console.log(typeof nm);

console.log(+true)
console.log(+false)




