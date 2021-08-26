function postArea(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => postInfo(data))
}
postArea();

function postInfo(posts){
    const container = document.getElementById('post-area');
    for(const post of posts){
       const div = document.createElement('div');
       div.classList.add('post');
       div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
       `
       container.appendChild(div);
    }
}