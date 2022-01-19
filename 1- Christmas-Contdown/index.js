const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = new Date(2022, 11, 25, 0, 0);
    
    let now = new Date();
    
    const timeDifferences = christmas - now;
   // console.log(timeDifferences);
    
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;
    
    let days = timeDifferences / oneDay;
    days = Math.floor(days);
    
    let hours = Math.floor((timeDifferences % oneDay) / oneHour) ;
    let minutes = Math.floor((timeDifferences % oneHour) / oneMin);
    let seconds = Math.floor((timeDifferences % oneMin) / 1000);
    
    
    countdownDisplay.innerHTML = `${days} days ${hours} hours ${minutes} mins ${seconds} secs`;
    // Task:
    // - Get today's date (you only need the day).
    // - Calculate remaining days.
    // - Display remaining days in countdownDisplay.
}

setInterval(renderCountdown, 1000);

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.