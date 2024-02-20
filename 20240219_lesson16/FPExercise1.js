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

const ageLimit = 18;
// it's not a pure function (pure function can not affect outside(ageLimit))
function checkAge(users) {
  return users.age >= ageLimit;
}

function checkAge(users, ageLimit) {
  return users.age >= ageLimit;
}

checkAge(users[0]);
checkAge(users[1]);
checkAge(users[2]);
