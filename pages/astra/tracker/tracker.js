import { Router } from "../../../scripts/router.js";
import { Storage } from "../../../scripts/storage.js";

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------
     PLANET ORDER
  ------------------------------ */
  const planetOrder = {
    Mercury: 1,
    Venus: 2,
    Earth: 3,
    Mars: 4,
    Jupiter: 5,
    Saturn: 6,
    Uranus: 7,
    Neptune: 8
  };

  const planetList = Object.keys(planetOrder);

  /* ------------------------------
     SAVE STATE (patched)
  ------------------------------ */
  function saveState() {
    const state = {
      marsCode: document.getElementById("marsCode").value,

      directions: {
        mars: document.querySelector('[data-dir="mars"]').value,
        neptune: document.querySelector('[data-dir="neptune"]').value,
        saturn: document.querySelector('[data-dir="saturn"]').value
      },

      planets: [...document.querySelectorAll(".planet-select-inline")].map(s => s.value),

      statues: {
        statue1: [...document.querySelectorAll('[data-statue="statue1"] input:checked')].map(cb => cb.value),
        statue2: [...document.querySelectorAll('[data-statue="statue2"] input:checked')].map(cb => cb.value),
        statue3: [...document.querySelectorAll('[data-statue="statue3"] input:checked')].map(cb => cb.value)
      },

      symbols: [...document.querySelectorAll(".symbol-item img")].map(img => img.src)
    };

    Storage.save("astraTracker", state);
  }

  /* ------------------------------
     LOAD STATE (patched)
  ------------------------------ */
  function loadState() {
    const saved = Storage.load("astraTracker", null);
    if (!saved) return;

    // Mars code
    document.getElementById("marsCode").value = saved.marsCode || "";

    // Directions
    document.querySelector('[data-dir="mars"]').value = saved.directions.mars;
    document.querySelector('[data-dir="neptune"]').value = saved.directions.neptune;
    document.querySelector('[data-dir="saturn"]').value = saved.directions.saturn;

    // Planet selector
    document.querySelectorAll(".planet-select-inline").forEach((s, i) => {
      if (saved.planets[i]) {
        s.value = saved.planets[i];
        s.options[s.selectedIndex].textContent = planetOrder[saved.planets[i]];
      }
    });

    // Statues
    ["statue1", "statue2", "statue3"].forEach(statue => {
      const savedBooks = saved.statues[statue];
      const wrapper = document.querySelector(`[data-statue="${statue}"]`);
      const checkboxes = wrapper.querySelectorAll("input[type='checkbox']");
      const countDisplay = wrapper.querySelector(".statue-count");

      checkboxes.forEach(cb => {
        cb.checked = savedBooks.includes(cb.value);
      });

      countDisplay.textContent = savedBooks.length;
    });

    // Symbols (drag order)
    const container = document.getElementById("symbolContainer");
    const items = [...container.querySelectorAll(".symbol-item")];

    saved.symbols.forEach((src, i) => {
      items[i].querySelector("img").src = src;
    });
  }

  /* ------------------------------
     RESET TRACKER (patched)
  ------------------------------ */
  document.getElementById("resetTracker").addEventListener("click", () => {
    Storage.remove("astraTracker");

    document.getElementById("marsCode").value = "";
    document.querySelectorAll(".direction-select").forEach(sel => sel.value = "—");
    document.querySelectorAll(".planet-select-inline").forEach(sel => sel.value = "");

    document.querySelectorAll(".statue-panel input").forEach(cb => cb.checked = false);
    document.querySelectorAll(".statue-count").forEach(c => c.textContent = "0");

    // Reset symbol order
    const container = document.getElementById("symbolContainer");
    const items = [...container.querySelectorAll(".symbol-item")];
    items.sort((a, b) => Number(a.querySelector(".symbol-number").textContent) - Number(b.querySelector(".symbol-number").textContent));
    items.forEach(i => container.appendChild(i));

    saveState();
  });

  /* ------------------------------
     PLANET SELECTOR (NO DUPLICATES)
  ------------------------------ */
  const planetSelects = document.querySelectorAll(".planet-select-inline");

  planetSelects.forEach(select => {
    select.innerHTML = `<option value="">Select</option>`;
    planetList.forEach(p => {
      const opt = document.createElement("option");
      opt.value = p;
      opt.textContent = p;
      select.appendChild(opt);
    });

    select.addEventListener("change", () => {
      const chosen = [...planetSelects].map(s => s.value);

      planetSelects.forEach(s => {
        const current = s.value;
        s.innerHTML = `<option value="">Select</option>`;

        planetList.forEach(p => {
          if (!chosen.includes(p) || p === current) {
            const opt = document.createElement("option");
            opt.value = p;
            opt.textContent = p;
            s.appendChild(opt);
          }
        });

        if (current) {
          s.value = current;
          s.options[s.selectedIndex].textContent = planetOrder[current];
        }
      });

      saveState();
    });
  });

  /* ------------------------------
     STATUE MULTI-SELECT DROPDOWNS
  ------------------------------ */
  function setupStatueDropdown(statueId) {
    const wrapper = document.querySelector(`[data-statue="${statueId}"]`);
    const dropdown = wrapper.querySelector(".statue-dropdown");
    const panel = wrapper.querySelector(".statue-panel");
    const checkboxes = panel.querySelectorAll("input[type='checkbox']");
    const countDisplay = wrapper.querySelector(".statue-count");

    dropdown.addEventListener("click", () => {
      const isOpen = panel.style.display === "flex";
      panel.style.display = isOpen ? "none" : "flex";
    });

    checkboxes.forEach(cb => {
      cb.addEventListener("change", () => {
        const selected = [...checkboxes].filter(c => c.checked).length;
        countDisplay.textContent = selected;
        saveState();
      });
    });
  }

  setupStatueDropdown("statue1");
  setupStatueDropdown("statue2");
  setupStatueDropdown("statue3");

  /* ------------------------------
     AUTO-CLOSE STATUE PANELS
  ------------------------------ */
  document.addEventListener("click", (e) => {
    document.querySelectorAll(".statue-panel").forEach(panel => {
      const wrapper = panel.closest(".statue-wrapper");
      if (!wrapper.contains(e.target)) {
        panel.style.display = "none";
      }
    });
  });

  /* ------------------------------
     DRAG & DROP SYMBOLS
  ------------------------------ */
  const container = document.getElementById("symbolContainer");
  let draggedItem = null;

  container.addEventListener("dragstart", e => {
    draggedItem = e.target.closest(".symbol-item");
  });

  container.addEventListener("dragover", e => {
    e.preventDefault();
    const target = e.target.closest(".symbol-item");
    if (!target || target === draggedItem) return;

    const items = [...container.querySelectorAll(".symbol-item")];
    const draggedIndex = items.indexOf(draggedItem);
    const targetIndex = items.indexOf(target);

    if (draggedIndex < targetIndex) {
      container.insertBefore(draggedItem, target.nextSibling);
    } else {
      container.insertBefore(draggedItem, target);
    }

    updateSymbolNumbers();
    saveState();
  });

  function updateSymbolNumbers() {
    [...container.querySelectorAll(".symbol-item")].forEach((item, i) => {
      item.querySelector(".symbol-number").textContent = i + 1;
    });
  }

  /* ------------------------------
     ZOOM MODAL
  ------------------------------ */
  const zoomModal = document.getElementById("zoomModal");
  const zoomImage = document.getElementById("zoomImage");

  document.addEventListener("click", e => {
    const img = e.target.closest(".zoomable");
    if (!img) return;

    zoomImage.src = img.src;
    zoomModal.style.display = "flex";
  });

  zoomModal.addEventListener("click", () => {
    zoomModal.style.display = "none";
  });

  /* ------------------------------
     RETURN BUTTONS — PATCHED FOR ELECTRON
  ------------------------------ */
  document.getElementById("back-astra").addEventListener("click", () => {
    Router.go("../astra.html");
  });

  const backEggBtn = document.getElementById("back-egg");
  const lastStep = Storage.load("astra_ee_last_step", null);

  if (!lastStep) {
    backEggBtn.style.display = "none";
  }

  backEggBtn.addEventListener("click", () => {
    Router.go("../easter-egg/astra-egg.html");
  });

  /* ------------------------------
     LOAD SAVED STATE
  ------------------------------ */
  loadState();
});
