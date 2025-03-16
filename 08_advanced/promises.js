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