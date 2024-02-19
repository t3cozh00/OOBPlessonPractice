// 5. Exercise
// Convert users array from Exercise 1 to a new array, where the name properties contain the original names (first names) and “Bundy” as last name. Use map method.
// The result should be the following:
// [
// { name: 'John Bundy', age: 33 },
// { name: 'Maxine Bundy', age: 24 },
// { name: 'Ted Bundy', age: 12 }
// ]

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

const output5 = users.map(function (element) {
  element.name = element.name + " Bundy";
  return element;
});
console.log(output5);
