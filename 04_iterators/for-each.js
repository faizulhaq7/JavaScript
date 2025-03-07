const coding = ['cpp','c#','java','python']

coding.forEach(i => {
    // console.log(i);     // prints the array
});

// either define the function within the same block or define it seperately

function printMe(message){
    console.log(message);
}

// coding.forEach(printMe)     // also prints the array

const codingLang = [
    {
        languageName: "C++",
        langFileName: "cpp"
    },
    {
        languageName: "Java",
        langFileName: "java"
    },
    {
        languageName: "Pyhton",
        langFileName: "py"
    }
]

codingLang.forEach(i => {
    console.log(i);         // prints the object - { languageName: 'C++', langFileName: 'cpp' }
})