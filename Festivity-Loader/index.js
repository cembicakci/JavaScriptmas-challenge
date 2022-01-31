const meter = document.getElementById("meter");
const today = new Date().getDate();

function displayValue(){
    meter.setAttribute("value", today);
}

displayValue();

