/** Map registry for main menu + hubs */
export const MAPS = [
  {
    id: "ashes",
    name: "Ashes of the Damned",
    short: "ASHES",
    season: "Launch",
    accent: "neon-red",
    accentVar: "var(--red-glow)",
    hub: "pages/ashes/ashes.html",
    wonderWeapon: "Necrofluid Gauntlet (via quest)",
    boss: "Veytharion",
  },
  {
    id: "astra",
    name: "Astra Malorum",
    short: "ASTRA MALORUM",
    season: "Season 1",
    accent: "neon-purple",
    accentVar: "var(--purple-glow)",
    hub: "pages/astra/astra.html",
    wonderWeapon: "LGM-1",
    boss: "Caltheris",
  },
  {
    id: "paradox",
    name: "Paradox Junction",
    short: "PARADOX JUNCTION",
    season: "Season 2 Reloaded",
    accent: "neon-cyan",
    accentVar: "var(--cyan-glow)",
    hub: "pages/paradox/paradox.html",
    wonderWeapon: "Blundergat → Sundergat",
    boss: "Dark Heart",
  },
  {
    id: "totenreich",
    name: "Totenreich",
    short: "TOTENREICH",
    season: "Season 3 Reloaded",
    accent: "neon-orange",
    accentVar: "var(--orange-glow)",
    hub: "pages/totenreich/totenreich.html",
    wonderWeapon: "Jotunn Star",
    boss: "Dravakar",
  },
  {
    id: "kowakujo",
    name: "Kowakujō",
    short: "KOWAKUJO",
    season: "Season 4 Reloaded",
    accent: "neon-green",
    accentVar: "#00ff88",
    hub: "pages/kowakujo/kowakujo.html",
    wonderWeapon: "Nekomancer",
    boss: "Nyxara",
  },
];

export function getMap(id) {
  return MAPS.find((m) => m.id === id);
}
