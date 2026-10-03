/* Live-Vorschau in den Spielkarten: kleine Gameplay-Animation pro Spiel.
   Desktop: läuft beim Drüberfahren. Handy: läuft, solange die Karte im Bild ist. */
(function () {
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hover = matchMedia('(hover: hover)').matches;
  var css = '.pv{display:block;width:calc(100% + 52px);height:150px;margin:-26px -26px 20px;pointer-events:none;opacity:.6;transition:opacity .4s;' +
    'background:linear-gradient(180deg,rgba(7,13,26,.55),rgba(7,13,26,.2));border-bottom:1px solid var(--line,rgba(234,240,248,.12))}' +
    '.card.pv-on .pv{opacity:1}.card .art{z-index:0}' +
    '.pv-host .pv{width:100%;height:100%;margin:0;border:0;background:none;opacity:.55}.pv-on .pv-host .pv{opacity:1}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var R = Math.random, TAU = Math.PI * 2;

  /* Jede Szene: init(w,h) → Zustand, step(g,s,dt,t,w,h) zeichnet */
  var S = {
    nachtdienst: { init: function () { return { x: 0, pts: [] }; }, step: function (g, s, dt, t, w, h) {
      g.fillStyle = 'rgba(7,13,26,.04)'; g.fillRect(0, 0, w, h);
      var y0 = h * .5, p = (t * 1.1) % 1, v = p < .08 ? 0 : p < .11 ? -h * .32 : p < .14 ? h * .12 : p < .3 ? -Math.sin((p - .14) / .16 * Math.PI) * h * .05 : 0;
      s.x += dt * w * .35; if (s.x > w) { s.x = 0; g.clearRect(0, 0, w, h); }
      g.strokeStyle = '#3cf0a0'; g.lineWidth = 2; g.shadowColor = '#3cf0a0'; g.shadowBlur = 8;
      g.beginPath(); g.moveTo(s.px == null ? s.x : s.px, s.py == null ? y0 : s.py); g.lineTo(s.x, y0 + v); g.stroke(); g.shadowBlur = 0;
      s.px = s.x; s.py = y0 + v; if (s.x < 3) s.px = null;
      g.fillStyle = '#0c1526'; g.fillRect(w - 92, 12, 80, 44); g.fillStyle = '#3cf0a0'; g.font = '600 22px DM Mono,monospace';
      g.fillText(String(72 + Math.round(Math.sin(t * .7) * 4)), w - 84, 40); g.font = '10px DM Mono,monospace'; g.fillText('HF /min', w - 84, 52);
    } },
    kosmos: { init: function (w, h) { var n = []; for (var i = 0; i < 26; i++) n.push({ x: R() * w, y: R() * h * .9, vx: (R() - .5) * 14, vy: (R() - .5) * 14 }); return { n: n }; },
      step: function (g, s, dt, t, w, h) { g.clearRect(0, 0, w, h);
        s.n.forEach(function (a) { a.x += a.vx * dt; a.y += a.vy * dt; if (a.x < 0 || a.x > w) a.vx *= -1; if (a.y < 0 || a.y > h) a.vy *= -1; });
        for (var i = 0; i < s.n.length; i++) for (var j = i + 1; j < s.n.length; j++) { var a = s.n[i], b = s.n[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 90) { var f = (Math.sin(t * 3 + i) + 1) / 2; g.strokeStyle = 'rgba(160,130,255,' + (1 - d / 90) * (.3 + f * .5) + ')'; g.lineWidth = 1; g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(b.x, b.y); g.stroke(); } }
        s.n.forEach(function (a, i) { g.fillStyle = i % 5 ? '#c9b8ff' : '#ffd36a'; g.beginPath(); g.arc(a.x, a.y, i % 5 ? 2.2 : 3.5, 0, TAU); g.fill(); }); } },
    sonnensystem: { init: function () { return {}; }, step: function (g, s, dt, t, w, h) { g.clearRect(0, 0, w, h);
      var cx = w * .62, cy = h * .45, gr = g.createRadialGradient(cx, cy, 0, cx, cy, 30); gr.addColorStop(0, '#fff3b0'); gr.addColorStop(1, 'rgba(255,170,40,0)');
      g.fillStyle = gr; g.beginPath(); g.arc(cx, cy, 30, 0, TAU); g.fill();
      [[34, 1.6, 3, '#c9c3b8'], [52, 1.1, 4, '#e8c07a'], [74, .8, 4.5, '#5fa8ff'], [96, .6, 3.5, '#ff7a4a'], [128, .32, 9, '#e0b48a'], [158, .22, 7.5, '#f0dca0']].forEach(function (p) {
        g.strokeStyle = 'rgba(143,177,255,.14)'; g.beginPath(); g.ellipse(cx, cy, p[0], p[0] * .42, 0, 0, TAU); g.stroke();
        var a = t * p[1]; g.fillStyle = p[3]; g.beginPath(); g.arc(cx + Math.cos(a) * p[0], cy + Math.sin(a) * p[0] * .42, p[2], 0, TAU); g.fill(); }); } },
    planche: { init: function () { return {}; }, step: function (g, s, dt, t, w, h) { g.clearRect(0, 0, w, h);
      var y = h * .78; g.strokeStyle = 'rgba(143,177,255,.35)'; g.lineWidth = 2; g.beginPath(); g.moveTo(20, y); g.lineTo(w - 20, y); g.stroke();
      function fencer(x, dir, lunge, col) { var k = lunge * 26; g.strokeStyle = col; g.lineWidth = 3; g.lineCap = 'round'; g.beginPath();
        var hx = x + dir * k * .6, hy = y - 52; g.arc(hx, hy - 8, 7, 0, TAU); g.moveTo(hx, hy); g.lineTo(x + dir * k * .4, y - 22);
        g.lineTo(x + dir * (k + 14), y); g.moveTo(x + dir * k * .4, y - 22); g.lineTo(x - dir * 14, y);
        g.moveTo(hx, hy + 6); g.lineTo(hx + dir * 22, hy + 2 - lunge * 4); g.lineTo(hx + dir * (52 + k * .5), hy - 4 + lunge * 6); g.stroke(); }
      var c = t % 2.4, l1 = c < .5 ? Math.sin(c / .5 * Math.PI) : 0, l2 = c > 1.2 && c < 1.7 ? Math.sin((c - 1.2) / .5 * Math.PI) : 0;
      fencer(w * .36, 1, l1, '#eaf0f8'); fencer(w * .7, -1, l2, '#8fb1ff');
      if ((c > .2 && c < .32) || (c > 1.4 && c < 1.52)) { g.fillStyle = c < 1 ? '#3cf0a0' : '#ff4f6a'; g.fillRect(c < 1 ? 24 : w - 44, 18, 20, 20); } } },
    encom: { init: function () { return { lines: [], acc: 0 }; }, step: function (g, s, dt, t, w, h) {
      var L = ['> ENCOM OS 12 · Kernel geladen', '> grid.connect --sektor 7', '  verbunden · 1.2 Mio Programme', '> scan /flynn/arcade', '  ████████████ 100%', '> master_control.status', '  ZUGRIFF VERWEIGERT', '> recognizer.deploy', '  3 Einheiten aktiv'];
      s.acc += dt * 22; g.clearRect(0, 0, w, h);
      g.strokeStyle = 'rgba(60,240,255,.12)'; for (var x = (t * 20) % 24; x < w; x += 24) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); }
      var total = Math.floor(s.acc), y = 26, used = 0; g.font = '12px DM Mono,monospace';
      var start = Math.max(0, Math.floor(total / 40) - 5);
      for (var i = start; i < L.length * 9; i++) { var ln = L[i % L.length], n = Math.min(ln.length, total - used - i * 0); if (i * 40 > total) break;
        var shown = ln.slice(0, Math.max(0, Math.min(ln.length, total - i * 40))); g.fillStyle = /VERWEIGERT/.test(ln) ? '#ff6a3c' : '#3cf0ff'; g.fillText(shown, 20, y); y += 18; }
      if (Math.floor(t * 2) % 2) { g.fillStyle = '#3cf0ff'; g.fillRect(20, y - 10, 8, 12); } } },
    arena: { init: function (w, h) { return { e: [], b: [], a: 0, sp: 0 }; }, step: function (g, s, dt, t, w, h) {
      g.fillStyle = 'rgba(7,13,26,.35)'; g.fillRect(0, 0, w, h); var cx = w / 2, cy = h * .48;
      s.sp -= dt; if (s.sp < 0) { s.sp = .45; var a = R() * TAU; s.e.push({ x: cx + Math.cos(a) * w * .6, y: cy + Math.sin(a) * h * .7, hp: 1 }); }
      var tg = s.e[0]; if (tg) { var want = Math.atan2(tg.y - cy, tg.x - cx); s.a += (want - s.a) * Math.min(1, dt * 10);
        if (R() < dt * 9) s.b.push({ x: cx, y: cy, vx: Math.cos(s.a) * 340, vy: Math.sin(s.a) * 340 }); }
      s.b = s.b.filter(function (b) { b.x += b.vx * dt; b.y += b.vy * dt; g.fillStyle = '#ff3dbb'; g.fillRect(b.x - 2, b.y - 2, 4, 4);
        for (var i = 0; i < s.e.length; i++) if (Math.hypot(b.x - s.e[i].x, b.y - s.e[i].y) < 10) { s.e.splice(i, 1); return false; } return b.x > 0 && b.x < w && b.y > 0 && b.y < h; });
      s.e.forEach(function (e) { var d = Math.hypot(cx - e.x, cy - e.y) || 1; e.x += (cx - e.x) / d * 40 * dt; e.y += (cy - e.y) / d * 40 * dt;
        g.strokeStyle = '#3cf0ff'; g.lineWidth = 2; g.strokeRect(e.x - 6, e.y - 6, 12, 12); });
      s.e = s.e.filter(function (e) { return Math.hypot(cx - e.x, cy - e.y) > 14; });
      g.save(); g.translate(cx, cy); g.rotate(s.a); g.fillStyle = '#ffd36a'; g.shadowColor = '#ffd36a'; g.shadowBlur = 12; g.beginPath(); g.moveTo(12, 0); g.lineTo(-8, -8); g.lineTo(-4, 0); g.lineTo(-8, 8); g.fill(); g.restore(); } },
    retro: { init: function () { return { x: 0, d: 1, sh: [], hit: {} }; }, step: function (g, s, dt, t, w, h) { g.clearRect(0, 0, w, h);
      var P = 4, cols = 7, ox = w / 2 - cols * 26 / 2 + Math.sin(t * .8) * 30;
      for (var r = 0; r < 3; r++) for (var c = 0; c < cols; c++) { if (s.hit[r + '-' + c] && t - s.hit[r + '-' + c] < 3) continue;
        var x = ox + c * 26, y = 22 + r * 22 + (Math.floor(t * 2) % 2) * 2; g.fillStyle = ['#ff4f9a', '#44e0ff', '#ffd23f'][r];
        g.fillRect(x + P, y, P * 3, P); g.fillRect(x, y + P, P * 5, P); g.fillRect(x, y + P * 2, P, P); g.fillRect(x + P * 4, y + P * 2, P, P); g.fillRect(x + P * 2, y + P * 2, P, P); }
      s.x += s.d * dt * 70; if (s.x > w * .3 || s.x < -w * .3) s.d *= -1; var px = w / 2 + s.x, py = h * .82;
      g.fillStyle = '#f4f1ff'; g.fillRect(px - 2, py - 8, 4, 4); g.fillRect(px - 6, py - 4, 12, 4); g.fillRect(px - 10, py, 20, 4);
      if (R() < dt * 5) s.sh.push({ x: px, y: py - 10 });
      s.sh = s.sh.filter(function (b) { b.y -= dt * 260; g.fillStyle = '#ffd23f'; g.fillRect(b.x - 1, b.y, 2, 7);
        for (var r = 0; r < 3; r++) for (var c = 0; c < cols; c++) { var k = r + '-' + c; if (s.hit[k] && t - s.hit[k] < 3) continue; var x = ox + c * 26, y = 22 + r * 22;
          if (b.x > x && b.x < x + 20 && b.y > y && b.y < y + 14) { s.hit[k] = t; return false; } } return b.y > 0; }); } },
    instrumente: { init: function () { return { items: [], sp: 0 }; }, step: function (g, s, dt, t, w, h) { g.clearRect(0, 0, w, h);
      g.strokeStyle = 'rgba(143,177,255,.3)'; g.strokeRect(w * .15, h * .7, w * .7, 26);
      s.sp -= dt; if (s.sp < 0) { s.sp = .7; s.items.push({ x: w * (.2 + R() * .6), y: -20, r: R() * TAU, k: Math.floor(R() * 3), v: 0 }); }
      s.items = s.items.filter(function (it) { it.v += dt * 300; it.y = Math.min(h * .7 + 6, it.y + it.v * dt); it.r += dt * (it.y < h * .7 ? 2 : 0);
        g.save(); g.translate(it.x, it.y); g.rotate(it.r); g.strokeStyle = ['#d8e2f0', '#8fb1ff', '#3cf0a0'][it.k]; g.lineWidth = 2.5; g.lineCap = 'round'; g.beginPath();
        if (it.k === 0) { g.moveTo(-18, 0); g.lineTo(14, 0); g.moveTo(14, 0); g.lineTo(20, -3); }
        else if (it.k === 1) { g.moveTo(-16, -4); g.lineTo(14, 2); g.moveTo(-16, 4); g.lineTo(14, -2); g.arc(-19, -5, 3, 0, TAU); }
        else { g.moveTo(-16, 0); g.lineTo(16, 0); g.moveTo(10, -4); g.lineTo(16, 0); g.lineTo(10, 4); }
        g.stroke(); g.restore(); it.life = (it.life || 0) + dt; return it.life < 4; }); } },
    stunt: { init: function () { return { o: 0 }; }, step: function (g, s, dt, t, w, h) {
      var gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#12002a'); gr.addColorStop(1, '#5a0f5e'); g.fillStyle = gr; g.fillRect(0, 0, w, h);
      g.fillStyle = '#ff9a4a'; g.beginPath(); g.arc(w * .72, h * .55, h * .28, 0, TAU); g.fill(); g.fillStyle = '#3a0a5e'; for (var i = 0; i < 5; i++) g.fillRect(w * .72 - h * .3, h * .58 + i * 7, h * .6, 2 + i);
      s.o += dt * 120; var f = function (x) { return h * .78 - Math.sin((x + s.o) * .018) * 18 - Math.sin((x + s.o) * .041) * 9; };
      g.fillStyle = '#16002e'; g.beginPath(); g.moveTo(0, h); for (var x = 0; x <= w; x += 6) g.lineTo(x, f(x)); g.lineTo(w, h); g.fill();
      g.strokeStyle = '#ff2fa0'; g.lineWidth = 2.5; g.shadowColor = '#ff2fa0'; g.shadowBlur = 10; g.beginPath(); for (x = 0; x <= w; x += 6) x ? g.lineTo(x, f(x)) : g.moveTo(x, f(x)); g.stroke(); g.shadowBlur = 0;
      var ph = t * 1.6 % TAU, up = Math.sin(ph), jump = Math.max(0, up) * 26, bx = w * .35, by = f(bx) - 12 - jump;
      var a = up > 0.05 ? -(ph / Math.PI) * TAU : Math.atan2(f(bx + 10) - f(bx - 10), 20);
      g.save(); g.translate(bx, by); g.rotate(a); g.strokeStyle = '#3cf3ff'; g.lineWidth = 2; g.beginPath(); g.arc(-11, 6, 6, 0, TAU); g.moveTo(17, 6); g.arc(11, 6, 6, 0, TAU); g.stroke();
      g.strokeStyle = '#ff2fa0'; g.beginPath(); g.moveTo(-11, 6); g.lineTo(-3, -1); g.lineTo(8, -2); g.lineTo(11, 6); g.stroke(); g.fillStyle = '#ff2fa0'; g.beginPath(); g.arc(-1, -14, 3.5, 0, TAU); g.fill(); g.restore(); } },
    breaker: { init: function (w, h) { return { bx: w / 2, by: h * .6, vx: 120, vy: -110, br: [] }; }, step: function (g, s, dt, t, w, h) {
      g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
      var cols = 10, bw = (w - 16) / cols, cs = ['#3cf0ff', '#4d8dff', '#c46bff', '#ff3b6b', '#ff8a1f', '#ffd23f'];
      if (!s.br.length || s.br.every(function (x) { return !x; })) { s.br = []; for (var i = 0; i < cols * 5; i++) s.br.push(true); }
      for (i = 0; i < s.br.length; i++) if (s.br[i]) { var x = 8 + (i % cols) * bw, y = 12 + Math.floor(i / cols) * 9; g.fillStyle = cs[Math.floor(i / cols)]; g.globalAlpha = .45; g.fillRect(x + 1, y, bw - 2, 7); g.globalAlpha = 1; g.strokeStyle = cs[Math.floor(i / cols)]; g.strokeRect(x + 1.5, y + .5, bw - 3, 6); }
      s.bx += s.vx * dt; s.by += s.vy * dt; if (s.bx < 6 || s.bx > w - 6) s.vx *= -1; if (s.by < 6) s.vy = Math.abs(s.vy);
      var row = Math.floor((s.by - 12) / 9), col = Math.floor((s.bx - 8) / bw), k = row * cols + col; if (row >= 0 && row < 5 && col >= 0 && col < cols && s.br[k]) { s.br[k] = false; s.vy = Math.abs(s.vy); }
      var px = s.bx + Math.sin(t * 2) * 6; if (s.by > h - 14 && s.vy > 0) { s.vy = -Math.abs(s.vy); s.vx += (R() - .5) * 60; }
      g.strokeStyle = '#3cf0ff'; g.lineWidth = 3; g.shadowColor = '#3cf0ff'; g.shadowBlur = 10; g.beginPath(); g.moveTo(px - 18, h - 10); g.lineTo(px + 18, h - 10); g.stroke();
      g.fillStyle = '#fff'; g.beginPath(); g.arc(s.bx, s.by, 3, 0, TAU); g.fill(); g.shadowBlur = 0; } },
    firewall: { init: function () { return { v: [], b: [], sp: 0 }; }, step: function (g, s, dt, t, w, h) {
      g.fillStyle = '#07020c'; g.fillRect(0, 0, w, h); var gy = h - 14;
      g.strokeStyle = '#3cf0ff'; g.lineWidth = 1.5; g.beginPath(); g.moveTo(0, gy); g.lineTo(w, gy); g.stroke();
      for (var i = 0; i < 6; i++) { var sx = w * (.12 + i * .15); g.strokeStyle = '#3cf0ff'; g.strokeRect(sx - 5, gy - 11, 10, 11); }
      s.sp -= dt; if (s.sp < 0) { s.sp = .5; var x = R() * w; s.v.push({ sx: x, x: x, y: 0, vx: (R() - .5) * 30, vy: 35 + R() * 20 }); }
      s.v = s.v.filter(function (v) { v.x += v.vx * dt; v.y += v.vy * dt; g.strokeStyle = 'rgba(255,61,127,.7)'; g.beginPath(); g.moveTo(v.sx, 0); g.lineTo(v.x, v.y); g.stroke(); g.fillStyle = '#fff'; g.fillRect(v.x - 1, v.y - 1, 2, 2);
        if (v.y > h * .35 && R() < dt * 1.2) { s.b.push({ x: v.x, y: v.y, t: 0 }); return false; } return v.y < gy; });
      g.globalCompositeOperation = 'lighter';
      s.b = s.b.filter(function (b) { b.t += dt; var r = 18 * Math.sin(Math.min(1, b.t / .8) * Math.PI); g.fillStyle = ['#3cf0ff', '#ffd23f', '#ff3d7f'][Math.floor(t * 12) % 3]; g.globalAlpha = .35; g.beginPath(); g.arc(b.x, b.y, Math.max(0, r), 0, TAU); g.fill(); g.globalAlpha = 1; return b.t < .8; });
      g.globalCompositeOperation = 'source-over'; } },
    vektor: { init: function (w, h) { var r = []; for (var i = 0; i < 7; i++) { var pts = [], n = 9; for (var k = 0; k < n; k++) pts.push(.7 + R() * .35); r.push({ x: R() * w, y: R() * h, vx: (R() - .5) * 40, vy: (R() - .5) * 40, r: 8 + R() * 16, a: 0, va: (R() - .5) * 2, p: pts }); } return { r: r, a: 0, sh: [], ft: 0 }; },
      step: function (g, s, dt, t, w, h) { g.fillStyle = '#000'; g.fillRect(0, 0, w, h); g.lineWidth = 1.3; g.shadowBlur = 8;
        s.r.forEach(function (o) { o.x = (o.x + o.vx * dt + w) % w; o.y = (o.y + o.vy * dt + h) % h; o.a += o.va * dt; g.strokeStyle = g.shadowColor = '#5dff8a'; g.beginPath();
          o.p.forEach(function (d, i) { var an = o.a + i / o.p.length * TAU; g.lineTo(o.x + Math.cos(an) * o.r * d, o.y + Math.sin(an) * o.r * d); }); g.closePath(); g.stroke(); });
        s.a += dt * 1.4; var cx = w / 2, cy = h / 2, c = Math.cos(s.a), sn = Math.sin(s.a), P = function (x, y) { return [cx + x * c - y * sn, cy + x * sn + y * c]; };
        g.strokeStyle = g.shadowColor = '#3cf0ff'; g.beginPath(); var a1 = P(10, 0), a2 = P(-7, -6), a3 = P(-4, 0), a4 = P(-7, 6); g.moveTo(a1[0], a1[1]); g.lineTo(a2[0], a2[1]); g.lineTo(a3[0], a3[1]); g.lineTo(a4[0], a4[1]); g.closePath(); g.stroke();
        s.ft -= dt; if (s.ft < 0) { s.ft = .18; s.sh.push({ x: a1[0], y: a1[1], vx: c * 220, vy: sn * 220, l: .7 }); }
        g.shadowBlur = 0; g.fillStyle = '#fff'; s.sh = s.sh.filter(function (b) { b.x += b.vx * dt; b.y += b.vy * dt; g.fillRect(b.x - 1, b.y - 1, 2, 2); return (b.l -= dt) > 0; }); } },
    disc: { init: function () { return { d: { x: 0, y: 0, vx: 150, vy: -170 }, set: false }; }, step: function (g, s, dt, t, w, h) {
      g.fillStyle = '#000'; g.fillRect(0, 0, w, h);
      var top = [10, h * .32], bot = [h * .62, h - 8];
      g.lineWidth = 1.4; g.strokeStyle = '#ff9a3c'; g.strokeRect(10, top[0], w - 20, top[1] - top[0]); g.strokeStyle = '#3cf0ff'; g.strokeRect(10, bot[0], w - 20, bot[1] - bot[0]);
      for (var i = 0; i < 6; i++) { g.strokeStyle = 'rgba(60,240,255,' + (.25 - i * .04) + ')'; g.beginPath(); g.moveTo(14 + i * 8, top[1] + 6 + i * 6); g.lineTo(w - 14 - i * 8, top[1] + 6 + i * 6); g.stroke(); }
      if (!s.set) { s.d.x = w / 2; s.d.y = h * .75; s.set = true; }
      var d = s.d; d.x += d.vx * dt; d.y += d.vy * dt; if (d.x < 14 || d.x > w - 14) d.vx *= -1; if (d.y < top[0] + 6 || d.y > bot[1] - 6) d.vy *= -1;
      var ex = w / 2 + Math.sin(t * 1.3) * w * .3, px = w / 2 + Math.sin(t * 1.1 + 2) * w * .3;
      [[ex, (top[0] + top[1]) / 2, '#ff9a3c'], [px, (bot[0] + bot[1]) / 2, '#3cf0ff']].forEach(function (q) { g.strokeStyle = g.shadowColor = q[2]; g.shadowBlur = 10; g.beginPath(); g.arc(q[0], q[1], 6, 0, TAU); g.stroke(); });
      g.strokeStyle = g.shadowColor = d.vy < 0 ? '#3cf0ff' : '#ff9a3c'; g.beginPath(); g.arc(d.x, d.y, 4, 0, TAU); g.stroke(); g.shadowBlur = 0; } },
    tron: { init: function (w, h) { function b(x, y, d, c) { return { x: x, y: y, d: d, c: c, tr: [[x, y]], tt: 0 }; }
      return { b: [b(w * .2, h * .7, 0, '#3cf0ff'), b(w * .8, h * .3, 2, '#ff9b2f')] }; },
      step: function (g, s, dt, t, w, h) { g.clearRect(0, 0, w, h);
        g.strokeStyle = 'rgba(60,240,255,.10)'; g.lineWidth = 1; for (var x = 0; x < w; x += 22) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, h); g.stroke(); } for (var y = 0; y < h; y += 22) { g.beginPath(); g.moveTo(0, y); g.lineTo(w, y); g.stroke(); }
        var D = [[1, 0], [0, 1], [-1, 0], [0, -1]];
        s.b.forEach(function (b) { b.tt -= dt; var d = D[b.d], nx = b.x + d[0] * 90 * dt, ny = b.y + d[1] * 90 * dt;
          if (b.tt < 0 || nx < 14 || nx > w - 14 || ny < 14 || ny > h - 14) { b.tt = .5 + R() * 1.2; var turn = R() < .5 ? 1 : 3, nd = (b.d + turn) % 4, n = D[nd];
            if (b.x + n[0] * 40 < 14 || b.x + n[0] * 40 > w - 14 || b.y + n[1] * 40 < 14 || b.y + n[1] * 40 > h - 14) nd = (b.d + 4 - turn) % 4; b.d = nd; b.tr.push([b.x, b.y]); }
          else { b.x = nx; b.y = ny; }
          if (b.tr.length > 14) b.tr.shift();
          g.strokeStyle = b.c; g.lineWidth = 3; g.shadowColor = b.c; g.shadowBlur = 12; g.beginPath(); g.moveTo(b.tr[0][0], b.tr[0][1]);
          b.tr.forEach(function (p) { g.lineTo(p[0], p[1]); }); g.lineTo(b.x, b.y); g.stroke(); g.shadowBlur = 0; g.fillStyle = '#fff'; g.fillRect(b.x - 3, b.y - 3, 6, 6); }); } }
  };

  document.querySelectorAll('[data-pv]').forEach(function (card) {
    var sc = S[card.dataset.pv]; if (!sc) return;
    var cv = document.createElement('canvas'); cv.className = 'pv'; var host = card.querySelector('.pv-host'); if (host) host.insertBefore(cv, host.firstChild); else card.insertBefore(cv, card.firstChild);
    var g = cv.getContext('2d'), s = null, run = false, last = 0, t = 0, dpr = Math.min(2, devicePixelRatio || 1), w = 0, h = 0;
    function size() { w = cv.clientWidth; h = cv.clientHeight; cv.width = w * dpr; cv.height = h * dpr; g.setTransform(dpr, 0, 0, dpr, 0, 0); s = sc.init(w, h); }
    function loop(now) { if (!run) return; var dt = Math.min(.05, (now - (last || now)) / 1000); last = now; t += dt; sc.step(g, s, dt, t, w, h); requestAnimationFrame(loop); }
    function on() { if (run) return; if (!s || cv.clientWidth !== w) size(); run = true; last = 0; card.classList.add('pv-on'); requestAnimationFrame(loop); }
    function off() { run = false; card.classList.remove('pv-on'); }
    size(); sc.step(g, s, .016, 1.2, w, h); // Standbild
    if (reduce) return;
    if (hover) { card.addEventListener('mouseenter', on); card.addEventListener('mouseleave', off); card.addEventListener('focus', on); card.addEventListener('blur', off); }
    else new IntersectionObserver(function (es) { es.forEach(function (e) { e.isIntersecting ? on() : off(); }); }, { threshold: .6 }).observe(card);
  });
})();
