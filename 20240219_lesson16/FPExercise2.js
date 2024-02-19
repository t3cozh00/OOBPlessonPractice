// 2. Exercise
// Here is a function which finds the minimum value from array values.

const values = [533, 235, 223, 56, 88, 2, 6, 88, 664];

// function minValue() {
//   let min = null;
//   for (let i = 0; i < values.length; i++) {
//     if (min != null || values[i] < min) {
//       min = values[i];
//     }
//   }
//   return min;
// }
// const minimum = minValue();
// console.log(minimum); //
// the function is depending on the values array, so it's not a pure function

//
function minValue(arr) {
  let min = null;

  for (let i = 0; i < arr.length; i++) {
    if (min === null || arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}
const minimum = minValue(values);
console.log(minimum); //
