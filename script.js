let isRunning = false;
let startTime;
let updatedTime;
let difference;
let tInterval;
let running = false;

const timeDisplay = document.getElementById("time");

function startStop() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1);
        document.getElementById("start").innerHTML = "Stop";
    } else {
        running = false;
        clearInterval(tInterval);
        document.getElementById("start").innerHTML = "Start";
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    timeDisplay.innerHTML = formatTime(hours, minutes, seconds);
}

function resetStop() {
    running = false;
    clearInterval(tInterval);
    timeDisplay.innerHTML = "00:00:00";
    document.getElementById("start").innerHTML = "Start";
}

function formatTime(hours, minutes, seconds) {
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    return hours + ":" + minutes + ":" + seconds;
}
