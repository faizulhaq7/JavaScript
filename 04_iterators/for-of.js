const arr = [1,2,3,4,5]

for (const i of arr) {          // 1 to 5 is printed
    // console.log(i);
}

const greeting = "Hello-world!"

for (const i of greeting){
    // console.log(`Each charcater is ${i}`);
}

const map = new Map()
map.set('IN', 'India')
map.set('PO', 'Poland')
map.set('UAE', 'United Arab Emirates')
map.set('FR', 'France')
map.set('CN', 'China')

// console.log(map);

for (const [key, val] of map) {
    // console.log(key);       // prints an array - [ 'IN', 'India' ], ...
    // console.log(key, "-", val);      // prints as a string - UAE - United Arab Emirates
}

const myObject = {
    game1: "GTA",
    game2: "RDR"
}

for (const [key, val] of myObject) {
    // console.log(key, val);       // myObject is not iterable (will know later, how to iterate over an object)
}