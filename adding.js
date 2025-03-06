import { getFromLocalStorage } from "./getFromLocalStorage.js";
import { incDec } from "./incDec.js";
import { remove } from "./remove.js";
import { total } from "./total.js";
import { updating } from "./updating.js";

export const adding = (productFilter)=>{
    const container = document.querySelector(".container-flex");
    const template = document.querySelector(".selected-template");

    productFilter.forEach((currElem)=>{
        let {id,name,category,stock,image,price} = currElem;

        let temp = document.importNode(template.content,true);
        
        let toUpdate = updating(id,getFromLocalStorage());

        temp.querySelector(".product-item").setAttribute("id",`card${id}`);
        temp.querySelector(".container-top--para").innerText=category;
        temp.querySelector(".container--image").src=image;
        temp.querySelector(".container-heading").innerText=name;
        temp.querySelector(".container-price").innerText=toUpdate.price;
        temp.querySelector(".quantity").innerText=toUpdate.quantity;

        temp.querySelector(".quantity-cart").addEventListener("click",(event)=>{
            incDec(event,id,stock,price);
        });

        temp.querySelector(".remove-btn").addEventListener("click",(event)=>{
            remove(id);
        });

        
        container.append(temp);
        
        total(getFromLocalStorage());
        
    })

}