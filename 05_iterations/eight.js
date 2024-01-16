const myNum=[1,2,3,4,5,6]

let sum=0;
for (let index = 0; index < myNum.length; index++) {
    sum+=myNum[index];
}
console.log(sum);

// Reduce Function
const total=myNum.reduce(function(acc,currval){
    console.log(`acc is : ${acc} and currval is : ${currval}`);
    return acc+currval
},0)
console.log(total)