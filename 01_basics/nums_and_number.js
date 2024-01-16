const score=400
// console.log(score)

const balance=new Number(300)
// console.log(balance)

// console.log(balance.toString())
// // console.log(balance.toFixed(3))

const otherNumber=223.14534
// console.log(otherNumber.toPrecision(4))

const hundreds=1000000
// console.log(hundreds.toLocaleString('en-IN'))


// *******************************************Math*****************************************8
console.log(Math)
console.log(Math.abs(-5));
console.log(Math.round(5.9))
console.log(Math.ceil(4.4))
console.log(Math.floor(3.9))
console.log(Math.min(3,8,1,7))
console.log(Math.max(6,2,9,3))

console.log(Math.random())
console.log(Math.floor(Math.random()*10) +1)

// For range 10-20
const max=20
const min=10
console.log(Math.floor((Math.random() *(max-min+1))+min))