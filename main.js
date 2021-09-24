const secondClock = document.querySelector(".second");
const minutesClock = document.querySelector(".minute");
const hoursClock = document.querySelector(".hour");

function setClock() {
  const currentDate = new Date();
  const second = currentDate.getSeconds() / 60;
  const minutes = (second + currentDate.getMinutes()) / 60;
  const hours = (minutes + currentDate.getHours()) / 12;
  setRotation(secondClock, second);
  setRotation(minutesClock, minutes);
  setRotation(hoursClock, hours);
}

function setRotation(element, rot) {
  element.style.transform = "rotate(" + rot * 360 + "deg)";
}

setInterval(setClock, 1000);
