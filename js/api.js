document.getElementById('button-area').addEventListener('click', function(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
})

function userArea(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userId(data));
}

function postArea(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}

function userId(data){
    const ul = document.getElementById('users');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = `name: ${user.name}` ;
        ul.appendChild(li);
    }
}