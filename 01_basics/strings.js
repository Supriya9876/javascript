const name='Supriya'
// Another way to declare a string is by creating object
const myName=new String("Supriya")
const repoCount=50

// Now a days to concate a string we use backticks
console.log(`My Name is ${myName.toUpperCase()} and my repocount is ${repoCount}`);

// Some string functions
console.log(myName[0]) //print the character at the 0th index
console.log(myName.__proto__)
console.log(myName.length);
console.log(myName.charAt(4));
console.log(myName.indexOf('S'));
console.log(myName.substring(0,3));
console.log(myName.slice(-7,4))

const mnn=new String("   Supriya Batabyal   ")
console.log(mnn.trim());
console.log(mnn.trim().replace('a','o'))
console.log(mnn.split(" "))