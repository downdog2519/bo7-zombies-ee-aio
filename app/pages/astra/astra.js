import { Router } from "../../scripts/router.js";
import { Storage } from "../../scripts/storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const meta = document.getElementById("map-meta");
  if (meta) {
    const done = Storage.load("astra_ee_completed", Storage.load("astraEECompleted", [])).length;
    meta.textContent = "Wonder Weapon: LGM-1  ·  Boss: Caltheris  ·  Use CODE TRACKER for planets / Mars code / statues / symbols";
  }

  document.getElementById("back-main").addEventListener("click", () => {
    Router.go("../../index.html");
  });

  document.querySelectorAll(".panel-buttons .neon-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      switch (btn.dataset.action) {
        case "ee-steps":
          Router.go("easter-egg/astra-egg.html");
          break;
        case "tracker":
          Router.go("tracker/tracker.html");
          break;
        case "side-quests":
          Router.go("side-eggs/side-ee.html");
          break;
      }
    });
  });
});
