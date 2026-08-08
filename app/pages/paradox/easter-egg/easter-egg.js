import { Router } from "../../../scripts/router.js";
import { Storage } from "../../../scripts/storage.js";

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------
     STEP DATA
  ----------------------------------------- */
  const steps = [
    { id: 1, title: "Step 1: Activate Pack-a-Punch", bullets: [
      "Collect the Truck Keys from a zombie corpse in the Yellow House Backyard.",
      "Survive until Round 6–7 to be teleported to the past version of Nuketown.",
      "Move the truck blocking Trinity Avenue and destroy the four Space-Time Knots in the temporal storm to unlock the Pack-a-Punch machine."
    ]},
    { id: 2, title: "Step 2: Craft the Blundergat", bullets: [
      "Sealant: Found on the bookshelf in the past Yellow House Upstairs.",
      "Barrel: Drop from Loot Cysts in the future Nuketown by killing zombies near them.",
      "Hammer: Pick up SO3 vial in the future Yellow House, convert to H2SO4 at Green House sink, then pour acid on a mannequin in the past to obtain the Hammer.",
      "Stock: Destroy black goo on walls in the past, then collect the Stock in the future.",
      "Assemble all parts at the workbench inside the truck to craft the Blundergat."
    ]},
    { id: 3, title: "Step 3: Upgrade Blundergat to Sundergat", bullets: [
      "Spawn Tortured Zombies in destroyed Nuketown (fire tornado).",
      "Lead each zombie to the workbench and kill it with the Blundergat to absorb its essence.",
      "Repeat three times; the third zombie becomes a Mimic.",
      "Return to the past, melee the workbench, then collect the upgraded Sundergat in the future."
    ]},
    { id: 4, title: "Step 4: RC-XD Garage Sequence", bullets: [
      "Find the RC-XD remote in one of three locations: Yellow House Garage, Green House Backyard, or right of Pack-a-Punch.",
      "Drive the RC-XD to the locked garage and detonate it to open the door.",
      "Collect the Chalk inside the garage."
    ]},
    { id: 5, title: "Step 5: Spawn the Twins", bullets: [
      "In past Nuketown, shoot the swing seat in the Yellow House Backyard to pick it up.",
      "Place the seat and Chalk in the same location in the future to trigger the Twins animation."
    ]},
    { id: 6, title: "Step 6: Light the Fireplace", bullets: [
      "Collect Irradiated Seeds from the Yellow House Garage in the future.",
      "Plant them in the past near the Pack-a-Punch machine and feed the tree with zombie kills using the Sundergat.",
      "Throw Combat Axes at the grown tree to collect Strange Firewood.",
      "Place the firewood in the Yellow House fireplace and light it with a Molotov."
    ]},
    { id: 7, title: "Step 7: Hopscotch and Music Box", bullets: [
      "Stand on the white 'X' in Trinity Avenue (future) to trigger a hopscotch mini-game in the past.",
      "Jump from 1 to 12 and back while avoiding black mist.",
      "Kill zombies near the glowing music box to charge it and escort it to the fireplace."
    ]},
    { id: 8, title: "Step 8: Piano Puzzle", bullets: [
      "Lead the Piano Teacher zombie to the piano in the Green House.",
      "Collect 8 glowing notes around the map in the future and interact with them in order of flashes. (Open Notes Page)",
      "Play the piano in the past using the correct sequence. (Open Piano Page)"
    ], links: {
      notes: "../notes/notes.html",
      piano: "../piano/piano.html"
    }},
    { id: 9, title: "Step 9: Ball Mini-Game", bullets: [
      "Shoot the bouncing ball in the Green House Backyard to launch zombies.",
      "Kill the zombies to spawn a soul item and escort it to the Toy Box using Sundergat kills."
    ]},
    { id: 10, title: "Step 10: Goggles and Headset", bullets: [
      "Shoot the speaker pole near Pack-a-Punch to drop Goggles; use Wisp Tea perk to retrieve them.",
      "Find the Headset in one of three locations in destroyed Nuketown (Yellow House, Green House, or trash bins).",
      "Place both items in the Toy Box in past Nuketown."
    ]},
    { id: 11, title: "Step 11: Push the Ball and Four Squares", bullets: [
      "Push the red ball from Trinity Street boxes to the Green House backyard.",
      "Play Four Squares with the Twins and fill the last relic with zombie souls."
    ]},
    { id: 12, title: "Step 12: Set Doomsday Clock", bullets: [
      "In destroyed Nuketown, set the clock on the Green House roof to 00:00 by shooting the hour and minute hands.",
      "Teleport immediately while shooting the clock."
    ]},
    { id: 13, title: "Step 13: Boss Fight – Dark Heart", bullets: [
      "Follow blue orbs in past Nuketown to the Twins at the Yellow House Backyard.",
      "Engage the Dark Heart boss, shooting spores, defending the Twins, and attacking the boss’s core until defeated."
    ]}
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
  const loadCompleted = () => Storage.load("ee_completed", []);
  const saveCompleted = list => Storage.save("ee_completed", list);

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
    title.className = "neon-btn neon-cyan";
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

      if (b.includes("(Open Notes Page)")) {
        p.innerHTML = `Collect notes: <a href="${step.links.notes}?from=ee" class="neon-link ee-link-notes">Open Notes</a>`;
      } else if (b.includes("(Open Piano Page)")) {
        p.innerHTML = `Play piano: <a href="${step.links.piano}?from=ee" class="neon-link ee-link-piano">Open Piano</a>`;
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
  const last = Storage.load("ee_last_step", null);
  renderStep(last || selector.value || 1);
  renderCompleted();
  updateProgressBar();

  selector.style.display = "block";

  selector.addEventListener("change", () => {
    renderStep(selector.value);
    document.querySelector('.tab-btn[data-tab="active"]').click();
  });

  /* -----------------------------------------
     RESET EE PROGRESS
  ----------------------------------------- */
  document.getElementById("reset-ee").addEventListener("click", () => {
    Storage.remove("ee_completed");

    updateDropdown();
    renderCompleted();
    updateProgressBar();
    renderStep(selector.value || 1);

    document.querySelector('.tab-btn[data-tab="active"]').click();
    selector.style.display = "block";
  });

  /* -----------------------------------------
     RETURN BUTTON — PATCHED FOR ELECTRON
  ----------------------------------------- */
  document.getElementById("back-paradox").addEventListener("click", () => {
    Router.go("../paradox.html");
  });
});

/* -----------------------------------------
   SAVE LAST STEP WHEN OPENING NOTES/PIANO
----------------------------------------- */
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("ee-link-notes") ||
      e.target.classList.contains("ee-link-piano")) {

    Storage.save("ee_last_step", document.getElementById("step-selector").value);
  }
});
