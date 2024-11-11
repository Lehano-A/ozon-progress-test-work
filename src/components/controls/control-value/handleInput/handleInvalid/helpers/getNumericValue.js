import { regexInt } from "../../../../../../constants";

// получить числовое значение
function getNumericValue(value) {
  return value.match(regexInt).join("");
}

export { getNumericValue };
