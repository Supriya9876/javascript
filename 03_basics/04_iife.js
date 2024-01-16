// Immediately Invoked Function Expressions
// To eleminate the pollutions of the global scope iife is used means it will execte immediately

(function chai(){
    console.log(`DB Connected`);
})();   //If we not give semicolone it will throw error because it doesn't know where to stop execution

((name)=>{
    console.log(`DB Conneted Two ${name}`)
})("Supriya")


