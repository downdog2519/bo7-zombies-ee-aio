/** Astra Malorum — Main EE steps + cheat sheet */
export const ASTRA = {
  mapId: "astra",
  title: "ASTRA MALORUM – EASTER EGG GUIDE",
  accentClass: "neon-purple",
  accentVar: "var(--purple-glow)",
  backPath: "../astra.html",
  wonderWeapon: "LGM-1",
  boss: "Caltheris",
  steps: [
    {
      title: "STEP 1 — Power & Pack-a-Punch",
      text: `
<b>Harmonic Oculus</b>
<br>• Reach Observatory Dome and interact with the Harmonic Oculus.
<br>• Search <b>Luminarium</b> and <b>Machina Astralis</b> for 2 Harmonic Components (beside dead zombies — random spawns each game).
<br>• Tip: grab them on the way to power if you see them early.
<br>• Install both components, activate, and <b>defend the Oculus</b> until Pack-a-Punch unlocks.
`,
    },
    {
      title: "STEP 2 — Trap Parts (Contraptions)",
      text: `
<b>Gather trap fuel (any order)</b>
<br>• Find <b>O.S.C.A.R.</b> (elite icon on map). Shoot him so he summons a drone → destroy the drone → pick up <b>Damaged Drone</b>.
<br>• Pack-a-Punch a gun, shoot Ol’ Tessie’s car → grab <b>Car Battery</b> from the hood.
<br>• Shoot a blinking outdoor lamp → pick up <b>Aberrant Wiring</b>.
<br>• Get <b>Cryo Freeze</b> ammo mod (Arsenal, 500 Salvage) and shoot purple crystals (Stargazer’s Courtyard is rich) for <b>3 Absolute Zero Fragments</b>.
`,
    },
    {
      title: "STEP 3 — Kill Oscar: Museum Rocket Trap",
      text: `
<b>Museum Infinitum — Rocket Ship</b>
<br>• Lure Oscar into Museum Infinitum.
<br>• Wait until he is behind / in the rocket blast path → activate the Rocket Ship trap.
<br>• Hold him in the freeze trail / blast to destroy him.
<br>• Fail? Farm another 3 Absolute Zero Fragments and retry (same round OK).
`,
    },
    {
      title: "STEP 4 — Kill Oscar: Luminarium Trap",
      text: `
<b>Luminarium — Electro-Volt Projector</b>
<br>• Lure Oscar to Luminarium (west / Juggernog side). Advance round if you already killed him this round.
<br>• Activate the Electro-Volt Projector with Damaged Drone + Battery + Wiring set.
<br>• Destroy supporting drones / fill overcharge so the trap fries Oscar.
`,
    },
    {
      title: "STEP 5 — Kill Oscar: Telescope Trap → LGM-1",
      text: `
<b>Observatory Dome — Telescope Laser</b>
<br>• Lure Oscar under the telescope beam path.
<br>• Activate the telescope trap and keep him in the beam until destroyed.
<br>• <b>Reward: pick up the LGM-1 Wonder Weapon.</b>
`,
    },
    {
      title: "STEP 6 — Planet Code → Cryo Key",
      text: `
<b>Thurston playback</b>
<br>• After Oscar cycles, listen for Dr. Thurston’s recording naming <b>3 planets in order</b>.
<br>• Convert each planet to its number from the Sun (Mercury=1 … Neptune=8) → 3-digit code.
<br>• Enter the code at the Observatory Dome terminal (northwest pillar / platform near PaP).
<br>• Interact with the corpse / chamber to take the <b>Cryo Chamber Key</b>.
`,
    },
    {
      title: "STEP 7 — Dr. Thurston’s Brain",
      text: `
<b>Cryo Chamber</b>
<br>• Grab the <b>Hacksaw</b> from Museum Infinitum.
<br>• Go to Machina Astralis cryopod, unlock with Cryo Key, use hacksaw → take the <b>Human Brain</b>.
`,
    },
    {
      title: "STEP 8 — Perfusion Machine + Mars Coords",
      text: `
<b>Luminarium</b>
<br>• Place the brain into the <b>Perfusion Machine</b> and power it.
<br>• Input <b>Mars coordinates</b> on the machine / related terminal (follow in-world prompts after perfusion starts).
`,
    },
    {
      title: "STEP 9 — Neptune + Planet Alignment",
      text: `
<b>Archive / Machina Astralis</b>
<br>• Solve the Archive of Orbis <b>books & statues</b> puzzle → obtain <b>Planet Neptune</b>.
<br>• Place Neptune in the ceiling / bracket upstairs.
<br>• Align the planets in Machina Astralis to the correct directions / order.
`,
    },
    {
      title: "STEP 10 — Portal Defense → Mars",
      text: `
<b>Portal lockdown</b>
<br>• Defend the portal from Oscar / zombies until the teleporter stabilizes.
<br>• Enter the portal to Mars.
`,
    },
    {
      title: "STEP 11 — Flying Eye / Ascendant Eye + Pillars",
      text: `
<b>Mars pylons</b>
<br>• Obtain the <b>Flying / Ascendant Eye</b>.
<br>• Use <b>LGM-1</b> to activate / shoot Mars pillars in the shown symbol sequence.
<br>• Harmonize pillars to summon the boss.
`,
    },
    {
      title: "STEP 12 — Boss: Caltheris",
      text: `
<b>Caltheris multi-phase fight</b>
<br>• Learn weak points per phase; keep moving on Mars arena.
<br>• Use LGM-1 when phases call for pillar / beam interactions.
<br>• Stock ammo, armor, and gobblegums before entering — no easy retreat mid-fight.
<br>• Survive all phases to complete the Main Quest.
`,
    },
  ],
};
