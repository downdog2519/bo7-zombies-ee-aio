/** Paradox Junction — Season 2 Reloaded. */
export const PARADOX = {
  id: "paradox",
  name: "Paradox Junction",
  short: "PARADOX JUNCTION",
  season: "Season 2 Reloaded",
  accent: "#00eaff",
  wonderWeapon: "Blundergat → Sundergat",
  boss: "Dark Heart",
  assets: "assets/maps/paradox/",
  blurb: "Two Nuketowns — past (clean) and future (destroyed). Build the Blundergat, upgrade it, feed the Twins' toys, play the piano, set the clock to 00:00 and fight the Dark Heart.",

  steps: [
    {
      title: "Activate Pack-a-Punch (time knots)",
      tag: "Power",
      where: "Yellow House backyard → Trinity Avenue storm",
      need: ["Truck keys"],
      bullets: [
        "Pick up the <b>Truck Keys</b> from the zombie corpse in the Yellow House backyard.",
        "Survive to Round 6–7 → teleported to the past Nuketown. Use the keys to move the truck blocking Trinity Avenue.",
        "In the temporal storm destroy the <b>four Space-Time Knots</b> (each spawns purple-eyed zombies). Pack-a-Punch unlocks.",
      ],
    },
    {
      title: "Craft the Blundergat",
      tag: "Wonder weapon",
      where: "Both timelines → truck workbench",
      need: ["Sealant", "Barrel", "Hammer", "Stock"],
      bullets: [
        "<b>Sealant:</b> bookshelf in the past Yellow House upstairs.",
        "<b>Barrel:</b> drops from Loot Cysts in the future Nuketown — kill zombies near them.",
        "<b>Hammer:</b> SO3 vial in the future Yellow House → convert to H2SO4 at the Green House sink → pour the acid on a mannequin in the past.",
        "<b>Stock:</b> destroy the black goo on walls in the past, then collect the Stock in the future.",
        "Assemble at the workbench inside the truck → <b>Blundergat</b>.",
      ],
    },
    {
      title: "Upgrade to the Sundergat",
      tag: "Tortured zombies",
      where: "Destroyed Nuketown → truck workbench",
      need: ["Blundergat"],
      bullets: [
        "Tortured Zombies spawn in a fire tornado in destroyed Nuketown. Lead each to the workbench and kill it with the Blundergat. Do not let other zombies drain it.",
        "Three times — the third is a Mimic.",
        "Past: melee the workbench. Future: collect the <b>Sundergat</b>.",
      ],
    },
    {
      title: "RC-XD garage",
      tag: "Chalk",
      where: "Yellow House garage / Green House backyard / right of PaP",
      need: ["RC-XD remote"],
      bullets: [
        "Remote is in one of three spots: Yellow House garage, Green House backyard, or right of Pack-a-Punch.",
        "Drive the RC-XD to the locked garage and detonate → collect the <b>Chalk</b> inside.",
      ],
    },
    {
      title: "Spawn the Twins",
      tag: "Swing",
      where: "Yellow House backyard (past → future)",
      need: ["Swing seat", "Chalk"],
      bullets: [
        "Past: shoot the swing seat in the Yellow House backyard and pick it up.",
        "Future: place the seat and the Chalk in the same spot → Twins animation.",
      ],
    },
    {
      title: "Light the fireplace",
      tag: "Strange Firewood",
      where: "Garage (future) → PaP grass (past) → Yellow House fireplace",
      need: ["Irradiated Seeds", "Sundergat", "Combat Axes", "Molotov"],
      bullets: [
        "Irradiated Seeds from the future Yellow House garage. Plant them in the past near Pack-a-Punch and feed the tree with Sundergat kills.",
        "Throw Combat Axes at the grown tree → <b>Strange Firewood</b>.",
        "Place it in the Yellow House fireplace and light it with a Molotov.",
      ],
    },
    {
      title: "Hopscotch + music box",
      tag: "Minigame",
      where: "Trinity Avenue white X (future)",
      need: ["Sundergat"],
      bullets: [
        "Stand on the white X in Trinity Avenue (future) → hopscotch in the past. Jump 1 → 12 and back, avoid the black mist.",
        "Kill zombies near the glowing music box to charge it, escort it to the fireplace.",
      ],
    },
    {
      title: "Piano puzzle",
      tag: "Notes + piano",
      where: "Green House",
      need: ["Piano Teacher zombie", "8 notes"],
      bullets: [
        "Lead the Piano Teacher zombie to the Green House piano (Brain Rot / Psyche grenade helps).",
        "Collect the 8 glowing notes around the future map and interact in the order they flash — mark them on the <b>Notes map</b>.",
        "Play the piano in the past: <b>8 6 7 5 6 5 3 5</b>.",
      ],
      tools: ["notes", "piano"],
    },
    {
      title: "Ball minigame",
      tag: "Soul escort",
      where: "Green House backyard",
      need: ["Sundergat"],
      bullets: [
        "Shoot the bouncing ball in the Green House backyard to launch zombies. Kill them to spawn a soul item and escort it to the Toy Box with Sundergat kills.",
      ],
    },
    {
      title: "Goggles and headset",
      tag: "Toy Box",
      where: "Speaker pole by PaP · destroyed Nuketown · Toy Box (past)",
      need: ["Wisp Tea"],
      bullets: [
        "Shoot the speaker pole near Pack-a-Punch to drop the <b>Goggles</b>; retrieve with Wisp Tea.",
        "<b>Headset</b> in one of three future spots: Yellow House, Green House, or the trash bins.",
        "Place both in the Toy Box in the past.",
      ],
    },
    {
      title: "Push the ball + four squares",
      tag: "Relic",
      where: "Trinity Street → Green House backyard",
      need: ["Sundergat"],
      bullets: [
        "Push the red ball from the Trinity Street boxes to the Green House backyard.",
        "Play Four Squares with the Twins and fill the last relic with souls.",
      ],
    },
    {
      title: "Doomsday clock to 00:00",
      tag: "Boss trigger",
      where: "Green House roof (future)",
      need: ["Any gun"],
      bullets: ["Shoot the hour and minute hands until it reads <b>00:00</b>, teleporting right as you finish."],
    },
    {
      title: "Boss: Dark Heart",
      tag: "Final",
      where: "Past Nuketown → Yellow House backyard",
      need: ["Full ammo + armour"],
      bullets: [
        "Follow the blue orbs to the Twins in the Yellow House backyard.",
        "Shoot spores, protect the Twins, hit the core between phases. Use the Sundergat on Tortured spawns.",
      ],
    },
  ],

  cheat: [
    {
      id: "notes",
      title: "Notes map · order the 8 notes",
      wide: true,
      body: "Pick 1–8 on each note position in the order they flash. Values save automatically.",
      tool: {
        type: "notes-map",
        img: "note-locations.jpg",
        points: [
          { id: "n1", left: 91.3, top: 26.6 },
          { id: "n2", left: 60.7, top: 14.3 },
          { id: "n3", left: 50.1, top: 35.9 },
          { id: "n4", left: 19.2, top: 11.1 },
          { id: "n5", left: 40.1, top: 53.4 },
          { id: "n6", left: 65.0, top: 57.6 },
          { id: "n7", left: 37.2, top: 77.8 },
          { id: "n8", left: 57.8, top: 91.0 },
        ],
      },
    },
    {
      id: "piano",
      title: "Piano sequence",
      body: "<div class=\"seq\"><span>8</span><span>6</span><span>7</span><span class=\"hi\">5</span><span>6</span><span>5</span><span>3</span><span>5</span></div>Read left to right. Play in the past Green House after the teacher unlocks it.",
    },
    {
      id: "parts",
      title: "Blundergat parts",
      body: "<b>Sealant</b> — past Yellow House upstairs bookshelf.<br><b>Barrel</b> — future Loot Cysts.<br><b>Hammer</b> — SO3 (future Yellow House) → Green House sink → acid on a past mannequin.<br><b>Stock</b> — black goo in the past → pick up in the future.<br>Craft in the truck.",
      tool: { type: "checklist", items: ["Sealant", "Barrel", "Hammer", "Stock", "Blundergat built", "Sundergat (3 tortured kills)", "Chalk", "Swing seat", "Strange Firewood", "Goggles", "Headset"] },
    },
    {
      id: "spawns",
      title: "Random spawn spots",
      body: "<b>RC-XD remote:</b> Yellow House garage · Green House backyard · right of PaP.<br><b>Headset:</b> Yellow House · Green House · trash bins (future).",
    },
  ],

  side: [
    {
      title: "1:15 clock",
      entries: [{ title: "Set the clock to 1:15", text: "In destroyed Nuketown shoot the clock hands until it reads 1:15 (red hand = 15), then teleport to the clean version for drops (Mystery Perk, salvage, weapons, Aether Tool, even a PaP crystal)." }],
    },
    {
      title: "Mini golf",
      entries: [{ title: "One-shot the white-flag hole", text: "Past Nuketown, Yellow House backyard. Sink a ball in the white-flag hole with a single shot for points, armour and Insta-Kill. More than one shot = points only." }],
    },
    {
      title: "Music easter egg",
      entries: [{ title: "Three headphones", text: "Collect the headphones across both timelines for a jump-scare song.", imgs: [["side/music1.png", ""], ["side/music2.png", ""], ["side/music3.png", ""]] }],
    },
    {
      title: "Purple cyst (Zynvara)",
      entries: [{ title: "Feed the cyst", text: "After building the Blundergat a cyst appears in the future Green House backyard. Items: Head (future Trinity garage), Bone (future, fence behind the perk in the Green House backyard), Guts (future, under the truck near PaP), Ham (past, Green House kitchen counter). Fill the soul box → Zynvara → loot incl. a Deadshot can." }],
    },
    {
      title: "Free power-ups",
      entries: [
        { title: "Double Points", text: "Burning building NE of the cul-de-sac, through the window by the piano.", imgs: [["side/double-points.png", ""]] },
        { title: "Max Armor", text: "On top of the bus in the cul-de-sac.", imgs: [["side/max-armor.png", ""]] },
        { title: "Max Ammo", text: "Past Nuketown, transformer near the Yellow House.", imgs: [["side/max-ammo.png", ""]] },
        { title: "Nuke", text: "Top of the clock tower in the past.", imgs: [["side/nuke.png", ""]] },
        { title: "Full Power", text: "Second-floor bedroom in the past Green House.", imgs: [["side/full-power.png", ""]] },
        { title: "Insta-Kill", text: "SW white picket fence, on a BBQ grill.", imgs: [["side/insta-kill.png", ""]] },
        { title: "Bonus Points", text: "Trinity Avenue, above a pillar of the burning building.", imgs: [["side/bonus-points.png", ""]] },
        { title: "Fire Sale", text: "Left side of the Yellow House near the shattered upstairs windows.", imgs: [["side/fire-sale.png", ""]] },
        { title: "Random Perk", text: "Bookshelf behind the bunk bed, Yellow House upstairs.", imgs: [["side/random-perk.png", ""]] },
      ],
    },
    {
      title: "Masked mannequin",
      entries: [{ title: "Follow the head", text: "With the Blundergat built, interact with the masked head in the past Green House upstairs. Fill the soul box at the headless mannequin in the backyard, then in the Yellow House garage, then Yellow House upstairs → loot." }],
    },
    {
      title: "Nuketown bunker",
      entries: [{ title: "Stove → mannequin → bunker", text: "Past: turn on the Yellow House stove, kill a zombie by it, Molotov the meat. Future: mannequin at the table. Flip until a Bonus Points drop. Past bunker: turn a zombie with Brain Rot/Psych near it until it knocks the door open. Future: loot incl. the Mystery Perk can." }],
    },
    {
      title: "Weeping angel",
      entries: [{ title: "Stare it down", text: "Past: mannequin out of map right of the Trinity perk. Stare until its head turns; it teleports when unseen. Flip without letting it touch you — it appears in-map; shoot its head for loot." }],
    },
  ],
};
