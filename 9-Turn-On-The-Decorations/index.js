const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
const decorations = document.getElementById("decorations");

const world = document.getElementById("world");
const bell = document.getElementById("bell");
const explore = document.getElementById("explore");
const noel = document.getElementById("noel");

decorator.addEventListener("click", deckTheHalls);

world.addEventListener("click",addWorld);
bell.addEventListener("click",addBell);
explore.addEventListener("click",addExplore);
noel.addEventListener("click",addNoel);


function deckTheHalls() {
  if(decorator.checked){
    house.textContent = "☃️🎄🏡🎄☃️";
    decorations.style.display = "block";
  }else{
    house.textContent = "🏡";
    decorations.style.display = "none";
  }
}

function addWorld(){
  house.textContent += "🌍";
}

function addBell(){
  house.textContent += "🔔";
}

function addExplore(){
  house.textContent += "💥";
}

function addNoel(){
  house.textContent += "🎅🏼";
}
