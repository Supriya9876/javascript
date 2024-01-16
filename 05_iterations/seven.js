const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const nN=myNumbers.map((n)=>n+10)

// Chaining
const nN=myNumbers
          .map((num)=>num*10)
          .map((num)=>num+1)
          .filter((num)=>num>=54)
console.log(nN);