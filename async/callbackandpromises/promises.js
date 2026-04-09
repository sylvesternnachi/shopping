const promise = new Promise((resolve, reject) => {
    //Do some async task
    setTimeout(() => {
        console.log('Async tasks complete');
        resolve();
    },1000)
});
promise.then(() => {
    console.log('Promise consumed...');
});

const getUser = new Promise((resolve, reject) => {
    //Do some async task
    setTimeout(() => {

        let error = false;

        if(!error){
            resolve({name: 'Sylvester', age: 36});
        }else{
            reject('Error: Something went wrong');
        }
        
    },1000)
});

getUser.then((user) => {
     console.log(user);
     return user.name;
     
}).then((name) => {
    console.log(name)
    return name.length;
}).then((nameLength) => {
    console.log(nameLength);
}).catch((error) => {
    console.log(error)
});