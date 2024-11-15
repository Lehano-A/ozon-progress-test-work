import { changeStateAnimation } from "../../../progress-indicator/api/changeStateAnimation";
import { changeStateVisibility } from "../../../progress-indicator/api/changeStateVisibility";

// выполнить действие
function executeAction(idSwitch, currentState) {
  switch (idSwitch) {
    case "switchAnimate":
      changeStateAnimation(currentState);
      break;

    case "switchHiding":
      changeStateVisibility(currentState);
      break;
  }
}

export { executeAction };
