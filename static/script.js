const timeDiv = document.getElementById('time');
const controlButton = document.getElementById('control');

let time = 0;
let tickerId = null;

function getMinutes(time) {
    return Math.floor(time/60);
}

function getSeconds(time) {
    return time%60;
}

const zeroPad = (places, num) => String(num).padStart(places, '0')

function updateTimeDiv(time) {
    timeDiv.style.color = 'white';
    timeDiv.innerHTML = zeroPad(2, getMinutes(time)) + ':' + zeroPad(2, getSeconds(time));
}

function updateControlButton(tickerId) {
    if (tickerId != null) {
        controlButton.innerHTML = 'RESET';
    } else {
        controlButton.innerHTML = 'START';
    }
}

function reset() { 
    clearTicker();
    time = 45 * 60;
    updateTimeDiv(time);
    updateControlButton(tickerId);
}

function tick() {
    if (time > 0) {
        time -= 1
        updateTimeDiv(time);
    } else {
	if (timeDiv.style.color == 'white') {
	    timeDiv.style.color = 'red';
	} else {
	    timeDiv.style.color = 'white';
	}
        timeDiv.innerHTML = 'ALARM';
	playAlarm();
    }
}

function startTicker() {
    if (tickerId == null) {
        tickerId = setInterval(tick, 1000)
    }
}

function clearTicker() {
    if (tickerId != null) {
        clearInterval(tickerId);
        tickerId = null;
    }
}

function playAlarm() {
  let alarm = document.getElementById('alarm');
  alarm.play();
}

reset();

controlButton.addEventListener('pointerup', function(event) {
    if (tickerId != null) {
        reset();
    } else {
        startTicker();
    }
    updateControlButton(tickerId);
});
