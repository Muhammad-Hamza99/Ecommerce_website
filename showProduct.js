import { addToLs } from "./addToLs.js";
import { handleIncrement } from "./handleIncrement.js";

const productTemplate = document.querySelector(".product-template");
const productContainer = document.querySelector(".product-container");

export const showProduct = (product)=>{
    if (!product) {
        return false;
    }

    product.forEach((currElem)=>{

        let {id,name,category,price,stock,description,image} = currElem;

        let productClone = document.importNode(productTemplate.content,true);

        productClone.querySelector(".product-item").setAttribute("id",`card${id}`);
        productClone.querySelector(".container-top--para").innerText=name;
        productClone.querySelector(".container--image").src=image;
        productClone.querySelector(".container--image").alt=`a ${name} image`;
        productClone.querySelector(".container-heading").innerText=category;
        productClone.querySelector(".container-bottom--para").innerText=description;
        productClone.querySelector(".discounted-price").innerText=`Rs${price}`
        productClone.querySelector(".updated-price").innerHTML=`<s> Rs${price*4}</s>`;
        productClone.querySelector(".stock").innerText=stock;

        
        productClone.querySelector(".quantity-cart").addEventListener('click',(event)=>{
            handleIncrement(event,id,stock);
        });

        productClone.querySelector(".add-to-cart-buttons").addEventListener('click',(event)=>{
            addToLs(event,id);

        })
        
        productContainer.append(productClone);

    })

}