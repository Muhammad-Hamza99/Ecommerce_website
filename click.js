let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector(".item");
let cancel = document.querySelector(".fa-xmark");

hamburger.addEventListener("click",(event)=>{
    if(event.target){
        ul.style.right=`${0}px`;
    }

});

cancel.addEventListener("click",(event)=>{
    ul.style.right=`${-300}px`;

});
