
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    // Si el scroll baja más de 50px, añade la clase; si no, la quita
    if (window.scrollY > 50) {
        navbar.classList.add('navbarScroll');
    } else {
        navbar.classList.remove('navbarScroll');
    }
});
