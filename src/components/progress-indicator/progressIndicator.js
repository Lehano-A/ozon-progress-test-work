const progressIndicator = document.querySelector(".progress-indicator");
const controlValue = document.querySelector(".control-value");

const paramsProgress = { value: "71" };

controlValue.value = paramsProgress.value; // присваиваем начальное значение

progressIndicator.style.setProperty("--current-progress", paramsProgress.value); // инициализируем переменную со значением "выполненной" части индикатора

export { paramsProgress, progressIndicator };
