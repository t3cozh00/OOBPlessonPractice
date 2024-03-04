let a = {
  foo: 1,
  bar: 2,
};

let b = {
  foo: 5,
  bar: 6,
};

console.log(a.foo + b.bar); // 7

let c = a;
c.foo = 10;

console.log(a.foo + b.bar); // 16
