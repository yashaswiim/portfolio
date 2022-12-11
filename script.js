let bg =  document.getElementById("main-bg")
let namee =  document.getElementsByClassName("welcome-content")[0]
let desktop = document.querySelector(".desktop")
let welcome = document.querySelector(".welcome")

let content =  document.getElementById("content")
content.style.display='none'
let navbar =  document.getElementById("navbar")
navbar.style.display='none'

desktop.style.display='none'

let done_name = false
let done_desktop = false
let done_call = false


setInterval(()=>{
    name_w = namee.offsetWidth
    screen_w = window.innerWidth
    screen_h = window.innerHeight
},100)

var i = 0;
var txt = 'Welcome to my portfolio website! Scroll to continue...'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    welcome.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

if (window.innerWidth<800){
    bg.src="./assets/bgg2.png"
}

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    if(screen_w > 800){
        if(value < screen_h){
            if(!done_name){
                namee.style.right = -name_w + (value*1.75) + 'px';
            }
            namee.style.top = value + (screen_h * 0.3) + 'px';
            if(-name_w +(value*1.75) >= screen_w*(0.5-(name_w/screen_w/2))){
                done_name = true
            }else{done_name = false}
            bg.style.top = value + 'px';

            if(!done_desktop){
                desktop.style.display=''
                desktop.style.transform = `scale(${value*0.08})`;
                bg.style.opacity = `${150/value} `
            }
            desktop.style.top = 0.5*screen_h + value + 'px';
            if(value*0.08 >= (0.95*screen_h)/20 ){
                done_desktop = true
            }else{done_desktop = false}
            done_call=false
            welcome.innerHTML=''
            i=0;
        }
        if(value >= screen_h && !done_call){
            typeWriter()
            done_call= true
            setTimeout(()=>{
                content.style.display=''
                navbar.style.display=''
            },3000)
        }
    }
    else{
        if(value < screen_h/2){
            namee.style.top = value + (screen_h * 0.4) + 'px';
            bg.style.top = value + 'px';
            if(!done_desktop){
                desktop.style.display=''
                desktop.style.transform = `scale(${value*0.08})`;
                namee.style.fontSize = value*0.004 + 'rem'
                bg.style.opacity = `${50/value} `
            }
            desktop.style.top = 0.5*screen_h + value + 'px';
            if(value*0.08 >= (0.8*screen_w)/20 ){
                done_desktop = true
            }else{done_desktop = false}
            done_call = false  
            welcome.innerHTML=''
            i=0;
        } 
        if(value >= (0.85*screen_h)/2 && !done_call){
            typeWriter()
            done_call= true
            setTimeout(()=>{
                content.style.display=''
                navbar.style.display=''
            },3000)
        }
    }

    
})



