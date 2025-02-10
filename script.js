// ----------------Animation Typing------------------//
var typed = new Typed(".typing", {
  strings: ["A Web Developer", "A Web Desiner"],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true

});

var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  document.querySelector('nav').classList.add('nav-show')
}
function closemenu() {
  document.querySelector('nav').classList.remove('nav-show')
}

