import { getFromLocalStorage } from "./getFromLocalStorage.js";
import { toast } from "./toast.js";
import { total } from "./total.js";
import { updatedCart } from "./updatedCart.js";

export const remove = (id)=>{

    const cart = document.querySelector(`#card${id}`);
    let show = getFromLocalStorage();

    show=show.filter((curr)=> curr.id!=id );
        
    localStorage.setItem("cartProductLs",JSON.stringify(show));
    cart.remove();
    updatedCart(getFromLocalStorage());
    toast("remove");
    total(getFromLocalStorage());

}