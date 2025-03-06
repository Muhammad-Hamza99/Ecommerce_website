import { toast } from "./toast.js";


export const  handleIncrement = (event,id,stock) => {

    let cartId = document.querySelector(`#card${id}`);
    let productQuantity = cartId.querySelector(".quantity");
    
    let quantity = Number(productQuantity.getAttribute("quantityid")) || 1;
   

    if(event.target.classList.contains("cart-increment")){
        if (quantity<stock) {
            quantity = quantity+1; 
        }
    }

    if(event.target.classList.contains("cart-decrement")){
        if (quantity>1) {
            quantity-=1;
        }
    }
    
    productQuantity.innerText=quantity;
    productQuantity.setAttribute("quantityid",`${quantity}`);

   
    return false;

}