import { Router } from "../../../scripts/router.js";

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------
     STEP DATA (CLEAN + FINAL)
  ------------------------------ */

  const sideEE = {
    music: [
      { title: "Headphone #1 – Machina Astralis", img: "music1.png",
        text: "Find the Mr Peek headphones inside the display case left of the wall-buy." },
      { title: "Headphone #2 – Luminarium Exit", img: "music2.png",
        text: "On the bottom shelf left of the Luminarium exit." },
      { title: "Headphone #3 – PaP Room Chair", img: "music3.png",
        text: "On the chair before the portal in the Pack-a-Punch room." },
      { title: "Mars Statue Music EE", img: "music4.png",
        text: "Stare at the Mars statue to trigger an instrumental version of Pareidolia." },
      { title: "Abyssal Rim Jump Music EE", img: null,
        text: "Use the Abyssal Rim jump pad to trigger a remix of Pareidolia." }
    ],

    dg2: [
      { title: "Semtex the Rock", img: "wisp-rock.png",
        text: "Throw a Semtex at the glowing rock in the Abyssal Rim." },
      { title: "Activate Wall-Run", img: null,
        text: "A wall-run path appears. Begin the run." },
      { title: "Follow Floating Path", img: null,
        text: "Jump across floating debris toward spawn." },
      { title: "Collect DG2 Upgrade", img: "dg-2.png",
        text: "Pick up the DG2 upgrade for Ol’ Tessie." },
      { title: "Rocket Flyby", img: null,
        text: "Every ~20 minutes the Ashes rocket flies past the jump spot." }
    ],

    jumpscare: [
      { title: "Use the Telescope", img: null,
        text: "Interact with the telescope overlooking space." },
      { title: "Find the Tiny Skull", img: "jumpscare.png",
        text: "Pan around until you spot the tiny skull." },
      { title: "Trigger Jumpscare", img: null,
        text: "Focus on the skull to activate the jumpscare." }
    ],

    ravager: [
      { title: "Obtain a Trinket", img: null,
        text: "Kill O.S.C.A.R. enemies until they drop a trinket." },
      { title: "Locate the Ravager", img: "bongo1.png",
        text: "Use the Tac-Map to find the Ravager outside the map." },
      { title: "Feed Trinket – Round 1", img: null,
        text: "Throw the trinket to the Ravager." },
      { title: "Feed Trinket – Round 2", img: null,
        text: "Repeat the process next round." },
      { title: "Feed Trinket – Round 3", img: null,
        text: "Feed him a third time." },
      { title: "Friendly Ravager Appears", img: "bongo2.png",
        text: "The Ravager jumps into the map and becomes friendly." }
    ],

    goat: [
      { title: "Burn Dirt Pile #1", img: "side-ee1.png",
        text: "Right of the ammo case under a light pole." },
      { title: "Burn Dirt Pile #2", img: "side-ee2.png",
        text: "At the base of the stairs following the footprints." },
      { title: "Burn Dirt Pile #3", img: "side-ee3.png",
        text: "At the top of the stairs." },
      { title: "Follow Footprints", img: null,
        text: "Follow the fiery footprints deeper into the area." },
      { title: "Find Goat Toy", img: "side-ee4.png",
        text: "The toy sits on a rock." },
      { title: "Begin the Easter Egg", img: "side-ee5.png",
        text: "Interact with the goat to start the side EE." }
    ],

    twins: [
      { title: "Trigger First Display Case", img: "twins1.png",
        text: "Interact with the dual display case on a Ravager round." },
      { title: "Round 2 Display Case", img: null,
        text: "Interact with display cases until you hear the cue." },
      { title: "Round 3 Display Case", img: null,
        text: "Repeat the process." },
      { title: "Round 4 Display Case", img: null,
        text: "Repeat again — cannot fail." },
      { title: "Twins Spawn", img: "twins2.png",
        text: "The twins appear in random locations." },
      { title: "Collect Rewards", img: null,
        text: "First drop is Cryofreeze. Later drops give loot." }
    ],

    gramophone: [
      { title: "Museum Record", img: "vinyl1.png",
        text: "On a beam left of the workbench." },
      { title: "Museum Gramophone", img: "vinyl2.png",
        text: "In front of Speed Cola." },
      { title: "Charge with Melee Kills", img: null,
        text: "Kill 15–20 zombies before the music ends." },
      { title: "Machina Record", img: "vinyl3.png",
        text: "In a basket under a wall-buy." },
      { title: "Machina Gramophone", img: "vinyl4.png",
        text: "In the Archive near Stamin-Up." },
      { title: "Charge with Equipment Kills", img: null,
        text: "Kill 15–20 zombies before the music ends." },
      { title: "Luminarium Record", img: "vinyl5.png",
        text: "Next to a grandfather clock." },
      { title: "Luminarium Gramophone", img: "vinyl6.png",
        text: "Between two couches." },
      { title: "Charge with Field Upgrade Kills", img: null,
        text: "Kill 15–20 zombies before the music ends." }
    ],

    skulls: [
      { title: "Skull #1 – Museum", img: "skull1.png",
        text: "Inside a display case." },
      { title: "Skull #2 – Walkway", img: "skull2.png",
        text: "On the walkway toward Mule Kick." },
      { title: "Skull #3 – Courtyard", img: "skull3.png",
        text: "Left of an ammo cache in a dark corner." },
      { title: "Skull #4 – Spawn Path", img: "skull4.png",
        text: "On the path toward the Luminarium." },
      { title: "Skull #5 – Machina", img: "skull5.png",
        text: "Inside a display case." },
      { title: "Place the Skulls", img: null,
        text: "Place them on the table near Stamin-Up." },
      { title: "Simon Says Sequence", img: null,
        text: "Shoot the skulls in the order they rise." },
      { title: "Claim Free Perk", img: null,
        text: "Reward spawns after correct sequence." }
    ],

    powerups: [
      { title: "Max Ammo", img: "max-ammo.png",
        text: "On a ledge in the Luminarium." },
      { title: "Full Power", img: "full-power.png",
        text: "Above Pack-a-Punch in the Observatory." },
      { title: "Max Armor", img: "max-armor.png",
        text: "On a rock in Stargazers Courtyard." },
      { title: "Insta Kill", img: "insta-kill.png",
        text: "Outside the Museum." },
      { title: "Double Points", img: "double-points.png",
        text: "Inside Machina Astralis." },
      { title: "Bonus Points", img: "bonus-points.png",
        text: "On a rock in the Crash Site." },
      { title: "Nuke", img: "nuke.png",
        text: "On top of the Archive building." },
      { title: "Fire Sale", img: "firesale.png",
        text: "Inside Museum Infinitum after all others." }
    ],

    wisps: [
      { title: "Find Wisp Lamp", img: "wisp1.png",
        text: "Locate the glowing lamp." },
      { title: "Collect the Wisp", img: null,
        text: "ADS at the lamp to collect the wisp." },
      { title: "Transfer Wisp #1", img: "wisp2.png",
        text: "ADS + melee the unlit lamp." },
      { title: "Transfer Wisp #2", img: "wisp3.png",
        text: "ADS + melee the unlit lamp." },
      { title: "Transfer Wisp #3", img: "wisp4.png",
        text: "ADS + melee the unlit lamp." },
      { title: "Transfer Wisp #4", img: "wisp5.png",
        text: "ADS + melee the unlit lamp." },
      { title: "Transfer Wisp #5", img: "wisp6.png",
        text: "ADS + melee the unlit lamp." },
      { title: "Transfer Wisp #6", img: "wisp7.png",
        text: "ADS + melee the unlit lamp." },
      { title: "Transfer Wisp #7", img: null,
        text: "ADS + melee the unlit lamp." },
      { title: "Transfer Wisp #8", img: null,
        text: "ADS + melee the unlit lamp." },
      { title: "Transfer Wisp #9", img: null,
        text: "ADS + melee the unlit lamp." },
      { title: "Collect All Wisps", img: null,
        text: "ADS at the final lamp to gather all wisps." },
      { title: "Fire Wisps", img: null,
        text: "ADS + melee to fire wisps at zombies." }
    ]
  };

  /* ------------------------------
     UI ELEMENTS
  ------------------------------ */

  const categorySelector = document.getElementById("category-selector");
  const stepsContainer = document.getElementById("steps-container");
  const backBtn = document.getElementById("back-astra");

  /* ------------------------------
     RENDER STEPS
  ------------------------------ */

  function renderCategory(cat) {
    stepsContainer.innerHTML = "";

    if (!cat) return;

    sideEE[cat].forEach(step => {
      const panel = document.createElement("div");
      panel.className = "step-panel";

      let html = `<div class="step-title">${step.title}</div>`;

      if (step.img) {
        html += `<img src="assets/${step.img}" class="step-img zoomable">`;
      }

      html += `<div class="step-text">${step.text}</div>`;

      panel.innerHTML = html;
      stepsContainer.appendChild(panel);
    });
  }

  /* ------------------------------
     EVENT LISTENERS
  ------------------------------ */

  categorySelector.addEventListener("change", () => {
    renderCategory(categorySelector.value);
  });

  backBtn.addEventListener("click", () => {
    Router.go("../astra.html");
  });

  /* ------------------------------
     IMAGE ZOOM HANDLER (MERGED)
  ------------------------------ */

  const modal = document.getElementById("img-modal");
  const modalImg = document.getElementById("img-modal-content");
  const modalClose = document.getElementById("img-modal-close");

  document.addEventListener("click", (e) => {
    const img = e.target.closest(".step-img");
    if (!img) return;

    modal.style.display = "block";
    modalImg.src = img.src;
  });

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
  });

});
