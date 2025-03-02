// Functions
// function addTwoNumbers(number1, number2){       // Parameters
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){       // Parameters
    let result = number1 + number2        // return
    return result;
    // return number1 + number2     // directly return
    console.log("This will never be printed because it comes after the return statement");
    
}

// addTwoNumbers(5,9)       // Arguments

function sayMyName(name){
    console.log(`Hi ${name}, how is your day?`)
}

// sayMyName("Faiz")

const result = addTwoNumbers(5,11)      // using return to return the ans instead of just printing on console
// console.log("Result:",result);        // 16

function logInUser(username = "naveen026k"){        // default parameter is this, it will be overwritten if a argument is given
    // if(username === undefined){          // this line is same as !username
    if(!username){
        return `Please enter a username!`
    }
    // console.log(`@${username} just logged in!`);
    return `@${username} just logged in!`;   
}

logInUser("faizulhaq7") // this doesn't print (it just gives the reference)
// console.log(logInUser("faizulhaq7"));       // to print we will use console.log()
console.log(logInUser());       // undefined