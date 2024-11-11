import { progressIndicator } from "../progressIndicator";

// добавить/убрать класс
// (когда классический toggle не подходит)
function toggleClass(state, className) {
  if (state) {
    progressIndicator.classList.add(className);
  } else {
    progressIndicator.classList.remove(className);
  }
}

export { toggleClass };
