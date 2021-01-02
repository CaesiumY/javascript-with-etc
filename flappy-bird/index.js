const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");
const score = document.querySelector(".score");

let keys = {};
let player = {
  x: 0,
  y: 0,
  speed: 2,
};
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

  player.x = bird.offsetLeft;
  player.y = bird.offsetTop;

  window.requestAnimationFrame(playGame);
};

const playGame = () => {
  if (keys.ArrowLeft) {
    player.x -= player.speed;
  }
  if (keys.ArrowRight) {
    player.x += player.speed;
  }
  if (keys.ArrowUp) {
    player.y -= player.speed;
  }
  if (keys.ArrowDown) {
    player.y += player.speed;
  }

  bird.style.left = `${player.x}px`;
  bird.style.top = `${player.y}px`;
  window.requestAnimationFrame(playGame);
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
