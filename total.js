export const total = (arr)=>{
    let sum = document.querySelector(".second");
    let final = document.querySelector(".sixth");
    

    let t = arr.reduce((acc,curr)=>{
        return acc = acc+curr.price;
    },0);
    
    sum.innerText=`Rs${Number(t.toFixed())}`;
    let r=sum.innerText.replace("Rs","");
    console.log(r);
    

    final.innerText=`Rs${Number(r)+50}`;
    
    
}