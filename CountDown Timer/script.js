```js
const EndDate = new Date("13 June, 2025 23:40:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = EndDate - now;

    const days = Math.floor(distancePending / (24 * 60 * 60 * 1000));
    const hrs = Math.floor((distancePending % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const mins = Math.floor((distancePending % (60 * 60 * 1000)) / (60 * 1000));
    const secs = Math.floor((distancePending % (60 * 1000)) / (1000));

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    const totalDuration = EndDate - startDate;
    const percentageDistance = (distanceCovered / totalDuration) * 100;
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if (distancePending < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }
}, 1000);
```
