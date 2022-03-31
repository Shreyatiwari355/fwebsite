const hamburger=document.getElementById('hamburger');
const navUl=document.getElementById('navbar-ul');
console.log(hamburger);
hamburger.addEventListener('click',()=>{
    
    navUl.classList.toggle('show');
})