// const twitterUser = new Object()     // singleton way of making an object
const twitterUser = {}
twitterUser.id = "123abc"
twitterUser.name = "Faiz"
twitterUser.isLoggedIn = false

// console.log(twitterUser.name);

const regularUser = {
    email: "naveen@hotmail.com",        // Declaring nested objects
    name: {
        username: "naveenk026",
        fullname: "Naveen Kumar"
    }
}

// console.log(regularUser.name.fullname);     // Printing nested objects
// console.log(regularUser.name.username);

const obj1 = {1:"Faiz", 2:"Tauheed"}
const obj2 = {3:"Naveen", 4:"Shivanshu"}

// const obj3 = Object.assign(obj1, obj2)      // Merge 2 objects using .assign()
const obj3 = {...obj1, ...obj2}     // Merging using the spread operator (...)
// console.log(obj3);

const users = [
    {
        id: 1,
        name: "Shakuntala"
    },
    {
        id: 2,
        name: "Prem"
    },
    {
        id: 3,
        name: "Prakhar"
    },
    {
        id: 4,
        name: "Raza"
    }
]

// console.log(users[3].name);     // Raza

// console.log(twitterUser)
// console.log(Object.keys(twitterUser));      // Important: is used specially when working with databases
// console.log(Object.values(twitterUser));
// console.log(Object.entries(twitterUser));

// console.log(twitterUser.hasOwnProperty('isLoggedIn'))       // has that property or not (boolean)