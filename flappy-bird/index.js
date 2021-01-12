const startBtn = document.querySelector(".startBtn");
const gameArea = document.querySelector(".gameArea");
const gameMessage = document.querySelector(".gameMessage");
const score = document.querySelector(".score");

let keys = {};
let player = {
  x: 0,
  y: 0,
  speed: 2,
  score: 0,
  isPlaying: false,
};

let pipe = {
  startPos: 0,
  spaceBetweenInRow: 0,
  spaceBetweenInCol: 0,
  count: 0,
};

const onStart = () => {
  console.log("start");
  gameArea.innerHTML = "";

  const bird = document.createElement("div");
  const wing = document.createElement("div");

  player.isPlaying = true;
  startBtn.classList.add("hide");
  gameMessage.classList.add("hide");

  bird.setAttribute("class", "bird");
  wing.setAttribute("class", "wing");

  bird.appendChild(wing);
  gameArea.appendChild(bird);

  player.x = bird.offsetLeft;
  player.y = bird.offsetTop;
  player.score = 0;
  wing.pos = 15;
  wing.style.top = `${wing.pos}px`;

  pipe.startPos = 0;
  pipe.spaceBetweenInRow = 400;
  pipe.count = Math.floor(gameArea.offsetWidth / pipe.spaceBetweenInRow);

  for (let i = 0; i < pipe.count; i++) {
    makePipe(pipe.startPos * pipe.spaceBetweenInRow);
    pipe.startPos++;
  }

  window.requestAnimationFrame(playGame);
};

const playGame = () => {
  if (!player.isPlaying) return;

  let bird = document.querySelector(".bird");
  let wing = document.querySelector(".wing");
  let move = false;

  if (keys.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
    move = true;
  }
  if (keys.ArrowRight && player.x < gameArea.offsetWidth - bird.offsetWidth) {
    player.x += player.speed;
    move = true;
  }
  if ((keys.ArrowUp || keys.Space) && player.y > 0) {
    player.y -= player.speed * 5;
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

  player.y += player.speed * 2;

  bird.style.left = `${player.x}px`;
  bird.style.top = `${player.y}px`;
  player.score++;
  score.innerText = `SCORE: ${player.score}`;

  if (player.y > gameArea.offsetHeight) {
    gameOver();
  }

  window.requestAnimationFrame(playGame);
};

const gameOver = () => {
  console.log("game over");
  player.isPlaying = false;
  gameMessage.classList.remove("hide");
  gameMessage.innerHTML = `
  Game Over!</br>
  당신의 점수는 ${player.score}입니다.</br>
  다시 시작하려면 여기를 누르세요.
  `;
};

const makePipe = (pipePos) => {
  console.log("🚀 ~ file: index.js ~ line 103 ~ makePipe ~ pipePos", pipePos);

  const totalHeight = gameArea.offsetHeight;
  const totalWidth = gameArea.offsetWidth;
  const pipeUp = document.createElement("div");
  const pipeDown = document.createElement("div");
  pipe.spaceBetweenInCol = Math.floor(Math.random() * 250) + 150;

  pipeUp.classList.add("pipe");
  pipeUp.x = totalWidth + pipePos;
  pipeUp.height = Math.floor(Math.random() * 350);

  pipeUp.style.left = `${pipeUp.x}px`;
  pipeUp.style.height = `${pipeUp.height}px`;
  pipeUp.style.top = "0";
  pipeUp.style.backgroundColor = "red";

  pipeDown.classList.add("pipe");
  pipeDown.x = totalWidth + pipePos;

  pipeDown.style.left = `${pipeDown.x}px`;
  pipeDown.style.height = `${
    totalHeight - pipeUp.height - pipe.spaceBetweenInCol
  }px`;
  pipeDown.style.bottom = "0";
  pipeDown.style.backgroundColor = "black";

  gameArea.appendChild(pipeUp);
  gameArea.appendChild(pipeDown);
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
