//Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');   
} 



//Script For The Scroll Section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=> {

    sections.forEach(sec => {
        let top = Window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
 // menu bar
 
 let header = document.querySelector('header');
 header.classList.toggle('sticky', window.scrollY > 100);
}

//Scroll Reveal
 
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-text, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-text h1, .about-img ', { origin: 'left' });
ScrollReveal().reveal('.home-text p, .about-content', { origin: 'right' });

//Typed Text
const t = new Typed('.multiple-text', {
    strings: ['Web Development', 'App/Web Design', 'Technical Counsaltancy', 'Scocial Media Marketing'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});