(() => {
  const steps = document.querySelectorAll(".step");
  const graphics = document.querySelectorAll(".graphic-item");
  let currentItem = graphics[0];
  let ioIndex = 0;

  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = entries[0].target.dataset.index * 1;
  }); // 현재 화면에 보이는 것만 감시

  const actions = {
    birdFlies(index) {
      const bird = document.querySelector(`[data-index="${index}"] .bird`);

      bird.style.transition = `1.5s 0.5s linear`;
      bird.style.transform = `translateX(${window.innerWidth}px)`;
    },
    birdFlies2(index) {
      const bird = document.querySelector(`[data-index="${index}"] .bird`);

      bird.style.transition = `1.5s 0.5s linear`;
      bird.style.transform = `translate(${window.innerWidth}px, 
        ${-window.innerHeight * 0.7}px)`;
    },
    resetBird(index) {
      const bird = document.querySelector(`[data-index="${index}"] .bird`);
      bird.style.transition = `0s`;
      bird.style.transform = `translateX(-100%)`;
    },
  };

  steps.forEach((step, i) => {
    step.setAttribute("data-index", i);
    io.observe(step); // 감시 대상에 모두 추가
  });
  graphics.forEach((graphic, i) => graphic.setAttribute("data-index", i));

  const activate = (index) => {
    const action = graphics[index].dataset.action;
    currentItem.classList.add("visible");
    if (action) {
      actions[action](index);
    }
  };
  const inactivate = (index) => {
    const action = graphics[index].dataset.action;
    currentItem.classList.remove("visible");
    if (action) {
      actions.resetBird(index);
    }
  };

  window.addEventListener("scroll", () => {
    let boundingRect;

    steps.forEach((step, i) => {
      if (i > ioIndex + 1 || i < ioIndex - 1) return;

      boundingRect = step.getBoundingClientRect();

      if (
        boundingRect.top > window.innerHeight * 0.2 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        inactivate(currentItem.dataset.index);

        currentItem = graphics[step.dataset.index];
        activate(currentItem.dataset.index);
      }
    });
  });

  window.addEventListener("load", () => {
    setTimeout(() => {
      scrollTo(0, 0);
    }, 100);
  });

  activate(0);
})(); // 외부에서의 접근을 차단하는 익명 함수 선언
