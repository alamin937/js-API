function userInfo(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => userLoad(data));
}

function userLoad(data){
    const ul = document.getElementById('users-all-info');
    for(const user of data){
        const li = document.createElement('li');
        li.innerText= `Name: ${user.name} Email: ${user.email}`;
        ul.appendChild(li);
    }
}