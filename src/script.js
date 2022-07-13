const openMenu = document.getElementById('open_menu');
const closeMenu = document.getElementById('close_menu');
const closeNav = document.getElementsByClassName('close__nav');
const mobileNav = document.getElementById('mobile__nav');

openMenu.addEventListener('click', () => mobileNav.classList.toggle('hidden'));

closeMenu.addEventListener('click', () => mobileNav.classList.add('hidden'));

for (let i = 0; i < closeNav.length; i++) {
  closeNav[i].addEventListener('click', () => {
    mobileNav.classList.add('hidden');
  });
}
