let container = document.querySelector('.main-container');
let button = document.querySelector('.button');

button.addEventListener("click", ()=> {
  container.classList.toggle('on');
})