const dateDisplay = document.querySelector('h3');
const dateHour = document.querySelector('h1');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');



console.log(typeof oneSec);

let intervalId;

function displayFullTime(){
    
const currentTime = new Date;

//Extract Components

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const seconds = currentTime.getSeconds();

let Timer =  ` ${hours} hh:  ${minutes} mm: ${seconds} ss`;

// dateDisplay.innerText = currentTime;
dateHour.innerText = Timer;

 console.log(Timer)
   
}

 startBtn.addEventListener('click', () => {
    if(!intervalId) {
          intervalId = setInterval(displayFullTime, 1000);
    }
  
     dateDisplay.innerText = ' Timer has started';
     startBtn.disabled = true;
     stopBtn.disabled = false;
});


stopBtn.addEventListener('click', () => {
     clearInterval(intervalId);
     intervalId = null;
     dateDisplay.innerText = ' Timer has been stopped';
     stopBtn.disabled = true;
     startBtn.disabled = false;

});


