import { checkForEmpty } from "./helpers/checkForEmpty";
import { checkForZero } from "./helpers/checkForZero";
import { checkForNaN } from "./helpers/checkForNaN";
import { checkForZeroWithInt } from "./helpers/checkForZeroWithInt";

// обработать невалидное значение
// output: [processedValue, valueForDisplay]
function handleInvalid(inputValue) {
  const numberValue = Number(inputValue);

  // если значение - НЕчисло
  if (checkForNaN(numberValue)) {
    // если всего введённых символов === 1
    if (inputValue.length === 1) {
      return ["0", ""];
    }

    // если последний введённый символ - невалиден (например: 45@)
    if (inputValue.length > 1) {
      const prevValue = inputValue.substring(0, inputValue.length - 1); // то обрезаем невалидность и оставляем предыдущий ввод
      return [prevValue, prevValue];
    }
  }

  // если число > 100
  if (numberValue > 100) {
    return ["100", "100"];
  }

  // если первая цифра - 0, а следующая цифра > 0
  if (checkForZeroWithInt(inputValue)) {
    const lastSymbol = inputValue[inputValue.length - 1]; // заменяем 0 на введённую цифру
    return [lastSymbol, lastSymbol];
  }

  // если значение - 0
  if (checkForZero(inputValue)) {
    return ["0", ""];
  }

  // если всё значение - пустая строка
  if (checkForEmpty(inputValue)) {
    return ["0", ""];
  }
}

export { handleInvalid };
