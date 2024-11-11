import { toggleClass } from "../helpers/toggleClass";

// изменить состояние анимации
function changeStateAnimation(state) {
  toggleClass(state, "progress-indicator_animation-rotate");
}

export { changeStateAnimation };
