
// function getData(endpoint){

//     return new Promise((resolve, reject) => {

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//         if(this.readyState === 4){
//             if(this.status === 200){
//                 resolve(JSON.parse(this.responseText));
//             }else{
//                 reject('Something went wrong');
//             }
            
//         }
//     }
//     //Set loading time
//     setTimeout(() => {
//         xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000 );

//     });
   
// }



// async function getAllData(){
//     const movies = await getData('./movies.json');
//     const actors = await getData('./actors.json');
//     const directors = await getData('./directors.json');
//     console.log(movies,actors,directors) 

// }

// getAllData();


//Use fetch

async function getAllDataWithFetch(){
    try{

        const moviesRes = await fetch('./movies.json');
          if(!moviesRes.ok) {
            throw new Error ('Unable to check this movie json file')
        } 
        const movies = await moviesRes.json();

        const actorRes = await fetch('./actors.json');
        if(!actorRes.ok){
            throw new Error ('Unable to check this actor json file')
        }
        const actors = await actorRes.json();

        const directorRes = await fetch('./directors.json');
         if(!directorRes.ok){
            throw new Error ('Unable to check this director json file')
        }
        const director = await directorRes.json();

        console.log(movies,actors,director);

    }catch(error){
        console.log(error + ' Something went wrong')
    }
}

getAllDataWithFetch()