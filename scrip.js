// toggle class active
const navbarNav = document.querySelector
('.navbar-nav')
// ketika menu di klik
document.querySelector('#menu').
onclick = () =>{
    navbarNav.classList.toggle('active');
};
// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#menu');

document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})

let body = document.body;

function darkMode() {
    console.log('dark mode di klik');
    body.classList.toggle("dark");
}
// serch
let biodata = []; // Variabel global untuk menyimpan data biodata