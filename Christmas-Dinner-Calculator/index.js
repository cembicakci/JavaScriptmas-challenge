const btn = document.getElementById("btn")
const btnDesc = document.getElementById("btn-desc");
let food = document.getElementById("food")

const guests = document.getElementById("num-input");
const vegetarian = document.getElementById("vegetarian-input");

const modalContainer = document.getElementById("modal-container");
const modalImg = document.getElementById("modal-img");
const captionText = document.getElementById("caption");


const dietType = [
    {
        name: "Nut Roast",
        desc: "Bake a satisfying vegetarian loaf with lentils, chestnut mushrooms and cheese to go with all the classic roast dinner trimmings.",
        imgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/nut-roast-bc20acb.jpg?quality=90&webp=true&resize=440,400"
    },
    {
        name: "Turkey",
        desc: "Brine turkey before roasting for beautifully tender, flavourful meat. This easy recipe is infused with bay, thyme and orange, making it ideal for Thanksgiving or Christmas",
        imgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2021/10/Turkey-Brine-e01931d.jpg?quality=90&webp=true&resize=600,545"
    },
    {
        name: "Goose",
        desc: "Gordon Ramsay shows you how to cook the chef's choice of Christmas main courses – a golden goose. Keep the fat to use through the winter months",
        imgUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-96459_10-2696e4c.jpg?quality=90&webp=true&resize=440,400"
    }
]

btn.addEventListener("click", calculateDinner);
btnDesc.addEventListener("click", showModal);
modalContainer.addEventListener("click", hideModal);

function calculateDinner(){
    if(vegetarian.checked == true){
        food.textContent = "Nut Roast"
        
        modalImg.src = `${dietType[0].imgUrl}`;
        captionText.textContent = `${dietType[0].desc}`;
    }else if(guests.value == 0){
        alert("Please enter valid number!");
        return;
    }
    else if(guests.value < 5){
        food.textContent = "Turkey"
        
        modalImg.src = `${dietType[1].imgUrl}`;
        captionText.textContent = `${dietType[1].desc}`;
    }
    else if(guests.value >= 5){
        food.textContent = "Goose"
        
        modalImg.src = `${dietType[2].imgUrl}`;
        captionText.textContent = `${dietType[2].desc}`;
        
    }
    
    btn.classList.toggle("hidden");
    btnDesc.style.display = "block";
}

function showModal(){
    modalContainer.style.display = "block";
}

function hideModal() {
    modalContainer.style.display = "none";
    btn.classList.toggle("hidden");
    btnDesc.style.display = "none";
}

// Tasks:
// - Write the JS to decide the perfect Christmas dinner and render it in the result element. Don't forget to check whether the meal should be vegetarian!

// Dinner suggestions (or choose your own!):
// Vegetarian: nut roast
// 4 people or less: turkey
// 5+ people: goose 

// Stretch goals:
// - Add more dietary options.
// - Show recipes when the meal has been selected.

