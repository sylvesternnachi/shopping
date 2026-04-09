function createPost(post){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: post.title,
            body: post.body
        }),
        headers: {
            'Content-Type' : 'application/json',
            token: 'abc123'
        }
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error, 'Something went wrong'))
};


createPost({title: 'My New Post', body: 'The new body post'})