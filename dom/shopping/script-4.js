const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e){
    heading.textContent = e.target.value;
}

function onChecked(e){
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus(e){
    itemInput.style.border = '1px solid #666'
}

function onBlur(e){
    itemInput.style.border = '1px solid #c9c9c9ff'
}

// itemInput.addEventListener('input', (e) => {
//     console.log(e.target.value)
// })

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput); 
checkbox.addEventListener('input', onChecked); 

itemInput.addEventListener('focus', onFocus)
itemInput.addEventListener('blur', onBlur)