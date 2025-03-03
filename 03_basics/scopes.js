// Local and Global [easy]
let a = 10
if(true){
    const a = 5
    // console.log(a);     // 5     Local Scope
}
// console.log(a);     // 10        Global Scope

function one(){
    const username = "faiz"
    function two(){
        const fullname = "faizulhaq"
        console.log(username);
    }
    two()
    // console.log(fullname);   // Out of Scope
}
one()   // faiz is printed when both the functions (one & two) are called, if any one isn't called then it gives error

console.log(addOne(5))      // 6
function addOne(num){
    return num + 1
}

const result = function(num){       // another way of declaring functions
    return num + 2
}
console.log(result(5))      // 7