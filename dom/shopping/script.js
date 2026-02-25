// let output;
// output = document.body.children;
// output = document.forms;
// output = document.forms[0].id = 'new-form-baba';
// output = document.links[0].href 
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList; 

// output = document.images[0].src;
// console.log(output)

// console.log(document.getElementById('item-list').innerHTML);
//Set attributes
document.getElementById('app-title').title = 'Shopping List';

document.getElementById('app-title').setAttribute('class','title');


const title =document.getElementById('app-title');

console.log(title.textContent);
title.textContent = 'Hello World';
title.innerHTML = "<strong>Shopping List </strong>";
title.style.color = 'red';

// use these method on oher elements
// const list = document.querySelector('ul');
// console.log(list);

// const firstItem = list.querySelector('li');
// firstItem.style.color = 'red';

//QuerySelectorAll

// const listItem = document.querySelectorAll('.item');
// console.log(listItem[1].innerText);

// listItem.forEach((item, index) => {
//     item.style.color = 'red';

//     if(index === 1){
//         item.remove();
//     }

//     if(index === 0){
//         item.innerHTML =  `  Orange 
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`;
//     }
// })

const ul = document.querySelector('.items');
const li = document.querySelector('.item');


const addItemList = (text) => {


const li = document.createElement('li');
li.className = 'item';
const itemText = document.createTextNode(text);
li.appendChild(itemText);

//create the buttons 
const liBtn = document.createElement('button');
liBtn.classList = 'remove-item btn-link text-red';

//create i
const liIcon = document.createElement('i');
liIcon.classList = 'fa-solid fa-xmark';
//Append i to button
liBtn.appendChild(liIcon);

//Appending Btn and i to list
li.appendChild(liBtn);

// Adding it to the UL
ul.appendChild(li)


}


addItemList('Banana');
addItemList('Carrot');
addItemList('Cucumber');
addItemList('Mango');




//insertAdjacentElement Example
function insertElement(){
   const filter = document.querySelector('.filter');

const h1 = document.createElement('h1');
h1.textContent = 'InsertAdjacentElement'; 

filter.insertAdjacentElement('beforebegin',h1)

}

//InsertAdjacentText Example
function insertText(){
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('afterend','InsertAdjacentText Example');
}

// insertBefore Example
function insertBeforeItem(){
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3');

    ul.insertBefore(li, thirdItem);
}

insertElement();
insertText();
insertBeforeItem();


function insertAfter(newEl, existingEl){
    existingEl.parentElement.insertAfter(newEl, existingEl.nextSibling);
}

//New element to insert
const lis = document.createElement('li');
lis.textContent = 'Insert Me After';

//Exisiting element to insert after
const firstItem = document.querySelector('li:first-child');

//Our custom function
insertAfter(lis,firstItem);