let hours = 0;
let minutes = 0;
let seconds = 0;
let interval = null;

function updateDisplay() {
    const display = document.getElementById('display');
    const formattedTime = 
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
    display.innerText = formattedTime;
}

function startStopwatch() {
    if (interval) return;

    interval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);

    document.getElementById('start').disabled = true;
    document.getElementById('stop').disabled = false;
}

function stopStopwatch() {
    clearInterval(interval);
    interval = null;

    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
}

function resetStopwatch() {
    stopStopwatch();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}
