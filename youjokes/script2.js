const btnJoke = document.querySelector('.generate-btn');
const progressbar = document.querySelector('.progress-bar');
let count = 0;


function generateJoke(endpoint){


    return new Promise ((resolve, reject) => {

    //While fetch the data set the button to this below so it's can be used.
    btnJoke.innerText = 'Loading...';
    btnJoke.style.opacity = '0.5';
    btnJoke.disabled = true;

    document.querySelector('.joke-box').innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;


    const xhr = new XMLHttpRequest();   
    
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function (){

            if(this.readyState === 4){

                if(this.status === 200) {

                 data = JSON.parse(this.responseText);
                 resolve(data)
               
                }  else{

                    reject('Something went wrong ( not funny :( ) )');
                    }
            
       } 

    }

//Set Time`out when to send for the Api

     setTimeout(() => { 
         xhr.send();
     },3000);

    });

}


btnJoke.addEventListener('click', () => { 
    
    generateJoke('https://api.chucknorris.io/jokes/random').then((data) => {

         const jokes = data.value.replace(/Chuck Norris/gi, 'Sylvester');

                //Count updated
                count += 1;

                if(count <= 4 ){ 
                    document.querySelector('.joke-box').innerHTML = `${jokes}`;

                    //Progress bar count updating
                    let percent = count * 25;

                    progressbar.innerText = percent + '%';
                    progressbar.style.width = percent + '%'
                }else{
                    document.querySelector('.joke-box').innerHTML = ` I have already crack 3 jokes for you ... enough for the day. God and rest abeg.`;
                    btnJoke.style.display = 'none';
                
                console.log(data.value);
                console.log(count)

                }

                //Reset the button back to normal after Api data has been fetch
                btnJoke.innerText = `Generate More Jokes`;
                btnJoke.style.opacity = '1';
                btnJoke.disabled = false;

    }).catch((error) => {

          document.querySelector('.joke-box').innerHTML =  error;

          //Reset the button back to normal after Api data has been fetch
           btnJoke.innerText = `Try Again`;
            btnJoke.style.opacity = '1';
            btnJoke.disabled = false;

    });


});
