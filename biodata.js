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


function extractDriveId(url) {
    const urlParams = new URLSearchParams(new URL(url).search);
    return urlParams.get('id');
}

let body = document.body;

function darkMode() {
    console.log('dark mode di klik');
    body.classList.toggle("dark");
}