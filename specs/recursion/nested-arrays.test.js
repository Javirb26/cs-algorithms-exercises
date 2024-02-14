/* 

  write a function that accepts an array that only contains
  two types of things: numbers and arrays. those nested arrays
  also only contain numbers and other, nested arrays.

  example: nestedAdd([1, 2, [3]]) = 6
           nestedAdd([[[2]], 1, [1, 3]]) = 7


 
 */
// Iterative Approach
// function nestedAdd(array) {
//   // write code here
//   let flattened = array.flat(Infinity);
//   let sum = 0;
//   flattened.forEach(element => {
//     if (typeof element == 'number'){
//       sum += element
//     }
//   })
//   console.log(sum)
// }
// nestedAdd([1, 2, 3])

function nestedAdd(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    const current = array[i];
    if (Array.isArray(current)){
      sum += nestedAdd(current);
    } else {
      sum += current;
    }
  }
  return sum;
}

if (nestedAdd([1, [2], 3]) &&
    nestedAdd([1, 2, 3]) == 6 &&
    nestedAdd([[[[[[[[[5]]]]]]]]]) &&
    nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11]) == 94)
{
  console.log("All tests passed!");
} else {
  console.log("Did not Pass.");
}

console.log(nestedAdd([1, [2], 3]))
console.log(nestedAdd([1, 2, 3]) == 6)
console.log(nestedAdd([1, [2], 3]) == 6)
console.log(nestedAdd([[[[[[[[[5]]]]]]]]]) == 5)
console.log(nestedAdd([10, [12, 14, [1], [16, [20]]], 10, 11]) == 94)

