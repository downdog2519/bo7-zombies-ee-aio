import { Router } from "../../scripts/router.js";
import { Storage } from "../../scripts/storage.js";
import { TOTENREICH } from "../../data/totenreich.js";

document.addEventListener("DOMContentLoaded", () => {
  const meta = document.getElementById("map-meta");
  if (meta) {
    const done = Storage.load("totenreichEECompleted", []).length;
    const total = TOTENREICH.steps.length;
    meta.textContent =
      "Wonder Weapon: " + TOTENREICH.wonderWeapon +
      "  ·  Boss: " + TOTENREICH.boss +
      "  ·  Progress: " + done + "/" + total +
      "  ·  Use CODE TRACKER for frequencies / claw / runes";
  }

  document.getElementById("back-main").addEventListener("click", () => {
    Router.go("../../index.html");
  });

  document.querySelectorAll(".panel-buttons .neon-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      if (action === "ee-steps") Router.go("easter-egg/ee.html");
      if (action === "codes") Router.go("codes/codes.html");
    });
  });
});
