const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");
const score = document.querySelector(".score");
let keys = {};

const bird = document.createElement("div");
const wing = document.createElement("div");

const onStart = () => {
  console.log("start");
  startBtn.classList.add("hide");
  gameMessage.classList.add("hide");

  bird.setAttribute("class", "bird");
  wing.setAttribute("class", "wing");

  bird.appendChild(wing);
  gameArea.appendChild(bird);
};

const onPressOn = (e) => {
  console.log(e.code);
  keys[e.code] = true;
  console.log(keys);
};

const onPressOff = (e) => {
  console.log(e.code);
  keys[e.code] = false;
  console.log(keys);
};

startBtn.addEventListener("click", onStart);
gameMessage.addEventListener("click", onStart);

document.addEventListener("keydown", onPressOn);
document.addEventListener("keyup", onPressOff);
