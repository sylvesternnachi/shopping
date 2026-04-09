const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve({name: 'John', age: 30})
    },1000)

});

async function getPromise() {
    const response = await promise;
    console.log(response)
}

// getPromise();

//using it on life APi

async function getUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data)
}


const getPosts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data)
}

getUsers();
getPosts();


// Try.. Catch Statement

// try{
//     console.log(x);
// }catch(error){
//     console.log('Error' + error);
// }

// function double(number){
//     if(isNaN(number)){
//         throw new Error(number + ' is not a number');
//     }

//     return number * 2;
// }

// try{
//     const y = double('Hello');
//     console.log(y);
// }catch(error){
//     console.log(error)
// }

const getComments = async() => {

    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();

        if(!response.ok){
            throw new Error('Fetch Request Failed');
        }

        data.forEach(comment => {
                console.log(comment)
        });
    }catch(error) {
        console.log(error);
    }

};

getComments()