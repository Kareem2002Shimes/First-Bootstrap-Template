let buttonTop=document.querySelector(".scroll-top");
// links scrolling
let home=document.querySelector("header");
let about=document.querySelector(".about");
let portfolio=document.querySelector(".portfolio");


window.onscroll=function(){
   window.scrollY >= 400 ? 
   buttonTop.classList.add("show"):
   buttonTop.classList.remove("show");
}
buttonTop.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
}
