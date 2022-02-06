const ageSelector = document.getElementById("age-selector")
const genreSelector = document.getElementById("genre-selector")

const btn = document.getElementById("btn")
const suggestedMovie = document.getElementById("suggested-movie")

const moviesArr = [
    {
        name: "Red Notice",
        age: "18+",
        genre: "Action",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXCDeWcTDLEWXq-hhpO5gUZh-rB0QNhSLvCRwUfPk1Vft1tBSH"
    },
    {
        name: "Me Before You",
        age: "18+",
        genre: "Romance",
        imgSrc: "http://www.movienewsletters.net/photos/191384R1.jpg"
    },
    {
        name: "Edge of Tomorrow",
        age: "PG",
        genre: "Action",
        imgSrc: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRKm8olhDSmCSgZ65A86mwpRQkVaGo0NH9zNXSRHXW4d5N7eHpu"
    },
    {
        name: "La La Land",
        age: "PG",
        genre: "Romance",
        imgSrc: "https://pics.filmaffinity.com/La_La_Land-262021831-large.jpg"
    },
    {
        name: "Truman Show",
        age: "PG",
        genre: "Comedy",
        imgSrc: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTaPe2hUlc02X9r5pxnsC0-o5Vqp_m6kYtphrOW22gjXnLkQfuY"
    },
    {
        name: "Deadpool",
        age: "18+",
        genre: "Comedy",
        imgSrc: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg"
    }
    
]

btn.addEventListener("click", movieSelect)

function movieSelect(){
    let age = ageSelector.value;
    let genre = genreSelector.value;
    
    const match = moviesArr.find(item => item.age === ageSelector.value && item.genre === genreSelector.value);
    
    if(match){
        suggestedMovie.textContent = match.name;
        suggestedMovie.innerHTML += `<img src = ${match.imgSrc} ></img>`;
    }else{
        suggestedMovie.textContent = "Has not been found any movie";
    }
}


// Task: 
// - Write a function to select a suitable movie based on the age group and genre provided.
//  - Display it in the suggested-movie paragraph when the button is clicked.

// Stretch goals: 
// - Have the function run on each change of the <select> tags.
// - Add more movies/complexity - for example black and white vs color, preferred actors, etc. 