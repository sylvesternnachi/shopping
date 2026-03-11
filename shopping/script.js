const itemForm = document.getElementById('item-form');
const itemInput = document.querySelector('.form-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const filter = document.getElementById('filter');
const emptyMessage = document.getElementById('empty-message');
const emptyFilterMessage = document.getElementById('empty-filter');




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

    //Add to LocalStorage Function
     addToLocalStorage(itemInput.value);
        
     itemInput.value = '';

    };

 };

//------------------------------------------------------------------------
 //Add to localStorage

 function addToLocalStorage(item){
    let itemFromStorage;

    if(localStorage.getItem('items') === null){
        itemFromStorage = [];
    }else{
        //convert to string to Array for the enablement to push other array set
        itemFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    itemFromStorage.push(item);

    //Convert to JSON String and set to local Storage
    localStorage.setItem('items', JSON.stringify(itemFromStorage));

 }

//------------------------------------------------------------------


//-----------------------------------------------------------------

// GET ITEMS FROM STORAGE

function getItemFromStorage(){
    let getItemsFromStorage
    if(localStorage.getItem('items') === null){
         getItemsFromStorage = [];
    }else{
       getItemsFromStorage = JSON.parse(localStorage.getItem('items'));
    };

    return getItemsFromStorage;
}
//----------------------------------------------------------------

//DISPLAY ITEMS FROM STORAGE

function dislayItem(){
    const itemFromStorage = getItemFromStorage();

    itemFromStorage.forEach(item => { 

         //Create Li and Li Class
    const li = document.createElement('li');
    li.className = 'item';
    //AppendText to Li
    li.appendChild(document.createTextNode(item));

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

    });

    checkUI();
};


///---------------------------------------------------------------


// Remove Item from DOM
 function removeItem(e){
   const target = e.target;
   if(target.classList.value === 'fa-solid fa-xmark'){

    if(confirm('Are you sure you want to remoce this item?')){
            //Remove single item
          target.parentElement.parentElement.remove();


          //Remove from localStorage
          removeItemFromStorage(target.parentElement.parentElement.textContent)

     //Check UI
        checkUI();

    };
  
   };

 };

 //--------------------------------------------------------

 // REMOVE INDIVIDUAL ITEM FROM LOCALSTORAGE
 function removeItemFromStorage(item){
    let checkStorage = getItemFromStorage();

    //filter storeItem that is not equal to the item you want to remove and set it back to variable CheckStorage
    checkStorage = checkStorage.filter(storeItem => storeItem !== item);
    localStorage.setItem('items', JSON.stringify(checkStorage));


 }


 //---------------------------------------------------------



 //----- CLEAR ITEM FROM DOM ------------------------------

 function clearAll(e){
    if(confirm('Are you sure you want to clear all todo item?')){
        //Clear from DOM
        itemList.innerHTML = ``;

        //Clear from Storage
        clearFromStorage();

         //Check UI
        checkUI();
    };
    
 };

 //---------CLEAR FROM STORAGE
    function clearFromStorage(){
        const checkStorage = getItemFromStorage();
        checkStorage;

        localStorage.removeItem('items');
        // localStorage.setItem('items', JSON.stringify([]));
    }

 //---------------------



 function checkUI(){
    const item = itemList.querySelectorAll('li');
           
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


 function filterItem(e){
    const filterInput = e.target.value.toLowerCase();
    const items = itemList.querySelectorAll('li');

    //if a space is enter in the search for
    // if(filterInput === ''){
    //     items.forEach(item => item.style.display = 'block');
    //     emptyFilterMessage.style.display = 'none';
    //     return;
    // }

    //Check if the items match with filter
    let trackMatchItem = false;

    items.forEach(item => {
        const itemText = item.textContent.toLowerCase();
        if(itemText.includes(filterInput)){
            item.style.display = 'flex';
            trackMatchItem = true;
        }else{
            item.style.display = 'none';
        }
    });

    // 👇 AFTER the loop finishes
    if(trackMatchItem){
        emptyFilterMessage.style.display = 'none';
    }else{
          emptyFilterMessage.style.display = 'block';
    }

 };


//Initialize App 

function init(){

    //Event Listerners
itemForm.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

clearBtn.addEventListener('click', clearAll);

filter.addEventListener('input', filterItem);

addEventListener('DOMContentLoaded', dislayItem);

checkUI();

}

init();

//LocalStorage

// localStorage.setItem('name','Sylvester');
// // console.log(localStorage.getItem('name'));
// console.log(localStorage.removeItem('name'))
