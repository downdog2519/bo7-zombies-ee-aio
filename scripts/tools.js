/**
 * Interactive cheat-sheet tools.
 * renderTool(mount, tool, ctx) — ctx = { state (mutable object), save(), assets (base path) }
 * Every tool writes into ctx.state and calls ctx.save(); values persist per map + card.
 */

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const TOOLS = {
  /* ------------------------------------------------------------ generic fields */
  fields(mount, tool, ctx) {
    const st = ctx.state;
    mount.innerHTML = `<div class="tool-fields">${tool.fields
      .map((f) => {
        const val = st[f.id] ?? "";
        let input;
        if (f.type === "select") {
          input = `<select data-f="${f.id}" class="inp ${f.big ? "big" : ""}">${f.options
            .map((o) => `<option value="${esc(o)}" ${o === val ? "selected" : ""}>${o === "" ? "—" : esc(o)}</option>`)
            .join("")}</select>`;
        } else if (f.type === "check") {
          input = `<label class="check"><input type="checkbox" data-f="${f.id}" ${val ? "checked" : ""}> ${esc(f.label)}</label>`;
          return `<div class="fld">${input}</div>`;
        } else {
          input = `<input data-f="${f.id}" class="inp ${f.big ? "big" : ""}" type="${f.type === "number" ? "number" : "text"}" ${
            f.type === "number" ? 'inputmode="numeric"' : ""
          } value="${esc(val)}" placeholder="${esc(f.placeholder || "")}" ${f.maxlength ? `maxlength="${f.maxlength}"` : ""}>`;
        }
        return `<label class="fld"><span>${esc(f.label)}</span>${input}</label>`;
      })
      .join("")}</div>`;
    mount.querySelectorAll("[data-f]").forEach((el) => {
      const h = () => {
        st[el.dataset.f] = el.type === "checkbox" ? el.checked : el.value;
        ctx.save();
      };
      el.addEventListener("input", h);
      el.addEventListener("change", h);
    });
  },

  /* ------------------------------------------------------------ checklist */
  checklist(mount, tool, ctx) {
    const st = ctx.state;
    st.items = st.items || {};
    const total = tool.items.length;
    const draw = () => {
      const done = Object.values(st.items).filter(Boolean).length;
      mount.innerHTML = `
        <div class="tool-head"><span class="badge">${done} / ${total}</span>
          <button class="mini" data-act="clear" type="button">Clear</button></div>
        <div class="checklist ${tool.grid ? "grid" : ""}">${tool.items
          .map(
            (it, i) =>
              `<label class="check ${st.items[i] ? "on" : ""}"><input type="checkbox" data-i="${i}" ${st.items[i] ? "checked" : ""}><span>${it}</span></label>`
          )
          .join("")}</div>`;
      mount.querySelectorAll("input[data-i]").forEach((cb) =>
        cb.addEventListener("change", () => {
          st.items[cb.dataset.i] = cb.checked;
          ctx.save();
          draw();
        })
      );
      mount.querySelector('[data-act="clear"]').addEventListener("click", () => {
        st.items = {};
        ctx.save();
        draw();
      });
    };
    draw();
  },

  /* ------------------------------------------------------------ A op B = result */
  math(mount, tool, ctx) {
    const st = ctx.state;
    const draw = () => {
      const a = Number(st.a), b = Number(st.b);
      const ok = st.a !== "" && st.b !== "" && st.a != null && st.b != null && Number.isFinite(a) && Number.isFinite(b);
      const res = ok ? (tool.op === "+" ? a + b : a - b) : "—";
      mount.innerHTML = `<div class="tool-math">
        <label class="fld"><span>${esc(tool.aLabel)}</span><input class="inp big" type="number" inputmode="numeric" data-k="a" value="${esc(st.a ?? "")}"></label>
        <span class="op">${esc(tool.op)}</span>
        <label class="fld"><span>${esc(tool.bLabel)}</span><input class="inp big" type="number" inputmode="numeric" data-k="b" value="${esc(st.b ?? "")}"></label>
        <span class="op">=</span>
        <div class="fld"><span>${esc(tool.resultLabel)}</span><div class="result">${res}</div></div>
      </div>`;
      mount.querySelectorAll("[data-k]").forEach((el) =>
        el.addEventListener("input", () => {
          st[el.dataset.k] = el.value;
          ctx.save();
          mount.querySelector(".result").textContent = (() => {
            const a2 = Number(st.a), b2 = Number(st.b);
            if (st.a === "" || st.b === "" || !Number.isFinite(a2) || !Number.isFinite(b2)) return "—";
            return tool.op === "+" ? a2 + b2 : a2 - b2;
          })();
        })
      );
    };
    draw();
  },

  /* ------------------------------------------------------------ reorderable list */
  order(mount, tool, ctx) {
    const st = ctx.state;
    const n = tool.items.length;
    if (!Array.isArray(st.order) || st.order.length !== n) st.order = tool.items.map((_, i) => i);
    const draw = () => {
      mount.innerHTML = `<div class="tool-head"><button class="mini" data-act="reset" type="button">Reset order</button></div>
        <ol class="order-list">${st.order
          .map(
            (idx, pos) => `<li>
              <span class="pos">${pos + 1}</span>
              ${tool.items[idx].img ? `<img class="zoomable" src="${ctx.assets}${tool.items[idx].img}" alt="${esc(tool.items[idx].label)}">` : ""}
              <span class="lbl">${esc(tool.items[idx].label)}</span>
              <span class="mv"><button class="mini" data-up="${pos}" type="button" ${pos === 0 ? "disabled" : ""}>▲</button><button class="mini" data-down="${pos}" type="button" ${pos === n - 1 ? "disabled" : ""}>▼</button></span>
            </li>`
          )
          .join("")}</ol>`;
      mount.querySelectorAll("[data-up]").forEach((b) =>
        b.addEventListener("click", () => {
          const p = Number(b.dataset.up);
          [st.order[p - 1], st.order[p]] = [st.order[p], st.order[p - 1]];
          ctx.save();
          draw();
        })
      );
      mount.querySelectorAll("[data-down]").forEach((b) =>
        b.addEventListener("click", () => {
          const p = Number(b.dataset.down);
          [st.order[p + 1], st.order[p]] = [st.order[p], st.order[p + 1]];
          ctx.save();
          draw();
        })
      );
      mount.querySelector('[data-act="reset"]').addEventListener("click", () => {
        st.order = tool.items.map((_, i) => i);
        ctx.save();
        draw();
      });
    };
    draw();
  },

  /* ------------------------------------------------------------ map with numbered selects */
  "notes-map"(mount, tool, ctx) {
    const st = ctx.state;
    const ids = tool.points.map((p) => p.id);
    const draw = () => {
      const used = ids.map((id) => st[id]).filter(Boolean);
      mount.innerHTML = `<div class="tool-head"><button class="mini" data-act="reset" type="button">Clear</button></div>
      <div class="notes-map"><img src="${ctx.assets}${tool.img}" alt="Notes map">
        ${tool.points
          .map(
            (p) => `<select data-id="${p.id}" class="note-sel ${st[p.id] ? "set" : ""}" style="left:${p.left}%;top:${p.top}%">
              <option value="">–</option>${Array.from({ length: ids.length }, (_, i) => String(i + 1))
                .filter((v) => !used.includes(v) || v === st[p.id])
                .map((v) => `<option value="${v}" ${st[p.id] === v ? "selected" : ""}>${v}</option>`)
                .join("")}</select>`
          )
          .join("")}
      </div>`;
      mount.querySelectorAll("select[data-id]").forEach((s) =>
        s.addEventListener("change", () => {
          st[s.dataset.id] = s.value;
          ctx.save();
          draw();
        })
      );
      mount.querySelector('[data-act="reset"]').addEventListener("click", () => {
        ids.forEach((id) => delete st[id]);
        ctx.save();
        draw();
      });
    };
    draw();
  },

  /* ------------------------------------------------------------ Astra: directions + planet code */
  "astra-planets"(mount, tool, ctx) {
    const st = ctx.state;
    const ORDER = { Mercury: 1, Venus: 2, Earth: 3, Mars: 4, Jupiter: 5, Saturn: 6, Uranus: 7, Neptune: 8 };
    const DIRS = ["", "NE", "SE", "SW", "NW"];
    st.dir = st.dir || {};
    st.names = Array.isArray(st.names) ? st.names : ["", "", ""];
    const draw = () => {
      const code = st.names.map((p) => (ORDER[p] ? ORDER[p] : "·")).join("");
      mount.innerHTML = `
        <div class="sub">Planet directions (from the sheets)</div>
        <div class="tool-fields three">${["Mars", "Neptune", "Saturn"]
          .map(
            (p) => `<label class="fld"><span>${p}</span><select class="inp big" data-dir="${p}">${DIRS.map(
              (d) => `<option value="${d}" ${st.dir[p] === d ? "selected" : ""}>${d || "—"}</option>`
            ).join("")}</select></label>`
          )
          .join("")}</div>
        <div class="sub">Planets O.S.C.A.R. names (in order)</div>
        <div class="tool-fields three">${st.names
          .map(
            (v, i) => `<label class="fld"><span>Planet ${i + 1}</span><select class="inp" data-p="${i}"><option value="">—</option>${Object.keys(ORDER)
              .filter((p) => !st.names.includes(p) || p === v)
              .map((p) => `<option value="${p}" ${p === v ? "selected" : ""}>${p} (${ORDER[p]})</option>`)
              .join("")}</select></label>`
          )
          .join("")}</div>
        <div class="fld"><span>3-digit code</span><div class="result">${code}</div></div>`;
      mount.querySelectorAll("[data-dir]").forEach((s) =>
        s.addEventListener("change", () => {
          st.dir[s.dataset.dir] = s.value;
          ctx.save();
        })
      );
      mount.querySelectorAll("[data-p]").forEach((s) =>
        s.addEventListener("change", () => {
          st.names[Number(s.dataset.p)] = s.value;
          ctx.save();
          draw();
        })
      );
    };
    draw();
  },

  /* ------------------------------------------------------------ Astra: books → statue turns */
  "astra-books"(mount, tool, ctx) {
    const st = ctx.state;
    st.books = st.books || {};
    const draw = () => {
      mount.innerHTML = `<div class="statues">${tool.statues
        .map((s, si) => {
          const count = s.books.filter((b) => st.books[`${si}:${b}`]).length;
          return `<div class="statue">
            <div class="statue-top"><span class="lbl">${esc(s.label)}</span><span class="result small">turn ×${count}</span></div>
            ${s.books.map((b) => `<label class="check ${st.books[`${si}:${b}`] ? "on" : ""}"><input type="checkbox" data-b="${si}:${esc(b)}" ${st.books[`${si}:${b}`] ? "checked" : ""}><span>${esc(b)}</span></label>`).join("")}
            ${s.img ? `<img class="zoomable" src="${ctx.assets}${s.img}" alt="${esc(s.label)}">` : ""}
          </div>`;
        })
        .join("")}</div>`;
      mount.querySelectorAll("input[data-b]").forEach((cb) =>
        cb.addEventListener("change", () => {
          st.books[cb.dataset.b] = cb.checked;
          ctx.save();
          draw();
        })
      );
    };
    draw();
  },

  /* ------------------------------------------------------------ Rex: Her House exfil + symbols */
  "rex-house"(mount, tool, ctx) {
    const st = ctx.state;
    const nextExfil = (r) => {
      if (!Number.isFinite(r) || r < 11) return 11;
      return r + ((1 - (r % 5) + 5) % 5);
    };
    const draw = () => {
      const ball = Number(st.ball);
      const cur = Number(st.cur);
      const ballOk = st.ball !== "" && st.ball != null && Number.isFinite(ball) && ball > 0;
      const curOk = st.cur !== "" && st.cur != null && Number.isFinite(cur) && cur > 0;
      const symRounds = ballOk ? [1, 2, 3, 4].map((i) => ball + i) : null;
      const fireRound = ballOk ? nextExfil(ball + 4) : null;
      mount.innerHTML = `
        <div class="tool-fields three">
          <label class="fld"><span>Round you shot the ball</span><input class="inp big" type="number" inputmode="numeric" data-k="ball" value="${esc(st.ball ?? "")}"></label>
          <label class="fld"><span>Current round</span><input class="inp big" type="number" inputmode="numeric" data-k="cur" value="${esc(st.cur ?? "")}"></label>
          <div class="fld"><span>Next Exfil round</span><div class="result">${curOk ? nextExfil(cur) : "—"}</div></div>
        </div>
        <div class="callout">${
          ballOk
            ? `Symbols appear at the start of rounds <b>${symRounds.join(", ")}</b>. Earliest round you can shoot them: <b>Exfil round ${fireRound}</b>.`
            : "Enter the round you shot the ball to see when the four symbols appear and the first Exfil round you can fire on."
        }</div>
        <div class="sub">Symbol order (describe each as it appears)</div>
        <div class="tool-fields four">${[1, 2, 3, 4]
          .map((i) => `<label class="fld"><span>${["1st", "2nd", "3rd", "4th"][i - 1]} symbol</span><input class="inp" type="text" data-k="s${i}" value="${esc(st["s" + i] ?? "")}" placeholder="e.g. spiral, eye…"></label>`)
          .join("")}</div>
        <label class="check ${st.done ? "on" : ""}"><input type="checkbox" data-k="done" ${st.done ? "checked" : ""}><span>Symbols shot in order — Exfil booth now leads to Her House</span></label>`;
      mount.querySelectorAll("[data-k]").forEach((el) => {
        const h = () => {
          st[el.dataset.k] = el.type === "checkbox" ? el.checked : el.value;
          ctx.save();
          if (el.dataset.k === "ball" || el.dataset.k === "cur" || el.type === "checkbox") {
            const focus = el.dataset.k;
            draw();
            const again = mount.querySelector(`[data-k="${focus}"]`);
            if (again && again.type !== "checkbox") {
              again.focus();
              const v = again.value;
              again.value = "";
              again.value = v;
            }
          }
        };
        el.addEventListener("input", h);
        el.addEventListener("change", h);
      });
    };
    draw();
  },

  /* ------------------------------------------------------------ Rex: Dravakar pillar riddle */
  "rex-pillars"(mount, tool, ctx) {
    const st = ctx.state;
    const Q = [
      { q: "“I drift to the runner that travels moons, who borrow from galaxies when stars stay true.”", L: 3, B: 2, R: 1, res: { Runner: "North", Moon: "South", Galaxy: "East", Star: "West" } },
      { q: "“I remember the runner that travels to stars, while moons and galaxies stay true.”", L: 0, B: 2, R: 3, res: { Runner: "West", Moon: "North", Galaxy: "South", Star: "East" } },
      { q: "“I drift to stars that remember moons, who borrow the runner that travels the galaxy.”", L: 1, B: 2, R: 2, res: { Runner: "South", Moon: "East", Galaxy: "West", Star: "North" } },
      { q: "“I remember galaxies that drift to moons, who borrow the runner that travels the stars.”", L: 2, B: 0, R: 2, res: { Runner: "West", Moon: "East", Galaxy: "North", Star: "South" } },
    ];
    const draw = () => {
      const sel = st.q != null && st.q !== "" ? Q[Number(st.q)] : null;
      mount.innerHTML = `
        <div class="riddles">${Q.map(
          (r, i) => `<button type="button" class="riddle ${Number(st.q) === i ? "on" : ""}" data-q="${i}"><span class="n">${i + 1}</span>${r.q}</button>`
        ).join("")}</div>
        ${
          sel
            ? `<div class="levers">
                <div class="lever"><span>LEFT lever</span><b>×${sel.L}</b></div>
                <div class="lever"><span>BACK lever</span><b>×${sel.B}</b></div>
                <div class="lever"><span>RIGHT lever</span><b>×${sel.R}</b></div>
              </div>
              <div class="compass">${Object.entries(sel.res)
                .map(([k, v]) => `<div class="cdir"><span>${k}</span><b>${v}</b></div>`)
                .join("")}</div>
              <p class="muted">Order does not matter — only the count per lever. Then activate the middle pillar.</p>`
            : `<p class="muted">Tap the riddle you heard.</p>`
        }`;
      mount.querySelectorAll("[data-q]").forEach((b) =>
        b.addEventListener("click", () => {
          st.q = Number(b.dataset.q) === Number(st.q) ? "" : b.dataset.q;
          ctx.save();
          draw();
        })
      );
    };
    draw();
  },

  /* ------------------------------------------------------------ Rex: monolith alignment */
  "rex-monolith"(mount, tool, ctx) {
    const st = ctx.state;
    // Six stops around the forge, clockwise: Veytharion 0, Nyxara 1, (gap) 2, Caltheris 3, Dravakar 4, (gap) 5.
    const POS = { veytharion: 0, nyxara: 1, caltheris: 3, dravakar: 4 };
    const NAMES = { veytharion: "Veytharion", caltheris: "Caltheris", dravakar: "Dravakar", nyxara: "Nyxara" };
    const START = { inner: 4, middle: 5, outer: 0 }; // fresh core: inner→Dravakar, middle→gap, outer→Veytharion
    st.from = st.from || "start";
    st.to = st.to || "veytharion";
    st.rot = st.rot || "cw";
    const draw = () => {
      const target = POS[st.to];
      const cur = st.from === "start" ? START : { inner: POS[st.from], middle: POS[st.from], outer: POS[st.from] };
      const count = (p) => (st.rot === "cw" ? (target - p + 6) % 6 : (p - target + 6) % 6);
      const opts = (sel, extra) =>
        (extra ? [["start", "Start (fresh core)"]] : [])
          .concat(Object.entries(NAMES))
          .map(([k, v]) => `<option value="${k}" ${sel === k ? "selected" : ""}>${v}</option>`)
          .join("");
      mount.innerHTML = `
        <div class="tool-fields three">
          <label class="fld"><span>Monoliths face now</span><select class="inp" data-k="from">${opts(st.from, true)}</select></label>
          <label class="fld"><span>Align to</span><select class="inp" data-k="to">${opts(st.to, false)}</select></label>
          <label class="fld"><span>Core lever</span><select class="inp" data-k="rot"><option value="cw" ${st.rot === "cw" ? "selected" : ""}>Clockwise (vertical)</option><option value="ccw" ${st.rot === "ccw" ? "selected" : ""}>Counter-clockwise (horizontal)</option></select></label>
        </div>
        <div class="levers">
          <div class="lever"><span>INNER</span><b>×${count(cur.inner)}</b></div>
          <div class="lever"><span>MIDDLE</span><b>×${count(cur.middle)}</b></div>
          <div class="lever"><span>OUTER</span><b>×${count(cur.outer)}</b></div>
        </div>
        <p class="muted">Press each switch that many times, then watch the beams hit ${NAMES[st.to]}. Clockwise route V → C → D → N is 2/1/0 → 3/3/3 → 1/1/1 → 3/3/3.${
          st.from === "start" && st.rot === "ccw" ? " Game8 lists the fresh-core counter-clockwise counts as Inner ×5 / Middle ×4 — if a beam misses, swap those two." : ""
        }</p>`;
      mount.querySelectorAll("[data-k]").forEach((s) =>
        s.addEventListener("change", () => {
          st[s.dataset.k] = s.value;
          ctx.save();
          draw();
        })
      );
    };
    draw();
  },
};

export function renderTool(mount, tool, ctx) {
  const fn = TOOLS[tool.type];
  if (!fn) {
    mount.innerHTML = `<p class="muted">Unknown tool: ${esc(tool.type)}</p>`;
    return;
  }
  fn(mount, tool, ctx);
}
