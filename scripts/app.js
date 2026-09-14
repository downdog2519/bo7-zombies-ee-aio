/**
 * CMZ · BO7 Zombies EE AIO — single-page app.
 * Routes (hash):  #/           home
 *                 #/help       help & shortcuts
 *                 #/<map>/steps/<n>
 *                 #/<map>/cheat/<cardId>
 *                 #/<map>/side/<categoryIndex>
 */
import { MAPS, getMap } from "../data/registry.js";
import { Storage } from "./storage.js";
import { renderTool } from "./tools.js";

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const $ = (sel, root = document) => root.querySelector(sel);

/* ------------------------------------------------------------------ prefs */
const prefs = Object.assign({ fs: 1, focus: false, sidebar: true }, Storage.load("cmzPrefs", {}));
function savePrefs() {
  Storage.save("cmzPrefs", prefs);
  applyPrefs();
}
function applyPrefs() {
  document.documentElement.style.setProperty("--fs", prefs.fs);
  document.body.classList.toggle("focus", !!prefs.focus);
  document.body.classList.toggle("nosidebar", !prefs.sidebar);
}

/* ------------------------------------------------------------------ progress */
const progKey = (id) => `${id}EECompleted`;
function getDone(map) {
  const arr = Storage.load(progKey(map.id), []);
  return Array.isArray(arr) ? arr.filter((i) => Number.isInteger(i) && i >= 0 && i < map.steps.length) : [];
}
function setDone(map, arr) {
  Storage.save(progKey(map.id), Array.from(new Set(arr)).sort((a, b) => a - b));
}
function pct(map) {
  return map.steps.length ? Math.round((getDone(map).length / map.steps.length) * 100) : 0;
}
function firstOpen(map) {
  const done = getDone(map);
  const idx = map.steps.findIndex((_, i) => !done.includes(i));
  return idx < 0 ? map.steps.length - 1 : idx;
}

/* ------------------------------------------------------------------ tool state */
function toolState(map, cardId) {
  const key = `${map.id}Tools`;
  const all = Storage.load(key, {}) || {};
  const state = all[cardId] && typeof all[cardId] === "object" ? all[cardId] : {};
  return {
    state,
    // Re-read before writing so cards on the same page never clobber each other's values.
    save: () => {
      const cur = Storage.load(key, {}) || {};
      cur[cardId] = state;
      Storage.save(key, cur);
    },
  };
}

/* ------------------------------------------------------------------ one-time migration from the old multi-page app */
function migrateLegacy() {
  if (Storage.load("cmzMigrated")) return;
  try {
    // Astra / Paradox old trackers stored 1-based ids under different keys.
    const astra = Storage.load("astra_ee_completed");
    if (Array.isArray(astra) && !Storage.load("astraEECompleted")) Storage.save("astraEECompleted", astra.map((i) => i - 1));
    const para = Storage.load("ee_completed");
    if (Array.isArray(para) && !Storage.load("paradoxEECompleted")) Storage.save("paradoxEECompleted", para.map((i) => i - 1));

    const kow = Storage.load("kowakujoCodes");
    if (kow) {
      const t = Storage.load("kowakujoTools", {});
      t.lanterns = { items: {} };
      for (let i = 1; i <= 11; i++) if (kow[`lantern${i}`]) t.lanterns.items[i - 1] = true;
      t.mystery = { p1: kow.poster1, p2: kow.poster2, p3: kow.poster3, p4: kow.poster4, p5: kow.poster5, fox: kow.foxPattern, note: kow.mysteryNote };
      t.clock = { a: kow.deathTime, b: kow.symptomDur };
      Storage.save("kowakujoTools", t);
    }
    const tot = Storage.load("totenreichCodes");
    if (tot) {
      const t = Storage.load("totenreichTools", {});
      t.freq = { s1L: tot.freq1L, s1R: tot.freq1R, s2L: tot.freq2L, s2R: tot.freq2R };
      t.claw = { combo: { "7-2": "Circuit 7 + pair 2", "6-3": "Circuit 6 + pair 3", other: "Other" }[tot.clawCombo] || "", note: tot.clawNote };
      t.runes = { r1: tot.rune1, r2: tot.rune2, r3: tot.rune3 };
      Storage.save("totenreichTools", t);
    }
    const ast = Storage.load("astraTracker");
    if (ast) {
      const t = Storage.load("astraTools", {});
      t.mars = { code: ast.marsCode || "" };
      t.planets = { dir: ast.directions || {}, names: (ast.planets || ["", "", ""]).map((p) => p || "") };
      const books = {};
      ["statue1", "statue2", "statue3"].forEach((s, si) => ((ast.statues || {})[s] || []).forEach((b) => (books[`${si}:${b}`] = true)));
      t.books = { books };
      Storage.save("astraTools", t);
    }
    const notes = {};
    let any = false;
    for (let i = 1; i <= 8; i++) {
      const v = Storage.load(`note${i}`);
      if (v) {
        notes[`n${i}`] = String(v);
        any = true;
      }
    }
    if (any) {
      const t = Storage.load("paradoxTools", {});
      t.notes = notes;
      Storage.save("paradoxTools", t);
    }
  } catch (_) {
    /* never block startup on migration */
  }
  Storage.save("cmzMigrated", true);
}

/* ------------------------------------------------------------------ routing */
function parseRoute() {
  const h = location.hash.replace(/^#\/?/, "");
  const parts = h.split("/").filter(Boolean).map(decodeURIComponent);
  if (!parts.length) return { view: "home" };
  if (parts[0] === "help") return { view: "help" };
  const map = getMap(parts[0]);
  if (!map) return { view: "home" };
  const tab = ["steps", "cheat", "side"].includes(parts[1]) ? parts[1] : "steps";
  return { view: "map", map, tab, arg: parts[2] };
}
function go(path) {
  location.hash = "#/" + path;
}

/* ------------------------------------------------------------------ shell */
let VERSION = "";
function renderSidebar(route) {
  const cur = route.map ? route.map.id : route.view;
  $("#sidebar").innerHTML = `
    <div class="brand">
      <img src="assets/images/logo/cmz-logo.webp" alt="CMZ">
      <div><b>CMZ</b><span>BO7 ZOMBIES EE AIO</span><small>${VERSION ? "v" + esc(VERSION) : ""}</small></div>
    </div>
    <nav class="nav">
      <a href="#/" class="nav-item ${cur === "home" ? "on" : ""}"><span class="dot gold"></span>HOME</a>
      ${MAPS.map(
        (m) => `<a href="#/${m.id}/steps" class="nav-item ${cur === m.id ? "on" : ""}" style="--accent:${m.accent}">
          <span class="dot"></span><span class="nm">${esc(m.short)}<small>${esc(m.season)}</small></span><span class="pc">${pct(m)}%</span></a>`
      ).join("")}
      <a href="#/help" class="nav-item ${cur === "help" ? "on" : ""}"><span class="dot gold"></span>HELP &amp; SHORTCUTS</a>
    </nav>
    <div class="side-tools">
      <div class="row"><span>Text size</span><button class="mini" data-act="fs-" type="button">A−</button><button class="mini" data-act="fs+" type="button">A+</button></div>
      <button class="mini wide" data-act="focus" type="button">${prefs.focus ? "EXIT FOCUS MODE" : "FOCUS MODE (F)"}</button>
      <a class="mini wide discord" href="https://discord.gg/GpVETxbbh7" target="_blank" rel="noopener">CMZ DISCORD</a>
    </div>`;
}

function renderTopbar(route) {
  const bar = $("#topbar");
  if (route.view !== "map") {
    bar.innerHTML = `<button class="icon" data-act="sidebar" type="button" title="Menu">☰</button>
      <div class="tb-title"><b>${route.view === "help" ? "HELP" : "COMFY MUNCHIE ZOMBIES"}</b></div>
      <button class="icon" data-act="focus" type="button" title="Focus mode (F)">⛶</button>`;
    return;
  }
  const m = route.map;
  bar.innerHTML = `
    <button class="icon" data-act="sidebar" type="button" title="Menu">☰</button>
    <div class="tb-title"><b>${esc(m.short)}</b><small>${esc(m.season)} · ${esc(m.wonderWeapon)} · Boss: ${esc(m.boss)}</small></div>
    <div class="tabs">
      <a href="#/${m.id}/steps" class="${route.tab === "steps" ? "on" : ""}">STEPS <span class="pill">${pct(m)}%</span></a>
      <a href="#/${m.id}/cheat" class="${route.tab === "cheat" ? "on" : ""}">CHEAT SHEET</a>
      <a href="#/${m.id}/side" class="${route.tab === "side" ? "on" : ""}">SIDE EGGS${m.side.length ? "" : " (none)"}</a>
    </div>
    <button class="icon" data-act="focus" type="button" title="Focus mode (F)">⛶</button>`;
}

/* ------------------------------------------------------------------ views */
function viewHome() {
  const last = Storage.load("cmzLast");
  const lastMap = last && getMap(last.mapId);
  return `
    <section class="home">
      <div class="hero">
        <img src="assets/images/logo/cmz-logo.webp" alt="CMZ">
        <h1>CMZ</h1>
        <h2>BO7 ZOMBIES EE AIO</h2>
        <p>Main quest steps · cheat sheets · side eggs. Built for a second screen while you play.</p>
      </div>
      ${
        lastMap
          ? `<a class="continue" href="#/${lastMap.id}/${last.tab || "steps"}${last.tab === "steps" ? "/" + (last.step ?? firstOpen(lastMap)) : ""}" style="--accent:${lastMap.accent}">
              <span class="k">CONTINUE</span><b>${esc(lastMap.name)}</b><span>${last.tab === "steps" ? `Step ${(last.step ?? firstOpen(lastMap)) + 1} · ${esc(lastMap.steps[last.step ?? firstOpen(lastMap)]?.title || "")}` : (last.tab || "steps").toUpperCase()}</span></a>`
          : ""
      }
      <div class="map-grid">${MAPS.map((m) => {
        const p = pct(m);
        const next = firstOpen(m);
        return `<article class="map-card" style="--accent:${m.accent}">
          <header><h3>${esc(m.short)}</h3><span class="season">${esc(m.season)}</span></header>
          <p class="blurb">${esc(m.blurb || "")}</p>
          <dl><dt>Wonder weapon</dt><dd>${esc(m.wonderWeapon)}</dd><dt>Boss</dt><dd>${esc(m.boss)}</dd></dl>
          <div class="bar"><i style="width:${p}%"></i></div>
          <div class="meta">${getDone(m).length} / ${m.steps.length} steps · ${p}%</div>
          <div class="btns">
            <a class="btn" href="#/${m.id}/steps/${next}">${p > 0 && p < 100 ? "CONTINUE STEP " + (next + 1) : "STEPS"}</a>
            <a class="btn ghost" href="#/${m.id}/cheat">CHEAT SHEET</a>
            ${m.side.length ? `<a class="btn ghost" href="#/${m.id}/side">SIDE EGGS</a>` : ""}
          </div>
        </article>`;
      }).join("")}</div>
    </section>`;
}

function viewHelp() {
  return `<section class="help">
    <h1>HELP</h1>
    <div class="cards">
      <div class="card"><h3>How to use it</h3><div class="body">
        <p><b>Steps</b> — the whole quest is listed on the left, the current step is big on the right. Tick <b>DONE</b> and it moves to the next one. Everything saves in this browser.</p>
        <p><b>Cheat Sheet</b> — every code, solver and checklist for the map. Values you type are saved per map.</p>
        <p><b>Side Eggs</b> — masks, free perks, music, minigames.</p>
        <p><b>Focus mode</b> hides the menu for a second monitor or phone. <b>A− / A+</b> changes text size.</p>
      </div></div>
      <div class="card"><h3>Keyboard shortcuts</h3><div class="body">
        <table class="tbl"><tbody>
          <tr><td><kbd>←</kbd> <kbd>→</kbd></td><td>Previous / next step</td></tr>
          <tr><td><kbd>Enter</kbd> or <kbd>Space</kbd></td><td>Mark step done / undo</td></tr>
          <tr><td><kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd></td><td>Steps · Cheat Sheet · Side Eggs</td></tr>
          <tr><td><kbd>F</kbd></td><td>Focus mode</td></tr>
          <tr><td><kbd>M</kbd></td><td>Show / hide the menu</td></tr>
          <tr><td><kbd>H</kbd></td><td>Home</td></tr>
          <tr><td><kbd>Esc</kbd></td><td>Close a zoomed image</td></tr>
        </tbody></table>
      </div></div>
      <div class="card"><h3>Saving &amp; reset</h3><div class="body">
        <p>Progress and cheat-sheet values live in <code>localStorage</code> on this device. Each map has its own <b>RESET</b> at the bottom of its step list. Clearing browser data wipes everything.</p>
        <button class="btn danger" data-act="reset-all" type="button">RESET EVERYTHING</button>
      </div></div>
      <div class="card"><h3>Maps</h3><div class="body"><ul>${MAPS.map((m) => `<li><b>${esc(m.name)}</b> — ${esc(m.season)} · ${m.steps.length} steps · ${m.cheat.length} cheat cards · ${m.side.length} side-egg groups</li>`).join("")}</ul>
        <p class="muted">Rex Infernus content follows the Game8 walkthrough and side-egg guides. Random elements (symbol order, riddle, shield, sash spot) change every game — log them on the Cheat Sheet.</p></div></div>
      <div class="card"><h3>Community</h3><div class="body"><a class="btn" href="https://discord.gg/GpVETxbbh7" target="_blank" rel="noopener">JOIN THE CMZ DISCORD</a></div></div>
    </div>
  </section>`;
}

function imgHtml(map, imgs, cls = "") {
  if (!imgs || !imgs.length) return "";
  return `<div class="imgs ${cls}">${imgs
    .map(([src, cap]) => `<figure><img class="zoomable" loading="lazy" src="${map.assets}${esc(src)}" alt="${esc(cap || "")}" data-cap="${esc(cap || "")}"><figcaption>${esc(cap || "")}</figcaption></figure>`)
    .join("")}</div>`;
}

function viewSteps(map, idx) {
  const done = getDone(map);
  const step = map.steps[idx];
  const isDone = done.includes(idx);
  const filter = Storage.load(`${map.id}Filter`, "") || "";
  const cheatById = (id) => map.cheat.find((c) => c.id === id);
  return `
    <section class="steps-layout">
      <nav class="step-list">
        <div class="progress"><div class="bar"><i style="width:${pct(map)}%"></i></div><span>${done.length} / ${map.steps.length} done</span></div>
        <input class="inp filter" type="search" placeholder="Find a step…" value="${esc(filter)}" data-act="filter">
        <ol>${map.steps
          .map((s, i) => {
            const hit = !filter || (s.title + " " + (s.tag || "") + " " + (s.where || "")).toLowerCase().includes(filter.toLowerCase());
            return `<li class="${i === idx ? "on" : ""} ${done.includes(i) ? "done" : ""} ${hit ? "" : "hide"}">
              <a href="#/${map.id}/steps/${i}"><span class="n">${done.includes(i) ? "✓" : i + 1}</span><span class="t">${esc(s.title)}<small>${esc(s.tag || "")}</small></span></a></li>`;
          })
          .join("")}</ol>
        <button class="mini wide danger" data-act="reset-map" type="button">RESET ${esc(map.short)} PROGRESS</button>
      </nav>
      <article class="step-card ${isDone ? "is-done" : ""}">
        <div class="step-top"><span class="step-num">STEP ${idx + 1} / ${map.steps.length}</span>${step.tag ? `<span class="tag">${esc(step.tag)}</span>` : ""}${isDone ? `<span class="tag done">DONE</span>` : ""}</div>
        <h2>${esc(step.title)}</h2>
        <div class="chips">
          ${step.where ? `<span class="chip"><i>📍</i>${esc(step.where)}</span>` : ""}
          ${(step.need || []).map((n) => `<span class="chip need"><i>🎒</i>${esc(n)}</span>`).join("")}
        </div>
        <ul class="bullets">${(step.bullets || []).map((b) => `<li>${b}</li>`).join("")}</ul>
        ${step.cheat ? `<div class="cheatbox"><span class="k">KEY INFO</span><div>${step.cheat}</div></div>` : ""}
        ${step.note ? `<div class="note">${step.note}</div>` : ""}
        ${
          step.tools && step.tools.length
            ? `<div class="tool-links">${step.tools
                .map((t) => {
                  const c = cheatById(t);
                  return c ? `<a class="btn ghost" href="#/${map.id}/cheat/${c.id}">▣ ${esc(c.title)}</a>` : "";
                })
                .join("")}</div>`
            : ""
        }
        ${imgHtml(map, step.imgs)}
        <div class="step-actions">
          <a class="btn ghost ${idx === 0 ? "disabled" : ""}" href="#/${map.id}/steps/${Math.max(0, idx - 1)}">← PREV</a>
          <button class="btn primary" data-act="toggle-done" type="button">${isDone ? "↩ UNDO DONE" : "✓ MARK DONE & NEXT"}</button>
          <a class="btn ghost ${idx === map.steps.length - 1 ? "disabled" : ""}" href="#/${map.id}/steps/${Math.min(map.steps.length - 1, idx + 1)}">NEXT →</a>
        </div>
      </article>
    </section>`;
}

function viewCheat(map) {
  if (!map.cheat.length) return `<section class="empty">No cheat sheet for this map yet.</section>`;
  return `<section class="cheat">
    <div class="jump">${map.cheat.map((c) => `<a href="#/${map.id}/cheat/${c.id}" class="chip">${esc(c.title)}</a>`).join("")}</div>
    <div class="cards">${map.cheat
      .map(
        (c) => `<div class="card ${c.wide ? "wide" : ""}" id="card-${esc(c.id)}">
          <h3>${esc(c.title)}</h3>
          ${c.body ? `<div class="body">${c.body}</div>` : ""}
          ${c.tool ? `<div class="tool" data-card="${esc(c.id)}"></div>` : ""}
          ${imgHtml(map, c.imgs, "small")}
        </div>`
      )
      .join("")}</div>
  </section>`;
}

function viewSide(map, catIdx) {
  if (!map.side.length) return `<section class="empty">No side eggs recorded for this map yet.</section>`;
  const all = catIdx === "all" || catIdx == null || !map.side[Number(catIdx)];
  const cats = all ? map.side.map((c, i) => [c, i]) : [[map.side[Number(catIdx)], Number(catIdx)]];
  return `<section class="side">
    <div class="jump"><a href="#/${map.id}/side/all" class="chip ${all ? "on" : ""}">ALL</a>${map.side
      .map((c, i) => `<a href="#/${map.id}/side/${i}" class="chip ${!all && Number(catIdx) === i ? "on" : ""}">${esc(c.title)}</a>`)
      .join("")}</div>
    ${cats
      .map(
        ([c, i]) => `<div class="side-cat" id="side-${i}">
        <h2>${esc(c.title)}</h2>
        <div class="cards">${c.entries
          .map((e) => `<div class="card"><h3>${esc(e.title)}</h3><div class="body"><p>${esc(e.text || "")}</p></div>${imgHtml(map, e.imgs, "small")}</div>`)
          .join("")}</div>
      </div>`
      )
      .join("")}
  </section>`;
}

/* ------------------------------------------------------------------ render */
let current = { view: "home" };
function render() {
  const route = parseRoute();
  current = route;
  document.documentElement.style.setProperty("--accent", route.map ? route.map.accent : "#d4af37");
  renderSidebar(route);
  renderTopbar(route);
  const view = $("#view");

  if (route.view === "home") {
    document.title = "CMZ · BO7 Zombies EE AIO";
    view.innerHTML = viewHome();
  } else if (route.view === "help") {
    document.title = "CMZ · Help";
    view.innerHTML = viewHelp();
  } else {
    const m = route.map;
    if (route.tab === "steps") {
      let idx = route.arg == null ? null : Number(route.arg);
      if (!Number.isInteger(idx) || idx < 0 || idx >= m.steps.length) {
        idx = firstOpen(m);
        history.replaceState(null, "", `#/${m.id}/steps/${idx}`);
      }
      document.title = `${m.name} · Step ${idx + 1}`;
      view.innerHTML = viewSteps(m, idx);
      current.step = idx;
      Storage.save("cmzLast", { mapId: m.id, tab: "steps", step: idx });
      const on = $(".step-list li.on");
      const ol = $(".step-list ol");
      if (on && ol) ol.scrollTop = Math.max(0, on.offsetTop - ol.clientHeight / 2 + on.offsetHeight / 2);
      $(".step-card").scrollTop = 0;
    } else if (route.tab === "cheat") {
      document.title = `${m.name} · Cheat Sheet`;
      view.innerHTML = viewCheat(m);
      Storage.save("cmzLast", { mapId: m.id, tab: "cheat" });
      view.querySelectorAll(".tool[data-card]").forEach((mount) => {
        const card = m.cheat.find((c) => c.id === mount.dataset.card);
        const ts = toolState(m, card.id);
        renderTool(mount, card.tool, { state: ts.state, save: ts.save, assets: m.assets });
      });
      if (route.arg) {
        const el = document.getElementById(`card-${route.arg}`);
        if (el) {
          view.scrollTop = Math.max(0, el.offsetTop - 12);
          el.classList.add("flash");
          setTimeout(() => el.classList.remove("flash"), 1600);
        }
      }
    } else {
      document.title = `${m.name} · Side Eggs`;
      view.innerHTML = viewSide(m, route.arg);
      Storage.save("cmzLast", { mapId: m.id, tab: "side" });
    }
  }
  if (!(route.view === "map" && route.tab === "cheat" && route.arg)) view.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  if (window.innerWidth < 900) {
    prefs.sidebar = false;
    applyPrefs();
  }
}

/* ------------------------------------------------------------------ actions */
function toggleDone() {
  if (current.view !== "map" || current.tab !== "steps") return;
  const m = current.map;
  const idx = current.step;
  const done = getDone(m);
  if (done.includes(idx)) {
    setDone(m, done.filter((i) => i !== idx));
    render();
  } else {
    setDone(m, done.concat(idx));
    const next = idx + 1 < m.steps.length ? idx + 1 : idx;
    if (next === idx) render();
    else go(`${m.id}/steps/${next}`);
  }
}

function onAction(act, el) {
  const m = current.map;
  switch (act) {
    case "sidebar":
      prefs.sidebar = !prefs.sidebar;
      savePrefs();
      break;
    case "focus":
      prefs.focus = !prefs.focus;
      if (prefs.focus) prefs.sidebar = false;
      savePrefs();
      renderSidebar(current);
      break;
    case "fs+":
      prefs.fs = Math.min(1.6, Math.round((prefs.fs + 0.1) * 10) / 10);
      savePrefs();
      break;
    case "fs-":
      prefs.fs = Math.max(0.8, Math.round((prefs.fs - 0.1) * 10) / 10);
      savePrefs();
      break;
    case "toggle-done":
      toggleDone();
      break;
    case "reset-map":
      if (m && confirm(`Reset ${m.name} step progress?`)) {
        Storage.remove(progKey(m.id));
        go(`${m.id}/steps/0`);
        render();
      }
      break;
    case "reset-all":
      if (confirm("Reset ALL progress, cheat-sheet values and settings on this device?")) {
        Storage.keys().forEach((k) => Storage.remove(k));
        location.hash = "#/";
        location.reload();
      }
      break;
    default:
      break;
  }
}

/* ------------------------------------------------------------------ zoom */
function openZoom(img) {
  const z = $("#zoom");
  $("#zoom img").src = img.currentSrc || img.src;
  $("#zoom figcaption").textContent = img.dataset.cap || img.alt || "";
  z.classList.add("open");
}
function closeZoom() {
  const z = $("#zoom");
  z.classList.remove("open");
  $("#zoom img").removeAttribute("src");
}

/* ------------------------------------------------------------------ boot */
async function boot() {
  migrateLegacy();
  applyPrefs();
  try {
    const v = await fetch("version.json").then((r) => r.json());
    VERSION = v.version || "";
  } catch (_) {
    /* offline / file:// without fetch — fine */
  }

  document.addEventListener("click", (e) => {
    const zoomImg = e.target.closest("img.zoomable");
    if (zoomImg) {
      openZoom(zoomImg);
      return;
    }
    const act = e.target.closest("[data-act]");
    if (act) {
      const a = act.dataset.act;
      if (a === "filter") return;
      e.preventDefault();
      onAction(a, act);
    }
  });

  document.addEventListener("input", (e) => {
    if (e.target.dataset && e.target.dataset.act === "filter" && current.map) {
      Storage.save(`${current.map.id}Filter`, e.target.value);
      const f = e.target.value.toLowerCase();
      document.querySelectorAll(".step-list li").forEach((li) => {
        const txt = li.textContent.toLowerCase();
        li.classList.toggle("hide", !!f && !txt.includes(f));
      });
    }
  });

  $("#zoom").addEventListener("click", closeZoom);

  document.addEventListener("keydown", (e) => {
    const tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "select" || tag === "textarea" || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "Escape") {
      closeZoom();
      return;
    }
    const m = current.map;
    switch (e.key) {
      case "ArrowRight":
        if (m && current.tab === "steps" && current.step < m.steps.length - 1) go(`${m.id}/steps/${current.step + 1}`);
        break;
      case "ArrowLeft":
        if (m && current.tab === "steps" && current.step > 0) go(`${m.id}/steps/${current.step - 1}`);
        break;
      case "Enter":
      case " ":
        if (m && current.tab === "steps") {
          e.preventDefault();
          toggleDone();
        }
        break;
      case "1":
        if (m) go(`${m.id}/steps`);
        break;
      case "2":
        if (m) go(`${m.id}/cheat`);
        break;
      case "3":
        if (m) go(`${m.id}/side`);
        break;
      case "f":
      case "F":
        onAction("focus");
        break;
      case "m":
      case "M":
        onAction("sidebar");
        break;
      case "h":
      case "H":
        go("");
        break;
      default:
        break;
    }
  });

  window.addEventListener("hashchange", render);
  render();
}

boot();
