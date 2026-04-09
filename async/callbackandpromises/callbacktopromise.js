

const posts = [
    {title: 'Post One', body: 'this is post one'},
    {title: 'Post Two', body: 'this is post two'}
];

function createPost(newPost){

return new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = true;
        if(!error){
        posts.push(newPost);
        resolve();
        }else{
            reject('Something went wrong')
        }
       
    },3000)

    });
    
};

function getPost(){

    setTimeout(() => {

        posts.forEach((post) => {
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);

        });

    },2000)

}

function showError(error){
    const h3 = document.createElement('h3');
    h3.innerHTML = `<strong> ${error}</strong>`;
    document.getElementById('posts').appendChild(h3);
    

}

createPost({title: 'Post Three', body: 'this is post three'})
.then(getPost)
.catch(showError);
