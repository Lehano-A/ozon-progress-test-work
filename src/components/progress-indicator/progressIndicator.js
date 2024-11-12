import { setAria } from "./helpers/setAttribute";
import { setProperty } from "./helpers/setPropertyStyle";

const progressIndicator = document.querySelector(".progress-indicator");
const controlValue = document.querySelector(".control-value");

const paramsProgress = { value: "75" };

controlValue.value = paramsProgress.value; // присваиваем начальное значение

setAria.valueNow(paramsProgress.value);
setProperty.variable("--current-progress", paramsProgress.value); // инициализируем переменную со значением "выполненной" части индикатора

export { paramsProgress, progressIndicator };
