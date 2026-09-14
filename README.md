# CMZ · BO7 Zombies EE AIO

**Comfy Munchie Zombies** companion for Black Ops 7 Zombies. Main quest steps, cheat sheets (solvers, code trackers, checklists) and side eggs for every round-based map, built to sit on a second screen while you play.

## Live web app

https://downdog2519.github.io/bo7-zombies-ee-aio/

## Desktop (Electron)

```bash
npm install
npm start
```

## Maps

| Map | Season | Steps | Cheat sheet highlights |
| --- | --- | --- | --- |
| Ashes of the Damned | Launch | 7 | Serum ingredients, rocket code |
| Astra Malorum | Season 1 | 10 | Planet code, books → statue turns, Mars symbol order |
| Paradox Junction | Season 2 Reloaded | 13 | Notes map, piano sequence |
| Totenreich | Season 3 Reloaded | 11 | Frequency lights, claw combo, rune order |
| Kowakujō | Season 4 Reloaded | 13 | 11 lanterns, murder board, clock math |
| Rex Infernus | Season 5 Reloaded | 19 | Exfil/symbol tracker, pillar riddle solver, monolith calculator, temple cleanse matrix, block puzzle, piano, masks |

## How it works

- Single-page app (`app/index.html` + `app/scripts/app.js`). Hash routes: `#/<map>/steps/<n>`, `#/<map>/cheat/<card>`, `#/<map>/side`.
- All content lives in `app/data/<map>.js` (steps, cheat cards, side eggs). Images live in `app/assets/maps/<map>/`.
- Interactive tools are in `app/scripts/tools.js` (fields, checklist, math, order, notes-map, plus the Astra and Rex solvers).
- Progress and tool values save in `localStorage` per map. Focus mode + text size are for second-screen use. Keyboard: ← → steps, Enter = done, 1/2/3 tabs, F focus, M menu, H home.

## Adding a map

1. Create `app/data/<id>.js` exporting an object in the same shape as `rex.js`.
2. Add it to `app/data/registry.js`.
3. Drop images in `app/assets/maps/<id>/`.

## A CMZ Production
