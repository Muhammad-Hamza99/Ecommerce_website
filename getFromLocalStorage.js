import { updatedCart } from "./updatedCart.js";

export const getFromLocalStorage = ()=>{
    
    let cart = localStorage.getItem("cartProductLs");

    if (!cart) {
        return [];
    }
    
    cart=JSON.parse(cart);
    return cart
}