const NUMBER_OF_BALL = 4;

const startGame = () => {
  let answers = prepareAnswer();

  const score = document.querySelector(".score");
  const restart = document.querySelector(".restart");
  const form = document.querySelector(".form");
  const input = form.querySelector(".form-input");
  const logs = document.querySelector(".log-list");

  restart.addEventListener("click", () => {
    logs.innerHTML = "";
    score.innerText = `0 스트라이크 0 볼`;
    answers = prepareAnswer();
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.length === 4) {
      const userAnswers = input.value.split("");

      const strikes = getStrikes(answers, userAnswers);
      const balls = getBalls(answers, userAnswers);

      score.innerText = `${strikes} 스트라이크 ${balls} 볼`;

      if (strikes >= NUMBER_OF_BALL) {
        score.innerText = "You Win!";
      }

      const list = document.createElement("li");
      list.classList.add(".log");
      list.innerText = `${input.value} - ${strikes} 스트라이크 ${balls} 볼`;

      logs.appendChild(list);

      input.value = "";
    } else {
      alert("올바르지 않은 입력 값입니다.");
    }
  });
};

const prepareAnswer = () => {
  const answers = [];

  const setAnswer = () => {
    const randomIndex = Math.ceil(Math.random() * 9);

    if (!answers.includes(randomIndex)) {
      answers.push(randomIndex);
    } else {
      setAnswer();
    }
  };

  for (let j = 0; j < NUMBER_OF_BALL; j++) {
    setAnswer();
  }

  console.log(answers);

  return answers;
};

const getStrikes = (answers, userAnswers) => {
  let count = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === userAnswers[i] * 1) {
      count++;
    }
  }

  return count;
};
const getBalls = (answers, userAnswers) => {
  let count = 0;
  for (let i = 0; i < answers.length; i++) {
    const userAnswer = userAnswers[i] * 1;
    if (answers.includes(userAnswer) && answers[i] !== userAnswer) {
      count++;
    }
  }

  return count;
};

startGame();
