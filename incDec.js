import { getFromLocalStorage } from "./getFromLocalStorage.js";
import { total } from "./total.js";


export const incDec = (event,id,stock,price)=>{
    const elem = document.querySelector(`#card${id}`);
    let sum = document.querySelector(".product-amount");


    let arr=getFromLocalStorage();
    
    let quantity = elem.querySelector(".quantity");
    let pr = elem.querySelector(".container-price");
    let productQuantity = Number(quantity.innerText);
  
    if(event.target.classList.contains("cart-increment")){
        if (productQuantity<stock) {
            productQuantity+=1; 
        }
    }

    if(event.target.classList.contains("cart-decrement")){
        if (productQuantity>1) {
            productQuantity-=1;
        }
    }

    price=Number((price*productQuantity).toFixed(2));
    pr.innerText=price;
    quantity.innerHTML=productQuantity;


    let existing = arr.find((curr)=> curr.id==id );
    if (existing) {
    
        let updated = {id,productQuantity,price};
        
        updated = arr.map((curr)=> curr.id==id ?updated:curr);
        localStorage.setItem("cartProductLs",JSON.stringify(updated));

        
    }

    total(getFromLocalStorage());
   
    
   

    

    return false;

    


}