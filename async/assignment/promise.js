function orderFood(endpoint){
    
    fetch(endpoint).then((res) => res.json()).then(data => {
        data.forEach(user => {
                console.log(user.username)
        });
    });
}

orderFood('https://jsonplaceholder.typicode.com/users');