function replaceFirstItem(){
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

function replaceSecondItem(){
    const secondItem = document.querySelector('li:nth-child(2)');

    secondItem.outerHTML = '<li>Replace Second</li>'
}

function replaceAllItems(){
    const lis = document.querySelectorAll('li');

    // lis.forEach((item, index) => {
    //     // item.outerHTML = '<li>Replace All</li>';

    //     if(index === 1){
    //     } else {
    //     item.innerHTML = 'Replace All';
    //     }
    // })

    //ShortHand

    lis.forEach((item, index) => item.innerHTML = index === 1 ? 'Second Item' : 'Items')
}

// Replace Child

function replaceChildHeading(){
    const header = document.querySelector('header');
    const h1 = document.querySelector('header h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';

    header.replaceChild(h2,h1);
}


replaceFirstItem();
replaceSecondItem();

replaceAllItems()

replaceChildHeading();


// Remove Element
function removeElement(){
    const h2 = document.querySelector('header h2');
    h2.remove();
}

//Remove FirstItem

function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
    ul.removeChild(li);
}

// Removing each item
function removeItem(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

function removeItem3(){
     const ul = document.querySelector('ul');
    const li = document.querySelector('li');

    li[itemNumber - 1].remove()

}

const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();

removeElement();
removeFirstItem();

removeItem(1);
removeItem3(1)