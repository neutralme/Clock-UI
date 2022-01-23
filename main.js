let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let index = document.querySelector('.index');
let dot = document.querySelector('.dot');

setInterval(function() {
  let date = new Date();
  hour.innerText = (date.getHours().toString().length == 1) ? '0' + date.getHours() : date.getHours();
  minute.innerText = (date.getMinutes().toString().length == 1) ? '0' + date.getMinutes() : date.getMinutes();
  second.innerText = (date.getSeconds().toString().length == 1) ? '0' + date.getSeconds() : date.getSeconds();
  index.innerText = (date.getHours() < 12) ? 'AM' : 'PM';
  if(dot.style.display == 'none') {
    dot.style.display = 'block';
  } else {
    dot.style.display = 'none';
  }
}, 1000);