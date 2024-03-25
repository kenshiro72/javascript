var STOP_WATCH = document.getElementById("stop_watch")
let mseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
btn_start.disabled = false;

function cnt_up() {
    mseconds++
    if (mseconds >= 10) {
        seconds++;
        mseconds = 0;
    }
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes >= 60) {
        hours++;
        minutes = 0;
    }
    STOP_WATCH.innerHTML = `${hours}:${minutes}:${seconds}.${mseconds}`;
}
var START_btn = document.getElementById("btn_start");
var STOP_btn = document.getElementById("btn_stop");
var RESET_btn = document.getElementById("btn_reset");

START_btn.addEventListener('click', function () {
    interval = setInterval(cnt_up, 100);
    btn_start.disabled = true;
    btn_stop.disabled = false;
    btn_reset.disabled = true;
});

STOP_btn.addEventListener('click', function () {
    clearInterval(interval);
    btn_start.disabled = false;
    btn_stop.disabled = true;
    btn_reset.disabled = false;
});

RESET_btn.addEventListener('click', function () {
    mseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    STOP_WATCH.innerHTML = "0:0:0.0";
    btn_start.disabled = false;
    btn_stop.disabled = true;
    btn_reset.disabled = true;
});