console.log("Numbers and Strings")

// const balance = new Number(100)
// console.log(balance);

const newNumber = 425.76
// console.log(newNumber.toPrecision(3));  //426
// console.log(newNumber.toFixed(1));  // 425.8

const salary = 1500000
// console.log(salary.toLocaleString('en-IN'))     // into standard indian format [lakhs, crores]
// console.log(salary.isFinite)     // why undefined?

// -------------------- MATH -------------------------

console.log(Math);      // Object type
// console.log(Math.abs(-5.4))     // from -ve to +ve
// console.log(Math.round(5.7));
// console.log(Math.ceil(5.7));    // ceiling value
// console.log(Math.floor(5.7));   // floor value
// console.log(Math.sqrt(25));     // 5
// console.log(Math.pow(5, 3));    // 125
// console.log(Math.min(5,4,8,66,87,77));      // 4
// console.log(Math.max(5,4,8,66,87,77));      // 87

// DICE THROW CONCEPT
const max = 6
const min = 1
console.log(Math.random() * (max - min + 1) + min)      // numbers b/w 1 and 6 but decimals included
console.log(Math.floor(Math.random() * (max - min + 1) + min))    // numbers b/w 1 and 6 