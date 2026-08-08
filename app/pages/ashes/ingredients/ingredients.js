import { Router } from "../../../scripts/router.js";
import { Storage } from "../../../scripts/storage.js";

document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------
     RETURN TO EE STEP BUTTON LOGIC
  --------------------------------------------- */
  const returnBtn = document.getElementById("return-ee-step");
  const savedStep = Storage.load("ashesReturnStep", null);

  if (savedStep !== null) {
    // User came from EE steps → show button
    returnBtn.style.display = "block";

    returnBtn.addEventListener("click", () => {
      Router.go("../easter-egg/easter-egg-ashes.html");
    });
  }

  /* ---------------------------------------------
     BACK BUTTON — PATCHED FOR ELECTRON
  --------------------------------------------- */
  document.getElementById("back-ashes").addEventListener("click", () => {
    Router.go("../ashes.html");
  });

  /* ---------------------------------------------
     ZOOM MODAL (clean + modular)
  --------------------------------------------- */
  const zoomModal = document.createElement("div");
  zoomModal.id = "zoomModal";
  zoomModal.classList.add("zoom-modal");
  zoomModal.style.display = "none";

  const zoomImage = document.createElement("img");
  zoomImage.id = "zoomImage";

  zoomModal.appendChild(zoomImage);
  document.body.appendChild(zoomModal);

  // Open zoom
  document.addEventListener("click", e => {
    const img = e.target.closest(".zoomable");
    if (!img) return;

    zoomImage.src = img.src;
    zoomModal.style.display = "flex";
  });

  // Close zoom
  zoomModal.addEventListener("click", () => {
    zoomModal.style.display = "none";
  });

});
