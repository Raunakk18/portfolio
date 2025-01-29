// ----------------Animation Typing------------------//
var typed = new Typed(".typing",{
    strings:["A Web Developer", "A Web Desiner"],
    typeSpeed :100,
    backSpeed :80,
    loop:true

});

var sidemenu= document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right="0";
}
function closemenu(){
  sidemenu.style.right="-200px";
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default jump behavior
    const targetId = this.getAttribute('href').substring(1); // Get the target section id
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' // Smooth scroll
      });
    }
  });
});