const playBtn = document.getElementById("play-btn")
const pauseBtn = document.getElementById("pause-btn")
const stopBtn = document.getElementById("stop-btn")

const audio = new Audio("./bells.mp3");

playBtn.addEventListener("click", function(){
    audio.play();
})

pauseBtn.addEventListener("click",function(){
    audio.pause();
})

stopBtn.addEventListener("click", function(){
    audio.currentTime = 0;
})
// Task:
// - Add the functionality to play, pause and stop the jingling bells (bells.mp3).

// Stretch goals:
// - Add volume controls.
// - Allow the user to select different sounds.
