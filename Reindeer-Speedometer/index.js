const speedometer = document.getElementById("speedometer")
const select = document.getElementById("select")
const time = document.getElementById("time")
const body = document.querySelector("body");
let currentLocation = ""
let timeTaken = 0

select.addEventListener("change", calculateSpeed);
time.addEventListener("change", calculateSpeed);

let destination = [
    {
        name: "Munich",
        distanceFromPrevDestination: 2892,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG/2560px-Frauenkirche_and_Neues_Rathaus_Munich_March_2013.JPG"
    },
    {
        name: "Kiev",
        distanceFromPrevDestination: 1111,
        img:"https://static.themoscowtimes.com/image/1360/16/3236px-Maidan_Square_Kiev_hnapel_01.jpg"
    },
    {
        name: "Ulaanbaatar",
        distanceFromPrevDestination: 5324,
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Chinggis_Square.jpg"
    },
     {
        name: "Sydney",
        distanceFromPrevDestination: 5458,
        img: "https://www.cunardline.ch/sites/default/files/styles/header-full/public/Australien_Sydney_shutterstock_226065202.jpg?itok=Qbawpfs-"
    },
    {
        name: "Tijuana",
        distanceFromPrevDestination: 6531,
        img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Zona_Rio_Tijuana.jpg"
    },
    {
        name: "Chicago",
        distanceFromPrevDestination: 1729,
        img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F28%252F2021%252F09%252F02%252Fchicago-unvaccinated-CHICAGO0921-2000.jpg&q=85"
    }
]

function calculateSpeed() {
    let speed = 0    
    currentLocation = select.value
    
    for(let i = 0; i < destination.length; i++){
        if(destination[i].name === currentLocation){
            body.style.backgroundImage = `url(${destination[i].img})`;
            let distance = destination[i].distanceFromPrevDestination;
            
            timeTaken = time.value;
            speed = Math.round(distance / timeTaken);
            
            speedometer.innerHTML = `
            <p>Average reindeer speed was 
                <span style="color: #a81817; font-weight: bold">${speed}</span> mph.
            </p>`;
            
        }
        
    }
   
}
