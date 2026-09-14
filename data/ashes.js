/** Ashes of the Damned — Launch map. */
export const ASHES = {
  id: "ashes",
  name: "Ashes of the Damned",
  short: "ASHES OF THE DAMNED",
  season: "Launch",
  accent: "#ff2a2a",
  wonderWeapon: "Necrofluid Gauntlet",
  boss: "Veytharion",
  assets: "assets/maps/ashes/",
  blurb: "Drive Ol' Tessie between Ashwood, the Farm, Blackwater Lake, Exit 115 and the Cosmodrome. Build Tessie, get the Gauntlet, brew the serum, then wake the trio for the Veytharion fight.",

  steps: [
    {
      title: "Getting started — power, Tessie, early items",
      tag: "Setup",
      where: "Office → Blackwater Lake → Ashwood",
      need: ["Combat Axe (optional)"],
      bullets: [
        "Office: melee the grate to get <b>T.E.D.D.'s head</b>. Install it in <b>Ol' Tessie</b>.",
        "Drive left toward <b>Blackwater Lake</b> and turn on the power at the station.",
        "Cabin kitchen: pick up the <b>Jar of Spores</b>.",
        "Drive to <b>Ashwood</b>, turn on Ashwood power the same way.",
        "Drive Tessie into the <b>Garage</b> and apply the Pack-a-Punch upgrade.",
      ],
    },
    {
      title: "Abomination head — Diner & freezer",
      tag: "Tessie upgrade 2",
      where: "Exit 115 Diner → Ashwood",
      need: ["Freezer Key (from the Cook)"],
      bullets: [
        "Go to <b>Exit 115</b> and open the Diner. Kill the <b>Cook</b> for the <b>Freezer Key</b>.",
        "Open the freezer beside the rear door and collect the upgrade.",
        "Return to Ashwood and upgrade Tessie again.",
      ],
    },
    {
      title: "Collect the serum ingredients",
      tag: "Widow's Lantern · Bones · Eyes · Husk · Chip",
      where: "Farm · Barn · Fog · Spawn",
      need: ["Combat Axe", "Molotov", "Free Wisp Tea (side egg)"],
      bullets: [
        "<b>Widow's Lantern:</b> Farm — place the Jar of Spores on the horse corpse, flip 3 rounds until it is ready.",
        "<b>Bones:</b> turn on Farm power. Barn — cut the hanging zombie's foot with a Combat Axe, Molotov the severed foot, collect the Bones.",
        "<b>Eyes:</b> grab your free Wisp Tea (side egg), then use the trap during a Ravager round to get its Eyes.",
        "<b>Husk:</b> drive around the fog for purple crystals, shoot one with Tessie's beam, collect the Husk.",
        "<b>Data Chip:</b> defeat <b>KLAUS</b> at spawn (Round 8+), take the chip to Ashwood. Stand by the mirror room beside the Arsenal and get kills until your Wisp enters the mirror.",
      ],
      tools: ["ingredients"],
    },
    {
      title: "Necrofluid Gauntlet (wonder weapon)",
      tag: "Klaus · Cosmodrome · symbol box",
      where: "Office cell → Cosmodrome → power stations → Cellar",
      need: ["Data Chip", "2 stuns", "3 roof symbols"],
      bullets: [
        "Office beside Vulture Aid: install the Data Chip in the jail terminal, stand left of the cell, throw <b>two rapid stuns</b> into the cage to wake Klaus.",
        "Cosmodrome: downstairs wall terminal → order Klaus to it. When the light turns green, interact and stand in the red circle. Take the container beside the terminal.",
        "Charge the container: <b>Blackwater Lake</b> power → <b>Ashwood</b> power → <b>Farm</b> power. Then the Cellar strange box.",
        "Jump pad at spawn: look for <b>3 roof symbols</b> while airborne. Enter them on the Cellar box, confirm on the 4th side → <b>Gauntlet</b>.",
        "Shoot the blobs it fires (usually 5), single shot each, then hold reload.",
      ],
    },
    {
      title: "Ingredients & keys",
      tag: "Yuri's Lab serum",
      where: "Ashwood mirror → Cosmodrome (Yuri's Lab) → key spots",
      need: ["Ingredient list", "Limbs (Zursa) if rolled"],
      bullets: [
        "Ashwood: shoot the mirror your Wisp entered. Cosmodrome → Yuri's Lab: touch the powder to reveal <b>your</b> ingredient list (see Cheat Sheet for symbol → item).",
        "Need Limbs? Force-spawn Zursa (side egg) and melee-kill for the drop.",
        "Enter the correct code → add blood → survive the lockdown.",
        "Key 1 near Ashwood → Juggernog back area. Boat between Ashwood & Farm → return the key to the chained object.",
        "Check the 3 key locations, return the final key → cutscene.",
      ],
      tools: ["ingredients"],
    },
    {
      title: "Farm ritual + Cosmodrome satellites + Rocket code",
      tag: "Clock power-ups",
      where: "Farm → Cosmodrome → Office monitors",
      need: ["DG-2 on Tessie", "Gauntlet"],
      bullets: [
        "Grab the <b>DG-2</b>, upgrade Tessie. Drive to Farm → jump on the DG-2 → shoot the clock, then shoot the clock face with the Gauntlet → reload for the power-up.",
        "Farm house clock: collect the ritual items, place them on their marked spots, activate, survive the lockdown.",
        "Ashwood clock → power-up → shoot satellite 1. Jump pad → power-up → satellite 2.",
        "Office monitors show images → use the <b>Rocket Code</b> sheet and shoot the TVs in the right order.",
      ],
      tools: ["rocket"],
    },
    {
      title: "Exit 115 lightning + Blackwater film reels → boss",
      tag: "Final prep",
      where: "Exit 115 → Blackwater Lake → Speed Cola room",
      need: ["Klaus", "Clock power-ups"],
      bullets: [
        "Lightning not active? Use the <b>Restart Lightning</b> side egg. Get a clock power-up, park Tessie on the marked spot, shoot the big clock by the jump pad.",
        "Buy Klaus. Boost Tessie into the container to wake the <b>Trucker</b> → lead to the strike zone. Wake the <b>Mechanic</b> → trap. Wake the <b>Waitress</b> → trap.",
        "Blackwater: clock power-up → interact with the Wisp → shoot the projector → watch 4 images → shoot the film reels in that order.",
        "Speed Cola room: interact with the box, order Klaus to pick it up, interact with Klaus to start <b>Veytharion</b>.",
      ],
    },
  ],

  cheat: [
    {
      id: "ingredients",
      title: "Serum ingredients · symbol → item",
      wide: true,
      body: `
<table class="tbl imgs">
<thead><tr><th>Name</th><th>Symbol</th><th>Ingredient</th></tr></thead>
<tbody>
<tr><td><b>Widows</b></td><td><img class="zoomable" src="assets/maps/ashes/ingredients/widows-symbol.png" alt="Widows symbol"></td><td><img class="zoomable" src="assets/maps/ashes/ingredients/widows-item.png" alt="Widows item"></td></tr>
<tr><td><b>Limbs</b></td><td><img class="zoomable" src="assets/maps/ashes/ingredients/limbs-symbol.png" alt="Limbs symbol"></td><td><img class="zoomable" src="assets/maps/ashes/ingredients/limbs-item.png" alt="Limbs item"></td></tr>
<tr><td><b>Eyes</b></td><td><img class="zoomable" src="assets/maps/ashes/ingredients/eyes-symbol.png" alt="Eyes symbol"></td><td><img class="zoomable" src="assets/maps/ashes/ingredients/eyes-item.png" alt="Eyes item"></td></tr>
<tr><td><b>Husk</b></td><td><img class="zoomable" src="assets/maps/ashes/ingredients/husk-symbol.png" alt="Husk symbol"></td><td><img class="zoomable" src="assets/maps/ashes/ingredients/husk-item.png" alt="Husk item"></td></tr>
<tr><td><b>Bones</b></td><td><img class="zoomable" src="assets/maps/ashes/ingredients/bones-symbol.png" alt="Bones symbol"></td><td><img class="zoomable" src="assets/maps/ashes/ingredients/bones-item.png" alt="Bones item"></td></tr>
</tbody></table>`,
      tool: {
        type: "fields",
        fields: [
          { id: "i1", label: "Lab ingredient 1", type: "select", options: ["", "Widows", "Limbs", "Eyes", "Husk", "Bones"] },
          { id: "i2", label: "Lab ingredient 2", type: "select", options: ["", "Widows", "Limbs", "Eyes", "Husk", "Bones"] },
          { id: "i3", label: "Lab ingredient 3", type: "select", options: ["", "Widows", "Limbs", "Eyes", "Husk", "Bones"] },
          { id: "code", label: "Lab code / notes", type: "text", placeholder: "Code you entered" },
        ],
      },
    },
    {
      id: "rocket",
      title: "Rocket code · TV order",
      wide: true,
      body: `
<table class="tbl imgs">
<thead><tr><th>Name</th><th>Numeric code</th><th>Symbols</th></tr></thead>
<tbody>
<tr><td><b>Rocket</b></td><td><div class="seq"><span>17</span><span>14</span><span>02</span><span>10</span><span>04</span><span>19</span></div></td><td><img class="zoomable" src="assets/maps/ashes/rocket/rocket-1.png"><img class="zoomable" src="assets/maps/ashes/rocket/rocket-2.png"><img class="zoomable" src="assets/maps/ashes/rocket/rocket-3.png"></td></tr>
<tr><td><b>Launch</b></td><td><div class="seq"><span>11</span><span>00</span><span>20</span><span>13</span><span>02</span><span>07</span></div></td><td><img class="zoomable" src="assets/maps/ashes/rocket/launch-1.png"><img class="zoomable" src="assets/maps/ashes/rocket/launch-2.png"><img class="zoomable" src="assets/maps/ashes/rocket/launch-3.png"></td></tr>
<tr><td><b>Weapon</b></td><td><div class="seq"><span>22</span><span>04</span><span>00</span><span>15</span><span>14</span><span>13</span></div></td><td><img class="zoomable" src="assets/maps/ashes/rocket/weapon-1.png"><img class="zoomable" src="assets/maps/ashes/rocket/weapon-2.png"><img class="zoomable" src="assets/maps/ashes/rocket/weapon-3.png"></td></tr>
<tr><td><b>Engine</b></td><td><div class="seq"><span>04</span><span>13</span><span>06</span><span>08</span><span>13</span><span>04</span></div></td><td><img class="zoomable" src="assets/maps/ashes/rocket/engine-1.png"><img class="zoomable" src="assets/maps/ashes/rocket/engine-2.png"><img class="zoomable" src="assets/maps/ashes/rocket/engine-3.png"></td></tr>
</tbody></table>
<p class="muted">Match the monitor images to a row, then shoot the TVs in that row's order.</p>`,
      tool: {
        type: "fields",
        fields: [
          { id: "word", label: "Word shown this game", type: "select", options: ["", "Rocket", "Launch", "Weapon", "Engine"] },
          { id: "note", label: "TV order notes", type: "text", placeholder: "e.g. left, middle, right…" },
        ],
      },
    },
    {
      id: "quick",
      title: "Quick reminders",
      body:
        "• Tessie upgrades: T.E.D.D. head → PaP → Abomination head → DG-2.<br>• Power order for the container: Blackwater → Ashwood → Farm.<br>• Gauntlet: fire blobs, single-shot each, then hold reload.<br>• Clock power-ups come from shooting clock faces with the Gauntlet after a DG-2 jump.",
    },
  ],

  side: [
    {
      title: "Easter Egg song",
      entries: [
        { title: "Song location 1", text: "On top of a server next to Quick Revive in the Janus Towers POI.", imgs: [["side/music1.png", ""]] },
        { title: "Song location 2", text: "On top of a beam in Judgment Square within Ashwood, near Double Tap.", imgs: [["side/music2.png", ""]] },
        { title: "Song location 3", text: "In a car outside the Diner in the Exit 115 POI.", imgs: [["side/music3.png", ""]] },
      ],
    },
    {
      title: "Free Wisp Tea",
      entries: [
        { title: "Static TV", text: "Interact with the static TV upstairs in Vandorn Farm until the people change.", imgs: [["side/wisp1.png", ""], ["side/wisp2.png", ""], ["side/wisp3.png", ""], ["side/wisp4.png", ""]] },
        { title: "Ghost tic-tac-toe", text: "Head downstairs under the barn to the ghost playing tic-tac-toe.", imgs: [["side/wisp5.png", ""], ["side/wisp6.png", ""], ["side/wisp7.png", ""]] },
      ],
    },
    {
      title: "Craft free perks (Diner drink machine)",
      entries: [
        { title: "Quick Revive", text: "Toilet Cleaner, Fish, Syringe.", imgs: [["side/toilet-cleaner.png", ""], ["side/fish.png", ""], ["side/syringe.png", ""]] },
        { title: "Juggernog", text: "Leaf, Milk, Eggs.", imgs: [["side/leaf.png", ""], ["side/milk.png", ""], ["side/eggs.png", ""]] },
        { title: "Speed Cola", text: "Under-truck item, Store box item, Sugar.", imgs: [["side/undertruck.png", ""], ["side/store.png", ""], ["side/sugar.png", ""]] },
        { title: "Stamin-Up", text: "Nails, Beans, Gasoline.", imgs: [["side/nails.png", ""], ["side/beans.png", ""], ["side/gas.png", ""]] },
        { title: "Craft it", text: "Return to the Diner and interact with the drink machine.", imgs: [["side/stir.png", ""]] },
      ],
    },
    {
      title: "Permanent Double Points (Zursa)",
      entries: [
        { title: "Paw prints", text: "Follow the glowing paw prints using Death Perception.", imgs: [["side/bearprint.png", ""]] },
        { title: "Defeat Zursa", text: "Melee-kill Zursa for the Claw Talisman.", imgs: [["side/wonbear.png", ""]] },
      ],
    },
    {
      title: "Mister Peeks axe throwing",
      entries: [
        { title: "Trophy & tomahawk", text: "Interact with the trophy, then grab the tomahawk.", imgs: [["side/throwaxe1.png", ""], ["side/throwaxe2.png", ""]] },
        { title: "Floating targets", text: "Throw the tomahawk at the floating targets.", imgs: [["side/throwaxe3.png", ""]] },
        { title: "Reward", text: "Mister Peeks appears and drops loot.", imgs: [["side/throwaxe4.png", ""]] },
      ],
    },
    {
      title: "Free power-ups",
      entries: [
        { title: "Max Armor", text: "Inside a shipping container on the grounded ship.", imgs: [["side/maxarmor.png", ""]] },
        { title: "Nuke", text: "On top of the church in Ashwood.", imgs: [["side/nuke.png", ""]] },
        { title: "Insta-Kill", text: "Shoot the icon inside the Vandorn Farm silo.", imgs: [["side/insta-kill.png", ""]] },
        { title: "Full Power", text: "Look down from Zarya Cosmodrome.", imgs: [["side/full-power.png", ""]] },
        { title: "Max Ammo", text: "Inside a panel above Quick Revive at Janus Reception.", imgs: [["side/maxammo.png", ""]] },
      ],
    },
    {
      title: "Forced Zursa spawn",
      entries: [{ title: "Shoot the skulls", text: "Use the Necrofluid Gauntlet to shoot and retract three skulls.", imgs: [["side/bear1.png", ""], ["side/bear2.png", ""], ["side/bear3.png", ""]] }],
    },
    {
      title: "Restart the lightning step",
      entries: [{ title: "Sparking poles", text: "Use Ol' Tessie on three sparking light poles.", imgs: [["side/light1.png", ""], ["side/light2.png", ""], ["side/light3.png", ""]] }],
    },
    {
      title: "Tank Dempsey side quest",
      entries: [
        { title: "Dog tags", text: "Locate the bodies and dog tags near the Crashed Rocket.", imgs: [["side/dempsey1.png", ""], ["side/dempsey2.png", ""]] },
        { title: "Survive the forest", text: "Fight the undead while Dempsey is taunted.", imgs: [["side/dempsey3.png", ""], ["side/dempsey4.png", ""]] },
      ],
    },
    {
      title: "RC-XD race",
      entries: [{ title: "Controller", text: "Inside the two-floor cabin in the fog.", imgs: [["side/rcd1.png", ""], ["side/rcd2.png", ""]] }],
    },
  ],
};
