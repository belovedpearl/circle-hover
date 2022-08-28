let touchEl = document.getElementById("touch")

touchEl.addEventListener("mouseenter", function(){
    if(!touchEl.classList.contains("hover")){
        touchEl.classList.add("hover")
    }
})

touchEl.addEventListener("mouseleave", function(){
    if(touchEl.classList.contains("hover")){
        touchEl.classList.remove("hover")
    }
})