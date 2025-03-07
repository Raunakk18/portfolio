// Purpose: This file is used to write the javascript code for the website.
var typed = new Typed(".typing", {
  strings: ["A Web Developer", "A Web Designer"],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true
});




var sidemenu = document.getElementById("sidemenu");

function openmenu() {
  document.querySelector('nav').classList.add('nav-show');
}

function closemenu() {
  document.querySelector('nav').classList.remove('nav-show');
}

const links = document.querySelectorAll('#sidemenu li a'); 

links.forEach(d => {
  d.addEventListener('click', () => {
    document.querySelector('nav').classList.remove('nav-show')
  })  
})