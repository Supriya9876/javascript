// const coding=["java","js","c","c++"]

// const values=coding.forEach( (item)=>{
    // console.log(item);
    // return item;
// })
// console.log(values)
// Basically for-each doesn't return values,That's whay we use filter


const myNums=[1,2,3,4,5,6,7,8,9,10]

// const value =myNums.filter((num)=> num>4)
// const value=myNums.filter((num)=>{
//     return num>4   //if we open the scope we need to return values otherwise it will return empty array
// })
// console.log(value)

const nNum=[]

myNums.forEach((n)=>{
    if(n>7){
        nNum.push(n)
    }
})
// console.log(nNum);

const books=[
    {title:"Book One", genre:"Friction" , publish:1981,
     edition:2004},
    {title:"Book Two", genre:"Science" , publish:2003,
     edition:2016},
    {title:"Book Three", genre:"History" , publish:1999,
     edition:2007},
    {title:"Book Four", genre:"Non-Friction" , publish:1989,
     edition:2014},
    {title:"Book Five", genre:"History" , publish:1986,
     edition:2010},
     {title:"Book Six", genre:"Fiction" , publish:1987,
     edition:2015},
     {title:"Book Seven", genre:"History" , publish:2011,
     edition:2019}, 
];
// const userBooks=books.filter((bk)=>bk.genre==="History")
// console.log(userBooks);


const uB=books.filter((bk)=>{
   return bk.publish>=2000 && bk.genre==="History"
})
console.log(uB);
