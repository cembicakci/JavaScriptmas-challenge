const body = document.getElementById("body")
const greeting = document.getElementById("greeting")
const christmasBtn = document.getElementById("christmas")
const snowBtn = document.getElementById("snow")
const newYear = document.getElementById("new-year")

// Task:
//- Add the functionality to switch the theme between 'Christmas' and 'snow'.

// Stretch goals:
// - Add more themes!
// - Allow the user to customise the themes.
// - Turn the radio buttons into a toggle switch.

christmasBtn.addEventListener("click", function(){
    body.className = "christmas";
    greeting.innerHTML = "🎅Merry Christmas!"
})

snowBtn.addEventListener("click", function(){
    body.className = "snow";
    greeting.innerHTML = "☃️ Snow!"
})

newYear.addEventListener("click", function(){
    body.className = "new-year";
    greeting.innerHTML = "💫 Happy New Year!"
})