let description =  document.querySelector(".description")
description.style.display = 'none'
hidden= true

let title = document.querySelector(".title")

const displayDesc = ()=>{
    if (hidden){
        description.style.display = ''
        hidden = false
    }
    else{
        description.style.display = 'none'
        hidden=true
    }
}

title.addEventListener("click", displayDesc)