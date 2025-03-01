// ARRAYS
const myArr = [1,2,4,9,7]
// console.log(typeof myArr)
// console.log(myArr);

myArr.push(48, 70)      // adds elements to the back of the array
// console.log(myArr);

myArr.pop()     // deletes the last element from the array
// console.log(myArr);

const myHeroes = ["Papa", "Mummy", "Appi"]
// console.log(myHeroes.toString());       // changes into String datatype

// Shift and Unshift
let Arr1 = [1,2,3,4,5]
// console.log(Arr1.shift());    //Removes the first element from an array and returns it.
//  If the array is empty, undefined is returned and the array is not modified.
// console.log(Arr1)   // [2,3,4,5] => Modfied array

// console.log(Arr1.unshift(48))   // Inserts new elements at the start of an array, and returns the new length of the array.
// console.log(Arr1);  // [48,2,3,4,5] => Modified Array

// console.log(Arr1.includes(48));     // true (after commenting the above code, it's false)
// console.log(Arr1.indexOf(2));       // 1

// console.log(Arr1.join("-"))   // Adds all the elements of an array into a string, 
// separated by the specified separator string.

// Slice & Splice   [FAQ for Interviews]

const Array1 = [0,1,2,3,4,5]

// console.log(Array1.slice(0,2));     // [0,1]
// console.log(Array1.slice(0,-2));       // Last 2 elements of the array are not included
// console.log(Array1)     // Original array is not affected (modified) since slice() returns a copy

const Array2 = [6,7,8,9,10]
console.log(Array2.splice(1, 3));       // elements from index 1 to 3 are deleted from the array
console.log(Array2);      // [6,10] original array is manipulated
