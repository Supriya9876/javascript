// Creating objects using constructor
const tinderUser=new Object()  
// const tinderUser={}   //Same as the previous one

tinderUser.id=123
tinderUser.name="Supriya"
tinderUser.isLoggerIn=false
// console.log(tinderUser)

// Nested Function
const regularInfo={
    fullName:{
        UserName:{
            FirstNme:"Supriya",
            LastNme:"Batabyal"
        }
    },
    age:22
}
// console.log(regularInfo.fullName.UserName.FirstNme)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// Concat two Objects
// const returnedTarget=Object.assign(obj1,obj2)  //It will add the values of the object2 in the object1 as well as returnedObject
// Object.assign(obj1,obj2);
// console.log(obj1)
// console.log(returnedTarget==obj1)
// const returnedTarget=Object.assign({},obj1,obj2)  //It will add both the object values in the returnedTarget object
// console.log(returnedTarget==obj1)
// console.log(returnedTarget)

// Using Spread operator
// const obj3={...obj1,...obj2}
// console.log(obj3)

// From database objects are coming in the form of array
const users=[
    {
        id:1,
        email: "supriya@gmail.com"
    },
    {
        FirstName:"Supriya ",
        LastName:"Batabyal "
    },
    {
        dob:"22/04/2001"
    }
]
// console.log(users[0].email)
// console.log(Object.keys(users))  //This is return in the form of array
// console.log(Object.values(users))  //This is return in the form of array
// console.log(Object.entries(users))  //This is return in the form of array

// Check wheather a value is present or not
// console.log(users.hasOwnProperty('0'))

// Destructuring Object
const course={
    courseName:"Java",
    price:"999",
    courseInstructure:"Harry"
}

// Extarcting Values from course
const{courseInstructure:instructor}=course
console.log(instructor)
