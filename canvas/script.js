const canvas = document.getElementById('my-canvas');

const ctx = canvas.getContext('2d');
//Draw Reactangle
ctx.fillStyle = 'red';
ctx.fillRect(10,10, 150, 100);

//Draw Crile

ctx.arc(300,300, 100, 0, Math.PI * 2);
ctx.fillStyle = 'gold';
ctx.fill();

// Drawing Line

ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(300,300);
ctx.lineWidth = 2;
ctx.strokeStyle = 'orange';
ctx.stroke();

//Draw Text

ctx.font = '30px Arial';
ctx.fillStyle = 'Blue';
ctx.strokeStyle = 'orange';
ctx.lineWidth = 2;
ctx.fillText('Hello World', 300,100,300);
ctx.strokeText('Hello World', 300,500,300);


// Draw Image

const image = document.querySelector('.football');
image.style.display = 'none';

image.addEventListener('load', () => {
   ctx.drawImage(image, 250, 250, 100, 100)
})