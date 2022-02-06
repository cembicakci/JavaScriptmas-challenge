const languageSelector = document.getElementById("language-selector")
const greetingDisplay = document.getElementById("greeting-text")
const body = document.querySelector("body");

let holidays = document.querySelectorAll('input[name="holiday"]');
languageSelector.addEventListener("change", translate)



const greetingsArr = [
    {
        language: "English",
        greeting: {
            christmas: "Merry Christmas!",
            newYear: "Happy New Year"
        }
    },
    {
        language: "Spanish",
        greeting: {
            christmas: "Feliz Navidad!",
            newYear: "Feliz año nuevo"
        }
    },
    {
        language: "Ukrainian",
        greeting: {
            christmas: "щасливого Різдва!",
            newYear: "Щасливого Нового року"
        }
    },
    {
        language: "Welsh",
        greeting: {
            christmas: "Nadolig Llawen!",
            newYear: "Blwyddyn Newydd Dda"
        }
    },
    {
        language: "Turkish",
        greeting: {
            christmas: "Mutlu Noeller!",
            newYear: "Mutlu Yıllar!"
        }
    }
]

holidays.forEach(element => element.addEventListener("click", changeHoliday));

let holiday = "christmas";
function changeHoliday(){
    holiday = this.value;
    translate();
}

function translate(){
    const found = greetingsArr.find(item => item.language === languageSelector.value);
    greetingDisplay.textContent = found.greeting[holiday];
    
    greetingDisplay.classList.add("animate")
    setTimeout(() => greetingDisplay.classList.remove("animate"), 1000); 
    
}

// Stretch goals:
// - Animate the message switch.
// - Add the option to switch the greeting, for example also have "And a Happy New Year!".
