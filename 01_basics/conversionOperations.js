let marks = '90abc'
// console.log(typeof marks);  // string
 
let numberMarks = Number(marks)
// console.log(numberMarks);   // NaN
// console.log(typeof numberMarks);    // number

let underAge = 19
// console.log(typeof underAge);   // number

let numberAge = Number(underAge)
// console.log(numberAge);     // 19
// console.log(typeof numberAge);     // number

let score = null
// console.log(score)    // null
// console.log(typeof score);    // object
let stringScore = String(score)    
// console.log(stringScore);     // null

// ---------------------- Operations --------------------------

let text = "1"
let numberText = 1
// console.log(1 + text + numberText + 1);    // 1111
// console.log(1 + 1 + text + numberText + 1);    // 2111

// The datatype that is written first is given the preference 
// [if 1+1 is first, then 2 is printed and the rest follows]

// console.log(1 + 2);     // 3
// console.log("1" + 2);   // 12
// console.log(1 + "2");   // 12
// console.log(1 + 2 + "3");   // 33
// console.log("1" + 2 + 3);   // 123

console.log((3+3)*2-2)  // 10   // correct use of paranthesis is essential

let value = 3
let negValue = -value
// console.log(negValue);