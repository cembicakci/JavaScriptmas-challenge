const crew = document.getElementById("crew")
const audio = new Audio("ho-ho-ho.mp3");
document.getElementById("btn").addEventListener("click", launch)

function launch() {
    crew.classList.add("bounce-out-top")
    audio.play();
}

// Task:
// - Write a function to launch the sleigh! 
// - See CSS for more tasks.

// Stretch goals:
// - Add a cheering sound when the sleigh takes off.
// - Add a countdown to the launch time.
