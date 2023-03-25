const mobile_nav=document.querySelector('.hamburger');
const nav_header=document.querySelector('.nav-bar');

const toggle_navbar=() => {
    // alert("to check whether the button is working or not");
    nav_header.classList.toggle('active');
};
mobile_nav.addEventListener("click",() => toggle_navbar());