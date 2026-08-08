import { Router } from "../../../scripts/router.js";
import { Storage } from "../../../scripts/storage.js";

document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll(".note-input");

  /* -----------------------------------------
     UPDATE DROPDOWNS
  ----------------------------------------- */
  function updateDropdowns() {
    const usedValues = [...selects]
      .map(s => s.value)
      .filter(v => v !== "");

    selects.forEach(sel => {
      const current = sel.value;

      sel.innerHTML = `<option value="">–</option>`;

      for (let i = 1; i <= 8; i++) {
        if (!usedValues.includes(String(i)) || String(i) === current) {
          const opt = document.createElement("option");
          opt.value = i;
          opt.textContent = i;
          sel.appendChild(opt);
        }
      }

      sel.value = current;
    });
  }

  /* -----------------------------------------
     STEP 1 — Build dropdowns
  ----------------------------------------- */
  updateDropdowns();

  /* -----------------------------------------
     STEP 2 — Load saved values
  ----------------------------------------- */
  selects.forEach(sel => {
    const saved = Storage.load(sel.id, "");
    if (saved) sel.value = saved;
  });

  /* -----------------------------------------
     STEP 3 — Rebuild dropdowns
  ----------------------------------------- */
  updateDropdowns();

  /* -----------------------------------------
     STEP 4 — Save on change
  ----------------------------------------- */
  selects.forEach(sel => {
    sel.addEventListener("change", () => {
      Storage.save(sel.id, sel.value);
      updateDropdowns();
    });
  });

  /* -----------------------------------------
     RETURN BUTTON — PATCHED FOR ELECTRON
  ----------------------------------------- */
  document.getElementById("back-paradox").addEventListener("click", () => {
    Router.go("../paradox.html");
  });

  /* -----------------------------------------
     RETURN TO EE STEP — PATCHED FOR ELECTRON
  ----------------------------------------- */
  document.getElementById("return-ee").addEventListener("click", () => {
    Router.go("../easter-egg/easter-egg.html");
  });

  /* -----------------------------------------
     RESET NOTES
  ----------------------------------------- */
  document.getElementById("reset-notes").addEventListener("click", () => {
    selects.forEach(sel => {
      sel.value = "";
      Storage.remove(sel.id);
    });

    updateDropdowns();
  });
});
