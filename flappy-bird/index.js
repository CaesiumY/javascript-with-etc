const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");
const score = document.querySelector(".score");

const onStart = () => {
  console.log("start");
  startBtn.classList.add("hide");
  gameMessage.classList.add("hide");
};

const onPressOn = () => {
  console.log("onPressOn");
};

const onPressOff = () => {
  console.log("onPressOff");
};

startBtn.addEventListener("click", onStart);
gameMessage.addEventListener("click", onStart);

document.addEventListener("keydown", onPressOn);
document.addEventListener("keyup", onPressOff);
