const greeting = document.getElementById("greeting")
const body = document.getElementById("body");
const btn = document.getElementById("btn")

function fix() {
  greeting.textContent = "make it Christmassy!🎄🎄";
  greeting.style.fontFamily = "Mountains of Christmas";
  greeting.style.fontWeight = "bold";
  greeting.style.color = "green";
  body.style.backgroundImage = "url('https://st3.depositphotos.com/1010735/12797/v/950/depositphotos_127978622-stock-illustration-christmas-background-with-fir-branches.jpg')";
  body.style.backgroundSize = "cover";
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
}

btn.addEventListener("click", function(){
  fix();
})








