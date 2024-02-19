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
function checkAge(user) {
  return users.age >= ageLimit;
}

function checkAge(user, ageLimit) {
  return users.age >= ageLimit;
}

checkAge(user[0]);
checkAge(user[1]);
checkAge(user[2]);
