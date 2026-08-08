/**
 * Shared EE step tracker (used by all maps).
 * Page must define window.EE_PAGE_CONFIG before importing this module,
 * OR pass config via initEeTracker(config).
 */
import { Router } from "./router.js";
import { Storage } from "./storage.js";

export function initEeTracker(config) {
  const {
    mapId,
    title,
    accentClass = "neon-cyan",
    accentVar = "var(--cyan-glow)",
    steps = [],
    backPath = "../index.html",
    linkMap = {},
  } = config;

  const storageKey = `${mapId}EECompleted`;
  const returnKey = `${mapId}ReturnStep`;

  const selector = document.getElementById("step-selector");
  const activeDisplay = document.getElementById("active-step-display");
  const completedDisplay = document.getElementById("completed-steps");
  const zoomOverlay = document.getElementById("img-zoom-overlay");
  const zoomImg = zoomOverlay?.querySelector("img");
  const progressLabel = document.getElementById("ee-progress-label");
  const progressBar = document.getElementById("ee-progress-bar");
  const headerEl = document.querySelector(".panel-header");

  if (headerEl) {
    headerEl.textContent = title;
    headerEl.style.color = accentVar;
  }
  if (progressLabel) {
    progressLabel.style.color = accentVar;
    progressLabel.style.textShadow = `0 0 6px ${accentVar}`;
  }
  const wrapper = document.getElementById("ee-progress-wrapper");
  if (wrapper) wrapper.style.border = `1px solid ${accentVar}`;
  if (progressBar) {
    progressBar.style.background = accentVar;
    progressBar.style.boxShadow = `0 0 10px ${accentVar}`;
  }

  document.querySelectorAll(".tab-btn, #step-selector, #reset-ee, #back-map, #open-codes").forEach((el) => {
    el.classList.remove("neon-red", "neon-cyan", "neon-purple", "neon-green", "neon-orange");
    el.classList.add(accentClass);
  });

  steps.forEach((step, index) => {
    const opt = document.createElement("option");
    opt.value = index;
    opt.textContent = step.title;
    selector.appendChild(opt);
  });

  function convertLinks(text) {
    if (!text) return "";
    let result = text;
    for (const [token, href] of Object.entries(linkMap)) {
      const re = new RegExp(`\\[${token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\]`, "g");
      result = result.replace(
        re,
        `<a href="${href}" class="ee-link ee-tool-link" data-route="${href}">Open ${token}</a>`
      );
    }
    return result;
  }

  function enableZoom() {
    document.querySelectorAll(".zoomable").forEach((img) => {
      img.addEventListener("error", () => {
        img.classList.add("is-broken");
        img.alt = "Image failed to load";
      });
      img.addEventListener("click", () => {
        if (!zoomOverlay || !zoomImg || img.classList.contains("is-broken")) return;
        zoomImg.src = img.currentSrc || img.src;
        zoomOverlay.style.display = "flex";
      });
    });
    if (zoomOverlay) {
      zoomOverlay.onclick = () => {
        zoomOverlay.style.display = "none";
        if (zoomImg) zoomImg.removeAttribute("src");
      };
    }
  }

  function enableLinkTracking() {
    document.querySelectorAll(".ee-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        Storage.save(returnKey, Number(selector.value));
        const route = link.getAttribute("data-route") || link.getAttribute("href");
        if (route) Router.go(route);
      });
    });
  }

  function renderActiveStep(index) {
    const step = steps[index];
    if (!step) return;
    activeDisplay.innerHTML = `
      <div class="ee-step-panel">
        <div class="ee-step-header">
          <h2 class="ee-step-title">${step.title}</h2>
          <div class="tick-btn" data-step="${index}">✔</div>
        </div>
        <div class="ee-step-text">${convertLinks(step.text)}</div>
      </div>`;
    enableZoom();
    enableCompletion();
    enableLinkTracking();
  }

  function enableCompletion() {
    document.querySelectorAll(".tick-btn").forEach((btn) => {
      btn.onclick = () => {
        const stepIndex = Number(btn.dataset.step);
        let completed = Storage.load(storageKey, []);
        if (!completed.includes(stepIndex)) {
          completed.push(stepIndex);
          Storage.save(storageKey, completed);
        }
        renderCompletedSteps();
        updateProgress();
        const next = stepIndex + 1;
        const go = next < steps.length ? next : stepIndex;
        selector.value = go;
        renderActiveStep(go);
      };
    });
  }

  function renderCompletedSteps() {
    const completed = Storage.load(storageKey, []);
    completedDisplay.innerHTML = "";
    completed.forEach((i) => {
      const step = steps[i];
      if (!step) return;
      const panel = document.createElement("div");
      panel.className = "ee-step-panel";
      panel.innerHTML = `
        <h2 class="ee-step-title">${step.title}</h2>
        <div class="ee-step-text">${convertLinks(step.text)}</div>`;
      completedDisplay.appendChild(panel);
    });
    enableZoom();
  }

  function updateProgress() {
    const completed = Storage.load(storageKey, []);
    const percent = steps.length
      ? Math.round((completed.length / steps.length) * 100)
      : 0;
    if (progressLabel) progressLabel.textContent = `${percent}% Complete`;
    if (progressBar) progressBar.style.width = percent + "%";
  }

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      activeDisplay.style.display = tab === "active" ? "block" : "none";
      completedDisplay.style.display = tab === "completed" ? "block" : "none";
    });
  });

  selector.addEventListener("change", () => renderActiveStep(Number(selector.value)));

  const resetBtn = document.getElementById("reset-ee");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      if (!confirm("Reset EE progress for this map?")) return;
      Storage.remove(storageKey);
      renderCompletedSteps();
      updateProgress();
      selector.value = 0;
      renderActiveStep(0);
    });
  }

  const backBtn = document.getElementById("back-map");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      Storage.save(returnKey, Number(selector.value));
      Router.go(backPath);
    });
  }

  const savedStep = Storage.load(returnKey, null);
  if (savedStep !== null && savedStep >= 0 && savedStep < steps.length) {
    selector.value = savedStep;
    renderActiveStep(savedStep);
    Storage.remove(returnKey);
  } else {
    selector.value = 0;
    renderActiveStep(0);
  }
  renderCompletedSteps();
  updateProgress();
  activeDisplay.style.display = "block";
  completedDisplay.style.display = "none";
}
