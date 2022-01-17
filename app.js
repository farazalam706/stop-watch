var hminutes = document.getElementById("minutes");
var hseconds = document.getElementById("seconds");
var hmiliseconds = document.getElementById("miliseconds");

var hstartBtn = document.getElementById("startBtn");
var hpauseBtn = document.getElementById("pauseBtn");
var hresetBtn = document.getElementById("resetBtn");

var min = 0;
var sec = 0;
var milisec = 0;

var interVal;
var pauseVar;

function timeout() {
    milisec++;
    hmiliseconds.innerHTML = milisec;
    if (milisec == 100) {
        sec++;
        hseconds.innerHTML = sec;
        milisec = 0;
    }
    else if (sec == 60) {
        min++;
        hminutes.innerHTML = min;
        sec = 0;
    }
}


function start() {
    interVal = setInterval(timeout, 10);
    startBtn.className = "disable";
    pauseBtn.className = "visible";


}

function pause() {
    pauseVar = clearInterval(interVal);
    pauseBtn.className = "disable";
    startBtn.className = "visible";

}

function reset() {
    min = 0;
    sec = 0;
    milisec = 0;
    hminutes.innerHTML = 00;
    hseconds.innerHTML = 00;
    hmiliseconds.innerHTML = 00;
    pauseVar = clearInterval(interVal);
    startBtn.className = "visible";
    pauseBtn.className = "visible";




}