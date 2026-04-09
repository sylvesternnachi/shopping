// const button = document.querySelector('.btn');

// function toggle(e){
//     e.target.classList.toggle('danger');
// }


// button.addEventListener('click', toggle);


const posts = [
    {title: 'Post One', body: 'this is post one'},
    {title: 'Post Two', body: 'this is post two'}
];

function createPost(newPost, callback){

    
    setTimeout(() => {
        posts.push(newPost);
        callback();
    },3000)
    
}

function getPost(){

    setTimeout(() => {

        posts.forEach((post) => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);

        });

    },2000)

}
createPost({title: 'Post Three', body: 'this is post three'}, getPost);
