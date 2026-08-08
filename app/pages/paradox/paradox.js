import { Router } from "../../scripts/router.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("back-main").addEventListener("click", () => {
    Router.go("../../index.html");
  });

  document.querySelectorAll(".panel-buttons .neon-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      switch (btn.dataset.action) {
        case "ee-steps":
          Router.go("easter-egg/easter-egg.html");
          break;
        case "notes":
          Router.go("notes/notes.html");
          break;
        case "piano":
          Router.go("piano/piano.html");
          break;
        case "side-quests":
          Router.go("side-egg/side-eggs.html");
          break;
      }
    });
  });
});
