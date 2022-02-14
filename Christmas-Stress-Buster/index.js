const btn = document.getElementById("btn")
const audio = new Audio("");
const body = document.querySelector("body");
let timer = document.getElementById("timer")
let affirmation = document.getElementById("affirmation")
let timeout;

let sec = 900;
let currentMinutes = 0;
let currentSeconds = 0;

btn.addEventListener("click", () => {
    countdown();
    btn.disabled = true;
   
});

function countdown(){
    currentMinutes = Math.floor(sec / 60);
    currentSeconds = sec % 60;
    
    if(currentSeconds <= 9){ 
        currentSeconds = "0" + currentSeconds;
    }
    
    sec--;
    timer.innerHTML = `${currentMinutes}:${currentSeconds}`;
    timeout = setTimeout(countdown, 1000)
     
     if(sec < 0){
         
         clearTimeout(timeout);
         timer.innerHTML = "15:00"
         sec = 2;
         btn.disabled = false;
         
     }  
    
}


     