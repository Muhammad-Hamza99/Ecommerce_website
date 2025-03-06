export const updating = (id,arr)=>{

    const product = document.querySelector(`.card${id}`);

    let exist=arr.find((curr)=>curr.id==id);

    if(exist){
        let quantity = exist.productQuantity;
        let price =exist.price;

        return {quantity,price};
    }

    

}