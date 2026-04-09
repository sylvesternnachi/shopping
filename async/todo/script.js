const loadmore = document.querySelector('.loadmore');
const todoul = document.querySelector('.todos');
const todoInput = document.querySelector('.inputval');
const btnSumit = document.querySelector('.submititem');
const btnUpdate = document.querySelector('.updateitem');

let currentId = null;

// let limitNumber = 2;

   const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';



// function loadMore(){
//     limitNumber += 2;
//     getItem();

// }


function getItem(){

    fetch(url)
    .then(res => res.json())
    .then(data => displayTodo(data))
    .catch(error => console.log(error + ' something went wrong'));
    
}




function postItem(e){

    e.preventDefault();

    const post = {
        userId: 1, 
        title: todoInput.value, 
        completed: false
    }
    
     fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify({
            userId: post.userId,
            title: post.title,
            completed: post.completed
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
     })
    .then(res => res.json())
    .then(data => displayTodo([data]))
    .catch(error => console.log(error + ' something went wrong'))
}




function displayTodo(todo){
    todo.forEach(item => {
       
        const li = document.createElement('li');
        li.setAttribute('data-id', item.id)
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        const span = document.createElement('span');
    
        li.appendChild(span.appendChild(document.createTextNode(item.title)));

        const i = document.createElement('i');
        i.className = 'far fa-trash-alt delete';

        li.appendChild(i);
        todoul.appendChild(li)

    });
    btnUpdate.style.display = 'none';

}


function getEditItem(e){
    if(e.target.classList.contains('list-group-item')){
        const inputVal = e.target.innerText;
        const inputId = e.target.getAttribute('data-id');

        todoInput.value = inputVal;
        currentId = inputId;

        btnSumit.style.display = 'none'
        btnUpdate.style.display = 'block';
        btnUpdate.innerText = 'Update Todo';


    };
};

function updateEditItem(e){
    e.preventDefault();

   

 fetch('https://jsonplaceholder.typicode.com/todos/'+currentId, {
    method: 'PUT',
    body: JSON.stringify({
        title: todoInput.value,
        id:currentId
    }),
    headers: {
        'Content-type' : 'application/json'
    }
 })
        .then(res => res.json())
        .then(data =>  { 
            console.log(data, data.id) 
            // Update UI
            const li = document.querySelector(`[data-id="${data.id}"]`);
            li.textContent = data.title;

             const i = document.createElement('i');
             i.className = 'far fa-trash-alt delete';

            li.appendChild(i);
        

        })
        .catch(' Someting went wrong when updating');

         btnSumit.style.display = 'block';
          btnUpdate.style.display = 'none';

          todoInput.value = ''
          currentId = null;
}

function deleteItem(e){
    if(e.target.classList.contains('delete')){
       e.target.parentElement.remove()
    };
}

document.addEventListener('DOMContentLoaded', getItem)
btnSumit.addEventListener('click', postItem)
todoul.addEventListener('click', getEditItem);
todoul.addEventListener('click', deleteItem);

btnUpdate.addEventListener('click', updateEditItem)

