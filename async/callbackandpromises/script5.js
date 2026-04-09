const xhr = new XMLHttpRequest();

// xhr.open('GET', './movies.json');
xhr.open('GET', 'https://dummyjson.com/products');

//readyState has 5 possible values
// - 0: request not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange =  function (){
    if(this.readyState === 4 && this.status === 200){
            // console.log(JSON.parse(this.responseText))
           
            const data = JSON.parse(this.responseText);

            console.log(data.products)

            data.products.forEach(product => {
                const li = document.createElement('li');
                li.innerHTML = `<strong>${product.title} - $${product.price}</strong> <br />  ${product.description} <br /> <img src"${product.images} " />`;

                document.querySelector('#results').appendChild(li)
            });
    }
    
}


xhr.send();