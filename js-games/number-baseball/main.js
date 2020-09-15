const startGame = () => {
  const NUMBER_OF_BALL = 4;
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

  console.log("answers", answers);
};

startGame();
