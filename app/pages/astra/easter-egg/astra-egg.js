import { Router } from "../../../scripts/router.js";
import { Storage } from "../../../scripts/storage.js";

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------
     STEP DATA – ASTRA EASTER EGG
  ----------------------------------------- */
  const steps = [
    {
      id: 1,
      title: "Step 1: Activate the Pack‑a‑Punch",
      bullets: [
        "Enter the Machina Astralis. The first component is beside the decaying corpse.",
        "Head to the Luminarium. In the tiled room with planet models and shelves, search near the second corpse for the second component.",
        "Head to the Harmonic Oculus and install both parts. Survive a 45‑second defense until the Oculus stabilizes.",
        "Once complete, the Pack‑a‑Punch becomes available."
      ]
    },
    {
      id: 2,
      title: "Step 2: Collecting Required Codes",
      bullets: [
        "Find three planet directions:",
        "-Red planet = Mars",
        "-Blue planet = Neptune",
        "-Ringed planet = Saturn",
        "The Sheets can be found at these locations:",
        "-Laser Room — to the right",
        "-Teleporter Room — on the table above the Armor wall buy",
        "-Statue Room — on the table at the bottom of the attic ladders",
        "Input your findings here: (tracker.html link)",
        "In the Harmonic Oculus viewer, locate Mars. When the crosshair is on it, a code appears bottom‑left. Enter it under mars code here: (tracker.html link)",
        "Final code: the Boss Tower Code.",
        "Using (tracker.html link), click the right side of the Harmonic Oculus and drag the images in the order shown.",
        "One image will be missing"
      ],
      links: {
        tracker: "../tracker/tracker.html"
      }
    },
    {
      id: 3,
      title: "Step 3: Prepare Traps for O.S.C.A.R",
      bullets: [
        "Acquire Cryofreeze and shoot 3 purple crystals to collect shard fragments.",
        "In the Harmonic Oculus Room, listen for the escaping steam — shoot 5 hissing vents (one will hiss at a time).",
        "Find a flashing street lamp somewhere on the map, shoot it, then go to Ol’ Tessie and shoot her bonnet with a PaP weapon.",
        "Shoot O.S.C.A.R’s UFO drone and pick it up."
      ]
    },
    {
      id: 4,
      title: "Step 4: Using the Traps",
      bullets: [
        "Rocket Trap:",
        "-Bring O.S.C.A.R into the Museum and use the rocket display.",
        "Sun Trap:",
        "-Use the Harmonic Oculus again.",
        "-Enter the viewer, locate the Sun, and the trap activates.",
        "-Ensure O.S.C.A.R is inside the room before aiming directly at the Sun.",
        "Laser Trap:",
        "-Bring O.S.C.A.R to the Laser Room (Jug location).",
        "-Place the parts on the trap, wait for O.S.C.A.R to enter, then activate it and keep him inside until his battery overloads.",
        "Once all three traps are complete, O.S.C.A.R drops the UFO Wonder Weapon."
      ]
    },
    {
      id: 5,
      title: "Step 5: O.S.C.A.R & Planets",
      bullets: [
        "O.S.C.A.R respawns ~3 rounds after dropping the UFO gun.",
        "Avoid his line of sight. Follow behind him.",
        "Wait until he brings up “Elimination 20”.",
        "He will then mention three planets — record them here: (tracker.html link)",
        "The tracker will generate a 3‑digit code.",
        "Enter this code in the Harmonic Oculus Room on the machine to the left when entering from Starglaze."
      ],
      links: {
        tracker: "../tracker/tracker.html"
      }
    },
    {
      id: 6,
      title: "Step 6: The Brain",
      bullets: [
        "After entering the code, a platform drops beside PaP — jump up and grab the Key.",
        "Take it to the room between the Teleporter and Museum.",
        "Cut out the brain, then bring it to the Jug Perk area.",
        "Place the brain in the jar holding the monkey brain and start the lockdown defense.",
        "When complete, pick up the jar and return to the Teleporter Room."
      ]
    },
    {
      id: 7,
      title: "Step 7: The Books",
      bullets: [
        "Place the container into the machine beside the Teleporter. The screen displays book names.",
        "Using (tracker.html link), select the names shown for Statues 1–3.",
        "--You will notice digits such as “Statue 1: 2”.",
        "The number indicates how many times to turn each statue.",
        "--Images included under the dropdown bars in the tracker if unsure.",
        "Completing this opens the attic, allowing you to collect the Neptune planet."
      ],
      links: {
        tracker: "../tracker/tracker.html"
      }
    },
    {
      id: 8,
      title: "Step 8: Planet Alignment",
      bullets: [
        "Place Neptune on the holder above the door used for the statue puzzle.",
        "Shoot the planets to match the coordinates you collected earlier: (tracker.html link)",
        "Go to the Teleport Device and input the Mars code you found earlier: (tracker.html link)",
        "Interact with the brain to begin a lockdown.",
        "Shoot ONLY the drones O.S.C.A.R fires toward the teleporter.",
        "Survive the sequence to teleport to Mars."
      ],
      links: {
        tracker: "../tracker/tracker.html"
      }
    },
    {
      id: 9,
      title: "Step 9: Ascendant Eye Obtaining on Mars",
      bullets: [
        "On Mars, jump to the central boss platform and pick up the Brain Container when it spawns.",
        "Connect it to the machine at the top of the stairs, then interact again to receive a tone.",
        "Shoot the pillars behind the map in this order:",
        "Back Right → Back Left → Front Right → Front Left",
        "Turn around and shoot the pillar above the stairs leading to the teleporter — the Ascendant Eye will fly out.",
        "To keep it in place, shoot the last pillar again when the tone nearly stops, then jump to grab the Ascendant Eye.",
        "DO NOT SHOOT THE ASCENDANT EYE.",
        "Place the Ascendant Eye in the holder in the right‑side corner."
      ]
    },
    {
      id: 10,
      title: "Step 10: Pillars & Boss Fight",
      bullets: [
        "Once the Ascendant Eye is placed, the pillars release their aerial conductors.",
        "Shoot all five with the UFO gun.",
        "Input the order you recorded earlier using (tracker.html link)",
        "When complete, interact with the brain one final time to begin the boss fight."
      ],
      links: {
        tracker: "../tracker/tracker.html"
      }
    }
  ];

  /* -----------------------------------------
     DOM ELEMENTS
  ----------------------------------------- */
  const selector = document.getElementById("step-selector");
  const activeDisplay = document.getElementById("active-step-display");
  const completedContainer = document.getElementById("completed-steps");
  const progressBar = document.getElementById("ee-progress-bar");
  const progressLabel = document.getElementById("ee-progress-label");
  const tabButtons = document.querySelectorAll(".tab-btn");

  /* -----------------------------------------
     STORAGE HELPERS
  ----------------------------------------- */
  const loadCompleted = () => Storage.load("astra_ee_completed", []);
  const saveCompleted = list => Storage.save("astra_ee_completed", list);

  /* -----------------------------------------
     PROGRESS BAR
  ----------------------------------------- */
  function updateProgressBar() {
    const completed = loadCompleted();
    const percent = Math.round((completed.length / steps.length) * 100);
    progressBar.style.width = percent + "%";
    progressLabel.textContent = `${percent}% Complete`;
  }

  /* -----------------------------------------
     DROPDOWN UPDATE
  ----------------------------------------- */
  function updateDropdown() {
    const completed = loadCompleted();
    selector.innerHTML = "";

    const unfinished = steps.filter(s => !completed.includes(s.id));

    if (unfinished.length === 0) {
      selector.innerHTML = `<option value="">All steps completed</option>`;
      return;
    }

    unfinished.forEach(step => {
      const opt = document.createElement("option");
      opt.value = step.id;
      opt.textContent = step.title;
      selector.appendChild(opt);
    });
  }

  /* -----------------------------------------
     RENDER ACTIVE STEP
  ----------------------------------------- */
  function renderStep(id) {
    const completed = loadCompleted();
    const step = steps.find(s => s.id == id);

    activeDisplay.innerHTML = "";
    activeDisplay.classList.add("fade-in");

    if (!step) return;

    if (completed.includes(step.id)) {
      activeDisplay.innerHTML = `<p>This step is completed. View it in the COMPLETED tab.</p>`;
      return;
    }

    const wrapper = document.createElement("div");
    wrapper.className = "step-container";

    const titleRow = document.createElement("div");
    titleRow.style.display = "flex";
    titleRow.style.alignItems = "center";
    titleRow.style.justifyContent = "center";
    titleRow.style.gap = "10px";

    const title = document.createElement("button");
    title.className = "neon-btn neon-purple";
    title.textContent = step.title;

    const tick = document.createElement("span");
    tick.className = "tick-btn";
    tick.innerHTML = "✔";

    tick.addEventListener("click", () => {
      wrapper.classList.add("green-flash");

      setTimeout(() => {
        const list = loadCompleted();
        if (!list.includes(step.id)) {
          list.push(step.id);
          saveCompleted(list);
        }

        renderCompleted();
        updateDropdown();
        updateProgressBar();

        const unfinished = steps.filter(s => !list.includes(s.id));

        if (unfinished.length > 0) {
          selector.value = unfinished[0].id;
          renderStep(unfinished[0].id);
        } else {
          activeDisplay.innerHTML = "<p>All steps completed!</p>";
        }
      }, 300);
    });

    titleRow.appendChild(title);
    titleRow.appendChild(tick);

    const content = document.createElement("div");
    content.className = "step-content";

    step.bullets.forEach(b => {
      const p = document.createElement("p");

      if (b.includes("(tracker.html link)") && step.links?.tracker) {
        p.innerHTML = b.replace(
          "(tracker.html link)",
          `<a href="${step.links.tracker}" class="neon-link ee-link-tracker">tracker</a>`
        );
      } else {
        p.textContent = b;
      }

      content.appendChild(p);
    });

    wrapper.appendChild(titleRow);
    wrapper.appendChild(content);
    activeDisplay.appendChild(wrapper);
  }

  /* -----------------------------------------
     RENDER COMPLETED TAB
  ----------------------------------------- */
  function renderCompleted() {
    const completed = loadCompleted();
    completedContainer.innerHTML = "";

    steps.forEach(step => {
      if (completed.includes(step.id)) {
        const div = document.createElement("div");
        div.className = "step-container fade-in";

        const btn = document.createElement("button");
        btn.className = "neon-btn neon-purple";
        btn.textContent = step.title;

        div.appendChild(btn);
        completedContainer.appendChild(div);
      }
    });
  }

  /* -----------------------------------------
     TAB SWITCHING
  ----------------------------------------- */
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      if (target === "active") {
        activeDisplay.style.display = "block";
        completedContainer.style.display = "none";
        selector.style.display = "block";
      } else {
        activeDisplay.style.display = "none";
        completedContainer.style.display = "block";
        selector.style.display = "none";
      }
    });
  });

  /* -----------------------------------------
     INITIAL LOAD
  ----------------------------------------- */
  updateDropdown();

  const last = Storage.load("astra_ee_last_step", null);
  if (last) selector.value = last;

  renderStep(selector.value || 1);

  const activeTab = document.querySelector('.tab-btn[data-tab="active"]');
  if (activeTab) activeTab.click();

  selector.style.display = "block";

  renderCompleted();
  updateProgressBar();

  /* -----------------------------------------
     RESET EE PROGRESS
  ----------------------------------------- */
  document.getElementById("reset-ee").addEventListener("click", () => {
    Storage.remove("astra_ee_completed");
    Storage.remove("astra_ee_last_step");

    updateDropdown();
    renderCompleted();
    updateProgressBar();
    renderStep(1);

    const activeTab = document.querySelector('.tab-btn[data-tab="active"]');
    if (activeTab) activeTab.click();
  });

  /* -----------------------------------------
     RETURN BUTTON — PATCHED FOR ELECTRON
  ----------------------------------------- */
  document.getElementById("back-astra").addEventListener("click", () => {
    Router.go("../astra.html");
  });

  /* -----------------------------------------
     TRACKER LINK – SAVE LAST STEP
  ----------------------------------------- */
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("ee-link-tracker")) {
      Storage.save("astra_ee_last_step", selector.value);
    }
  });

});
