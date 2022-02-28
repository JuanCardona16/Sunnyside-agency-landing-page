const menu = document.getElementById('menu');
const link = document.getElementById('nav__link')

menu.addEventListener('click', () => {
  if (menu.src.includes('icon-hamburger.svg')) {
    menu.src = 'images/cruzar.svg';
    link.classList.add('toggle')
  } else {
    menu.src = 'images/icon-hamburger.svg';
    link.classList.remove('toggle')
  }
});