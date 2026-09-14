/**
 * Rex Infernus — Season 5 Reloaded (final BO7 round-based map).
 * Main quest, cheat sheet cards (with interactive tools) and side eggs.
 * Source: Game8 walkthrough + side-egg guides (Aug/Sep 2026).
 */
export const REX = {
  id: "rex",
  name: "Rex Infernus",
  short: "REX INFERNUS",
  season: "Season 5 Reloaded",
  accent: "#ff3df0",
  wonderWeapon: "Warden's Blight (akimbo crossbows)",
  boss: "The Warden",
  assets: "assets/maps/rex/",
  blurb:
    "Four temples around the Nexus Forge. Reignite the forge, build Warden's Blight, cleanse Veytharion, Caltheris, Dravakar and Nyxara, then fight the Warden under Pack-a-Punch.",

  steps: [
    {
      title: "Reignite the Nexus Forge",
      tag: "Pack-a-Punch",
      where: "Her House → Nexus Forge (centre)",
      need: ["Nothing — start of game"],
      bullets: [
        "Spawn in <b>Her House</b>. Open the locked door, go downstairs and wait for the <b>phone to ring</b>. Answer it — a wisp breaks the door open and a portal forms outside.",
        "<b>Optional now:</b> play the piano beside Quick Revive (A F G E F E C E D) for 300 Essence + Intel, and grab <b>Mr. Peeks' head</b> from the desk in the east upstairs room (Temple Runner side egg).",
        "Enter the portal → <b>Nexus Forge</b>. Place the <b>World Seed</b> on the central platform. Two <b>Dread Skulls</b> fly off toward two temples.",
        "Follow each skull and shoot it. They go translucent (invulnerable) at times — wait until solid. Each drops a <b>Usurped Flame</b> into a brazier inside that temple.",
        "Interact with each lit temple brazier to pick up a Usurped Flame (<b>one flame per player</b>) and carry it back to one of the two braziers on the central platform. <b>Both</b> centre braziers must be lit.",
        "Hold interact on the <b>two crank wheels</b> in the middle to lower the platform. <b>Pack-a-Punch</b> activates.",
      ],
      imgs: [
        ["reach-nexus-forge.jpg", "Answer the phone, enter the portal"],
        ["dread-skulls.jpg", "Shoot the two Dread Skulls"],
        ["usurped-flames.jpg", "Carry Usurped Flames to the centre braziers"],
        ["crank-wheels.jpg", "Crank both wheels → Pack-a-Punch"],
      ],
      tools: ["piano"],
    },
    {
      title: "Set up the Her House teleporter (do it NOW)",
      tag: "Setup · 4 rounds + Exfil round",
      where: "Nexus Forge, looking at Her House",
      need: ["Any gun"],
      bullets: [
        "From the Nexus Forge, aim at the <b>ball</b> sitting in the crack of Her House and shoot it down (basketball bounce sound + glowing blue ball falls).",
        "From now on <b>one blue symbol appears on a Her House window at the start of each round</b> — four symbols over four rounds, in a <b>random order</b>. Write the order down (use the Cheat Sheet tracker).",
        "Once all four are up, wait for an <b>Exfil round</b> (11, 16, 21, 26 …) and shoot the symbols <b>in the order they appeared</b>. Correct = they pulse and the ghost twins appear outside.",
        "Then interact with the Exfil phone booth (everyone accept) — it becomes a portal to the house instead of ending the game. You use this in Step 13.",
        "<b>Fail?</b> Shoot the remaining glowing symbols, wait four more rounds for them to reappear, then wait for the next Exfil round. Start this early so you are not doing it on round 30.",
      ],
      imgs: [
        ["shoot-ball.jpg", "Shoot the ball in the crack"],
        ["house-symbols.jpg", "One symbol per round — remember the order"],
      ],
      cheat:
        "Exfil rounds end in <b>1 or 6</b>, starting at round 11. Symbols appear on the four rounds <i>after</i> you shoot the ball.",
      tools: ["house"],
    },
    {
      title: "Light the braziers with Astral Flame",
      tag: "Void Claw + purple orbs",
      where: "Nexus Forge",
      need: ["Void Claw (green orb pedestal)"],
      bullets: [
        "Interact with the pedestal with the <b>green orb</b> near Pack-a-Punch to get the <b>Void Claw</b> tactical (grapple yourself or pull objects). It is timed with limited uses — other pedestals around the map give another; they refresh next round.",
        "Use the Void Claw to <b>pull a floating purple orb into the Pack-a-Punch</b>. Do <b>not</b> walk into / interact with orbs — they dissolve into salvage.",
        "When the orb is spinning inside the astronomy rings, hold interact on the <b>crank on the side</b>. The two braziers turn purple = <b>Astral Flame</b>.",
        "Do it immediately — the orb disappears after a while and you have to pull another.",
      ],
      imgs: [
        ["void-claw.jpg", "Void Claw pedestal"],
        ["pull-purple-orbs.jpg", "Pull a purple orb into PaP"],
        ["light-braziers.jpg", "Crank → purple Astral Flame braziers"],
      ],
      cheat:
        "<b>Astral Flame loop</b> (you repeat this many times): Void Claw → pull purple orb into PaP → crank → grab flame from purple brazier. The flame is a temporary fireball attack.",
      tools: ["loop"],
    },
    {
      title: "Nyxara Temple puzzle (open the hidden chamber)",
      tag: "Wonder Weapon 1/4",
      where: "Dravakar Temple (NE) → Nyxara Temple (SW)",
      need: ["PhD Flopper or explosive", "Void Claw", "Astral Flame"],
      bullets: [
        "Go to <b>Dravakar Temple</b> (north-east, horned head on top). Reach the platform <b>directly above the entrance</b> — stairs at the back + wall-jump, or grapple.",
        "Destroy the wall on the <b>right side of that platform</b> with a PhD dive or explosive → pick up the <b>Fracture of Nyxara</b>.",
        "Go to <b>Nyxara Temple</b> (south-west). Slot the Fracture into the missing spot on the <b>north-west wall of the Main Chamber</b> (wall-jump or grapple up to it).",
        "Back to the forge: get a Void Claw, pull a purple orb into PaP, crank, then <b>take the Astral Flame</b> from the purple brazier (temporary fireball attack).",
        "Run to the <b>deepest part of Nyxara Temple</b> and shoot a fireball at the <b>eye</b> in the distance. Aim <b>above</b> the eye — the projectile drops a lot. Ran out? Repeat the orb loop.",
        "Purple beams now fire from the eye. Fire the <b>Void Claw at each purple crystal</b> on the sanctuary walls to rotate the reflectors and chain the beam crystal → crystal.",
        "The last crystal is by the <b>sealed door in the Main Chamber</b>. The beam breaks the door — go inside.",
      ],
      imgs: [
        ["dravakar-temple.jpg", "Dravakar Temple (horned head)"],
        ["dravakar-entrance-platform.jpg", "Platform above the entrance"],
        ["fracture-location.jpg", "Break the wall → Fracture of Nyxara"],
        ["fracture-slot.jpg", "Slot on the NW wall of Nyxara Main Chamber"],
        ["crank-wheel.jpg", "Crank while the orb spins"],
        ["crystals.jpg", "Grapple each crystal to redirect the beam"],
        ["beam-door.jpg", "Final crystal → beam opens the sealed door"],
      ],
      tools: ["loop"],
    },
    {
      title: "Collect the 3 Wonder Weapon parts (Hidden Forest)",
      tag: "Wonder Weapon 2/4 · Round 8+",
      where: "Nyxara hidden chamber → Vine pit → Hidden Forest",
      need: ["Round 8 or later", "3 minutes on the clock"],
      bullets: [
        "Inside the hidden chamber interact with the floating <b>purple orb</b>. The floor breaks and you fall into the pit with the <b>Vine</b>.",
        "Activate the Vine and <b>defend it</b>. It drains your HP to charge, so keep armour up.",
        "When charged, interact with the <b>fruit</b> in the centre of the vines → teleports <b>one player</b> to the <b>Hidden Forest</b>. Only from <b>Round 8</b>. You have <b>3 minutes</b>. Time out? Re-activate the Vine next round.",
        "<b>Part 1 — Crossbow Handle:</b> corpse leaning on a rock on the far side of the <b>ammo crate</b> in the centre. Walk up (cutscene) → pick up the gold-outlined part.",
        "<b>Part 2 — Bow String:</b> corpse <b>left of forest spawn</b> by the destroyed log cabin. <b>Melee the floorboards</b> left of the corpse → part underneath.",
        "<b>Part 3 — Bow:</b> corpse straight ahead at the <b>opposite end</b> of the forest near a cave. Walk up (cutscene) → pick up.",
        "<b>While you are here:</b> interact with the <b>music box</b> under the burnt stump right of the cabin corpse (Twins Mask side egg).",
      ],
      imgs: [
        ["hidden-chamber-orb.jpg", "Purple orb in the hidden chamber"],
        ["defend-vine.jpg", "Defend the Vine"],
        ["vine-fruit.jpg", "Fruit → Hidden Forest"],
        ["part-crossbow-handle.jpg", "Crossbow Handle — opposite the ammo crate"],
        ["part-bow-string.jpg", "Bow String — under the cabin floorboards"],
        ["part-bow.jpg", "Bow — far end near the cave"],
      ],
      tools: ["ww"],
    },
    {
      title: "Dravakar pillar riddle (open the forge room)",
      tag: "Wonder Weapon 3/4",
      where: "Dravakar Temple — blue wall text near the Sanctuary",
      need: ["Void Claw to grapple up afterwards"],
      bullets: [
        "Interact with the <b>glowing blue text</b> on the wall near the Sanctuary. The narrator reads <b>one of four riddles</b>.",
        "Next room: five pillars. The four corner pillars show <b>Runner (comet), Star, Moon, Galaxy</b>. Pull the <b>three levers</b> the right number of times for your riddle (see Cheat Sheet — pick the quote and it tells you the lever counts).",
        "Solutions assume the <b>default position</b> (all symbols facing the centre pillar). Messed up? Hit the middle pillar to reset and try again <b>next round</b> with a new riddle.",
        "When all four face the right way, activate the <b>middle pillar</b>. The ceiling opens. Grab the green orb behind the text wall and <b>grapple up</b> to the forge room.",
      ],
      imgs: [
        ["blue-wall-text.jpg", "Blue wall text — hear the riddle"],
        ["pillar-lever.jpg", "Levers rotate two pillars each"],
        ["middle-pillar.jpg", "Middle pillar opens the ceiling"],
      ],
      cheat:
        "<b>Left lever:</b> Galaxy ↻ / Runner ↺ · <b>Back lever:</b> Runner ↻ / Star ↺ · <b>Right lever:</b> Star ↻ / Moon ↺",
      tools: ["pillars"],
    },
    {
      title: "Craft Warden's Blight on Dravakar's Anvil",
      tag: "Wonder Weapon 4/4",
      where: "Dravakar Temple — upper forge room",
      need: ["Crossbow Handle", "Bow String", "Bow"],
      bullets: [
        "The big <b>anvil</b> is in the centre of the upper floor. Interact → <b>Warden's Blight</b> (akimbo crossbows, homing bolts, each trigger fires one side).",
        "<b>Pack-a-Punch it as soon as you can.</b> The PaP'd version (Seelye &amp; Cashier) has a <b>charged shot</b> (hold trigger) that spawns a red cyclone — the charged shot is required for the toilet shelf, every disc and every orb later.",
        "Her House gives a <b>free Aetherium Crystal (PaP 1)</b> when you return there in Step 13 — save it for the crossbows if they are not PaP'd yet.",
      ],
      imgs: [["anvil.jpg", "Dravakar's Anvil"], ["wardens-blight-hero.jpg", "Warden's Blight"]],
    },
    {
      title: "Ancient Scroll — Hidden Forest + Shadow Rift",
      tag: "Nyxara cleanse item",
      where: "Nyxara Inner Sanctum → Hidden Forest",
      need: ["Shadow Rift ammo mod (Arsenal)", "Automatic gun"],
      bullets: [
        "Put <b>Shadow Rift</b> on a weapon at any Arsenal (fully automatic is best).",
        "Back to the Nyxara Inner Sanctum, interact with the fruit → Hidden Forest.",
        "Shoot zombies with the Shadow Rift gun. The <b>Ancient Scroll</b> randomly drops from a rift — listen for the <b>tone</b>.",
        "The forest is timed. No scroll? Progress a round and go again (you can also do the Twins toy-box games here).",
      ],
      imgs: [
        ["shadow-rift-mod.jpg", "Shadow Rift at the Arsenal"],
        ["return-hidden-forest.jpg", "Fruit → forest"],
        ["ancient-scroll-drop.jpg", "Scroll drops from a rift"],
      ],
      tools: ["ww"],
    },
    {
      title: "Blacksmith's Hammer — shields + Shatter Blast",
      tag: "Dravakar cleanse item",
      where: "Dravakar forge room (upper floor)",
      need: ["Shatter Blast ammo mod", "Void Claw", "Decoy grenade helps"],
      bullets: [
        "Put <b>Shatter Blast</b> on a weapon at any Arsenal.",
        "Grapple back up to the forge room (where you crafted the crossbows).",
        "Four <b>Viking shields</b> hang on the wall. Get zombies next to a shield and shoot them with Shatter Blast — the blast breaks the shield. The hammer is behind <b>one random shield</b> (changes every game).",
        "Throw a <b>Decoy</b> in front of each shield to pull zombies there, or have a teammate lure. Grab the <b>Blacksmith's Hammer</b> when it appears.",
      ],
      imgs: [
        ["shatter-blast-mod.jpg", "Shatter Blast at the Arsenal"],
        ["grapple-forge-room.jpg", "Grapple up to the forge room"],
        ["viking-shields.jpg", "Four shields — hammer behind one"],
        ["blacksmith-hammer.jpg", "Blacksmith's Hammer revealed"],
      ],
      tools: ["ww"],
    },
    {
      title: "Woven Sash — only while it rains",
      tag: "Veytharion cleanse item",
      where: "Spira Insula (Jugger-Nog) or Ruinas Insula (PhD)",
      need: ["Rain", "Void Claw"],
      bullets: [
        "The sash only exists <b>while it is raining</b>. To force rain next round: go to the <b>well</b> in the Veytharion Temple west wing (where the block puzzle is) and interact.",
        "<b>Spira Insula (Jugger-Nog area):</b> stand on the platforms nearest Nyxara Temple, jump to the second platform, run-jump toward the rock on the left and <b>hold interact</b>.",
        "<b>Ruinas Insula (PhD area):</b> behind the Mystery Box behind PhD Flopper. Jump off the side of the box, grapple to the outer wall and <b>hold interact</b>.",
        "Check both spots — the item is not always in the first one.",
      ],
      imgs: [
        ["woven-sash-locations.jpg", "Two confirmed sash spots"],
        ["rain-well.jpg", "Well in Veytharion west wing → rain next round"],
      ],
      tools: ["rain", "ww"],
    },
    {
      title: "Caltheris orb generator (optional, but do it)",
      tag: "Purple Lantern",
      where: "Caltheris Main Chamber — tiles by the ammo box",
      need: ["A gun with good damage"],
      bullets: [
        "Four tiles by the ammo box. Step on them <b>one at a time, left to right</b> — the correct one is <b>slightly raised</b>. Each spawns <b>four yellow orbs</b> to shoot.",
        "<b>Stay on the tile</b> until all four die. Step off = tile collapses, you drop and respawn at half HP (tile returns after 1 min).",
        "<b>Tile 1:</b> all four in front, low HP. <b>Tile 2:</b> two on the left walls, two on the right. <b>Tile 3:</b> turn around — one on the ceiling, one on the wall by the left stairs, two on the right stairs/wall. <b>Tile 4:</b> all four to the right, high HP.",
        "The wall opens: <b>Purple Lantern</b> + two purple orbs. The lantern spawns <b>four purple orbs once per round</b> that float to the forge — pull them with the claw. This makes the Shimmering Thread farm much faster.",
      ],
      imgs: [
        ["caltheris-tiles.jpg", "Four tiles, left → right"],
        ["tile1-orbs.jpg", "Tile 1 orbs"],
        ["tile4-orbs.jpg", "Tile 4 orbs (right side)"],
        ["purple-lantern.jpg", "Purple Lantern generator"],
      ],
      tools: ["tiles"],
    },
    {
      title: "Shimmering Thread — pull and pop orbs",
      tag: "Caltheris cleanse item",
      where: "Nexus Forge orbs / Caltheris lantern orbs",
      need: ["Void Claw"],
      bullets: [
        "Pull purple orbs <b>toward you</b> with the Void Claw and <b>interact</b> with them. Each has a small chance to drop the <b>Shimmering Thread</b> (most give salvage / equipment).",
        "Low drop rate — keep popping orbs. Use the Caltheris Purple Lantern each round for four extra orbs.",
      ],
      imgs: [["shimmering-thread.jpg", "Shimmering Thread drop"]],
      tools: ["ww"],
    },
    {
      title: "Back into Her House → Eye of the Forge → Void Talon",
      tag: "Exfil round only",
      where: "Exfil booth → Her House (upstairs toilet) → Nexus Forge pedestal",
      need: ["Step 2 done", "Exfil round (…1 / …6)", "PaP'd Warden's Blight"],
      bullets: [
        "On an Exfil round, shoot the four blue symbols on Her House <b>in the order they appeared</b> (pulse + ghost twins = correct).",
        "Answer the <b>Exfil phone</b>, everyone accepts, kill the <b>HVT</b>, then take the Exfil portal → back inside Her House.",
        "Twins give a <b>free Aetherium Crystal (PaP 1)</b> at the stairs. Quick Revive and two wall buys (Warden 308, CODA 9) are here too.",
        "Upstairs, find the <b>toilet</b> in the bedroom where zombies spawn. Hit the <b>toilet shelf with a charged Warden's Blight shot</b> → <b>Eye of the Forge</b> drops. Pick it up.",
        "Answer the phone, portal back to the forge. <b>Hold interact on a Void Claw pedestal</b> → it becomes the red <b>Void Talon</b> (upgraded grappler).",
      ],
      imgs: [
        ["toilet-shelf.jpg", "Charged shot on the toilet shelf"],
        ["void-talon-upgrade.jpg", "Hold interact on the pedestal → Void Talon"],
        ["house-crystal.jpg", "Free PaP crystal at the stairs"],
      ],
      tools: ["house"],
    },
    {
      title: "Rebuild the Nexus Core",
      tag: "Void Talon required",
      where: "Monoliths around the forge → Nexus Core (below PaP)",
      need: ["Void Talon", "Astral Flame / charged shots / lethals", "A teammate on the crank helps"],
      bullets: [
        "With the <b>Void Talon</b>, pull the <b>Eye Tiles</b> out of the three big monoliths around the forge.",
        "Go down to the <b>Nexus Core</b> (entrances beside Pack-a-Punch). Pull the <b>12 eye tiles</b> (6 per wall). The walls drop and expose <b>webbed gears</b>.",
        "Destroy the webs on <b>all six gears</b> on each side — Usurped / Astral Flame fireballs, charged crossbow shots or lethal explosives all work.",
        "Someone cranks the <b>Pack-a-Punch wheel</b> upstairs. When the wheels spin faster, pull the <b>lever on the core floor</b>. Gears glow <b>blue</b> = done.",
      ],
      imgs: [
        ["monolith-eye.jpg", "Eye tile on a monolith"],
        ["core-floor-lever.jpg", "Floor lever in the Nexus Core"],
        ["gears-blue.jpg", "Blue gears = rebuilt"],
      ],
    },
    {
      title: "Cleanse Veytharion",
      tag: "Temple 1 of 4 (any order)",
      where: "Veytharion Temple + Veytharion Titan Trap outside it",
      need: ["Woven Sash", "Astral Flame ×2", "Charged Warden's Blight", "Rain for the final hit"],
      bullets: [
        "<b>Align the monoliths</b> to Veytharion: switches sit where the eye tiles were. The core floor lever sets rotation — <b>vertical = clockwise</b>, horizontal = counter-clockwise. From the start position, clockwise: <b>Inner ×2, Middle ×1, Outer ×0</b>. A big beam hits the temple when aligned.",
        "Put the <b>Woven Sash</b> in the Main Chamber brazier. Get Astral Flame from the forge and <b>fireball the brazier</b> to burn it.",
        "Lure a zombie into the fire until it glows <b>red</b> and shows symbols. Walk it to the <b>Veytharion Titan Trap</b> outside — the <b>left arm</b> shackle matches. Activate: the zombie auto-walks under the right arm and gets crushed, breaking the shackle.",
        "Back inside: the <b>boss-face tile</b> on the floor just inside the entrance. <b>Jump on it for ~1 minute</b> → it slides and reveals the reflector disc.",
        "<b>Charged shot</b> the disc → it floats and reflects the wall-eye laser. Shoot the disc to steer the beam to the <b>small window left of the brazier</b> (corner). Beam must sit in the <b>centre</b> of the exposed wall — shots near the disc centre = small nudges.",
        "Kill zombies by the disc (soul box). Yellow cracks = aimed right. Wall breaks → statue face. <b>Four Shadow Souls</b> spawn (minimap) — you are locked in until they die. Shoot the <b>statue face</b> until the screen flashes white.",
        "Outside: claw a purple orb to <b>directly under Veytharion's head</b> above the entrance, then <b>charged shot under the orb</b> — the cyclone lifts it into the head.",
        "<b>Raining?</b> (well in the west wing if not). Take Astral Flame and fireball the <b>centre of the middle head</b>. Grapple to the raised ledge right of the entrance for a clean shot. Lightning + white flash = cleansed.",
      ],
      imgs: [
        ["rotation-orientation.jpg", "Lever: vertical = clockwise"],
        ["align-veytharion.jpg", "Monoliths aligned to Veytharion"],
        ["burn-woven-sash.jpg", "Burn the sash with Astral Flame"],
        ["vey-red-zombie.jpg", "Red zombie with symbols"],
        ["vey-titan-trap.jpg", "Veytharion Titan Trap — left arm"],
        ["vey-boss-tile.jpg", "Jump on the boss tile ~1 min"],
        ["vey-disc.jpg", "Disc floating after charged shot"],
        ["vey-beam-wall.jpg", "Beam centred on the wall"],
        ["vey-shadow-souls.jpg", "Four Shadow Souls"],
        ["vey-statue-face.jpg", "Shoot the statue face"],
        ["vey-orb-head.jpg", "Orb under the head → charged shot"],
      ],
      cheat:
        "Veytharion: burn <b>Woven Sash</b> · <b>Veytharion trap, LEFT arm</b> · tile = <b>jump 1 min</b> · beam → <b>window left of brazier</b> · needs <b>rain</b> for the head shot.",
      tools: ["monolith", "cleanse", "rain"],
    },
    {
      title: "Cleanse Caltheris",
      tag: "Temple 2 of 4",
      where: "Caltheris Temple + Caltheris Titan Trap (Caltheris Passage)",
      need: ["Shimmering Thread", "Astral Flame ×2", "Charged Warden's Blight", "Rain"],
      bullets: [
        "<b>Align monoliths</b> from Veytharion → Caltheris (directly opposite): <b>every switch ×3</b>, either rotation.",
        "Place the <b>Shimmering Thread</b> in the Main Chamber brazier. Make Astral Flame (orb → PaP → crank), bring it and light the brazier — rocks float above the flame when it worked.",
        "Bring a zombie to the brazier → <b>white aura</b>. Lure it to the <b>Caltheris Titan Trap</b> in Caltheris Passage and activate — it stands still and gets crushed, breaking the shackles.",
        "Boss tile in front of the brazier: <b>go prone on it and ADS for ~1 minute</b>. Tile lifts → disc.",
        "<b>Charged shot</b> the disc. Steer the laser to the wall on the <b>top-left of the room, second level</b>. Shooting the disc edge from behind moves the beam the <b>opposite</b> way (shoot right side → beam goes left).",
        "Kill zombies by the disc to fill the soul box (a T.E.D.D. task with purple-eyed zombies works and saves the round). Wall breaks → <b>four Shadow Souls</b> scatter — kill them (you are locked in).",
        "Shoot the <b>stone face</b> behind the broken wall until the white flash (everything around you burns).",
        "Outside: claw a purple orb <b>under the Caltheris statue</b> at the entrance and charged-shot it → eyes glow purple.",
        "<b>Raining?</b> Throw / fire Astral Flame at the statue's <b>forehead</b> — standing near the Titan Trap gives a guaranteed angle. White flash = cleansed.",
      ],
      imgs: [
        ["align-caltheris.jpg", "All switches ×3 → Caltheris"],
        ["cal-place-thread.jpg", "Shimmering Thread in the brazier"],
        ["cal-astral-brazier.jpg", "Light it — rocks float"],
        ["cal-zombie-brazier.jpg", "Zombie gets a white aura"],
        ["cal-titan-trap.jpg", "Caltheris Titan Trap"],
        ["cal-prone-tile.jpg", "Prone + ADS ~1 min"],
        ["cal-shoot-disc.jpg", "Charged shot on the disc"],
        ["cal-aim-laser.jpg", "Beam → top-left wall, 2nd level"],
        ["cal-soulbox.jpg", "Fill the soul box"],
        ["cal-shadow-souls.jpg", "Four Shadow Souls"],
        ["cal-stone-face.jpg", "Shoot the stone face"],
        ["cal-orb-statue.jpg", "Orb under the statue"],
        ["cal-statue-glow.jpg", "Eyes glow purple"],
      ],
      cheat:
        "Caltheris: burn <b>Shimmering Thread</b> · <b>Caltheris trap</b> · tile = <b>prone + ADS 1 min</b> · beam → <b>top-left wall, 2nd floor</b> · rain for the forehead hit.",
      tools: ["monolith", "cleanse", "rain"],
    },
    {
      title: "Cleanse Dravakar",
      tag: "Temple 3 of 4",
      where: "Dravakar Temple + Caltheris Titan Trap",
      need: ["Blacksmith's Hammer", "Astral Flame ×2", "Charged Warden's Blight", "Armour to burn on the tile"],
      bullets: [
        "<b>Align monoliths</b> from Caltheris → Dravakar (next door to the right): clockwise <b>every switch ×1</b>; counter-clockwise ×5 each.",
        "Put the <b>Blacksmith's Hammer</b> in the stone brazier in the Dravakar Main Chamber, fetch Astral Flame and fireball it.",
        "Lure a zombie into the fire until it glows with symbols. Walk it to the <b>Caltheris Titan Trap</b> — the <b>right arm</b> shackle matches. Activate → crushed by the right hand.",
        "Dravakar boss tile (in front of the brazier): <b>go prone on it and take damage</b> until the disc pops — roughly 3+ armour plates worth, so bring plates.",
        "<b>Charged shot</b> the disc. Aim the laser at the <b>south-east corner wall on the second floor</b>, just above the ledge you can mantle. Feed zombies to the soul box → wall breaks.",
        "Kill the <b>four Shadow Souls</b> — one is on the <b>roof</b>. Shoot the head until the white flash.",
        "Outside: orb <b>under Dravakar's head statue</b> at the entrance, charged shot to lift it (eyes glow). Then Astral Flame into the <b>middle of the forehead</b> — stand on the <b>floating rock</b> in front of Dravakar for the angle.",
      ],
      imgs: [
        ["align-dravakar.jpg", "Clockwise ×1 each → Dravakar"],
        ["drav-burn-hammer.jpg", "Burn the hammer"],
        ["drav-flaming-zombie.jpg", "Flaming zombie with symbols"],
        ["drav-caltheris-titan.jpg", "Caltheris Titan Trap — right arm"],
        ["drav-damage-tile.jpg", "Take damage while prone on the tile"],
        ["drav-aim-wall.jpg", "Beam → SE corner, 2nd floor"],
        ["drav-shadow-souls.jpg", "Shadow Soul on the roof"],
        ["drav-statue.jpg", "Orb + flame at the statue"],
      ],
      cheat:
        "Dravakar: burn <b>Blacksmith's Hammer</b> · <b>Caltheris trap, RIGHT arm</b> · tile = <b>prone + take damage</b> · beam → <b>SE corner, 2nd floor</b> · flame from the floating rock.",
      tools: ["monolith", "cleanse"],
    },
    {
      title: "Cleanse Nyxara",
      tag: "Temple 4 of 4",
      where: "Nyxara Temple + Veytharion Titan Trap",
      need: ["Ancient Scroll", "Astral Flame ×2", "Charged Warden's Blight", "Rain", "Void Claw"],
      bullets: [
        "<b>Align monoliths</b> from Dravakar → Nyxara (opposite): <b>every switch ×3</b>, either rotation.",
        "Place the <b>Ancient Scroll</b> in the Main Chamber brazier, fetch Astral Flame from the forge and ignite it (no flame at the forge? orb → PaP → crank).",
        "Lure a zombie into the lit brazier — it emits a symbol. Lead it to the <b>Veytharion Titan Trap</b>: the <b>right arm</b> shackle matches. Activate → right arm crushes it.",
        "Boss tile in front of the brazier: <b>interact</b>, hear the voice, then <b>go prone and stay still ~1 minute</b> until it opens.",
        "<b>Charged shot</b> the disc → beam. Steer it to the <b>southern wall near the lava pit</b>. Kill zombies to power the beam → wall breaks → head statue.",
        "Shoot the head → <b>four Shadow Souls</b>. Kill all four, then shoot the head again.",
        "Outside: Void Claw the purple orb <b>above the rock formation near Nyxara's head</b>, charged shot → floats into the head (eyes glow purple).",
        "<b>Raining?</b> Get Void Claw + Astral Flame, grapple to a <b>floating rock near Nyxara's head</b> and throw the flame at the head. Temple cleansed.",
      ],
      imgs: [
        ["align-nyxara.jpg", "All switches ×3 → Nyxara"],
        ["nyx-burn-scroll.jpg", "Burn the Ancient Scroll"],
        ["nyx-lure-zombie.jpg", "Lure a zombie into the fire"],
        ["nyx-vey-titan.jpg", "Veytharion Titan Trap — right arm"],
        ["nyx-prone-tile.jpg", "Prone and still ~1 min"],
        ["nyx-beam-lava.jpg", "Beam → south wall by the lava"],
        ["nyx-shadow-souls.jpg", "Four Shadow Souls"],
        ["nyx-astral-flame-head.jpg", "Flame from the floating rock"],
      ],
      cheat:
        "Nyxara: burn <b>Ancient Scroll</b> · <b>Veytharion trap, RIGHT arm</b> · tile = <b>interact, then prone still 1 min</b> · beam → <b>south wall / lava</b> · rain + grapple to the rock for the flame.",
      tools: ["monolith", "cleanse", "rain"],
    },
    {
      title: "Boss: The Warden",
      tag: "Final fight",
      where: "Nexus Core (below Pack-a-Punch)",
      need: ["Full ammo + armour", "PaP'd Warden's Blight", "Void Claw pedestals are in the arena"],
      bullets: [
        "All players stand on the <b>circles by the core</b> to start.",
        "The Warden <b>charges</b> in straight lines and swings its tail for a wide <b>shockwave</b> — both knock you off the arena (big damage). Grab a <b>Void Claw</b> from the arena-edge pedestals to dodge and to pull yourself back up.",
        "Shoot the <b>Dread Skulls</b> orbiting it (Warden's Blight homes on them) → the <b>stinger weak spot</b> opens briefly. Dump everything into it.",
        "<b>Phase 2:</b> kill the <b>Shadow Souls</b> first — they block the weak spot. Later, <b>Warden Stingers</b> around the arena charge a huge AoE in the middle — destroy them fast.",
        "First death sends you to <b>jail</b>: beat the HVT in time for a <b>Blessing</b> (Durable = max HP, Speedy = speed, 1 min). Fail = a <b>Curse</b> (e.g. Ammo Drain 30 s). Second death = out for good.",
        "It <b>resurrects</b> once at under half HP. Same loop: Shadow Souls → Dread Skulls → weak spot. Repeat until it stays down. Main quest complete.",
      ],
      imgs: [
        ["warden-boss.jpg", "Warden arena"],
        ["warden-dread-skulls.jpg", "Kill Dread Skulls → stinger weak spot"],
        ["warden-hvt-buff.jpg", "Jail HVT → Blessing"],
        ["warden-curse.jpg", "Fail the HVT → Curse"],
      ],
      tools: ["boss"],
    },
  ],

  cheat: [
    {
      id: "house",
      title: "Her House teleporter · Exfil rounds + symbol order",
      wide: true,
      body:
        "Shoot the ball at the forge as early as possible. One symbol per round for four rounds, then shoot them in that order on an <b>Exfil round</b> (11, 16, 21, 26, 31 …). Use the tracker to log the order and see which round you can fire.",
      tool: { type: "rex-house" },
      imgs: [["house-symbols.jpg", "Symbols on the windows"]],
    },
    {
      id: "pillars",
      title: "Dravakar pillar riddle solver",
      wide: true,
      body:
        "Pick the quote the narrator read. Levers assume the default layout (all symbols facing the middle pillar). Wrong state? Hit the middle pillar to reset, then retry next round.",
      tool: { type: "rex-pillars" },
      imgs: [
        ["lever-left.jpg", "Left lever: Galaxy ↻ / Runner ↺"],
        ["lever-bottom.jpg", "Back (bottom) lever: Runner ↻ / Star ↺"],
        ["lever-right.jpg", "Right lever: Star ↻ / Moon ↺"],
      ],
    },
    {
      id: "monolith",
      title: "Monolith alignment calculator",
      wide: true,
      body:
        "Switches are where the eye tiles were. Core floor lever: <b>vertical = clockwise</b>, horizontal = counter-clockwise. The switch you press moves slower than the other two. Recommended clockwise route: Veytharion → Caltheris → Dravakar → Nyxara. Always confirm by watching the beams.",
      tool: { type: "rex-monolith" },
      imgs: [["rotation-orientation.jpg", "Lever orientation"]],
    },
    {
      id: "cleanse",
      title: "Temple cleanse matrix",
      wide: true,
      body: `
<table class="tbl">
<thead><tr><th>Temple</th><th>Burn in brazier</th><th>Titan Trap · arm</th><th>Boss tile</th><th>Aim the beam at</th><th>Final flame</th></tr></thead>
<tbody>
<tr><td><b>Veytharion</b></td><td>Woven Sash</td><td>Veytharion trap · <b>LEFT</b></td><td>Jump on it ~1 min</td><td>Small window left of the brazier (corner)</td><td>Rain · centre of the middle head (ledge right of entrance)</td></tr>
<tr><td><b>Caltheris</b></td><td>Shimmering Thread</td><td>Caltheris trap</td><td>Prone + ADS ~1 min</td><td>Top-left wall, 2nd level</td><td>Rain · forehead (stand by the Titan Trap)</td></tr>
<tr><td><b>Dravakar</b></td><td>Blacksmith's Hammer</td><td>Caltheris trap · <b>RIGHT</b></td><td>Prone + take ~3 plates of damage</td><td>SE corner wall, 2nd floor (above mantle ledge)</td><td>Forehead from the floating rock</td></tr>
<tr><td><b>Nyxara</b></td><td>Ancient Scroll</td><td>Veytharion trap · <b>RIGHT</b></td><td>Interact, then prone still ~1 min</td><td>South wall near the lava pit</td><td>Rain · grapple to a floating rock by the head</td></tr>
</tbody></table>
<p class="muted">Every temple: burn item → glowing zombie → trap → tile → charged shot disc → steer beam → soul box → 4 Shadow Souls → shoot face → orb under head + charged shot → Astral Flame on the head.</p>`,
    },
    {
      id: "loop",
      title: "Astral Flame loop · Void Claw · Void Talon",
      body:
        "<b>Astral Flame:</b> Void Claw (green pedestal) → pull a purple orb into Pack-a-Punch (never touch orbs) → hold the side crank → take the flame from a purple brazier. Temporary fireball attack; it drops over distance so aim high.<br><br><b>Void Claw:</b> 30 s timer, limited uses, pedestals refresh each round (Astronaut Mask doubles it to 60 s).<br><br><b>Void Talon:</b> after the Eye of the Forge, hold interact on a pedestal → red grappler that can pull eye tiles.",
      imgs: [["light-braziers.jpg", "Purple braziers = Astral Flame ready"]],
    },
    {
      id: "rain",
      title: "Make it rain",
      body:
        "Needed for: Woven Sash spawn, Veytharion head shot, Caltheris forehead, Nyxara head. Go to the <b>well / pool in Veytharion Temple's west wing</b> (block-puzzle room) and interact → guaranteed rain <b>next round</b>.",
      imgs: [["rain-well.jpg", "The well"], ["woven-sash-locations.jpg", "Sash spots (Jug + PhD islands)"]],
    },
    {
      id: "ww",
      title: "Quest item checklist",
      body: "Tick items as you get them this game.",
      tool: {
        type: "checklist",
        items: [
          "Fracture of Nyxara (Dravakar platform wall)",
          "Crossbow Handle (forest · ammo crate rock)",
          "Bow String (forest · cabin floorboards)",
          "Bow (forest · cave end)",
          "Warden's Blight crafted",
          "Warden's Blight Pack-a-Punched",
          "Ancient Scroll (Shadow Rift in forest)",
          "Blacksmith's Hammer (Shatter Blast on shields)",
          "Woven Sash (rain · Jug/PhD islands)",
          "Shimmering Thread (pop purple orbs)",
          "Eye of the Forge (toilet shelf)",
          "Void Talon unlocked",
          "Nexus Core rebuilt (blue gears)",
        ],
      },
    },
    {
      id: "tiles",
      title: "Caltheris orb tiles",
      body:
        "<b>Tile 1:</b> four orbs straight ahead, low HP.<br><b>Tile 2:</b> two on the left walls, two on the right.<br><b>Tile 3:</b> turn around — ceiling orb, one by the left stairs, two on the right stairs/wall.<br><b>Tile 4:</b> all four on the right, high HP.<br><br>Stay on the tile until all four are dead. Reward: Purple Lantern → 4 purple orbs per round.",
      imgs: [["tile1-orbs.jpg", "Tile 1"], ["tile4-orbs.jpg", "Tile 4"]],
    },
    {
      id: "blocks",
      title: "Veytharion block puzzle (Random Perk)",
      wide: true,
      body:
        "Four blocks (Hand, Water, Plant, Fire — markers change per match, spots are fixed). Target on the right wall, bottom → top: <b>Water, Plant, Hand, Fire</b>. Fire burns Plant, Water puts out Fire — stacking those fails it (retry next round). Shoot the circle to transfer.",
      tool: {
        type: "checklist",
        items: [
          "1 · Left slots in order: Plant, Water, Hand, Fire",
          "2 · Fire → slot beside the empty Hand slot, then Hand → Hand slot",
          "3 · Circle lights: shoot it → Hand + Fire move right",
          "4 · Take Fire out, place in the right slots; shoot circle → Hand comes back left",
          "5 · Water next to Hand; shoot circle → both go right",
          "6 · Hand on top of Fire, Water on Hand; Fire beside empty Hand slot, Hand back in slot (Water is now first); shoot circle → back left",
          "7 · Remove Hand, then Fire; Plant beside the empty Hand slot; Hand back; shoot circle → right",
          "8 · Plant on top of Water; shoot circle → Hand back left",
          "9 · Fire next to Hand; shoot circle → both right",
          "10 · Hand on Plant, Fire on Hand → screen shakes, wall opens → Random Perk",
        ],
      },
      imgs: [
        ["blocks-1.jpg", "Step 1"], ["blocks-2.jpg", "Step 2"], ["blocks-3.jpg", "Step 3"],
        ["blocks-4.jpg", "Step 4"], ["blocks-5.jpg", "Step 5"], ["blocks-6.jpg", "Step 6"],
        ["blocks-7.jpg", "Step 7"], ["blocks-8.jpg", "Step 8"], ["blocks-9.jpg", "Step 9"],
        ["blocks-10.jpg", "Step 10"],
        ["block-loc-1.jpg", "Block 1 · NE pillar, first room (by GobbleGum)"],
        ["block-loc-2.jpg", "Block 2 · east wing, spawn under Crafting Table"],
        ["block-loc-3.jpg", "Block 3 · east wing, lintel by Speed Cola"],
        ["block-loc-4.jpg", "Block 4 · west wing cliff edge by the slots"],
      ],
    },
    {
      id: "piano",
      title: "Piano · Her House",
      body:
        "<div class=\"seq\"><span>A</span><span>F</span><span>G</span><span>E</span><span>F</span><span>E</span><span>C</span><span>E</span><span>D</span></div>Ground floor beside Quick Revive. Reward: 300 Essence + Intel blueprint.",
      imgs: [["piano-solution.jpg", "Key order 1–9"], ["piano-location.jpg", "Piano location"]],
    },
    {
      id: "peeks",
      title: "Mr. Peeks parts (Temple Runner)",
      body:
        "Pull each part with the Void Claw. Then Caltheris Main Chamber → right platform → black smoke by the railing → race. Under 1 minute twice in a row = Astronaut Mask. Open every door first.",
      tool: {
        type: "checklist",
        items: [
          "Mr. Peeks' head — Her House, east upstairs room desk",
          "Nexus Forge — north edge, rock slope",
          "Caltheris Passage — right at the spawn pillar, by the wall rocks",
          "Ruinas Insula — below the ledge by the floating rock, beside the pillar",
          "Aranea Insula — ledge below the east cliff, floating above it",
          "Spira Insula — grapple to the floating rock, jagged rocks",
        ],
      },
      imgs: [["peeks-head.jpg", "Mr. Peeks' head"], ["peeks-caltheris.jpg", "Summon spot in Caltheris"]],
    },
    {
      id: "boss",
      title: "Warden boss quick tips",
      body:
        "• Dread Skulls → stinger weak spot (short window).<br>• Void Claw from the arena-edge pedestals to dodge charges / recover from falls.<br>• Phase 2: Shadow Souls first, then skulls.<br>• Kill charging Warden Stingers before the centre AoE.<br>• Jail HVT: win = Blessing, lose = Curse; second death is final.<br>• It resurrects once under half HP.",
      imgs: [["warden-boss.jpg", "Arena"]],
    },
    {
      id: "mods",
      title: "What to buy / equip",
      body:
        "<b>PhD Flopper</b> (or any explosive) — break the Fracture wall.<br><b>Shadow Rift</b> ammo mod — Ancient Scroll.<br><b>Shatter Blast</b> ammo mod — Blacksmith's Hammer.<br><b>Decoy grenades</b> — pull zombies to the shields.<br><b>Armour plates / Turtle Shell</b> — Dravakar damage tile.<br><b>Jugger-Nog + Stamin-Up</b> — Twins minigames.<br><b>Death Perception</b> — outlines stone blocks.",
    },
  ],

  side: [
    {
      title: "Piano (300 Essence + Intel)",
      entries: [
        {
          title: "Play A F G E F E C E D",
          text: "Ground floor of Her House, corner by Quick Revive. Standard piano layout — follow the numbered keys 1 → 9 in the image. Missed it? You return to the house in Step 13.",
          imgs: [["piano-solution.jpg", "Key order"], ["piano-location.jpg", "Location"], ["piano-reward.jpg", "Reward"]],
        },
      ],
    },
    {
      title: "House Mask / Goat Mask",
      entries: [
        {
          title: "Stay in Her House until Round 11, then melee the painting",
          text: "The painting is in the corner left of the telephone. Do NOT melee it before Round 11 or the mask is gone. You must remain inside the house from the start — returning later via the Exfil portal does not work. Recommended GobbleGums: Armor Gettin', Hidden Power, Perkaholic, Wall Power, Cache Back, Fully Packed.",
          imgs: [["house-mask-painting.jpg", "Painting → mask"]],
        },
        {
          title: "Effect",
          text: "Stand still 4 s → purple circle for up to 10 s: damage buff, damage reduction, and it hurts zombies that enter (Ring of Fire / Stone Cold Stronghold style).",
        },
      ],
    },
    {
      title: "Twins Mask + free Ray Gun + PaP 3 crystal",
      entries: [
        {
          title: "1 · Music box in the Hidden Forest",
          text: "From forest spawn go to the destroyed log house. Right of the charred body outside is a burnt stump with a music box underneath. Interact, then come back next round.",
          imgs: [["twins-music-box.jpg", "Music box under the stump"]],
        },
        {
          title: "2 · Toy Box",
          text: "Next round the blue Toy Box sits just past the music box, wedged between two trees. Three toys: teddy bear, clown mask, jump rope. One minigame per round, any order. Jugger-Nog + Stamin-Up recommended.",
          imgs: [["twins-toy-box.jpg", "Toy Box"]],
        },
        {
          title: "Teddy Bear — collect the toys",
          text: "Bare-handed (no weapons/equipment). Interact with every purple-highlighted toy (most are near the centre) before your own clones down you. Win = 500 Essence. Fail = the Vine drops frags on the respawn point.",
        },
        {
          title: "Clown Mask — hide and seek",
          text: "Find the twins' hiding spots before the timer ends. Giggling = close. After each spot a blue orb drifts toward the next one. Win = 500 Essence.",
        },
        {
          title: "Jump Rope",
          text: "Fixed camera angle. Jump as the rope reaches ~90°. Speed changes randomly. Three mistakes allowed. Win = 500 Essence.",
        },
        {
          title: "3 · Hard mode + rewards",
          text: "Next round the toys have a red outline: more toys, more hiding spots, only two jump-rope mistakes. Beat all three hard versions → back at the Vine: Twins Mask, Ray Gun, Flawless Aetherium Crystal (PaP 3). Mask effect: lightning has a chance to strike zombies you shoot (big AoE).",
          imgs: [["twins-hard-games.jpg", "Red outline = hard mode"], ["twins-rewards.jpg", "Rewards at the Vine"]],
        },
      ],
    },
    {
      title: "Astronaut Mask — Temple Runner (Mr. Peeks race)",
      entries: [
        {
          title: "1 · Head + five parts",
          text: "Grab Mr. Peeks' head from the desk in the east upstairs room of Her House at the start. After PaP is on, pull the five parts with the Void Claw (any order): Nexus Forge north edge rock slope · Caltheris Passage right of the spawn pillar · Ruinas Insula below the ledge by the floating rock · Aranea Insula ledge below the east cliff · Spira Insula floating rock (grapple up).",
          imgs: [["peeks-head.jpg", "Mr. Peeks' head"]],
        },
        {
          title: "2 · Summon and race",
          text: "Caltheris Main Chamber → climb the right platform → black smoke at the railing corner → interact. Time trial through ring checkpoints, counter-clockwise through every temple, ending at Nyxara. Open ALL doors first. Max three attempts per game.",
          imgs: [["peeks-caltheris.jpg", "Summon spot"]],
        },
        {
          title: "3 · Rewards",
          text: "Under one minute once = Temple Runner calling card + random loot. Under one minute in two consecutive rounds = Astronaut Mask (Void Claw lasts 60 s instead of 30 s).",
          imgs: [["temple-runner-reward.jpg", "Temple Runner"], ["astronaut-mask-effect.jpg", "Astronaut Mask"]],
        },
      ],
    },
    {
      title: "Veytharion block puzzle — Random Perk",
      entries: [
        {
          title: "Find the four blocks (Void Claw helps)",
          text: "1: NE pillar in the first room next to the GobbleGum machine. 2: east wing, zombie spawn below the Crafting Table. 3: east wing, on the lintel of the left spawn next to Speed Cola. 4: west wing cliff edge beside the wall slots. Blocks are carried (hold interact), not stored.",
          imgs: [["block-loc-1.jpg", "Block 1"], ["block-loc-2.jpg", "Block 2"], ["block-loc-3.jpg", "Block 3"], ["block-loc-4.jpg", "Block 4"]],
        },
        {
          title: "Solve it",
          text: "Full 10-step order with images is on the Cheat Sheet (Veytharion block puzzle card). Reward: Random Perk power-up. The well in this room also makes it rain next round.",
          imgs: [["blocks-reward.jpg", "Random Perk"]],
        },
      ],
    },
    {
      title: "What's inside Her House (when you return)",
      entries: [
        {
          title: "Free stuff",
          text: "Twins grant a free Aetherium Crystal (PaP 1) at the stairs. Quick Revive machine on the first floor. Wall buys: Warden 308 marksman rifle and CODA 9 auto pistol. Eye of the Forge from the upstairs toilet shelf (charged Warden's Blight).",
          imgs: [["house-crystal.jpg", "Free crystal"], ["house-quick-revive.jpg", "Quick Revive"], ["house-wall-buys.jpg", "Wall buys"]],
        },
      ],
    },
    {
      title: "Caltheris Purple Lantern (orb generator)",
      entries: [
        {
          title: "Four tiles, four orb waves",
          text: "Caltheris Main Chamber by the ammo box. Step on the raised tile, kill four yellow orbs without stepping off, repeat for all four tiles (orbs spread further and get tankier). Wall opens → Purple Lantern spawns four purple orbs per round for the Shimmering Thread farm.",
          imgs: [["caltheris-tiles.jpg", "Tiles"], ["purple-lantern.jpg", "Purple Lantern"]],
        },
      ],
    },
  ],
};
