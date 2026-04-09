const h1 = document.querySelector('h1');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');

const quote = [
    "Stay hungry, stay foolish.",
    "Design is intelligence made visible.",
    "Consistency beats motivation."
]

let intervalId;

function displayQuote(){ 

     randomQuote = Math.floor(Math.random() * quote.length);
     h1.innerText = quote[`${randomQuote}`];
}


startBtn.addEventListener('click', () => {
    if(!intervalId){
        intervalId = setInterval(displayQuote, 2000);
    }

    startBtn.disabled = true;
    stopBtn.disabled = false;

});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;

    startBtn.disabled = false;
    stopBtn.disabled = true;
})