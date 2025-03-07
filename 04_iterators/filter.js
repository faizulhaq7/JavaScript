const Nums = [1,2,3,4,5,6,7,8,9,10]

const myNums = Nums.filter( (i) => i > 4)
// console.log(myNums)     // prints Nums > 4 - [ 5, 6, 7, 8, 9, 10 ]

// same task can be performed by the for each loop as shown below

const newNum = []
Nums.forEach(i => {
    if(i > 6){
        newNum.push(i);
    }
});
// console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// let userBook = books.filter( (bk) => bk.publish > 2005 )     prints books published after 2005
// let userBook = books.filter( (i) => i )      prints everything
let userBook = books.filter( (bk) => bk.genre == 'Science' && bk.edition > 2015 )

console.log(userBook);