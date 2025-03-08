const myNum = [1,2,3]

// const myTotal = myNum.reduce( function(acc, currVal) {
//     console.log(`Accumulator is ${acc} & Current value is ${currVal}`);
//     return acc + currVal;
// }, 0)

// console.log(myTotal);

// Now doing the same thing using arrow function

const myTotal = myNum.reduce( (acc, currVal) => (acc + currVal), 0);
// console.log(myTotal);       // 6 (same answer)

const shoppingCart = [
    {
        itemName: "JS course",
        price: 1000
    },
    {
        itemName: "C++ course",
        price: 5000
    },
    {
        itemName: "App dev course",
        price: 10000
    },
    {
        itemName: "Data Science course",
        price: 100
    }
]

const billAmount = shoppingCart.reduce( (accumulator, itemValue) => (accumulator + itemValue.price), 0)
console.log(`Total amount payable: ${billAmount}`);        // 16100 (total of all the courses)