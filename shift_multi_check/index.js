const checkboxes = document.querySelectorAll(".item input");

let lastChecked;

const handleClick = (e) => {
  let isBetween = false;
  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      console.log("handleClick -> checkbox", checkbox);
      if (checkbox === e.target || checkbox === lastChecked) { // e.target과 비교하여 끝인지 확인, lastCheck와 비교하여 시작인지 확인
        isBetween = !isBetween;
        console.log("handleClick -> isBetween", isBetween);
      }

      if (isBetween) {
        checkbox.checked = true;
      }
    });
  }
  if (e.shiftKey && e.target.checked === false) {
    checkboxes.forEach((checkbox) => {
      console.log("handleClick -> checkbox", checkbox);
      if (checkbox === e.target || checkbox === lastChecked) {
        isBetween = !isBetween;
        console.log("handleClick -> isBetween", isBetween);
      }

      if (isBetween) {
        checkbox.checked = false;
      }
    });
    lastChecked.checked = false;
  }
  lastChecked = e.target;
  console.log("handleClick -> lastChecked", lastChecked);

  console.clear();
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleClick);
});
