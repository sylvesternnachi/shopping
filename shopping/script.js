const itemForm = document.getElementById('item-form');
const itemInput = document.querySelector('.form-input');
const itemList = document.getElementById('item-list');




function addItem(e){
    e.preventDefault();

    if(itemInput.value === '') {
        alert('Enter Input Field')
    }else{

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
    
    itemInput.value = ' ';

};

 };



 function removeItem(e){
   const target = e.target;
   if(target.classList.value === 'fa-solid fa-xmark'){
    target.parentElement.parentElement.remove();
   }

 };

//Event Listerners
itemForm.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);