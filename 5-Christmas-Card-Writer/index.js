const greetingDisplay = document.getElementById("greeting-display")
const btn = document.getElementById("btn")
const bauble = document.getElementById("bauble")

btn.addEventListener("click", writeGreeting)

const greetings = [
    "Santa Claus is coming to town for you!",
    "We wish you a Merry Christmas!",
    "Happy holidays!",
    "Ho, ho, ho! Merry Christmas!",
    "Jingle all the way!"]

function writeGreeting(){
    const name = document.getElementById("name").value;
    const randomNumber = Math.floor(Math.random()*greetings.length);
    
    greetingDisplay.innerHTML = greetings[randomNumber] + " " + name;
    
}




// Task:
// Write a function to display a random greeting in the card.

// Stretch goals:
// - Allow the user to input to and from names.
// - Add an input for custom messages.