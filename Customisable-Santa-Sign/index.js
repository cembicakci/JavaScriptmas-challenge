const sign = document.querySelector("#sign");
const input = document.querySelector("#text-input");

input.addEventListener("input", updatedMessage);

function updatedMessage(){
  if(input.value.length > 5) {
    sign.textContent = `🎅 ${input.value} ☃️`;
  }else{
    sign.textContent = `🎅 Santa Stop Here! ☃️`;
  }
}
