const myArr=[0,1,2,3,4,5]  //heterogenious elements can be possible
const myHeros=["Vivekananda","Netaji"]

const myArr2=new Array(1,2,3,4,5)
// console.log(myArr2)
// console.log(myHeros)
// console.log(myArr)

// Array Methods
// myArr.push(5)
// myArr.push(6)  //Add elements on top
// myArr.pop()  //Remove elements from top
// console.log(myArr);

// myArr.unshift(2)  //Add elements in the begining of the array
// myArr.shift()  //Remove the first element of the array
// console.log(myArr);

// console.log(myArr.includes(5) ); //number is present or not
// console.log(myArr.indexOf(4))

// Convert Array to String
// const newArr=myArr.join()
// console.log(newArr)
// console.log(typeof(newArr))

// slice,splice

console.log("A ",myArr)

const mna1=myArr.slice(1,3)
console.log(mna1)
console.log("B ",myArr)

const mna2=myArr.splice(1,3);
console.log(mna2)
console.log("C ",myArr)