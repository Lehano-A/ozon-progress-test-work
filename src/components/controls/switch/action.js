const switches = document.querySelectorAll(".switch");

for (let el of switches) {
  const label = el.previousElementSibling || el.nextElementSibling;
  const handle = handlerInteraction(el);

  el.addEventListener("click", handle); // активация переключателя через его нажатие
  el.addEventListener("keydown", (e) => {
    if (e.code === "Space") handle();
  }); // активация переключателя через нажатие ПРОБЕЛА, когда элемент в фокусе

  if (label) {
    label.addEventListener("click", handle); // активация переключателя через нажатие на его label
  }
}

// обработчик взаимодействия
function handlerInteraction(control) {
  let delay = 0;

  // замыкание для каждой отдельной кнопки
  return () => {
    if (delay === 0) {
      delay = 400; // задержка перед следующим нажатием (равна задержке анимации)

      control.classList.toggle("switch_active");
      control.setAttribute(
        "aria-checked",
        control.classList.contains("switch_active"),
      );

      setTimeout(() => {
        delay = 0;
      }, delay);
    }
  };
}
