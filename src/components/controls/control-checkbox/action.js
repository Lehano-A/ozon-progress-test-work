const checkbox = document.querySelector(".control-checkbox");

let delay = 0;

checkbox.addEventListener("click", () => {
  if (delay === 0) {
    delay = 1000;
    checkbox.classList.toggle("control-checkbox_active");

    setTimeout(() => {
      delay = 0;
    }, delay);
  }
});
