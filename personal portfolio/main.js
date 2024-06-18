let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = ()=> {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*-' + id + ']').classList.add('active');
            });
        };
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrolly > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

scrollReveal().reveal('.home-content, heading',{origin: 'top'});
scrollReveal().reveal('.home-img, .Services-container, .Portfolio-box, .contact form',{origin: 'bottom'});
scrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
scrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});

const typed = new Typed('.multiple-text',{ 
    strings:['Web Developer','Web Designer','youtuber'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});