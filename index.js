function toggleMobileMenu() {
    let btn = document.querySelector('.icon-menu');
    let menu = document.querySelector('.nav__body');
    btn.classList.toggle('activated');
    menu.classList.toggle('activated');
}