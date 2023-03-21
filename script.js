/*Esconder icono navbar*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



document.onclick = function(e){
    /*abrir menu */
        if(e.target.id !== 'menuIcon' && e.target.id !=='navbar')
    
        {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
    
        }
    
    /*cerrar menu */
    toggle.onclick = function (){
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    
        
    }
}
    
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200 

});

ScrollReveal().reveal('.home-content,.heading',  { origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, contact form',  { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right'});