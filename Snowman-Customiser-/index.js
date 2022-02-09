 const inputs = document.querySelectorAll(".controls input");
 
 function colorChange(){
     let result = document.documentElement.style.setProperty(`--${this.name}`,this.value);
     console.log(`Changed color: ${this.name}, ${this.value}`);
 }
 
 inputs.forEach(input => input.addEventListener("change", colorChange));
