

let myToggleBtn = document.getElementById("nav-toggle");
let myNavList = document.querySelector(".nav-list");


let MyNavOpen = document.getElementById("toggle-open");
let MyNavClose = document.getElementById("toggle-close");


let checkSize = () => {
    let mySize = document.body.clientWidth;
    if(mySize <= 786){
        MyNavOpen.style.display = "block";
        MyNavClose.style.display = "none"
        myNavList.style.display = "none"
    } else{
        MyNavOpen.style.display = "none";
        MyNavClose.style.display = "none"
        myNavList.style.display = "flex"
    }
  return mySize;  
}


let showNav = () => {
    if(myNavList.style.display == "none"){
        myNavList.style.display = "block"
        MyNavOpen.style.display = "none"
        MyNavClose.style.display = "block"
    } else {
        myNavList.style.display = "none"
        MyNavOpen.style.display = "block"
        MyNavClose.style.display = "none"
    }
}
myToggleBtn.addEventListener("click", showNav)