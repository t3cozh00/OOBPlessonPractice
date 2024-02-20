// 4. Exercise
// Use map method and the users array from Exercise 1 to implement feature where you transform the users array into a new array, which contains only the ages of each user. When printed to console the resulting array should be
// [ 33, 24, 12 ]

const users = [
  {
    name: "Jone",
    age: 33,
  },
  {
    name: "Max",
    age: 24,
  },
  {
    name: "Ted",
    age: 12,
  },
];

// task1 is to convert the users array to an array, which has only the ages fo the users
const output = users.map(function (element, index, array) {
  //console.log(element);
  //console.log("index:" + index);
  //console.log(array);
  //console.log(element.age);
  //return element.age;
});
//console.log(output);

// task2 is to add a new property for every element in the users array,
// the new property indicates the user is adult or not
const output2 = users.map(function (element) {
  //console.log(element);
  let isAdult = false;
  if (element.age >= 18) {
    isAdult = true;
  }
  // add a new property of object, and the value of the new property is false or true
  element.isAdult = isAdult;
  return element;
});
console.log(output2);
