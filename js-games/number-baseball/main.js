const startGame = () => {
  const candidates = [];
  const answers = [];

  for (let i = 1; i <= 9; i++) {
    candidates.push(i);
  }

  const setAnswer = () => {
    const randomIndex =
      candidates[Math.floor(Math.random() * candidates.length)];

    if (!answers.includes(randomIndex)) {
      answers.push(randomIndex);
    } else {
      setAnswer();
    }
  };

  for (let j = 0; j < 4; j++) {
    setAnswer();
  }
};

startGame();
