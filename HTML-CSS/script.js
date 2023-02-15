fetch('https://jsonplaceholder.typicode.com/users')
.then(res => {return res.json();})
.then(data => {data.forEach(user =>{const markup = `<li>${user.name}</li>`;
document.querySelector('#apitest').insertAdjacentHTML('beforeend', markup)
})
})
.catch(error => console.log(error))

/* get time */

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
console.log(dateTime)
document.getElementById("time").innerHTML = dateTime;