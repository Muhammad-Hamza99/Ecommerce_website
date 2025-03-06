export const updatedCart = (addToLocal)=>{
    return document.querySelector("#cartValue").innerHTML=`<i class="fa-solid fa-cart-shopping"></i>${addToLocal.length}`;
}