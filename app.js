const menu = document.querySelector('.nav-list');
const btnMenu = document.querySelector('.toggle-button-container');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active-menu');
});
