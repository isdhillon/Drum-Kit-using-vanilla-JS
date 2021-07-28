//Declarations
let drumKeys=document.querySelectorAll(".drum-keys");
let w=document.createElement("audio");
w.setAttribute("src","sounds/tom-1.mp3")
let a=document.createElement("audio");
a.setAttribute("src","sounds/tom-2.mp3")
let s=document.createElement("audio");
s.setAttribute("src","sounds/tom-3.mp3")
let d=document.createElement("audio");
d.setAttribute("src","sounds/tom-4.mp3")
let j=document.createElement("audio");
j.setAttribute("src","sounds/snare.mp3")
let k=document.createElement("audio");
k.setAttribute("src","sounds/crash.mp3")
let l=document.createElement("audio");
l.setAttribute("src","sounds/kick-bass.mp3")
//event listener of click
for(let i=0;i<drumKeys.length;i++){
    drumKeys[i].addEventListener("click",function(){
        let selectedKey=drumKeys[i].classList[1];
        //play sound
        playSound(selectedKey)
        //animation
        animation(selectedKey)
    })

}
//on key press
document.addEventListener("keypress",function(e){
    //play sound
    playSound(e.key)
    //animation
    animation(e.key)
        
})
//play sound
function playSound(key){
    //w 
    if(key=='w'){
        //playing sound
        w.play();
    }
    //a
    else if(key=='a'){
       a.play(); 
    }
    //s
    else if(key=='s'){
        s.play();
    }
    //d
    else if(key=='d'){
        d.play();
    }
    //j
    else if(key=='j'){
        j.play();
    }
    //k
    else if(key=='k'){
        k.play();
    }
    //l
    else if(key=='l'){
        l.play();
    }
}
//animation
function animation(key){
    //getting the clicked button
    let activeBtn=document.querySelector("."+key)
    //adding class
    activeBtn.classList.add("pressed");
    //removing class after 50miliseconds
    setTimeout(function(){
        activeBtn.classList.remove("pressed",50)
    })
    

}
