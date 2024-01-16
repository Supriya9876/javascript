let a=300  //Global variable
if(true){
    let a=10  //Scope Variable
    const b=20
    var c=30
}

// All will return false except c,as c is declared as a var That's why declaring variable will var is less used
// console.log(a)
// console.log(b)
// console.log(c)


function one(){
    const userName="Supriya"

    function two(){
        const website="google.com"
        // console.log(userName)
    }
    // console.log(website)  //will not execute because of scope variable
    two()
}

// console.log(one())



// ++++++++++++++++++++++++++++++++++++++++++++++++++++Interesting+++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addOne(6))  //Will execute even call it before create it

function addOne(num){
    return num+1;
}


console.log(addTwo(7))  //This will not execute,this is called expression sometimes
const addTwo=function(num){
    return num+2
}
