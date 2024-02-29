// const plus5 = (value) => value + 5;
// const plus10 = (value) => value + 10;
// console.log(plus5(9)); //14
// const plus15 = (value) => plus10(plus5(value));
// console.log(plus15(3)); // 18

const plusser = (plusVal) => (value) => value + plusVal;
// same format:
// function plusser(plusVal) {
//   return function (value) {
//     return value + plusVal;
//   };
// }
// what is a closure
// 函数 plusser 返回了一个内部函数，这个内部函数引用了外部函数 plusser 的参数 plusVal。当 plusser 返回的内部函数被调用时，它仍然可以访问外部函数 plusser 中的 plusVal 参数，这就是闭包的概念。(@chatgpt)
const plus5 = plusser(5);
console.log(plus5(20)); // 25

const plus10 = plusser(10);
console.log(plus10(20)); // 30

const plus15 = plusser(15);
console.log(plus15(5)); //20

const plus4 = plusser(4);
console.log(plus4(35)); // 39

// function will be defined when you call them

//EXAMPLE OF FP WITH JS
// pure function
function add(a, b) {
  return a + b;
}

// higher-order fuction
function operateOnArray(array, operator) {
  return array.map(operator);
}
// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const numbers = [1, 2, 3, 4, 5];

// perform addition on array
const result = operateOnArray(numbers, (x) => add(x, 10));

console.log(result);
