import { setAria } from "../helpers/setAttribute";
import { setProperty } from "../helpers/setPropertyStyle";

// изменить значение индикатора прогресса
function changeValueProgress(value) {
  setAria.valueNow(value);
  setProperty.variable("--current-progress", value);
}

export { changeValueProgress };
