const arr = [1,2,3,4,5]

for (const i in arr) {
    // console.log(i);         // index (string)
    // console.log(typeof arr[i]);     // value at the index (number)
}

const myObject = {
    js: "JavaCript",
    cpp: "C++",
    py: "Python"
}

for (const i in myObject) {
    // console.log(`Shortcut ${i} is for ${myObject[i]}`);     // Shortcut js is for JavaCript
}

const lang = ["js","cpp","py","java"]
for (const i in lang) {
    // console.log(lang[i]);       // iterating over an array
}

const map = new Map()
map.set("js", "javascript")
map.set("py", "python")

for (const i in map) {
    console.log(i);     // no output?
}