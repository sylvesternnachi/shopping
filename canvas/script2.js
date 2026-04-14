const image = document.querySelector('img')

let start;
let done = false;

function step(timestamp) {
  
   if(start === undefined){
      start = timestamp;
   }

   const elapsed = timestamp - start;

   if(elapsed > 3000) {
      done = true;
   }

   if(done === true){
      return;
   }

   image.style.transform = `translateX(${elapsed / 4}px ) translateY(${elapsed / 4}px ) rotate(${elapsed / 4}deg)`

   // console.log(elapsed)
      requestAnimationFrame(step);
}

requestAnimationFrame(step);
