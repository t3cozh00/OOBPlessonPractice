let a = { 
  foo:1, 
  bar:2 
} 
  
let b = { 
  foo:5, 
  bar:6 
} 
  
// console.log(a.foo + b.bar); // 7 

// let c = a; 
// c.foo = 10; 
  
// console.log(a.foo + b.bar); // is the output 7 or something else? 

function selfSum(p){
    p.foo = p.foo + p.bar; //3 
    return p;
}

let result = selfSum(a); // the modify done in the function

//pass by referrence,  pass by value

console.log(a.foo + b.bar); // 9
console.log(result); // 
console.log(a); // a
console.log(result == a); //a

a = {
    foo : 6
};
return a;

console.log(result == a);