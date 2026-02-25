const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');

function run(){
    //

    console.log(itemList.className)
    // text.classList.add('dark');
    text.classList.toggle('dark');

    items.forEach((item,index) => {
            
            if(index === 2){
                item.style.color = 'brown';
            }else{
            item.style.color = 'orange';
            }
    })
}

const btn = document.querySelector('button');

btn.addEventListener('click', () =>  {
   run();
})
