(() => {
  const steps = document.querySelectorAll(".step");
  const graphics = document.querySelectorAll(".graphic-item");
  let currentItem = graphics[0];
  let ioIndex;

  const io = new IntersectionObserver((entries, observer) => {
    ioIndex = entries[0].target.dataset.index * 1;
  }); // 현재 화면에 보이는 것만 감시

  steps.forEach((step, i) => {
    step.setAttribute("data-index", i);
    io.observe(step); // 감시 대상에 모두 추가
  });
  graphics.forEach((graphic, i) => graphic.setAttribute("data-index", i));

  const activate = () => {
    currentItem.classList.add("visible");
  };
  const inactivate = () => {
    currentItem.classList.remove("visible");
  };

  window.addEventListener("scroll", () => {
    let boundingRect;
    let temp = 0;

    steps.forEach((step, i) => {
      if (i > ioIndex + 1 || i < ioIndex - 1) return;
      boundingRect = step.getBoundingClientRect();
      temp++;

      if (
        boundingRect.top > window.innerHeight * 0.2 &&
        boundingRect.top < window.innerHeight * 0.8
      ) {
        inactivate();

        currentItem = graphics[step.dataset.index];
        activate();
      }
    });

    console.log("temp", temp);
  });

  activate();
})(); // 외부에서의 접근을 차단하는 익명 함수 선언
