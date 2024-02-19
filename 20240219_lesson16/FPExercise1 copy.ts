interface User {
  name: string;
  age: number;
}

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

function checkAge(users: User): boolean {
  return users.age >= 18;
}

checkAge(users[0]);
checkAge(users[1]);
checkAge(users[2]);
