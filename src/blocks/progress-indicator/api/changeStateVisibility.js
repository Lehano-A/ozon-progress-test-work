import { toggleClass } from "../helpers/toggleClass";

// изменить состояние видимости
function changeStateVisibility(state) {
  toggleClass(state, "progress-indicator_hiding");
}

export { changeStateVisibility };
