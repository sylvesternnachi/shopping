const itemForm = document.getElementById('item-form');
const itemInput = document.querySelector('.form-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');
const emptyMessage = document.getElementById('empty-message');




function addItem(e){
    e.preventDefault();


    if(itemInput.value === ' ') {
        alert('Enter Input Field')
    }  else{

    //Create Li and Li Class
    const li = document.createElement('li');
    li.className = 'item';
    //AppendText to Li
    li.appendChild(document.createTextNode(itemInput.value));

    //Create Button and Button Class
    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    //Create Icon & Icon Class
    const i = document.createElement('i');
    i.classList = 'fa-solid fa-xmark';

    //Append Icon to Button
    button.appendChild(i);
    //Append Buttpn to Li
    li.appendChild(button);
    //Append Li to Ul
    itemList.appendChild(li);
    
        //check UI for update
        checkUI();
        
    itemInput.value = ' ';

    };

 };



 function removeItem(e){
   const target = e.target;
   if(target.classList.value === 'fa-solid fa-xmark'){

    if(confirm('Are you sure you want to remoce this item?')){
            //Remove single item
          target.parentElement.parentElement.remove();

     //Check UI
        checkUI();

    };
  
   };

 };



 function clearAll(e){
    if(confirm('Are you sure you want to clear all todo item?')){
        itemList.innerHTML = ``;

         //Check UI
        checkUI();
    };
    
 };



 function checkUI(){
    const item = itemList.querySelectorAll('li');
            console.log(item)
    if(item.length === 0){
        filter.style.display = 'none';
        clearBtn.style.display = 'none';
        emptyMessage.style.display = 'block';
         
    }else{
        filter.style.display = 'block';
        clearBtn.style.display = 'block';
         emptyMessage.style.display = 'none';
    }
 }




//Event Listerners
itemForm.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

clearBtn.addEventListener('click', clearAll);

checkUI()