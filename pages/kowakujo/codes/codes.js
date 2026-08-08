import { Router } from "../../../scripts/router.js";
import { Storage } from "../../../scripts/storage.js";

const KEY = "kowakujoCodes";

const EVIDENCE = [
  "",
  "Comb",
  "Crest Medallion",
  "Coin Purse",
  "Gardening Shears",
  "Mercantile Abacus",
  "Noble's Hat",
  "Fox Mask",
  "Monkshood Flower",
  "Pestle",
  "Puffer Fish",
  "Sake Cup",
  "Ghostly Rifleman clue",
  "Court Doctor record",
  "Painting match item",
  "Other / see notes",
];

function enableZoom() {
  const overlay = document.getElementById("img-zoom-overlay");
  const zoomImg = overlay?.querySelector("img");
  if (!overlay || !zoomImg) return;

  document.querySelectorAll(".zoomable").forEach((img) => {
    img.addEventListener("click", () => {
      if (img.classList.contains("is-broken")) return;
      zoomImg.src = img.currentSrc || img.src;
      overlay.style.display = "flex";
      overlay.setAttribute("aria-hidden", "false");
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    overlay.setAttribute("aria-hidden", "true");
    zoomImg.removeAttribute("src");
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.style.display === "flex") {
      overlay.click();
    }
  });
}

function hardenImages() {
  document.querySelectorAll(".code-ref-img").forEach((img) => {
    img.addEventListener("error", () => {
      img.classList.add("is-broken");
      img.alt = "Image missing — check assets folder";
      const caption = img.parentElement?.querySelector(".img-caption");
      if (caption) caption.textContent = "Image failed to load";
    });
  });
}

function updateLanternCount() {
  let lit = 0;
  for (let i = 1; i <= 11; i++) {
    const el = document.getElementById(`lantern${i}`);
    const label = el?.closest("label");
    if (el?.checked) {
      lit += 1;
      label?.classList.add("is-on");
    } else {
      label?.classList.remove("is-on");
    }
  }
  const badge = document.getElementById("lanternCount");
  if (badge) badge.textContent = `${lit} / 11 lit`;
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const backEe = document.getElementById("back-ee");
  if (params.get("from") === "ee") backEe.style.display = "block";

  const grid = document.getElementById("lanternGrid");
  for (let i = 1; i <= 11; i++) {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" id="lantern${i}"> Lantern ${i}`;
    grid.appendChild(label);
  }

  ["poster1", "poster2", "poster3", "poster4", "poster5"].forEach((id) => {
    const sel = document.getElementById(id);
    EVIDENCE.forEach((name) => {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name || "—";
      sel.appendChild(opt);
    });
  });

  const fields = [
    ...Array.from({ length: 11 }, (_, i) => `lantern${i + 1}`),
    "poster1", "poster2", "poster3", "poster4", "poster5",
    "deathTime", "symptomDur", "dialResult", "mysteryNote", "foxPattern", "clockFlag",
  ];

  function updateDial() {
    const deathEl = document.getElementById("deathTime");
    const symEl = document.getElementById("symptomDur");
    const out = document.getElementById("dialResult");
    const a = Number(deathEl.value);
    const b = Number(symEl.value);
    if (deathEl.value !== "" && symEl.value !== "" && Number.isFinite(a) && Number.isFinite(b)) {
      out.value = String(a - b);
    } else {
      out.value = "";
    }
  }

  function save() {
    const state = {};
    fields.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      state[id] = el.type === "checkbox" ? el.checked : el.value;
    });
    Storage.save(KEY, state);
  }

  function load() {
    const state = Storage.load(KEY, {});
    fields.forEach((id) => {
      const el = document.getElementById(id);
      if (!el || state[id] == null) return;
      if (el.type === "checkbox") el.checked = !!state[id];
      else el.value = state[id];
    });
    updateDial();
    updateLanternCount();
  }

  fields.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const onChange = () => {
      if (id === "deathTime" || id === "symptomDur") updateDial();
      if (id.startsWith("lantern")) updateLanternCount();
      save();
    };
    el.addEventListener("input", onChange);
    el.addEventListener("change", onChange);
  });

  document.getElementById("reset-codes").addEventListener("click", () => {
    if (!confirm("Clear saved Kowakujō codes for this device?")) return;
    Storage.remove(KEY);
    fields.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      if (el.type === "checkbox") el.checked = false;
      else el.value = "";
    });
    updateDial();
    updateLanternCount();
  });

  document.getElementById("back-map").addEventListener("click", () => {
    Router.go("../kowakujo.html");
  });

  backEe.addEventListener("click", () => {
    Router.go("../easter-egg/ee.html");
  });

  hardenImages();
  enableZoom();
  load();
});
