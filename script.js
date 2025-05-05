
var typed = new Typed(".typing", {
  strings: ["A Web Developer", "A Web Designer"],
  typeSpeed: 100,
  backSpeed: 80,
  loop: true
});



const form = document.querySelector('form');
var sidemenu = document.getElementById("sidemenu");

// function sendEmail(){
//   Email.send({
//     Host : "s1.maildns.net",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );


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

