import { Router } from "../../../scripts/router.js";
import { Storage } from "../../../scripts/storage.js";

document.addEventListener("DOMContentLoaded", () => {

  const selector = document.getElementById("step-selector");
  const activeDisplay = document.getElementById("active-step-display");
  const completedDisplay = document.getElementById("completed-steps");

  const zoomOverlay = document.getElementById("img-zoom-overlay");
  const zoomImg = zoomOverlay?.querySelector("img");

 const STEPS = [

/* ---------------------------------------------
   STEP 1
--------------------------------------------- */
{
  title: "STEP 1 — Getting Started",
  text: `
<b>Power, Tessie & Early Items</b>
<br>• Go to the Office and melee the grate to get T.E.D.D.’s head.
<br>• Install the head into Ol’ Tessie.
<br>• Drive left toward Blackwater Lake.
<br>• Turn on the power at the Blackwater Lake station (insert image).
<br>• Enter the Cabin kitchen and pick up the Jar of Spores (insert image).
<br>• Drive to Ashwood.
<br>• Turn on the Ashwood power (same method as Blackwater).
<br>• Drive Tessie into the Garage and apply the PaP upgrade.
  `
},

/* ---------------------------------------------
   STEP 2
--------------------------------------------- */
{
  title: "STEP 2 — Obtaining the Abomination Head",
  text: `
<b>Diner & Freezer</b>
<br>• Go to Exit 115 and open the Diner.
<br>• Kill the Cook to obtain the Freezer Key.
<br>• Open the freezer beside the rear door and collect the upgrade (insert image).
<br>• Return to Ashwood and upgrade Tessie again.
  `
},

/* ---------------------------------------------
   STEP 3
--------------------------------------------- */
{
  title: "STEP 3 — Collecting All Required Items",
  text: `
<b>Widow’s Lantern</b>
<br>• Head to the Farm.
<br>• Place the Jar of Spores on the horse corpse.
<br>• Flip 3 rounds until the Widow’s Lantern is ready (insert image).

<b>Farm Power & Bone Item</b>
<br>• Turn on Farm power.
<br>• In the Barn, cut the hanging zombie’s foot using a Combat Axe (insert image).
<br>• Throw a Molotov on the severed foot, then collect the Bones (insert image).

<b>Ravager Eyes & Husk</b>
<br>• Grab your [Free Wisp Tea].
<br>• Use the trap during a Ravager round to obtain its Eyes (insert image).
<br>• Drive around looking for purple fog crystals (insert image).
<br>• Shoot one using Tessie’s beam and collect the Husk (insert image).

<b>Klaus Data Chip</b>
<br>• Return to Spawn and defeat KLAUS (Round 8+) (insert image).
<br>• Take his Data Chip back to Ashwood.
<br>• Stand near the mirror room beside the Arsenal and get kills until your Wisp enters the mirror.
  `
},

/* ---------------------------------------------
   STEP 4
--------------------------------------------- */
{
  title: "STEP 4 — Obtaining the Wonder Weapon",
  text: `
<b>Klaus Activation</b>
<br>• Go to the Office beside Vulture Aid.
<br>• Install the Data Chip into the jail cell terminal.
<br>• Stand on the left side of the cell.
<br>• Throw two rapid stuns into the cage to wake Klaus.

<b>Cosmodrome Scan</b>
<br>• Head to Cosmodrome.
<br>• Go downstairs and find the wall terminal (insert image).
<br>• Order Klaus to it.
<br>• When the light turns green, interact and stand inside the red circle.
<br>• Collect the container from beside the terminal.

<b>Charging the Container</b>
<br>• Insert the container into the Blackwater Lake power station.
<br>• Then Ashwood power.
<br>• Then Farm power.
<br>• After the Farm charge, go to the Cellar and interact with the strange box.

<b>Symbol Puzzle</b>
<br>• Use the jump pad to spawn and look for 3 roof symbols while airborne (insert images).
<br>• Return to the Cellar box and input the 3 symbols.
<br>• Interact with the 4th side to confirm.
<br>• Pick up the Wonder Weapon.
<br>• Shoot the blobs it fires (usually 5), single‑shot each, then hold reload.
  `
},

/* ---------------------------------------------
   STEP 5
--------------------------------------------- */
{
  title: "STEP 5 — Ingredients & Keys",
  text: `
<b>Ingredient Reveal</b>
<br>• Go to Ashwood and shoot the mirror your Wisp entered.
<br>• Go to Cosmodrome → Yuri’s Lab.
<br>• Touch the powder to reveal your ingredient list.
<br>• Use your [ingredients] reference.

<br>• Spawn the Bear using the side‑egg [Forced Zursa Spawn] if you need the LIMBS.

<br>• Enter the correct code → add blood → survive the lockdown.

<br>• Search for the first key near Ashwood (insert images).
<br>• Take the key to the Juggernog back area.

<br>• Go to the boat between Ashwood & Farm (insert images).
<br>• Return the key to the chained object.

<br>• Check the 3 key locations (insert images).
<br>• Return the final key → cutscene triggers.
  `
},

/* ---------------------------------------------
   STEP 6
--------------------------------------------- */
{
  title: "STEP 6 — Farm Ritual + Cosmodrome",
  text: `
<b>Farm Ritual Setup</b>
<br>• Grab the DG‑2 and upgrade Tessie with it.
<br>• Drive toward Farm → jump on DG‑2 → shoot the clock.
<br>• Shoot the clock face with the Wonder Weapon → reload to get the power‑up.

<b>Farm Ritual</b>
<br>• Check the Farm house clock.
<br>• Collect the ritual items (insert images).
<br>• Place all items in their marked spots.
<br>• Activate the ritual → survive the lockdown.

<b>Cosmodrome Satellites</b>
<br>• Return to Ashwood → shoot the clock → get power‑up.
<br>• Shoot the first satellite (insert image).
<br>• Jump pad → get another power‑up.
<br>• Shoot the second satellite (insert image).

<b>Rocket Code Step</b>
<br>• Go to the Office monitors.
<br>• When they show images (insert image), use your [rocket-code] reference.
<br>• Shoot the TVs in the correct order.
  `
},

/* ---------------------------------------------
   STEP 7
--------------------------------------------- */
{
  title: "STEP 7 — Exit 115 & Blackwater Lake",
  text: `
<b>Exit 115 Lightning Step</b>
<br>• If lightning isn’t active, use the side‑egg [Restart Lightning Step].
<br>• Get a clock power‑up and park Tessie at the marked spot (insert image).
<br>• Shoot the big clock near the jump pad.
<br>• Buy Klaus.
<br>• Boost Tessie into the container to wake the Trucker.
<br>• Lead Trucker to the strike zone.
<br>• Wake the Mechanic → trap him.
<br>• Wake the Waitress → trap her.

<b>Blackwater Lake Film Reel Step</b>
<br>• Shoot clock → get power‑up.
<br>• Go to Blackwater Lake.
<br>• Interact with the Wisp.
<br>• Shoot the projector (insert image).
<br>• Watch the 4 images (insert images).
<br>• Shoot the Film Reels in order.

<b>Final Prep</b>
<br>• Go to Speed Cola room → interact with the box.
<br>• Order Klaus to pick it up.
<br>• Interact with Klaus to begin the Final Boss Fight.
  `
}

];

  /* ---------------------------------------------
     POPULATE SELECTOR
  --------------------------------------------- */
  STEPS.forEach((step, index) => {
    const opt = document.createElement("option");
    opt.value = index;
    opt.textContent = step.title;
    selector.appendChild(opt);
  });

  /* ---------------------------------------------
     RENDER ACTIVE STEP
  --------------------------------------------- */
  selector.addEventListener("change", () => {
    renderActiveStep(Number(selector.value));
  });

  function renderActiveStep(index) {
    const step = STEPS[index];
    if (!step) return;

    activeDisplay.innerHTML = "";

    const panel = document.createElement("div");
    panel.className = "ee-step-panel";

    panel.innerHTML = `
      <div class="ee-step-header">
        <h2 class="ee-step-title">${step.title}</h2>
        <div class="tick-btn" data-step="${index}">✔</div>
      </div>

      <div class="ee-step-text">
        ${convertLinks(step.text)}
      </div>
    `;

    activeDisplay.appendChild(panel);

    enableZoom();
    enableCompletion();
    enableLinkTracking();
  }

  /* ---------------------------------------------
     LINK CONVERSION
  --------------------------------------------- */
  function convertLinks(text) {
    if (!text) return "";

    let result = text.replaceAll("[rocket-code]",
      `<a href="../rocket-code/rocket-code.html" class="ee-link">rocket-code</a>`
    );

    result = result.replaceAll("[ingredients]",
      `<a href="../ingredients/ingredients.html" class="ee-link">ingredients</a>`
    );

    result = result.replaceAll("[Forced Zursa Spawn]",
      `<a href="../side-eggs/side-ee-ashes.html?category=${encodeURIComponent("Forced Zursa Spawn")}" class="ee-link">Forced Zursa Spawn</a>`
    );

    result = result.replaceAll("[Free Wisp Tea]",
      `<a href="../side-eggs/side-ee-ashes.html?category=${encodeURIComponent("Free Wisp Tea")}" class="ee-link">Free Wisp Tea</a>`
    );

    return result;
  }

  /* ---------------------------------------------
     RETURN‑STEP LINK TRACKING
  --------------------------------------------- */
  function enableLinkTracking() {
    document.querySelectorAll(".ee-link").forEach(link => {
      link.addEventListener("click", () => {
        Storage.save("ashesReturnStep", Number(selector.value));
      }, { once: true });
    });
  }

  /* ---------------------------------------------
     ZOOM
  --------------------------------------------- */
  function enableZoom() {
    document.querySelectorAll(".zoomable").forEach(img => {
      img.addEventListener("click", () => {
        if (!zoomOverlay || !zoomImg) return;
        zoomImg.src = img.src;
        zoomOverlay.style.display = "flex";
      });
    });

    if (zoomOverlay) {
      zoomOverlay.addEventListener("click", () => {
        zoomOverlay.style.display = "none";
      });
    }
  }

  /* ---------------------------------------------
     COMPLETION SYSTEM
  --------------------------------------------- */
  function enableCompletion() {
    document.querySelectorAll(".tick-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const stepIndex = Number(btn.dataset.step);

        let completed = Storage.load("ashesEECompleted", []);
        if (!completed.includes(stepIndex)) {
          completed.push(stepIndex);
          Storage.save("ashesEECompleted", completed);
        }

        renderCompletedSteps();
        updateProgress();

        const next = stepIndex + 1;
        if (next < STEPS.length) {
          selector.value = next;
          renderActiveStep(next);
        } else {
          selector.value = stepIndex;
          renderActiveStep(stepIndex);
        }
      });
    });
  }

function renderCompletedSteps() {
  const completed = Storage.load("ashesEECompleted", []);
  completedDisplay.innerHTML = "";

  completed.forEach(i => {
    const step = STEPS[i];

    const panel = document.createElement("div");
    panel.className = "ee-step-panel";

    panel.innerHTML = `
      <h2 class="ee-step-title">${step.title}</h2>
      <div class="ee-step-text">
        ${convertLinks(step.text)}
      </div>
    `;

    completedDisplay.appendChild(panel);
  });

  enableZoom(); // allow zoom inside completed tab too
}

  function updateProgress() {
    const completed = Storage.load("ashesEECompleted", []);
    const percent = Math.round((completed.length / STEPS.length) * 100);

    document.getElementById("ee-progress-label").textContent = `${percent}% Complete`;
    document.getElementById("ee-progress-bar").style.width = percent + "%";
  }

  /* ---------------------------------------------
     TAB SWITCHING
  --------------------------------------------- */
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;

      if (tab === "active") {
        activeDisplay.style.display = "block";
        completedDisplay.style.display = "none";
      } else {
        activeDisplay.style.display = "none";
        completedDisplay.style.display = "block";
      }
    });
  });

  /* ---------------------------------------------
     RESET
  --------------------------------------------- */
  const resetBtn = document.getElementById("reset-ee");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      Storage.remove("ashesEECompleted");
      renderCompletedSteps();
      updateProgress();
      renderActiveStep(0);
      selector.value = 0;
    });
  }

  /* ---------------------------------------------
     BACK BUTTON
  --------------------------------------------- */
const backBtn = document.getElementById("back-ashes");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    // Save current step before leaving
    Storage.save("ashesReturnStep", Number(selector.value));

    Router.go("../ashes.html");
  });
}

  /* ---------------------------------------------
     INITIAL RENDER + RETURN‑STEP
  --------------------------------------------- */
  const savedStep = Storage.load("ashesReturnStep", null);

  if (savedStep !== null && savedStep >= 0 && savedStep < STEPS.length) {
    selector.value = savedStep;
    renderActiveStep(savedStep);
    Storage.remove("ashesReturnStep");
  } else {
    selector.value = 0;
    renderActiveStep(0);
  }

  renderCompletedSteps();
  updateProgress();

  activeDisplay.style.display = "block";
  completedDisplay.style.display = "none";

});
