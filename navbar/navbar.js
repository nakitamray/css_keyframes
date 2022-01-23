// Responsive NavBar JS code included with line hover animation on nav bar links

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        //Toogle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
             if (link.style.animation) {
                 link.style.animation = '';
             } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        //Burger Animation
        burger.classList.toggle('toogle');
        
    });
}

navSlide();