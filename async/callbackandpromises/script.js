// setTimeout( () => {
//     console.log('Hello from call back');
// }, 12000);

// setTimeout(changeText, 2000);

// console.log('Hello from global scope');

// function changeText(){
//     document.querySelector('h1').textContent = 'Hello from callback';
// }

// const timerId = setTimeout(changeText, 3000);

// const cancelBtn = document.getElementById('cancelBtn');

// cancelBtn.addEventListener('click', () => {
//     console.log(timerId);
//     clearTimeout(timerId);
//     console.log('Timer cancelled');
// });


//setInterval & ClearIntervals

//Timerselected

const oneSec = document.getElementById('1sec');
const twoSec = document.getElementById('2sec');
const threeSec = document.getElementById('3sec');

let changeTime = 1000;



let intervalID;
let count = 1;

console.log(intervalID)




// function changeColor(){
//     if(document.body.style.backgroundColor !== 'black'){
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     }else{
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//     }
// }

function changeRandomColor(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;

    document.querySelector('h1').innerText = `#${randomColor}`;
    document.querySelector('#counter').innerText = count++;


    // if(count === 20){
    //     stopChange();
    //      document.querySelector('h1').innerText = `That's enough change for today`;
    // }
     
    // console.log(count);

}

function startChange(time = changeTime){
    if(!intervalID){
        intervalID = setInterval(changeRandomColor, time);
    }
}

function stopChange(){
    clearInterval(intervalID);
    intervalID = null;
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);

oneSec.addEventListener('click', () => {

    stopChange();
    startChange(1000)
    
});

twoSec.addEventListener('click', () => {
    stopChange();
    startChange(2000)
});

threeSec.addEventListener('click', () => {
   stopChange();
    startChange(3000)
});

