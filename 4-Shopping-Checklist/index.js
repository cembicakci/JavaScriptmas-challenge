const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")
const addBtn = document.querySelector("#add-btn");
const removeBtn = document.querySelector("#remove-btn");

function renderList(){
    checklist.innerHTML = "";
    for(let i = 0; i < items.length; i++){
        checklist.innerHTML += `
            <div class="checklist-item">
                <input type="checkbox" id=${items[i]} value="${items[i]}"></input>
                <label for="${items[i]}" class="strikethrough">${items[i]}</label>
            </div>
        `;        
    }
    
}
renderList();

addBtn.addEventListener("click", function(){
    items.push(input.value);
    input.value = "";
    renderList();
    document.body.style.backgroundImage ='url(https://i.gifer.com/origin/1a/1af8d3b487b77085d5288814f151e1de.gif)';
});

removeBtn.addEventListener("click", function () {
  let clicked = document.querySelectorAll("input[type=checkbox]:checked");
  for (const element of clicked) {
    const index = items.indexOf(element.value);
    items.splice(index, 1);
  }
  renderList();
});



// Task:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

