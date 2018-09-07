const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

  function analogClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(analogClock, 1000);

  function digitalClock() {
    var today = new Date();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    minute = checkTime(minute);
    second = checkTime(second);
    if (hour > 12){
      hour = hour - 12;
    }
    document.getElementById('digital-time').innerHTML =
    hour + ":" + minute + ":" + second;
  }
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

setInterval(digitalClock, 1000);


