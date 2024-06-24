const landingPage = document.querySelector(".landing")
const openBtn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const menuNav = document.querySelector(".menu")
const bodyElement = document.querySelector('body');

openBtn.addEventListener("click", ()=>{
    menuNav.style.display="block"
    landingPage.style.display="none"
    closeBtn.style.display="block"
    openBtn.style.display="none"
    bodyElement.style.backgroundColor=""
})
closeBtn.addEventListener("click", ()=>{
    menuNav.style.display="none"
    landingPage.style.display="flex"
    closeBtn.style.display="none"
    openBtn.style.display="block"
})