function selfSum(p: number): number {
  p = p + p;
  return p;
}

let c = 2;

console.log(selfSum(c)); // 4
console.log(c); // 2

let x = 1;
let y = 2;
let z = x + y;

console.log(z); // 3

let a = x;
a = 5;
let b = a + x; // 6
console.log(b);
