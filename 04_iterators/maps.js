// Map and filter

const numArr = [1,2,3,4,5,6]

// const mapArr = numArr.map( (num) => num * 10 )      // [ 10, 20, 30, 40, 50, 60 ]

const mapArr = numArr
                .map( (num) => num * 10 )      // [ 10, 20, 30, 40, 50, 60 ]
                .map( (num) => num + 1 )       // [ 11, 21, 31, 41, 51, 61 ]
                .filter( (num) => num >= 40 )  // [ 41, 51, 61 ]

console.log(mapArr);