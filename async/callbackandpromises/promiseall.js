


function getData(endpoint){

    return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function () {
        if(this.readyState === 4){
            if(this.status === 200){
                resolve(JSON.parse(this.responseText));
            }else{
                reject('Something went wrong');
            }
            
        }
    }
    //Set loading time
    setTimeout(() => {
        xhr.send();
    }, Math.floor(Math.random() * 3000) + 1000 );



    });
   
}

const moviesPromise = getData('./movies.json');
const actorsPromises = getData('./actors.json');
const directorsPromises = getData('./directors.json');
const newPromise = getData('https://jsonplaceholder.typicode.com/posts')

Promise.all([moviesPromise,actorsPromises,directorsPromises,newPromise]).then((data) => {
    data.forEach(item => {
        console.log(item[0].title)
    })
}).catch((error) => {
    console.log(error)
})

// moviesPromise.then((data) => { console.log(data)});