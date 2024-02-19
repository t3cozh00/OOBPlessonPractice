// 3. Exercise
// The splice method of an array modifies the array in-place, which means that it is not an pure function.
// Create function called pureSplice which accepts an array (all elements are numbers) an returns a new array with elements removed in similar fashion as regular splice(startingIndex, deleteCount).

const values = [5, 11, 394, 2, 576];

function pureSplice2(inputArr, startingIndex, deleteCount) {
  // copy the inputArray（创建 inputArr 的一个副本 outputArr）
  let outputArr = [...inputArr];
  // return the original splice on the copied array
  outputArr.splice(startingIndex, deleteCount);
  return outputArr;
}
// startingIndex 2
// deleteCount 2
// [5, 78, 23, 89, 9, 6, 46, 3]
// output [5, 78, 9, 6, 46, 3]

function pureSplice(inputArr, startingIndex, deleteCount) {
  let outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    // check if this element should be included in the output array
    if (i < startingIndex || i >= startingIndex + deleteCount) {
      // add the element to output array
      outputArr.push(inputArr[i]);
    } else {
      // skip the elements
    }
  }
  return outputArr;
}

//console.log(testArr);
const testArr = [5, 78, 23, 89, 9, 6, 46, 3];
const result = pureSplice2(testArr, 2, 3);
console.log(`Starting situation: ` + testArr);
console.log(`Ending situation: ` + result);
