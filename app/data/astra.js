/** Astra Malorum — Season 1. */
export const ASTRA = {
  id: "astra",
  name: "Astra Malorum",
  short: "ASTRA MALORUM",
  season: "Season 1",
  accent: "#b44cff",
  wonderWeapon: "LGM-1 (UFO gun)",
  boss: "Caltheris",
  assets: "assets/maps/astra/",
  blurb: "Fix the Harmonic Oculus, kill O.S.C.A.R. three ways for the LGM-1, decode planets and books, then teleport to Mars for Caltheris.",

  steps: [
    {
      title: "Activate Pack-a-Punch (Harmonic Oculus)",
      tag: "Power",
      where: "Machina Astralis · Luminarium · Observatory Dome",
      need: ["2 Harmonic Components"],
      bullets: [
        "<b>Machina Astralis:</b> the first component is beside the decaying corpse.",
        "<b>Luminarium:</b> tiled room with planet models and shelves — search near the second corpse for the second component. Spawns are random-ish; grab them on the way if you see them.",
        "Harmonic Oculus (Observatory Dome): install both parts and survive the <b>45-second defence</b> until it stabilises → Pack-a-Punch.",
      ],
    },
    {
      title: "Collect the codes (planets, Mars code, tower symbols)",
      tag: "Codes",
      where: "Laser Room · Teleporter Room · Statue Room · Harmonic Oculus",
      need: ["Code tracker"],
      bullets: [
        "Find the three planet direction sheets: <b>Laser Room</b> (to the right), <b>Teleporter Room</b> (table above the Armor wall buy), <b>Statue Room</b> (table at the bottom of the attic ladders). Red planet = Mars, blue = Neptune, ringed = Saturn. Log the directions.",
        "In the Harmonic Oculus viewer locate <b>Mars</b>. With the crosshair on it a code appears bottom-left → log the Mars code.",
        "Boss tower code: click the right side of the Harmonic Oculus and note the symbol order (one image is missing). Log it with the symbol order tool.",
      ],
      tools: ["planets", "mars", "symbols"],
    },
    {
      title: "Prepare the O.S.C.A.R. traps",
      tag: "Trap parts",
      where: "Purple crystals · Oculus Room vents · street lamp · Ol' Tessie",
      need: ["Cryofreeze ammo mod", "PaP weapon"],
      bullets: [
        "Get <b>Cryofreeze</b> and shoot 3 purple crystals for shard fragments (Stargazer's Courtyard is rich).",
        "Harmonic Oculus Room: listen for escaping steam and shoot the <b>5 hissing vents</b> (one hisses at a time).",
        "Find the <b>flashing street lamp</b>, shoot it. Then shoot Ol' Tessie's bonnet with a PaP weapon.",
        "Shoot O.S.C.A.R.'s UFO drone and pick it up.",
      ],
    },
    {
      title: "Kill O.S.C.A.R. three times → LGM-1",
      tag: "Wonder weapon",
      where: "Museum · Oculus (Sun) · Laser Room (Jug)",
      need: ["Trap parts"],
      bullets: [
        "<b>Rocket trap:</b> bring O.S.C.A.R. into the Museum and use the rocket display while he is in the blast path.",
        "<b>Sun trap:</b> Harmonic Oculus viewer — locate the <b>Sun</b> with O.S.C.A.R. inside the room; aiming at the Sun fires the trap.",
        "<b>Laser trap:</b> Laser Room (Jug). Place the parts, wait for him to enter, activate and keep him inside until his battery overloads.",
        "After all three he drops the <b>LGM-1</b>. Failed one? Farm 3 more fragments and retry (advance a round if you already killed him this round).",
      ],
    },
    {
      title: "O.S.C.A.R. & the planet code",
      tag: "3-digit code",
      where: "Follow O.S.C.A.R. → Oculus Room machine (left from Starglaze)",
      need: ["Planet code tool"],
      bullets: [
        "O.S.C.A.R. respawns ~3 rounds after dropping the gun. Stay out of his line of sight and follow behind.",
        "Wait for “Elimination 20”. He then names <b>three planets</b> — pick them in the tracker and it gives the 3-digit code (planet number from the Sun).",
        "Enter the code on the machine to the left when entering the Oculus Room from Starglaze.",
      ],
      tools: ["planets"],
    },
    {
      title: "The brain",
      tag: "Key · hacksaw · lockdown",
      where: "PaP platform → room between Teleporter and Museum → Jug area",
      need: ["Key", "Hacksaw"],
      bullets: [
        "A platform drops beside PaP — jump up and grab the <b>Key</b>.",
        "Room between the Teleporter and Museum: cut out the brain (hacksaw from the Museum), bring it to the Jug area.",
        "Place the brain in the jar holding the monkey brain and survive the lockdown. Pick up the jar and go to the Teleporter Room.",
      ],
    },
    {
      title: "The books (statues)",
      tag: "Attic → Neptune",
      where: "Machine beside the Teleporter → statues",
      need: ["Books tool"],
      bullets: [
        "Put the container in the machine beside the Teleporter. The screen shows <b>book names</b>.",
        "In the tracker tick the shown books for Statue 1–3. The count per statue = how many times to turn that statue.",
        "Correct turns open the attic → collect <b>Neptune</b>.",
      ],
      tools: ["books"],
    },
    {
      title: "Planet alignment → Mars",
      tag: "Teleport",
      where: "Statue door holder · Machina planets · Teleport Device",
      need: ["Neptune", "Planet directions", "Mars code"],
      bullets: [
        "Place Neptune on the holder above the statue-puzzle door.",
        "Shoot the planets to match the directions you logged (Mars / Neptune / Saturn).",
        "Teleport Device: enter the <b>Mars code</b>. Interact with the brain to start the lockdown.",
        "Shoot <b>only</b> the drones O.S.C.A.R. fires at the teleporter. Survive → Mars.",
      ],
      tools: ["planets", "mars"],
    },
    {
      title: "Ascendant Eye on Mars",
      tag: "Pillars",
      where: "Mars central platform",
      need: ["LGM-1"],
      bullets: [
        "Jump to the central boss platform, pick up the Brain Container when it spawns, connect it to the machine at the top of the stairs, interact again for a tone.",
        "Shoot the pillars behind the map: <b>Back Right → Back Left → Front Right → Front Left</b>.",
        "Turn around, shoot the pillar above the stairs to the teleporter — the <b>Ascendant Eye</b> flies out. Shoot that pillar again as the tone nearly stops to hold it, then jump and grab it. <b>Never shoot the Eye.</b>",
        "Place the Eye in the holder in the right-side corner.",
      ],
    },
    {
      title: "Pillars → Boss: Caltheris",
      tag: "Final",
      where: "Mars",
      need: ["Symbol order"],
      bullets: [
        "With the Eye placed, the pillars release their aerial conductors — shoot all five with the LGM-1.",
        "Input the symbol order you logged earlier (Mars symbols tool).",
        "Interact with the brain one last time to start <b>Caltheris</b>. Stock ammo, armour and gums first — there is no retreat.",
      ],
      tools: ["symbols"],
    },
  ],

  cheat: [
    {
      id: "planets",
      title: "Planet directions + 3-digit planet code",
      wide: true,
      body: "Directions come from the three sheets (red = Mars, blue = Neptune, ringed = Saturn). The code = each planet's number from the Sun (Mercury 1 … Neptune 8) in the order O.S.C.A.R. says them.",
      tool: { type: "astra-planets" },
    },
    {
      id: "mars",
      title: "Mars code (Oculus viewer)",
      body: "Crosshair on Mars in the Harmonic Oculus viewer → code bottom-left. Enter it on the Teleport Device.",
      tool: { type: "fields", fields: [{ id: "code", label: "Mars code", type: "text", placeholder: "####", maxlength: 6, big: true }] },
    },
    {
      id: "books",
      title: "Books → statue turns",
      wide: true,
      body: "Tick the book names the screen shows. The number next to each statue is how many times to turn it.",
      tool: {
        type: "astra-books",
        statues: [
          { label: "Statue 1", img: "tracker/statue1.png", books: ["The Black Veil", "The Moon Directive", "The Musical Universe"] },
          { label: "Statue 2", img: "tracker/statue2.png", books: ["Ash And Bone", "The Unknowable Void", "Echos Of Andromedia"] },
          { label: "Statue 3", img: "tracker/statue3.png", books: ["Pyramid Of Cydonia", "Witchlight Codex", "Silence At Singulaty"] },
        ],
      },
    },
    {
      id: "symbols",
      title: "Mars symbols order (boss tower)",
      wide: true,
      body: "Use ▲ ▼ to put the symbols in the order the Oculus showed. One symbol will be missing in-game — that is normal.",
      tool: {
        type: "order",
        items: [
          { img: "tracker/193039.png", label: "Symbol A" },
          { img: "tracker/193044.png", label: "Symbol B" },
          { img: "tracker/193048.png", label: "Symbol C" },
          { img: "tracker/193052.png", label: "Symbol D" },
          { img: "tracker/193114.png", label: "Symbol E" },
        ],
      },
    },
    {
      id: "mars-pillars",
      title: "Mars pillar order",
      body: "<div class=\"seq\"><span>Back R</span><span>Back L</span><span>Front R</span><span>Front L</span></div>Then the pillar above the teleporter stairs. Re-shoot it as the tone fades to hold the Ascendant Eye. Never shoot the Eye itself.",
    },
    {
      id: "traps",
      title: "O.S.C.A.R. trap recap",
      body: "<b>Rocket</b> — Museum rocket display, he must be in the blast path.<br><b>Sun</b> — Oculus viewer on the Sun while he is in the room.<br><b>Laser</b> — Laser Room (Jug), parts placed, keep him inside.<br>Parts: 3 Cryofreeze crystal fragments · 5 vents · flashing lamp · Tessie bonnet (PaP gun) · drone.",
    },
  ],

  side: [
    {
      title: "Music easter egg",
      entries: [
        { title: "Headphones #1 – Machina Astralis", text: "Display case left of the wall buy.", imgs: [["side/music1.png", ""]] },
        { title: "Headphones #2 – Luminarium exit", text: "Bottom shelf left of the Luminarium exit.", imgs: [["side/music2.png", ""]] },
        { title: "Headphones #3 – PaP room chair", text: "On the chair before the portal in the Pack-a-Punch room." },
        { title: "Mars statue", text: "Stare at the Mars statue for an instrumental Pareidolia.", imgs: [["side/music4.png", ""]] },
        { title: "Abyssal Rim jump", text: "Use the Abyssal Rim jump pad for a Pareidolia remix." },
      ],
    },
    {
      title: "DG-2 upgrade for Ol' Tessie",
      entries: [
        { title: "Semtex the rock", text: "Throw a Semtex at the glowing rock in the Abyssal Rim.", imgs: [["side/wisp-rock.png", ""]] },
        { title: "Wall-run + floating path", text: "A wall-run path appears; jump across the floating debris toward spawn." },
        { title: "Collect the DG-2", text: "Pick up the DG-2 upgrade. Every ~20 minutes the Ashes rocket flies past the jump spot.", imgs: [["side/dg-2.png", ""]] },
      ],
    },
    {
      title: "Telescope jumpscare",
      entries: [{ title: "Tiny skull", text: "Use the telescope, pan around until you spot the tiny skull, focus on it.", imgs: [["side/jumpscare.png", ""]] }],
    },
    {
      title: "Friendly Ravager (trinkets)",
      entries: [
        { title: "Feed it three rounds", text: "Kill O.S.C.A.R. enemies for a trinket, find the Ravager outside the map on the Tac-Map, throw it a trinket on three separate rounds.", imgs: [["side/bongo1.png", ""]] },
        { title: "It joins you", text: "The Ravager jumps into the map and becomes friendly.", imgs: [["side/bongo2.png", ""]] },
      ],
    },
    {
      title: "Goat toy",
      entries: [
        { title: "Burn three dirt piles", text: "Right of the ammo case under a light pole · base of the stairs following the footprints · top of the stairs.", imgs: [["side/side-ee1.png", ""], ["side/side-ee2.png", ""], ["side/side-ee3.png", ""]] },
        { title: "Follow the footprints", text: "Fiery footprints lead to the goat toy on a rock. Interact to start.", imgs: [["side/side-ee4.png", ""], ["side/side-ee5.png", ""]] },
      ],
    },
    {
      title: "Twins (display cases)",
      entries: [
        { title: "Ravager rounds", text: "Interact with the dual display case on a Ravager round, then again on the next three rounds (cannot fail).", imgs: [["side/twins1.png", ""]] },
        { title: "Rewards", text: "The twins spawn in random spots. First drop is Cryofreeze, later drops give loot.", imgs: [["side/twins2.png", ""]] },
      ],
    },
    {
      title: "Gramophones (three records)",
      entries: [
        { title: "Museum", text: "Record on a beam left of the workbench → gramophone in front of Speed Cola → 15–20 melee kills before the music ends.", imgs: [["side/vinyl1.png", ""], ["side/vinyl2.png", ""]] },
        { title: "Machina", text: "Record in a basket under a wall buy → gramophone in the Archive near Stamin-Up → 15–20 equipment kills.", imgs: [["side/vinyl3.png", ""], ["side/vinyl4.png", ""]] },
        { title: "Luminarium", text: "Record next to the grandfather clock → gramophone between two couches → 15–20 field-upgrade kills.", imgs: [["side/vinyl5.png", ""], ["side/vinyl6.png", ""]] },
      ],
    },
    {
      title: "Skulls → free perk",
      entries: [
        { title: "Five skulls", text: "Museum display case · walkway toward Mule Kick · courtyard dark corner left of an ammo cache · path toward the Luminarium · Machina display case.", imgs: [["side/skull1.png", ""], ["side/skull2.png", ""], ["side/skull3.png", ""], ["side/skull4.png", ""], ["side/skull5.png", ""]] },
        { title: "Simon says", text: "Place them on the table near Stamin-Up, shoot the skulls in the order they rise → free perk." },
      ],
    },
    {
      title: "Free power-ups",
      entries: [
        { title: "Max Ammo", text: "Ledge in the Luminarium.", imgs: [["side/max-ammo.png", ""]] },
        { title: "Full Power", text: "Above Pack-a-Punch in the Observatory.", imgs: [["side/full-power.png", ""]] },
        { title: "Max Armor", text: "Rock in Stargazers Courtyard.", imgs: [["side/max-armor.png", ""]] },
        { title: "Insta-Kill", text: "Outside the Museum.", imgs: [["side/insta-kill.png", ""]] },
        { title: "Double Points", text: "Inside Machina Astralis.", imgs: [["side/double-points.png", ""]] },
        { title: "Bonus Points", text: "Rock in the Crash Site.", imgs: [["side/bonus-points.png", ""]] },
        { title: "Nuke", text: "Top of the Archive building.", imgs: [["side/nuke.png", ""]] },
        { title: "Fire Sale", text: "Inside Museum Infinitum after all the others.", imgs: [["side/firesale.png", ""]] },
      ],
    },
    {
      title: "Lamp wisps",
      entries: [
        { title: "Collect and transfer", text: "ADS at the glowing lamp to collect the wisp, then ADS + melee each unlit lamp in turn (9 transfers).", imgs: [["side/wisp1.png", ""], ["side/wisp2.png", ""], ["side/wisp3.png", ""], ["side/wisp4.png", ""], ["side/wisp5.png", ""], ["side/wisp6.png", ""], ["side/wisp7.png", ""]] },
        { title: "Fire", text: "ADS at the final lamp to gather all wisps, then ADS + melee to fire them at zombies." },
      ],
    },
  ],
};
