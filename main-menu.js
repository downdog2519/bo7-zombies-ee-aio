import { Router } from "./scripts/router.js";
import { Storage } from "./scripts/storage.js";
import { MAPS } from "./data/registry.js";

const STEP_COUNTS = {
  ashes: 7,
  astra: 12,
  paradox: 11,
  totenreich: 11,
  kowakujo: 13,
};

document.addEventListener("DOMContentLoaded", () => {
  const host = document.getElementById("map-buttons");
  host.innerHTML = "";

  MAPS.forEach((map) => {
    const done = Storage.load(`${map.id}EECompleted`, []).length;
    const total = STEP_COUNTS[map.id] || 0;
    const pct = total ? Math.round((done / total) * 100) : 0;

    const btn = document.createElement("button");
    btn.className = `neon-btn ${map.accent}`;
    btn.dataset.action = map.id;
    btn.innerHTML = `${map.short}<span style="display:block;font-size:0.75rem;opacity:0.8;letter-spacing:0.06em;margin-top:0.25rem;">${map.season} · ${pct}% EE</span>`;
    host.appendChild(btn);
  });

  document.querySelectorAll("[data-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-action");
      if (target === "readme") {
        Router.go("readme/readme.html");
        return;
      }
      const map = MAPS.find((m) => m.id === target);
      if (map) Router.go(map.hub);
    });
  });
});
