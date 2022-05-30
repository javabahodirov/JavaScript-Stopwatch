window.onload = function () {

    let tens = 00;
    let seconds = 00;
    let appendTens = document.getElementById('tens');
    let appendSeconds = document.getElementById('seconds');
    let startButton = document.getElementById('start-button');
    let stopButton = document.getElementById('stop-button');
    let resetButton = document.getElementById('reset-button');
    let Interval;

    startButton.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stopButton.onclick = function () {
        clearInterval(Interval);
    }

    resetButton.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

     function startTimer() {

        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 00;
            appendTens.innerHTML = tens;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }

}