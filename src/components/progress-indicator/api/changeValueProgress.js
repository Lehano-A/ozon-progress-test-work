import { progressIndicator } from "../progressIndicator";

// изменить значение индикатора прогресса
function changeValueProgress(value) {
  progressIndicator.style.setProperty("--current-progress", value);
}

export { changeValueProgress };
