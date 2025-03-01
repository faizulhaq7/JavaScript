const myDate = new Date()
// console.log(typeof myDate);     // Object (FAQ in interviews)

// console.log(myDate)
// console.log(myDate.toDateString())   // THu Feb 27 2025
// console.log(myDate.toLocaleDateString())    // 2/27/2025
// console.log(myDate.toString())
// console.log(myDate.toISOString());   // ISO and JSON give the same output
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date(2004, 2, 27)   // 2=> March (Month starts from 0 in JS)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());      // Sat Mar 27 2004
// console.log(myCreatedDate.getTime());


let myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.toLocaleDateString())
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

// console.log(`Day is ${newDate.getDay()} and month is ${newDate.getMonth()+1}`)

console.log(newDate.toLocaleString('default',{
    // weekday: "short",   // Sat
    weekday: "long"     // Saturday
}));