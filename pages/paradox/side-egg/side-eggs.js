import { Router } from "../../../scripts/router.js";

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------
     CLEAN SIDE EGG DATA (PATCHED FOR PAIRED ENTRIES)
  ----------------------------------------- */
  const steps = [
    {
      id: 1,
      title: "115 Clock Easter Egg",
      bullets: [
        "Be in the destroyed version of Nuketown.",
        "Shoot the clock hands until it displays 1:15 (red hand = 15).",
        "Teleport back to the pristine version of Nuketown.",
        "If done correctly, drops such as Mystery Perk, Salvage, Weapons, Aether Tool, and even a Pack-A-Punch Crystal will appear."
      ]
    },

    {
      id: 2,
      title: "Mini Golf Easter Egg",
      bullets: [
        "Make sure you’re in the past pre-destroyed version of Nuketown.",
        "In the backyard of the Yellow House is a mini golf section with several holes and golf balls.",
        "Shoot a golf ball into the hole with the white flag using only a single shot to get free Points, Armor, and Insta-Kill.",
        "If it takes more than one shot, you only receive a Points drop."
      ]
    },

    {
      id: 3,
      title: "Audio / Music Easter Egg",
      bullets: [
        "Collect headphones scattered across Clean and Destroyed Nuketown.",
        "Interacting with all three triggers a humorous jump-scare song."
      ],
      images: [
        "./assets/music1.png",
        "./assets/music2.png",
        "./assets/music3.png"
      ]
    },

    {
      id: 4,
      title: "Purple Cyst Easter Egg",
      bullets: [
        "After building the Blundergat, a purple Cyst appears in the Green House Backyard (destroyed version).",
        "It requires several items to activate:",
        "Head – Destroyed Nuketown, Trinity Ave. garage (RC-XD safe).",
        "Bone – Destroyed Nuketown, near fence behind perk location in Green House Backyard.",
        "Guts – Destroyed Nuketown, beneath truck near Pack-a-Punch in Trinity Ave.",
        "Ham – Normal Nuketown, on the counter in the Green House kitchen.",
        "Interact with the Cyst to place the items.",
        "Kill Zombies next to it to fill the Soul Box.",
        "When filled, an HVT Doppleghast named Zynvara will spawn.",
        "Defeat Zynvara to receive loot including a fixed Deadshot Daiquiri can."
      ]
    },

    /* -----------------------------------------
       ⭐ PATCHED: FREE POWER-UPS WITH PAIRED IMAGES
    ----------------------------------------- */
    {
      id: 5,
      title: "Free Power-Ups",
      entries: [
        { text: "Double Points: Burning building, northeastern Cul-de-Sac, visible through a window by the piano.", img: "./assets/bonus-points.png" },
        { text: "Max Armor: On top of the bus in the Cul-de-Sac.", img: "./assets/max-armor.png" },
        { text: "Max Ammo: Past version of Nuketown, on the transformer near Yellow House.", img: "./assets/max-ammo.png" },
        { text: "Nuke Power-Up: Top of the clock tower in the past.", img: "./assets/nuke.png" },
        { text: "Full Power: Second floor bedroom in the Green House (past version).", img: "./assets/full-power.png" },
        { text: "Insta-Kill: White picket fence on the southwest side, atop a BBQ grill.", img: "./assets/insta-kill.png" },
        { text: "Bonus Points: Trinity Avenue — hidden above a pillar of the burning building.", img: "./assets/bonus-points.png" },
        { text: "Fire Sale: Left side of the Yellow House, near shattered upstairs windows.", img: "./assets/fire-sale.png" },
        { text: "Random Perk: Bookshelf behind bunk bed in Yellow House upstairs.", img: "./assets/random-perk.png" }
      ]
    },

    {
      id: 6,
      title: "Masked Mannequin Easter Egg",
      bullets: [
        "Build the Blundergat, then interact with the masked mannequin head in the pristine Green House Upstairs.",
        "Follow the head to the headless mannequin in the Backyard and fill the Soul Box.",
        "It moves to the Yellow House Garage — fill the Soul Box again.",
        "It moves upstairs in the Yellow House — fill the Soul Box.",
        "If done correctly, the head attaches, spins, explodes, and drops high-tier loot."
      ]
    },

    {
      id: 7,
      title: "Nuketown Bunker Easter Egg",
      bullets: [
        "Build the Blundergat and teleport to the pristine version.",
        "Turn on the stove in the Yellow House kitchen.",
        "Kill a Zombie near it — it drops Meat into the pan. Throw a Molotov on it.",
        "Teleport to the destroyed version — a mannequin should now be sitting at the table.",
        "Teleport back and forth until a Bonus Points drop appears.",
        "Teleport to pristine and go to the Bunker in Green House Backyard — mannequin should now be next to it.",
        "Use Brain Rot or Psych grenade to turn a Zombie near the Bunker. It will knock on the door.",
        "Repeat until the door opens.",
        "Teleport to the destroyed version — the opened Bunker contains loot including the Mystery Perk can."
      ]
    },

    {
      id: 8,
      title: "Weeping Angel Easter Egg",
      bullets: [
        "Build the Blundergat and go to the pristine version.",
        "Look right of the perk machine on Trinity Ave. to spot a mannequin out of the map.",
        "Stare at it until its head turns away.",
        "It teleports toward you whenever unseen.",
        "Teleport back to pristine without letting it touch you.",
        "It will now appear inside the map in one of several locations.",
        "Shoot its head to receive high-tier loot."
      ]
    }
  ];

  /* -----------------------------------------
     DOM ELEMENTS
  ----------------------------------------- */
  const grid = document.getElementById("sideegg-grid");
  const selector = document.getElementById("step-selector");

  /* -----------------------------------------
     POPULATE DROPDOWN
  ----------------------------------------- */
  selector.innerHTML = `<option value="" disabled selected>Select a Category</option>`;
  steps.forEach(step => {
    const opt = document.createElement("option");
    opt.value = step.id;
    opt.textContent = step.title;
    selector.appendChild(opt);
  });

  /* -----------------------------------------
     RENDER GRID (ASTRA‑STYLE + PAIRED IMAGES)
  ----------------------------------------- */
  function renderGrid(filter = "none") {
    grid.innerHTML = "";
    if (filter === "none") return;

    const list = filter === "all" ? steps : steps.filter(s => s.id == filter);

    list.forEach(step => {
      const panel = document.createElement("div");
      panel.className = "sideegg-panel fade-in";

      const title = document.createElement("div");
      title.className = "sideegg-title";
      title.textContent = step.title;

      const text = document.createElement("div");
      text.className = "sideegg-text";

      /* -----------------------------------------
         ⭐ CASE 1: PAIRED ENTRIES (Free Power-Ups)
      ----------------------------------------- */
      if (step.entries) {
        step.entries.forEach(entry => {
          const row = document.createElement("div");
          row.className = "sideegg-row";

          const img = document.createElement("img");
          img.src = entry.img;
          img.className = "sideegg-img zoomable";

          const p = document.createElement("p");
          p.textContent = entry.text;

          row.appendChild(img);
          row.appendChild(p);
          text.appendChild(row);
        });
      }

      /* -----------------------------------------
         ⭐ CASE 2: NORMAL BULLETS + OPTIONAL IMAGES
      ----------------------------------------- */
      else {
        step.bullets.forEach(b => {
          const p = document.createElement("p");
          p.textContent = b;
          text.appendChild(p);
        });

        if (step.images) {
          step.images.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.className = "sideegg-img zoomable";
            text.appendChild(img);
          });
        }
      }

      panel.appendChild(title);
      panel.appendChild(text);
      grid.appendChild(panel);
    });
  }

  /* -----------------------------------------
     INITIAL LOAD — SHOW NOTHING
  ----------------------------------------- */
  renderGrid("none");

  /* -----------------------------------------
     DROPDOWN CHANGE
  ----------------------------------------- */
  selector.addEventListener("change", () => {
    renderGrid(selector.value);
  });

  /* -----------------------------------------
     IMAGE CLICK-TO-ZOOM
  ----------------------------------------- */
  const zoomOverlay = document.getElementById("img-zoom-overlay");
  const zoomImg = zoomOverlay.querySelector("img");

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("sideegg-img")) {
      zoomImg.src = e.target.src;
      zoomOverlay.style.display = "flex";
    }
  });

  zoomOverlay.addEventListener("click", () => {
    zoomOverlay.style.display = "none";
    zoomImg.src = "";
  });

  /* -----------------------------------------
     RETURN BUTTON — PATCHED FOR ELECTRON
  ----------------------------------------- */
  document.getElementById("back-paradox").addEventListener("click", () => {
    Router.go("../paradox.html");
  });

});
