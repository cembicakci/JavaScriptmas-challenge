const input = document.getElementById("input")
const btn = document.getElementById("btn")
let guestList = document.getElementById("guest-list")
let guests = ["Partner", "Nice Relative 1", "Nice Relative 2", "Evil Relative", "Lonely Neighbour"]

const removeBtn = document.getElementById("remove-btn")

btn.addEventListener("click", function(){
    guests.push(input.value);
    input.value = "";
    render();
})

removeBtn.addEventListener("click", function(){
    guests.pop();
    render();
})

function render(){
    let listItems = "";
    for(let i = 0; i < guests.length; i++){
        listItems += `<li>${guests[i]}</li>`;
        guestList.innerHTML = listItems;
    }    
}

render();
