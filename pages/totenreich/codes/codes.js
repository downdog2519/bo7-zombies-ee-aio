import { Router } from "../../../scripts/router.js";
import { Storage } from "../../../scripts/storage.js";

const KEY = "totenreichCodes";
const FIELDS = ["freq1L", "freq1R", "freq2L", "freq2R", "clawCombo", "clawNote", "rune1", "rune2", "rune3"];

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

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const backEe = document.getElementById("back-ee");
  if (params.get("from") === "ee") backEe.style.display = "block";

  function save() {
    const state = {};
    FIELDS.forEach((id) => {
      const el = document.getElementById(id);
      state[id] = el ? el.value : "";
    });
    Storage.save(KEY, state);
  }

  function load() {
    const state = Storage.load(KEY, {});
    FIELDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el && state[id] != null) el.value = state[id];
    });
  }

  FIELDS.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", save);
    el.addEventListener("change", save);
  });

  document.getElementById("reset-codes").addEventListener("click", () => {
    if (!confirm("Clear saved Totenreich codes for this device?")) return;
    Storage.remove(KEY);
    FIELDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });
  });

  document.getElementById("back-map").addEventListener("click", () => {
    Router.go("../totenreich.html");
  });

  backEe.addEventListener("click", () => {
    Router.go("../easter-egg/ee.html");
  });

  hardenImages();
  enableZoom();
  load();
});
