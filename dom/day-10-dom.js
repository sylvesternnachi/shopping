// console.log(document.getElementById("main").innerHTML);
// const main = document.getElementById('main');
// main.innerHTML = '<h1>Change from JS<h1>';

// document.querySelector('#main h1').innerText = 'SlyPraise and Worship';

// let title  = document.getElementById('main-title');
// let btn = document.getElementById('btn-change');

// btn.addEventListener('click',(e) => {
//     e.preventDefault;
//     title.innerHTML = '<h1>Welcome to JavaScript<h1>' ;
// }); 

//Get Child element from the parent
let output
const parent = document.querySelector('.parent');
output = parent.children;
output = parent.firstElementChild.innerText = 'First Child';
output = parent.lastElementChild.innerText = 'Last Child';

//Get Parent Element from a child
const child = document.querySelector('.child');

output = child.parentElement.style.border = '1px solid #ccc';
output = child.parentElement.style.padding = '15px';

// Siblings elements
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;

output = secondItem.nextElementSibling.style.color = 'green';
output = secondItem.previousElementSibling.style.color = 'orange';

console.log(output);

let newOuput; 

const parents = document.querySelector('.parent');

newOuput = parent.childNodes;
newOuput = parent.childNodes[0].nextElementSibling.style.color = 'red';
newOuput = parent.lastChild.innerText = 'Hello World';

const newChild = document.querySelector('.child');

newOuput = newChild.parentElement;

console.log(newOuput);


const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My Element');
// div.innerText = 'Hello World';
const text = document.createTextNode('Hello World');

div.appendChild(text);

console.log(div)
