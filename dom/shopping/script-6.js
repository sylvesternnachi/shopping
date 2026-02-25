// const button = document.querySelector('form button');
// const div = document.querySelector('form div:nth-child(4)');
// const form = document.querySelector('form');

// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('Button was clicked');
//     e.stopPropagation();
// });

// div.addEventListener('click', (e) => {
//     console.log('div too was clicked automatically')
    
// });

// form.addEventListener('click', (e) => {
//     console.log('form too was clicked automatically')
// });

// // console.log(div)

//-----------------------------------------------------
// const listItem = document.querySelectorAll('li');

// listItem.forEach(item => {
//     item.addEventListener('click', (e) => {
//         e.target.remove();
//     });
// });
//-------------------------------------------------------

const ul = document.querySelector('ul');
// console.log(ul)
ul.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI' ){
        // e.target.remove();
        e.target.style.color = 'orange';
    }
});