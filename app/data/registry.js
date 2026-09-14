/** All maps, in release order. Each module exports one map object in the shared schema (see rex.js). */
import { ASHES } from "./ashes.js";
import { ASTRA } from "./astra.js";
import { PARADOX } from "./paradox.js";
import { TOTENREICH } from "./totenreich.js";
import { KOWAKUJO } from "./kowakujo.js";
import { REX } from "./rex.js";

export const MAPS = [ASHES, ASTRA, PARADOX, TOTENREICH, KOWAKUJO, REX];

export function getMap(id) {
  return MAPS.find((m) => m.id === id) || null;
}
