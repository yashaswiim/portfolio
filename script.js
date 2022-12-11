let bg =  document.getElementById("main-bg")
let namee =  document.getElementsByClassName("welcome-content")[0]
let welcome = document.querySelector(".welcome")

//hide certain elements according to the requirements of the design
let desktop = document.querySelector(".desktop")
desktop.style.display='none'
let content =  document.getElementById("content")
content.style.display='none'
let navbar =  document.getElementById("navbar")
navbar.style.display='none'

//flags reqy=uired for the parallax scrolling effect
let done_name = false
let done_desktop = false
let done_call = false

//different background for mobile phones
if (window.innerWidth<800){
    bg.src="./assets/bgg2.png"
}

//to check for any screen change size after loading the javascript page
setInterval(()=>{
    if (window.innerWidth<800){
        bg.src="./assets/bgg2.png"
    }
    else{
        bg.src="./assets/bgg.png"
    }
    name_w = namee.offsetWidth
    screen_w = window.innerWidth
    screen_h = window.innerHeight
},100)

//typing effect on the screen
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

//scroll event for the parallax effect
window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    //for laptop and wider screens
    if(screen_w > 800){
        if(value < screen_h){
            //slide in the welcome content from the right
            if(!done_name){
                namee.style.right = -name_w + (value*1.75) + 'px';
            }
            //check if the welcome content has reached the center of the page, if so stop the animation
            if(-name_w +(value*1.75) >= screen_w*(0.5-(name_w/screen_w/2))){
                done_name = true
            }else{done_name = false}
            //enlarge the image of desktop according to the scroll value and reduce opacity of background
            if(!done_desktop){
                desktop.style.display=''
                desktop.style.transform = `scale(${value*0.08})`;
                bg.style.opacity = `${150/value} `
            }
            //if the desktop image as reached the required size, stop scaling
            if(value*0.08 >= (0.95*screen_h)/20 ){
                done_desktop = true
            }else{done_desktop = false}
            //move the welcome content, background and desktop image according to the scroll value
            namee.style.top = value + (screen_h * 0.3) + 'px';
            bg.style.top = value + 'px';
            desktop.style.top = 0.5*screen_h + value + 'px';
            //reset the variables required for the typing effect so that it can start again when required
            done_call=false
            welcome.innerHTML=''
            i=0;
        }
        //once parallax scroll ends, display the welcome message with typing effect and the rest of the page
        if(value >= screen_h && !done_call){
            typeWriter()
            done_call= true
            setTimeout(()=>{
                content.style.display=''
                navbar.style.display=''
            },3000)
        }
    }
    //for mobile phones and narrower screens
    else{
        if(value < screen_h/2){
            //scale the name and desktop image, and reduce opacity of the background according to the scroll value
            if(!done_desktop){
                desktop.style.display=''
                desktop.style.transform = `scale(${value*0.08})`;
                namee.style.fontSize = value*0.004 + 'rem'
                bg.style.opacity = `${50/value} `
            }
            //if the desktop image as reached the required size, stop scaling
            if(value*0.08 >= (0.8*screen_w)/20 ){
                done_desktop = true
            }else{done_desktop = false}
            //move the welcome content, background and desktop image according to the scroll value
            namee.style.top = value + (screen_h * 0.4) + 'px';
            bg.style.top = value + 'px';
            desktop.style.top = 0.5*screen_h + value + 'px';
            //reset the variables required for the typing effect so that it can start again when required
            done_call = false  
            welcome.innerHTML=''
            i=0;
        } 
        //once parallax scroll ends, display the welcome message with typing effect and the rest of the page
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



