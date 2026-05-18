// types of hoisting 
// 1. function hoisting
// 2. variable hoisting


// function hoisting
// greet();
// function add(a,b){
//     return a+b;
// }

// function greet(){
//     console.log("Hello, ma'am")
// }

//promises
const myPromise = new Promise((resolve, reject)=>{
    let age = 19;

    if (age>=18){
        resolve("eligible for vote")
    }else{
        reject("not eligible")
    }
})