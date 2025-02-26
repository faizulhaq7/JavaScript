let marks = '90abc'
console.log(typeof marks);  // string
 
let numberMarks = Number(marks)
console.log(numberMarks);   // NaN
console.log(typeof numberMarks);    // number

let underAge = 19
console.log(typeof underAge);   // number

let numberAge = Number(underAge)
console.log(numberAge);     // 19
console.log(typeof numberAge);     // number

let score = null
console.log(score)    // null
console.log(typeof score);    // object
let stringScore = String(score)    
console.log(stringScore);     // null