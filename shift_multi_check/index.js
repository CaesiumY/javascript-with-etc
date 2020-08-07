const checkboxes = document.querySelectorAll(".item input");

let lastChecked;

const handleClick = (e) => {
  let isBetween = false;
  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.target || checkbox === lastChecked) {
        isBetween = !isBetween;
      }

      if (isBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = e.target;
  console.log("handleClick -> lastChecked", lastChecked);
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleClick);
});
