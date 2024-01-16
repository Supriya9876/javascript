let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate);

// let createMyDate=new Date(2023,8,29,2,35,43)
// let createMyDate=new Date("09-25-2023")
// let createMyDate=new Date("2023-01-23")
// console.log(createMyDate.toString())
// // console.log(createMyDate.toLocaleString())

// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(createMyDate.getTime())
// console.log(Math.floor(Date.now()/1000))


myDate.toLocaleString('default', {
    weekday: "long",
})


let newDate=new Date()
console.log(newDate)
console.log(newDate.getFullYear())
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())
console.log(newDate.getTime())

