// this keyword

const user = {
    name: "Faiz",
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.name}! Hope you had a nice day!`)
        console.log(this);
        
    }
}

// user.welcomeMessage()       // Faiz
// user.name = "Shivanshu"
// user.welcomeMessage()       // Shivanshu

// console.log(this)       // {}

// function parhayi(){
//     let parhaaku = "Abhigyan"
//     console.log(this.parhaaku)
// }

// parhayi()       // 'this' objects k andr hi kaam kr rha h, function k andr aakr kaam ni kr rha

// const parhayi = function(){
//     let parhaaku = "Abhigyan"
//     console.log(this.parhaaku)
// }

// const parhayi = () => {         // Arrow function
//     let parhaaku = "Abhigyan"
//     console.log(this.parhaaku)
// }
// parhayi()

// Explicit return Arrow Function (return keyword is explicitly run)
// const additionFunction = (num1, num2) => {
//     return num1 + num2
// }
// console.log(additionFunction(4,6));     // 10

// Implicit return Arrow Function (return keyword is implicitly run)
// const additionFunction = (num1, num2) => num1 + num2
// const additionFunction = (num1, num2) => (num1 + num2)
// console.log(additionFunction(4,6));     // 10

// const additionFunction = (num1, num2) => ({name: "faizulhaq7"})      // ???????