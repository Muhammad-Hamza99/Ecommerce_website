import { getFromLocalStorage } from "./getFromLocalStorage.js";
import { toast } from "./toast.js";
import { updatedCart } from "./updatedCart.js";

updatedCart(getFromLocalStorage());

export const addToLs = (event,id)=>{

    let addToLocal = getFromLocalStorage();
    let cartId = document.querySelector(`#card${id}`);
    let productQuantity = Number(cartId.querySelector(".quantity").innerText);
   
    let price = cartId.querySelector(".discounted-price").innerText;
    
    
    price=price.replace("Rs","");   
    
    let existing = addToLocal.find((curr)=> curr.id==id );
    
    
    if (existing && productQuantity>1) {
        productQuantity=existing.productQuantity + productQuantity;
       
        price = Number((price*productQuantity).toFixed(2));
        
        let updated = {id,productQuantity,price};
        
        updated = addToLocal.map((curr)=> curr.id==id ?updated:curr);
        localStorage.setItem("cartProductLs",JSON.stringify(updated));
        toast("add");
        
    }

    if (existing) {
        return;
    }
    
    price=Number((productQuantity*price).toFixed(2));

    addToLocal.push({id,productQuantity,price});
    localStorage.setItem("cartProductLs",JSON.stringify(addToLocal));

    updatedCart(addToLocal);
    toast("add");
    
    return;
}