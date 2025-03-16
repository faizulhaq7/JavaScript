const promiseOne = new Promise(function(resolve, reject){
    // Do any async task such as DB calls, crptography, network calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise complete')
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve();
    }, 1000)
}).then(function(){
    console.log('Asyn task 2 resolved! Promise complete.');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: 'Faiz', email: 'faiz@hotmail.com'});
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
    console.log(user.email);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if (!error) {
            resolve({username: 'Naveen', email: 'naveen@gmail.com'})
        } else {
            reject('Error: Something went wrong')
        }
    }, 1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('The promise is either resolved or rejected.');
})


// To increase readability, we can write it like this:

// promiseFour
// .then(function(user){
//     console.log(user);
//     return user.username;
// })
// .then(function(username){
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(function(){
//     console.log('The promise is either resolved or rejected.');
// })

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        // let error = true;       // The promise is either resolved or rejected.
        if (!error) {
            resolve({username: "Tauheed", email: "tauheed@gmail.com"});
        } else {
            reject("Error: Something went wrong");
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// };

// getAllUsers();


fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(response){
    return response.json;
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
});


// promise.all

const firstPromise = Promise.resolve(77);
const secondPromise = 18;
const thirdPromise = new Promise(function(resolve, reject){
    setTimeout(resolve, 100, "Faiz")
});

Promise.all([firstPromise, secondPromise, thirdPromise]).then((values) => {
    console.log(values);
})