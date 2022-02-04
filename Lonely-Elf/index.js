const elf = document.getElementById("elf")
const btn = document.getElementById("btn")

let h1 = document.querySelector("#h1")

btn.addEventListener("click", duplicateElf)

let count = 1;
function duplicateElf(){
    if(count < 10){
        count++;
        elf.textContent += "🧝";
        h1.textContent = `Lovely ${count}. Elf`;
    }else{
        btn.textContent = "Opps! Elves are reached!"
        btn.style.backgroundColor = "red";
    }
}

