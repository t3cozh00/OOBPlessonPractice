// 6. Exercise
// Convert users array from Exercise 1 to a new array, which has id property for each element in the array. The value of the id property should be the index number of the element in the array. Use map method
// The output should be the following:
// [
// { name: 'John', age: 33, id: 0 },
// { name: 'Maxine', age: 24, id: 1 },
// { name: 'Ted', age: 12, id: 2 }
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

const output6 = users.map(function (element, index) {
  let id = index;
  element.id = id;
  return element;
});
console.log(output6);
