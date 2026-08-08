import { Router } from "../../scripts/router.js";

document.addEventListener("DOMContentLoaded", () => {
  const backBtn = document.getElementById("back-main");
  const actionButtons = document.querySelectorAll(".panel-buttons .neon-btn");

  /* ------------------------------
     BACK TO MAIN MENU
  ------------------------------ */
  backBtn.addEventListener("click", () => {
    Router.go("../../index.html");
  });

  /* ------------------------------
     PAGE NAVIGATION
  ------------------------------ */
  actionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");

      switch (action) {

        case "ingredients":
          Router.go("ingredients/ingredients.html");
          break;

        case "rocket-code":
          Router.go("rocket-code/rocket-code.html");
          break;

        case "ee-steps":
          Router.go("easter-egg/easter-egg-ashes.html");
          break;

        case "side-quests":
          Router.go("side-eggs/side-ee-ashes.html");
          break;

        // You have no wonder weapon page in your structure,
        // so this is intentionally left unlinked.
        case "wonder-weapon":
          console.warn("[ASHES] Wonder Weapon page does not exist.");
          break;

        default:
          console.warn("[ASHES] Unknown action:", action);
      }
    });
  });
});
