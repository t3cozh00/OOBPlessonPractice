let somevariable = 5;
const someconstant = 5;
let somestring = "Hello World!";
/*
Falsy values:
undefined
null
0
-0
NaN
"" */

let example = null;
let example2;
// compare with ==
console.log(6 == "6");

let base10number = 12;
let base16number = 0xc;
console.log("0xc: " + base16number);
console.log("0b1011: " + 0b1011);
console.log("0o77: " + 0o77);
console.log("0o63: " + 0o63);
console.log("0x5FA: " + 0x5fa);
console.log("0b100111: " + 0b100111);
console.log(Number.MAX_SAFE_INTEGER);

let x = 0.4 - 0.3;
let y = 0.5 - 0.4;

console.log(x);
console.log(y);
console.log(x === y);

let examplebigint = 100n;
console.log(examplebigint);
console.log(typeof examplebigint);

// Exercise 1
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
let fullName2 = `${firstName} ${lastName}`;

// Exercise 2
let helloWorld = "Hello World";
console.log(helloWorld.length);

// Exercise 3
let name = "Lasse Haverinen";
let exerciseTarget = `Hello, my name is ${name}`;
console.log(exerciseTarget);

// Exercise 4
let js = "JavaScript is fun";
let extractedString = js.substring(11, 13);
console.log(extractedString);

// Exercise 5
let string3 = "MiXeD CaSe";
console.log("5: " + string3.toUpperCase());
console.log("5: " + string3.toLowerCase());
//reading task: 3.1-3.11

// Exercise 6
let string4 = "I love JavaScript";
console.log("6: " + string4.replace("JavaScript", "coding"));
