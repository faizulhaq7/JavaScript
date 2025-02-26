const name = 'Faiz'
const countRepo = 50
// console. log("My name is " + name +" and my repo count is "+countRepo);    // Old Way (bad readability)
// console.log(`My name is ${name} and my repo count is ${countRepo}`);    // Standard Way (better readability)

// console.log(name.bold());    // bold() is Deprecated

const adminName = new String("faiz ul haq");    // Here, adminName is an object

// console.log(adminName.toUpperCase());   // FAIZ UL HAQ
// console.log(adminName.indexOf('q'));    // 10
// console.log(typeof adminName);      // object
console.log(adminName.length)   // returns length of the String object
console.log(adminName.substring(0, 4))     // returns a part of the String within the mentioned index
// Prints from 0th [f] to 3rd [z] index, 4th is excluded
// console.log(adminName.charAt(0));   // f - returns char at the specifies index
let cuteName = "    A s i m   ";
console.log(cuteName.trim());   // removes the extra spaces/indent from start and end


let value = "Gian"
// console.log(typeof value);  // string
// console.log(value.toUpperCase());   // GIAN