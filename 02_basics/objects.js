// Singleton
// Object.create => way of creating a singleton object

// Obejct Literals

const mySymbol = Symbol("keySymbol")

const JsUser = {
    name: "Faiz",
    age: 19,
    email: "faiz@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Thursday"],
    "full name": "Faiz",
    [mySymbol]: "this is keySymbol"
}

// console.log(JsUser);
// console.log(JsUser.name);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);       // cannot be accessed by Dot Notation
// console.log(typeof JsUser[mySymbol]);

JsUser.email = "faiz@amazon.com"
// Object.freeze(JsUser)       // Cannot be manipulated after freezing
JsUser.email = "faiz@nvidia.com"
// console.log(JsUser.email)

JsUser.greeting = function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(JsUser.greeting);   // Function (anonymous)
console.log(JsUser.greeting());   // Hello Js user, Faiz
