import { Router } from "../../scripts/router.js";
import { Storage } from "../../scripts/storage.js";
import { KOWAKUJO } from "../../data/kowakujo.js";

document.addEventListener("DOMContentLoaded", () => {
  const meta = document.getElementById("map-meta");
  if (meta) {
    const done = Storage.load("kowakujoEECompleted", []).length;
    const total = KOWAKUJO.steps.length;
    meta.textContent =
      "Wonder Weapon: " + KOWAKUJO.wonderWeapon +
      "  ·  Boss: " + KOWAKUJO.boss +
      "  ·  Progress: " + done + "/" + total +
      "  ·  Use CODE TRACKER for lanterns / murder board / clock";
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
