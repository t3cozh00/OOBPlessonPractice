// the functioon checkAge is used to check the age of user if it passes a limit
const users = [
  {
    name: "Jone",
    age: 33,
  },
  {
    name: "Max",
    age: 23,
  },
  {
    name: "Ted",
    age: 12,
  },
];

// const ageLimit = 18;
// // it's not a pure function (pure function can not affect outside(ageLimit))
// function checkAge(users) {
//   return users.age >= ageLimit;
// }

function checkAge1(users, ageLimit) {
  return users.age >= ageLimit;
}

console.log(checkAge1(users[0], 18));
checkAge1(users[1]);
console.log(checkAge1(users[2], 18));
