const add = document.querySelector(".bx-chevron-right"),
minus = document.querySelector(".bx-chevron-left");

add.addEventListener("click", ()=> {
 window.history.forward();
})
minus.addEventListener("click", ()=> {
 window.history.back();
})