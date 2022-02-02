let hour = document.querySelector('.hour');
let minute = document.querySelector('.minute');
let second = document.querySelector('.second');
let index = document.querySelector('.index');
let dot = document.querySelector('.dot');

setInterval(function() {
  let date = new Date();
  let hours = (date.getHours() > 12) ? date.getHours() - 12 : date.getHours();
  hour.innerText = (hours.toString().length == 1) ? '0' + hours : hours;
  minute.innerText = (date.getMinutes().toString().length == 1) ? '0' + date.getMinutes() : date.getMinutes();
  second.innerText = (date.getSeconds().toString().length == 1) ? '0' + date.getSeconds() : date.getSeconds();
  index.innerText = (date.getHours() < 12) ? 'AM' : 'PM';
  if(dot.style.opacity == '0') {
    dot.style.opacity = '1';
  } else {
    dot.style.opacity = '0';
  }
}, 1000);