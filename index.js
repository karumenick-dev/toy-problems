// function FizzBuzz(maxNumber){
// for (let i = 1; i <= maxNumber; i ++){
// if (i % 3 === 0 && i % 5 === 0){
//     console.log("FizzBuzz");
// } else if (i % 3 === 0){
//     console.log("Fizz");
// } else if (i % 5 === 0){
//     console.log("Buzz");
// } else {
//     console.log(i);
// }
// }
// }

// FizzBuzz(20);

console.log("Init");
setTimout (() => {
    console.log("Slow task");
}, 800); 

setTimeout (() => {  
    console.log("Fast task");
},  200);
console.log("Ready");