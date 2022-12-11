let description =  document.querySelector(".description")
description.style.display = 'none'
hidden= true

let title = document.querySelector(".title")

//changing the visibility of the description box on user's click
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

//event listener for the project titles in each page
title.addEventListener("click", displayDesc)