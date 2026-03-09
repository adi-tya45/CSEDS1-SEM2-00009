
//         console.log("var variable");
//         var a=10;
//         var b="ABES";
//         console.log(a);
//         console.log(b);
//      let c=20;
//      c=30;
//      let d =30;
     
//         console.log(c); 
//         console.log(d);
//    {
//         let c=70;
//         console.log(c);
//    }
//    c=50;
//    console.log(c);
 
//    DataTypes in JS

//   primitive datatypes

// let name = "alice";
// console.log( typeof name);
// let age ="18";
// console.log(typeof age);
// let isStudent = true;
// console.log(typeof isStudent);
// let score;
// console.log(typeof score);
// let id = null;
// console.log(typeof id);
// let person = {name: "alice", age: 18};
// console.log(typeof person);
// let student = {name:"bob", class:"CS", age:25, isgraduated:true};
// console.log(person.name);
// console.log(student.age);
// console.log(student.isgraduated);
// let numbers = [1, 2, 3, 4, 5];

// operators in js

// arithematic operators
// let x = 10;
// let y = 5;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);

// console.log(x++);
// console.log(x--);   
// console.log(++x);
// console.log(--x);

// assignment operators
// let a = 10;
// let b = 5;
// let c = 20;    
// let d = 15;
// let e = 25;
// a += 5;
// b -= 3;
// c *= 2;
// d /= 3;
// e %= 3;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// comparison operators
// let a=45 ;
// let b= 45;
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);


// logical operators
// let x = 10;
// let y = 5;
// console.log(x > 5 && y < 10);
// console.log(x > 15 || y < 10);
// console.log(!(x > 5));

//string operators
//  let str1 = "Hello";
//  let str2 = "World";
//  console.log(str1 + " " + str2);


//ternary operater
// let a= 10;
// let great = (a>11? "true": "false");
// console.log(great);


// condtional statements
// if else
     // let temp= 25;
     // if (temp<20){
     //    console.log("Temperature is less than 20");
     // }
     // else{
     //    console.log("Temperature is greater than 20");
     // }
// if else if
     // let marks = 85;
     // if (marks >= 90) {
     //     console.log("Grade A");
     // } else if (marks >= 80) {
     //     console.log("Grade B");
     // } else if (marks >= 70) {
     //     console.log("Grade C");
     // } else {
     //     console.log("Grade D");
     // }

// switch case
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

let fruit=["apple", "banana", "orange"];
console.log(fruit);
console.log(fruit.length);
fruit.push("grape");
console.log(fruit);


