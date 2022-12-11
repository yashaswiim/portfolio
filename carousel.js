var index = 0

var images = document.querySelectorAll(".image");
var title = document.getElementById("title")
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

var cont1 = document.querySelector(".cont1")
var cont2 = document.querySelector(".cont2")
var cont3 = document.querySelector(".cont3")


//to change the title and hyperlinks in the carousel along with the images
const titles = ["30 minute film festival", "Comic Strip", "Audio", "Video" ]
const links = ["./30mff.html", "./comic.html","./audio.html","./video.html"]

//functions called by next and prev buttons respectively
const nextImage = ()=>{
    showImage(index+=1);
}
const prevImage = ()=>{
    showImage(index-=1);
}

//displays the correct image based on the image index
const showImage = (ind)=>{
    //resetting the image index at the max and min values
    if (ind < 0){
        index=images.length -1;
    }
    if (ind >= images.length){
        index=0;
    }
    //showing the image of the right index in the main container (in middle) and the appropriate title and hyperlink
    if (index<images.length && index>=0){
        cont2.querySelector("img").src = images[index].src
        title.querySelector("h1").innerText = titles[index]
        cont2.querySelector("a").href = links[index]
    }
    //showing the preview of previous and next images in the left and right containers respectively
    if (index<images.length -1 && index>0){
        cont1.querySelector("img").src = images[index-1].src
        cont3.querySelector("img").src = images[index+1].src
    }
    //handling corner cases for the left and right containers
    if (index==images.length-1){
        cont1.querySelector("img").src = images[index-1].src
        cont3.querySelector("img").src = images[0].src
    }
    if (index==0){
        cont1.querySelector("img").src = images[images.length-1].src
        cont3.querySelector("img").src = images[index+1].src
    }
}

//hide all the images initially
for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";  
}

//display only the first image
showImage(0);

//event listener for the previous buttons
prev.addEventListener("click", prevImage)

//event listener for the next buttons
next.addEventListener("click", nextImage)