export const toast = (operation)=>{

    const elem = document.createElement("div");
    elem.classList.add("toaster");

    if(operation=='add'){
        elem.innerText=`product is added to your cart`;
    }

    else{
        elem.innerText=`product is removed from your cart`;
    }

    document.body.append(elem);

    setTimeout(()=>{
        elem.remove();
    },1000);
    



}