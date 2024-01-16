const obj={
    js:'JavaScript',
    cpp:'C++',
    rb:'Ruby',
}

// to iterate object we use for-in loop
var i=1;
for (const key in obj) {
    // console.log(key);
    // console.log(obj[key]);
    // console.log(`${i} key is :- ${key} and value is :- ${obj[key]}`);
    i++;
}

// Can for-in loop be used fo array.....Let's check it
const programming=['js','c','c++','python']
for (const key in programming) {
    console.log(programming[key]);
}