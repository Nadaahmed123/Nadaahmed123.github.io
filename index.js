let result=document.querySelector('.result');
let equal=document.querySelector('.equal');
document.querySelector(".equal").onclick=()=>{
    setTimeout(() => {
        result.value=eval(result.value);  
    }, 400);
   
    
    
}
