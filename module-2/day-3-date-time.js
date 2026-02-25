let d;
let x;
d = new Date();


x = d.getTime();
x = d.getFullYear();
x = d.getMonth() + 1;
x = d.getDate();
x = d.getDay();

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = d.toLocaleString('default');
x = d.toLocaleString('default', {
    weekday: 'long',
    year : 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',

});

console.log(x); 


// Assignment

function getTodayInfo(){
 let result = {
    showDate : d.toLocaleString('default', {year: 'numeric', month: 'long', day: 'numeric' }),
    showDay : d.toLocaleString('default', {weekday: 'long' }),
    showTime : d.toLocaleString('default', {hour: 'numeric', minute: 'numeric', second : 'numeric'})
 }

 return result;

}

console.log(getTodayInfo());

// Assignement
// Write a function:
// Rules:
// 	•	5am–11am → "Good morning"
// 	•	12pm–4pm → "Good afternoon"
// 	•	5pm–9pm → "Good evening"
// 	•	10pm–4am → "Good night"

// 💡 This is what apps use for personalized UX.
function getGreetings(){
    let gTime = d.getHours();
    
    if(gTime >= 5 && gTime <= 11 ){
        return 'Good morning';
    } 
     if(gTime >= 12 && gTime <= 16 ){
        return 'Good Afternoon';
    }

    if(gTime >= 17 && gTime <= 21 ){
        return 'Good Evening';
    }

     if(gTime >= 22 && gTime <= 4 ){
        return 'Good Night';
    }
      
    return gTime;
}

console.log(getGreetings());