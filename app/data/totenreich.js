/** Totenreich — Season 3 Reloaded. */
export const TOTENREICH = {
  id: "totenreich",
  name: "Totenreich",
  short: "TOTENREICH",
  season: "Season 3 Reloaded",
  accent: "#ff9a1f",
  wonderWeapon: "Jotunn Star",
  boss: "Dravakar",
  assets: "assets/maps/totenreich/",
  blurb: "Fishery Island, the War Factory and Eidskallen. Unlock PaP with the Glocke Drop, claim the Jotunn Star, gather three Uranium, build the Atomkraft Core and light the runes for Dravakar.",

  steps: [
    {
      title: "Power & Pack-a-Punch (Glocke Drop)",
      tag: "Power",
      where: "Fishery Island → War Factory",
      need: [],
      bullets: [
        "Repair the broken power lines toward Tyr's Head.",
        "Infiltrate the Gruppe 935 War Factory for the <b>Glocke Drop Controller</b>.",
        "Sync / activate the Glocke Drop back on the island → Pack-a-Punch.",
      ],
    },
    {
      title: "Jotunn Star (wonder weapon)",
      tag: "Lighthouse",
      where: "Eidskallen · Burial Grounds · Lighthouse",
      need: ["Wonder-weapon parts"],
      bullets: [
        "Collect the parts around Eidskallen and complete the <b>Burial Grounds lockdown</b>.",
        "Solve the constellation puzzle, follow the ghostly guide up the Lighthouse, pick up the <b>Jotunn Star</b>.",
      ],
    },
    {
      title: "Crowbar → Flak round → Transmitter",
      tag: "Beacon Island",
      where: "Lighthouse 2F → Flak Gun → Tyr's head",
      need: ["Crowbar"],
      bullets: [
        "Crowbar from the Lighthouse 2F. Match the paperwork / open the cracked crate for the <b>Flak Gun round</b>.",
        "Load the Flak Gun and fire at the Tyr robot head. Collect the <b>Transmitter</b> from the wreckage.",
      ],
    },
    {
      title: "Wunderbarrage Controller (frequency lights)",
      tag: "Code",
      where: "Tyr's head array tower",
      need: ["Transmitter", "Frequency tool"],
      bullets: [
        "Install the Transmitter. Count <b>two sequences</b> of left/right light flashes on the tower: <b>Left = Amplitude, Right = Frequency</b>. Log them in the tool.",
        "Enter sequence 1, then sequence 2 into the device. Ascend / side room → <b>Wunderbarrage Controller</b> (Dry Dock stairs help).",
      ],
      tools: ["freq"],
    },
    {
      title: "Uranium #1 — fishing",
      tag: "Uranium 1/3",
      where: "Green glowing fish spot",
      need: ["Fishing rod"],
      bullets: ["Fish where the green glowing fish jumps. Next round kill the <b>Irradiated Ravager</b> that spawns → Uranium."],
    },
    {
      title: "Uranium #2 — ARC-XD genetic lab",
      tag: "Uranium 2/3",
      where: "Core Foundry vent → secret lab",
      need: ["ARC-XD"],
      bullets: ["Break the vent in Core Foundry, follow the ARC-XD path into the lab. Solve the jar / lettered heads puzzle (match heads → purple water → carcass spike) → Uranium."],
    },
    {
      title: "Uranium #3 — Glocke Drop challenge",
      tag: "Uranium 3/3",
      where: "Glocke Drop / Wunderbarrage",
      need: ["Wunderbarrage Controller"],
      bullets: ["Complete the airborne eliminations (orange floating zombie waves) → Uranium."],
    },
    {
      title: "Claw machine → Atomkraft Core",
      tag: "Minigame",
      where: "Claw machine",
      need: ["3 Uranium"],
      bullets: ["Insert the Uranium. Hit the tube combo shown in-world (commonly <b>7+2</b> or <b>6+3</b>) → <b>Atomkraft Core</b>."],
      tools: ["claw"],
    },
    {
      title: "Charge & deliver the Core",
      tag: "Dravakar Shard",
      where: "Pallets near Quick Revive → Storm Bridge",
      need: ["Atomkraft Core"],
      bullets: ["Place the Core on the marked pallets, keep the generators / charge stations fed until it is <b>Charged</b>, deliver it to break through for the <b>Dravakar Shard</b>."],
    },
    {
      title: "Sunstone + rune bonfires",
      tag: "Runes",
      where: "Blodheim Hall → Stave Church → bonfires",
      need: ["Dravakar Shard", "Jotunn Star", "Disciple Injection"],
      bullets: [
        "Place the Shard on the bone fire, light it with the Jotunn Star ranged attack. Use a Disciple Injection and feed / throw zombies into the fire.",
        "Survive the lockdown, kill <b>Ozkarron</b> → <b>Sunstone</b>. Place it in the Eidskallen Stave Church and note the rune / arrow order.",
        "Light the bonfires / blast the rune pylons with the Jotunn Star in that order.",
      ],
      tools: ["runes"],
    },
    {
      title: "Boss: Dravakar",
      tag: "Final",
      where: "Tyr's Head",
      need: ["Jotunn Star", "Full ammo"],
      bullets: ["Start from Tyr's Head after the runes. Destroy the skull grenades / weak points each phase; Jotunn Star for area control."],
    },
  ],

  cheat: [
    {
      id: "freq",
      title: "Frequency lights",
      wide: true,
      body: "Left = Amplitude · Right = Frequency. Count both sequences, enter them on the tower dials.",
      tool: {
        type: "fields",
        fields: [
          { id: "s1L", label: "Seq 1 · Left (Amp)", type: "number", big: true },
          { id: "s1R", label: "Seq 1 · Right (Freq)", type: "number", big: true },
          { id: "s2L", label: "Seq 2 · Left (Amp)", type: "number", big: true },
          { id: "s2R", label: "Seq 2 · Right (Freq)", type: "number", big: true },
        ],
      },
      imgs: [["freq-lights.jpg", "Left / Right lights"]],
    },
    {
      id: "claw",
      title: "Claw machine combo",
      body: "Common targets: <b>7 + 2</b> or <b>6 + 3</b>. Match the in-world labels.",
      tool: {
        type: "fields",
        fields: [
          { id: "combo", label: "Combo", type: "select", options: ["", "Circuit 7 + pair 2", "Circuit 6 + pair 3", "Other"] },
          { id: "note", label: "Notes", type: "text", placeholder: "Node layout / attempt notes" },
        ],
      },
      imgs: [["claw-combo.jpg", "Claw combos"]],
    },
    {
      id: "runes",
      title: "Rune / bonfire order",
      body: "Arrow lines = order (1, 2, 3 lines). Write what each arrow points at.",
      tool: {
        type: "fields",
        fields: [
          { id: "r1", label: "Arrow 1 (1 line)", type: "text" },
          { id: "r2", label: "Arrow 2 (2 lines)", type: "text" },
          { id: "r3", label: "Arrow 3 (3 lines)", type: "text" },
        ],
      },
      imgs: [["rune-arrows.jpg", "Rune arrows"]],
    },
    {
      id: "uranium",
      title: "Uranium checklist",
      body: "",
      tool: { type: "checklist", items: ["Uranium 1 — fishing / Irradiated Ravager", "Uranium 2 — genetic lab", "Uranium 3 — Glocke Drop", "Atomkraft Core", "Core charged", "Dravakar Shard", "Sunstone"] },
    },
  ],

  side: [],
};
