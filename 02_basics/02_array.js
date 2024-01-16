const freedom_fighter=["Netaji","Bagahat Singh","LLR"]
const weapons=["Guns","Knives"]
// freedom_fighter.push(weapons)
console.log(freedom_fighter)

const fighter_Weapons=freedom_fighter.concat(weapons)
console.log(fighter_Weapons)

const all_In_One=[...freedom_fighter,...weapons]  //Spread Method
console.log(all_In_One)

const anotherArray=[1,2,3,[4,5,6],7,[8,9,[10,11]]]
const raa=anotherArray.flat(1)
console.log(raa)

console.log(Array.isArray("Supriya"))
console.log(Array.from("Supriya"))  //Makes a string array of every single character 
console.log(Array.from({name:"Supriya"})) //It will return nothing as compiler cant makre up which(key or value) need to be converted


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))  //Use to wrap elements in an array


