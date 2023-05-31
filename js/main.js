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
const collapses = document.querySelectorAll('.section-content .text-block');


collapses.forEach(e => {
    const text = e.querySelector('p');
    const maxHeight = text.scrollHeight + 'px';

    text.classList.add('slide-down');
    text.style.maxHeight = '0';
    text.style.overflow = 'hidden';

    e.addEventListener('click', () => {
        if (!e.classList.contains('active')) {
            collapses.forEach(el => {
                el.classList.remove('active')
                const text = el.querySelector('p');
                text.style.maxHeight = '0';
            });

            text.style.maxHeight = maxHeight;
            e.classList.add('active');
        } else {
            text.style.maxHeight = '0';
            e.classList.remove('active');
        }і
    });
});