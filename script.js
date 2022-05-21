let time = new Date();
let timeDiv = document.querySelector('.time');

let y = "AM";

let hour = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
if (hour <= 9) {
    hour = "0" + hour;
}
if (minutes <= 9) {
    minutes = "0" + minutes;
}
if (seconds <= 9) {
    seconds = "0" + seconds
}
if (hour >= 12) {
    y = "PM"
}
timeDiv.innerHTML = hour + " : " + minutes + " : " + seconds + " " + y;