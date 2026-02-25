const form = document.getElementById('item-form');

// function onSubmit(e){
    
//     e.preventDefault();


//     const item = document.getElementById('item-input').value;
//     const priority = document.getElementById('priority-input').value;
//     let isChecked = document.getElementById('checkbox').checked;

//     isChecked = isChecked === true ? 'Checked' : 'Not checked';
    
//     console.log({
//        'item': item,
//        'priority' : priority,
//        'isChecked' : isChecked
    
//     });
// }

function onSubmit(e){
    e.preventDefault();

       const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;
    let isChecked = document.getElementById('checkbox').checked;

    if(item === '' || priority === '' || isChecked === false){
        alert('Fill all the form correctly');
        return;
    }else{
        console.log(item,priority,isChecked)
    }
}


function onSubmit2(e){
    e.preventDefault();

    const formData = new FormData(form);
    const item = formData.get('item');
    const priority = formData.get('priority');
    const checkbox = formData.get('checkbox');

    console.log(item,priority,checkbox);
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);