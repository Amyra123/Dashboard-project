const btn = document.querySelector('.main-hamburger');
const sidenav = document.querySelector('.side-nav');

let isClosed = true;

btn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("clicked");
    if(isClosed){
        sidenav.classList.remove('disappear');
        isClosed = false;
    }else{
        isClosed = true;
        sidenav.classList.add('disappear');
    }
   
});