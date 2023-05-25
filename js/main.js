const menuToggle = document.querySelector('.menu-toggle');
const menuClose= document.querySelector('.close-nav');
const mainNav = document.querySelector('.main-navigation');

menuToggle.addEventListener('click', function () {
    if (mainNav.style.display === 'block') {
        mainNav.style.display = 'none';
        document.body.style.overflow = 'visible';
    } else {
        mainNav.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});
menuClose.addEventListener('click', function () {
    if (mainNav.style.display === 'block') {
        mainNav.style.display = 'none';
        document.body.style.overflow = 'visible';
    } else {
        mainNav.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});
