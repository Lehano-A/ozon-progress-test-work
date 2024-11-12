import { progressIndicator } from "../progressIndicator";

const setProperty = {
  variable: (varName, value) => {
    progressIndicator.style.setProperty(varName, value);
  },
};

export { setProperty };
