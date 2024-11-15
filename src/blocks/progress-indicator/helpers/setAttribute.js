import { progressIndicator } from "../progressIndicator";

const setAria = {
  valueNow: (value) => {
    progressIndicator.setAttribute("aria-valuenow", value);
  },
};

export { setAria };
