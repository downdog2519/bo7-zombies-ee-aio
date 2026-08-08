import { Router } from "../../../scripts/router.js";
import { Storage } from "../../../scripts/storage.js";

document.addEventListener("DOMContentLoaded", () => {

  const selector = document.getElementById("sideee-selector");
  const grid = document.getElementById("sideee-grid");

  const zoomOverlay = document.getElementById("img-zoom-overlay");
  const zoomImg = zoomOverlay.querySelector("img");

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
     CATEGORY DATA
  --------------------------------------------- */
  const DATA = {
    "Easter Egg Song": [
      {
        title: "Song Location 1",
        text: "On top of a server next to Quick Revive in the Janus Towers POI.",
        images: ["music1.png"]
      },
      {
        title: "Song Location 2",
        text: "On top of a beam in Judgment Square within Ashwood – Near Double Tap.",
        images: ["music2.png"]
      },
      {
        title: "Song Location 3",
        text: "In a car outside of the Diner in the Exit 115 POI.",
        images: ["music3.png"]
      }
    ],

    "Free Wisp Tea": [
      {
        title: "Static TV Step",
        text: "Interact with the static TV upstairs in Vandorn Farm until the people change.",
        images: ["wisp1.png", "wisp2.png", "wisp3.png", "wisp4.png"]
      },
      {
        title: "Ghost Tic Tac Toe",
        text: "Head downstairs under the barn to the ghost playing tic tac toe.",
        images: ["wisp5.png", "wisp6.png", "wisp7.png"]
      }
    ],

    "Craft Free Perks": [
      {
        title: "Quick Revive Ingredients",
        text: "Toilet Cleaner, Fish, Syringe.",
        images: ["toilet-cleaner.png", "fish.png", "syringe.png"]
      },
      {
        title: "Juggernog Ingredients",
        text: "Leaf, Milk, Eggs.",
        images: ["leaf.png", "milk.png", "eggs.png"]
      },
      {
        title: "Speed Cola Ingredients",
        text: "Under-truck item, Store box item, Sugar.",
        images: ["undertruck.png", "store.png", "sugar.png"]
      },
      {
        title: "Stamina Up Ingredients",
        text: "Nails, Beans, Gasoline.",
        images: ["nails.png", "beans.png", "gas.png"]
      },
      {
        title: "Crafting the Perk",
        text: "Return to the diner and interact with the drink machine.",
        images: ["stir.png"]
      }
    ],

    "Permanent Double Points": [
      {
        title: "Find Paw Prints",
        text: "Follow glowing paw prints using Death Perception.",
        images: ["bearprint.png"]
      },
      {
        title: "Defeat Zursa",
        text: "Defeat Zursa with melee for the Claw Talisman.",
        images: ["wonbear.png"]
      }
    ],

    "Mister Peeks Axe Throwing": [
      {
        title: "Find Trophy & Tomahawk",
        text: "Interact with the trophy, then grab the tomahawk.",
        images: ["throwaxe1.png", "throwaxe2.png"]
      },
      {
        title: "Hit Floating Targets",
        text: "Throw the tomahawk at floating targets.",
        images: ["throwaxe3.png"]
      },
      {
        title: "Reward",
        text: "Mister Peeks appears and drops loot.",
        images: ["throwaxe4.png"]
      }
    ],

    "All Free Powerup Locations": [
      { title: "Max Armor", text: "Inside a shipping container on the grounded ship.", images: ["maxarmor.png"] },
      { title: "Nuke", text: "On top of the church in Ashwood.", images: ["nuke.png"] },
      { title: "Insta-Kill", text: "Shoot the icon inside the Vandorn Farm silo.", images: ["insta-kill.png"] },
      { title: "Full Power", text: "Look down from Zarya Cosmodrome.", images: ["full-power.png"] },
      { title: "Max Ammo", text: "Inside a panel above Quick Revive at Janus Reception.", images: ["maxammo.png"] }
    ],

    "Forced Zursa Spawn": [
      {
        title: "Shoot the Skulls",
        text: "Use the Necrofluid Gauntlet to shoot and retract three skulls.",
        images: ["bear1.png", "bear2.png", "bear3.png"]
      }
    ],

    "Restart Lightning Step": [
      {
        title: "Shoot Sparking Poles",
        text: "Use Ol’ Tessie on three sparking light poles.",
        images: ["light1.png", "light2.png", "light3.png"]
      }
    ],

    "Tank Dempsey Side Quest": [
      {
        title: "Find Dog Tags",
        text: "Locate bodies and dog tags near the Crashed Rocket.",
        images: ["dempsey1.png", "dempsey2.png"]
      },
      {
        title: "Survive the Forest",
        text: "Fight undead while Dempsey is taunted.",
        images: ["dempsey3.png", "dempsey4.png"]
      }
    ],

    "RC-XD Race": [
      {
        title: "Find the Controller",
        text: "Inside the two-floor cabin in the fog.",
        images: ["rcd1.png", "rcd2.png"]
      }
    ]
  };

  /* ---------------------------------------------
     POPULATE SELECTOR
  --------------------------------------------- */
  Object.keys(DATA).forEach(key => {
    const opt = document.createElement("option");
    opt.value = key;
    opt.textContent = key;
    selector.appendChild(opt);
  });

  /* ---------------------------------------------
     RENDER CATEGORY
  --------------------------------------------- */
  selector.addEventListener("change", () => {
    const category = selector.value;
    const entries = DATA[category];

    grid.innerHTML = "";

    entries.forEach(entry => {
      const panel = document.createElement("div");
      panel.className = "sideee-panel fade-in";

      const title = `<h2 class="sideee-title">${entry.title}</h2>`;
      const text = `<div class="sideee-text"><p>${entry.text}</p></div>`;

      const imgs = entry.images
        .map(img => `<img src="assets/${img}" class="sideee-img zoomable">`)
        .join("");

      panel.innerHTML = title + text + imgs;
      grid.appendChild(panel);
    });

    enableZoom();
  });

  /* ---------------------------------------------
     ZOOM FUNCTIONALITY
  --------------------------------------------- */
  function enableZoom() {
    document.querySelectorAll(".zoomable").forEach(img => {
      img.addEventListener("click", () => {
        zoomImg.src = img.src;
        zoomOverlay.style.display = "flex";
      });
    });

    zoomOverlay.addEventListener("click", () => {
      zoomOverlay.style.display = "none";
    });
  }

  /* ---------------------------------------------
     BACK BUTTON
  --------------------------------------------- */
  document.getElementById("back-ashes").addEventListener("click", () => {
    Router.go("../ashes.html");
  });

});
