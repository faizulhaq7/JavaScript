// Immediately Invoked Function Expression

const addNum = (num1, num2) => num1 + num2;     // Arrow
// console.log(addNum(5,4));

(function greet(){
    console.log("Hi everyone!");
})();

( (name) => {
    console.log("Hi!", name);
})("Faiz");

// return the function immediately