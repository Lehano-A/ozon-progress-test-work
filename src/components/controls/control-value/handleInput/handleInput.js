import { regexNumericRange } from "../../../../constants";
import { paramsProgress } from "../../../progress-indicator/progressIndicator";
import { handleInvalid } from "./handleInvalid/handleInvalid";

// обработать ввод
function handleInput(e) {
  const inputValue = e.target.value.trim();
  const isValid = regexNumericRange.test(inputValue);

  // если ввод - невалиден
  if (!isValid) {
    const [processedValue, valueForDisplay] = handleInvalid(inputValue);

    paramsProgress.value = processedValue;
    e.target.value = valueForDisplay;
    return;
  }

  // если ввод - валиден
  if (isValid) {
    e.target.value = inputValue; // назначаем введённое значение, но без пробелов (если они есть)
    paramsProgress.value = inputValue;
    return;
  }
}

export { handleInput };
