import { regexNumericRange } from "../../../constants";

const controlValue = document.querySelector("#controlValue");

controlValue.addEventListener("input", handleInput);

// обработать ввод
function handleInput(e) {
  const strValue = e.target.value;

  if (!regexNumericRange.test(strValue)) {
    // если ввод невалиден
    const numberValue = Number(strValue);
    const lastInputSymbol = strValue[strValue.length - 1];

    // если введёный символ является ' ' или всё значение не является числом
    if (lastInputSymbol === " " || Number.isNaN(numberValue)) {
      const newValue = strValue.substring(0, strValue.length - 1);
      e.target.value = newValue;
      return;
    }

    // если число > 100
    if (numberValue > 100) {
      e.target.value = "100"; // заменяем значение на 100
      return;
    }

    // если первая цифра - 0, а следующая цифра > 0
    if (Number(strValue[0]) === 0 && !Number.isNaN(strValue[1])) {
      e.target.value = strValue[strValue.length - 1]; // заменяем 0 на введённую цифру
      return;
    }
  }
}
