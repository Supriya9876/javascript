const coding=["java","js","c","c++"]
coding.forEach(  function (item) {
    // console.log(item);
})

coding.forEach((val)=>{
    // console.log(val);
})

coding.forEach( (item,index,arr) => {
    // console.log("item is :-"+item+" index is :-"+index+ " The whole array is:-"+arr);
})

const myCoding=[
    {
        'language1':"java",
        'language2':"c++"
    },
    {
        'language1':"python",
        'language2':"c"
    },
    {
        'language1':"js",
        'language2':"ruby"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.language1);
    console.log(item.language2);
})