const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');
const cross = document.getElementById('cross');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    navUL.classList.toggle('responsive-nav-ul');
    cross.classList.toggle('show');
    hamburger.classList.toggle('hide');
    nav.classList.toggle('responsive');
})

cross.addEventListener('click', () => {
    navUL.classList.toggle('responsive-nav-ul');
    cross.classList.toggle('show');
    hamburger.classList.toggle('hide');
    nav.classList.toggle('responsive');
})
