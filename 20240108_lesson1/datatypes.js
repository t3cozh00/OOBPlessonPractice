let somevariable = 5;
//you can't change the variable

//console.log(typeof somevariable);

//console.log(6 == "6");
//console.log(6 === "6");

//bigger inteters will loose precision

//integer numbers- different bases
let base10number = 12;
let base16number = 0xc;
console.log(base16number);
console.log(base10number);
console.log(Number.MAX_SAFE_INTEGER);

const value1 = 9007199254740991 + 1;
const value2 = 9007199254740991 + 2;
console.log(value1 === value2);

let decimal = 12.5;
console.log(typeof decimal);

//floatingingpointnumber
let x = 0.4 - 0.3;
let y = 0.5 - 0.4;

console.log(x);
console.log(y);
// 0.10000000000000003
// 0.09999999999999998
//there are decimal errors, how to fix it
//multiple 10 so that there are no decimal numbers
console.log(x === y);

//BigInt
let examplebigint = 100n;
console.log(typeof examplebigint);

let hello1 = "Hello";
console.log("hello1: " + hello1.length);
// length of a string
// string: standard built-in objects
let hello2 = "Hello World";
console.log("hello2: " + hello2.includes("World"));

//
let thisYear = 2024;
let thisDay = 8;
let thisMonth = "January";
let hello3 = `Hello world, today is ${thisDay} ${thisMonth} ${thisYear}`;
console.log("hello3: " + hello3);

//string exercises
//1
let firstName = "Zoey";
let lastName = "Zhao";
let fullName = `Fullname is ${firstName} ${lastName}`;
console.log("1: " + fullName);

//2
let string1 = "Hello World";
console.log("2: " + string1.length);

//3
let name = "Zoey";
let variable1 = `Hello, My name is ${name}`;
console.log("3: " + variable1);

//4
let string2 = "JavaScript is fun";
console.log("4: " + string2.substring(11, 13));

//5
let string3 = "MiXeD CaSe";
console.log("5: " + string3.toUpperCase());
console.log("5: " + string3.toLowerCase());
//reading task: 3.1-3.11

//6
let string4 = "I love JavaScript";
console.log("6: " + string4.replace("JavaScript", "coding"));
