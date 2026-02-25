const clearBtn = document.querySelector('.btn-clear');
let ul = document.querySelector('.items');
const lis = document.querySelectorAll('.item')

//Add Event Listener

// clearBtn.addEventListener('click', (e) => {
//     console.log(e.target.innerText = 'Clicked');
// });



// clearBtn.addEventListener('click', () => {
//     ul.innerHTML = '';
// });

clearBtn.addEventListener('click', () => {

lis.forEach((item) => {
    item.remove();
})

});


// setTimeout(() => clearBtn.click(), 3000)

const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('keypress');
}

const onKeyUp = (e) => {
    console.log('Key up');
}


const onKeyDown = (e) => {

    //key
    console.log(e.key)

    //KeyCode

    if(e.keyCode === 13){
        alert('You pressed enter');
    }

    //Code
    console.log(e.code);

    if(e.code === 'Digit1'){
        console.log(' You pressed 1');
    }

    console.log('Shift' + ' ' + e.shiftKey)


}
// itemInput.addEventListener('keypress', onKeyPress);

// itemInput.addEventListener('keyup', onKeyUp);

itemInput.addEventListener('keydown', onKeyDown);
