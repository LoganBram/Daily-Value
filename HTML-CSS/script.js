fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {return res.json();})
.then(data => {data.forEach(user =>{const markup = `<li>${user.name}</li>`;
document.querySelector('#apitest').insertAdjacentHTML('beforeend', markup)
})
})
.catch(error => console.log(error))