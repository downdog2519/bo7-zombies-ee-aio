import { Router } from "../../../scripts/router.js";
import { Storage } from "../../../scripts/storage.js";
import { initEeTracker } from "../../../scripts/ee-tracker.js";
import { KOWAKUJO } from "../../../data/kowakujo.js";

document.addEventListener("DOMContentLoaded", () => {
  initEeTracker(KOWAKUJO);

  const openCodes = document.getElementById("open-codes");
  if (openCodes) {
    openCodes.addEventListener("click", () => {
      const step = Number(document.getElementById("step-selector")?.value || 0);
      Storage.save("kowakujoReturnStep", step);
      Router.go("../codes/codes.html?from=ee");
    });
  }
});
