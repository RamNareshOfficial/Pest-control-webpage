console.log(`"Pest control console"`);
let scroll = document.querySelector('.containerss');
let scrollY = window.scrollY;

window.addEventListener('scroll', ()=>{
    if(scrollY < window.scrollY){
        scroll.classList.add("containerss_hidden");

    }
    else{
        scroll.classList.remove("containerss_hidden");
    }
    scrollY = window.scrollY;

});