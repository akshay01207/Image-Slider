const container = document.querySelector("#container"), 
slider = document.querySelector("#slider"); 
  
 const previous = document.querySelector("#previous"), 
       next = document.querySelector("#next"); 
   
 let currImg = 0; 
 let size = container.clientWidth; 
  
 window.addEventListener("resize", ()=>{ 
     size = container.clientWidth; 
     slider.style.transform = "translateX("+(-currImg*size)+"px)"; 
 }) 
  
 window.addEventListener("load", ()=>{ 
     size = container.clientWidth; 
     previous.style.opacity = 0; 
     next.style.opacity = 0; 
 }) 
    
 next.addEventListener("click",function(){ 
    slider.style.transition = "transform .8s ease-in-out"; 
    if(currImg == 4){ 
        slider.style.transition = "none"; 
        currImg = 0; 
        slider.style.transform = "translateX("+(-currImg*size)+"px)"; 
        setTimeout(()=>{ 
                currImg++; 
                slider.style.transition = "transform .8s ease-in-out"; 
                slider.style.transform = "translateX("+(-currImg*size)+"px)"; 
        }) 
    } 
    else{ 
        slider.style.transition = "transform .8s ease-in-out"; 
        currImg++; 
        slider.style.transform = "translateX("+(-currImg*size)+"px)"; 
    } 
 }) 
  
 previous.addEventListener("click",function(){ 
    if(currImg == 0){ 
        slider.style.transition = "none"; 
        currImg = 4; 
        slider.style.transform = "translateX("+(-currImg*size)+"px)"; 
        setTimeout(()=>{ 
                currImg--; 
                slider.style.transition = "transform .8s ease-in-out"; 
                slider.style.transform = "translateX("+(-currImg*size)+"px)"; 
        })

    } 

    else{ 
        currImg--;
        slider.style.transition = "transform .8s ease-in-out"; 
        slider.style.transform = "translateX("+(-currImg*size)+"px)"; 
    } 
  
})