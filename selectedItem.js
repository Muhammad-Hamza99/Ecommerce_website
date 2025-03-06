import { adding } from "./adding.js";
import { getFromLocalStorage } from "./getFromLocalStorage.js"
import { updatedCart } from "./updatedCart.js";

updatedCart(getFromLocalStorage());
export const selectedItem = (product)=>{
    let show = getFromLocalStorage();
    
   let productFilter = product.filter((curr)=> {
       return show.some((cur)=> curr.id==cur.id);
       
    });

    adding(productFilter);

}