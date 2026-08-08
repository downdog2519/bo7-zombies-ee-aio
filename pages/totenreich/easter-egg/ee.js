import { Router } from "../../../scripts/router.js";
import { Storage } from "../../../scripts/storage.js";
import { initEeTracker } from "../../../scripts/ee-tracker.js";
import { TOTENREICH } from "../../../data/totenreich.js";

document.addEventListener("DOMContentLoaded", () => {
  initEeTracker(TOTENREICH);

  const openCodes = document.getElementById("open-codes");
  if (openCodes) {
    openCodes.addEventListener("click", () => {
      const step = Number(document.getElementById("step-selector")?.value || 0);
      Storage.save("totenreichReturnStep", step);
      Router.go("../codes/codes.html?from=ee");
    });
  }
});
