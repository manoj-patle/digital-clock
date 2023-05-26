const clock = document.getElementById("clock");
function digitalClock() {
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
  setTimeout(digitalClock, 900);
}
digitalClock();
