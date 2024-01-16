// Objects in array
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings="Hello World";
for (const iterator of greetings) {
    // console.log(`Current char is ${iterator}`);
    
}

// Map
const map=new Map()
map.set(1,"India")
map.set(2,"Australia")
map.set(3,"England")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key +" :-" + value);
}

const object={
    'game1': 'NFS',
    'game2': 'Spiderman'
}
  
for (const [key,value] of object) {
    console.log(key +" :-" + value);
    // It will give object is not itarable as error
}




