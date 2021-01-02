const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");
const score = document.querySelector(".score");

let keys = {};
let player = {
  x: 0,
  y: 0,
  speed: 5,
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
  wing.pos = 15;
  wing.style.top = `${wing.pos}px`;

  window.requestAnimationFrame(playGame);
};

const playGame = () => {
  let move = false;

  if (keys.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
    move = true;
  }
  if (keys.ArrowRight && player.x < gameArea.offsetWidth - bird.offsetWidth) {
    player.x += player.speed;
    move = true;
  }
  if (keys.ArrowUp && player.y > 0) {
    player.y -= player.speed;
    move = true;
  }
  if (keys.ArrowDown && player.y < gameArea.offsetHeight - bird.offsetHeight) {
    player.y += player.speed;
    move = true;
  }

  if (move) {
    wing.pos = wing.pos === 15 ? 25 : 15;
    wing.style.top = `${wing.pos}px`;
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
