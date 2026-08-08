/** Kowakujō — Main EE steps + code tracker links */
export const KOWAKUJO = {
  mapId: "kowakujo",
  title: "KOWAKUJŌ – EASTER EGG GUIDE",
  accentClass: "neon-green",
  accentVar: "#00ff88",
  backPath: "../kowakujo.html",
  wonderWeapon: "Nekomancer",
  boss: "Nyxara",
  linkMap: {
    "CODE TRACKER": "../codes/codes.html?from=ee",
  },
  steps: [
    {
      title: "STEP 1 — World Seed & Pack-a-Punch",
      text: `
<b>Recapture wards → Sanctum</b>
<br>• Recapture <b>Kitchens Ward</b> and <b>Training Area Ward</b> (stand at banner, fill capture bar).
<br>• Central Courtyard: remove <b>Gate Glyphs</b> (Oni symbols on castle doors).
<br>• War Room: kill the <b>Oni</b> → pick up <b>Shogun’s Hanko</b>.
<br>• Use Hanko on the golden dragon door → enter <b>Shogun’s Sanctum</b>.
<br>• Kill purple-marked zombies near the <b>World Seed</b> until it beams → <b>Pack-a-Punch</b> appears.
`,
    },
    {
      title: "STEP 2 — Craft Maneki-Neko",
      text: `
<b>Lucky cat tactical</b>
<br>• Collect the three Maneki-Neko craft parts across the map.
<br>• Build <b>Maneki-Neko</b> at the Workshop.
<br>• Buy <b>PhD Flopper</b> (Storage Rooms) — required for the cage dive.
`,
    },
    {
      title: "STEP 3 — Obtain Nekomancer Wonder Weapon",
      text: `
<b>Cat rescue ritual</b>
<br>• Tenshu Entrance SW: PhD dolphin-dive under the caged cat to drop the cage.
<br>• Carry cage to lava (Training Area works) and throw it in.
<br>• Kill zombies at paw-print locations until prints form a circle; when lava flows across, throw Maneki-Neko into the center.
<br>• Kill the <b>Abomination</b> that eats the cat; use <b>Death Perception</b> to recover the cat.
<br>• Carry cat to World Seed (Sanctum). Kill near seed until it pulses red → melee between shockwaves → pick up <b>Nekomancer</b>.
<br>• PaP later → Tsunderera-Hime (optional power spike).
`,
    },
    {
      title: "STEP 4 — Light 11 Lanterns",
      text: `
<b>Purple flame trail</b>
<br><img src="../codes/assets/lantern-map.jpg" class="ee-img zoomable" alt="Lantern route">
<br>• Equip Nekomancer and shoot <b>11 stone lanterns</b> in the timed path (≈10s between lanterns or restart next round).
<br>• Tick them off here as you go: [CODE TRACKER]
<br>• Route starts at Tenshu Entrance and weaves Outer Ward / Courtyard / Gardens / Training (use community lantern map if needed).
`,
    },
    {
      title: "STEP 5 — Fox Mask Simon Says",
      text: `
<b>Evidence: Fox Mask</b>
<br>• Trigger the Fox Mask Simon Says / memory sequence.
<br>• Repeat the shown pattern correctly — jot the pattern if needed: [CODE TRACKER]
<br>• Secure the Fox Mask evidence.
`,
    },
    {
      title: "STEP 6 — Monkshood Flower",
      text: `
<b>Evidence: Monkshood</b>
<br>• Grow / harvest the <b>Monkshood Flower</b> evidence using the gardening interaction on the map.
<br>• Protect it through the grow timer if enemies aggro the plant.
`,
    },
    {
      title: "STEP 7 — Coin Purse, Shears, Abacus, Noble’s Hat",
      text: `
<b>Role evidence set</b>
<br>• Collect <b>Coin Purse</b>, <b>Gardening Shears</b>, <b>Mercantile Abacus</b>, and <b>Noble’s Hat</b> from their marked locations / NPC caches.
<br>• Keep them — needed for the murder board.
`,
    },
    {
      title: "STEP 8 — Scrolls Pestle + Puffer Fish",
      text: `
<b>Evidence: Pestle & Puffer</b>
<br>• Solve the <b>scrolls puzzle</b> to receive the <b>Pestle</b>.
<br>• Obtain the <b>Puffer Fish</b> evidence (fishing / vendor step tied to Pestle use).
`,
    },
    {
      title: "STEP 9 — Defend Sake Cup",
      text: `
<b>Evidence: Sake Cup</b>
<br>• Build / place the Sake Cup and <b>defend</b> it through the lockdown.
<br>• Collect the additional evidence reward when the defense succeeds.
`,
    },
    {
      title: "STEP 10 — Clock & Flag → Crest Medallion",
      text: `
<b>Evidence: Crest Medallion</b>
<br><img src="../codes/assets/clock-math.jpg" class="ee-img zoomable" alt="Clock math">
<br>• Solve the <b>clock & flag</b> puzzle — record numbers / notes: [CODE TRACKER]
<br>• Claim the <b>Crest Medallion</b> evidence.
`,
    },
    {
      title: "STEP 11 — Solve the Murder Mystery",
      text: `
<b>Accusation board</b>
<br><img src="../codes/assets/murder-board.jpg" class="ee-img zoomable" alt="Murder board">
<br>• Place all evidence on the murder mystery board / shrine.
<br>• Record which evidence goes on each poster for this run: [CODE TRACKER]
<br>• Select the correct culprit combination (Takeo’s father mystery).
<br>• Wrong guesses usually soft-fail — recheck evidence before locking in.
`,
    },
    {
      title: "STEP 12 — Fight the Onryo",
      text: `
<b>HVT Oni</b>
<br>• Interact with the cleansed World Seed to start.
<br>• Fight <b>Onryo</b> in Central Courtyard.
<br>• When immune, shoot the thrown masks to strip immunity.
<br>• After victory, restock — Nyxara portal opens from PaP roof path.
`,
    },
    {
      title: "STEP 13 — Boss: Nyxara",
      text: `
<b>Dragon fight (3 phases)</b>
<br>• Capture the central circle for temporary invuln vs volcanic strips.
<br>• Crit the eyes early; carry Oni-dropped flags back to the zone to refresh invuln.
<br>• Later phases escalate fire lanes / adds — stay in safe strips and burst weak points.
<br>• Defeat Nyxara to complete Kowakujō Main Quest.
`,
    },
  ],
};
