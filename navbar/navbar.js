// Responsive NavBar JS code included with line hover animation on nav bar links

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click',()=>{
        //Toogle Nav
        nav.classList.toggle('nav-active');
        
        //Burger Animation
        burger.classList.toggle('toogle');
        
    });
}

navSlide();