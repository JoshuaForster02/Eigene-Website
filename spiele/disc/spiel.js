/* Disc Duell · nach "Discs of Tron". Zwei Plattformen, ein Abgrund dazwischen. Disc werfen, abprallen lassen, mit dem Schild zurückschlagen. */
(function () {
'use strict';
var X0 = 10, X1 = 230, Y0 = 20, Y1 = 312, EP = [32, 118], PP = [204, 300];
var FOES = [
  { n: 'WACHE', c: '#ffd23f', sp: 55, iv: 2.6, err: 0.35, bank: 0, shield: 0, discs: 1 },
  { n: 'WACHE', c: '#ffd23f', sp: 65, iv: 2.2, err: 0.28, bank: 0.2, shield: 0, discs: 1 },
  { n: 'SARK-SOLDAT', c: '#ff9a3c', sp: 75, iv: 1.9, err: 0.22, bank: 0.35, shield: 0.15, discs: 1 },
  { n: 'SARK', c: '#ff9a3c', sp: 85, iv: 1.6, err: 0.16, bank: 0.45, shield: 0.3, discs: 1 },
  { n: 'CLU-SOLDAT', c: '#ff3b3b', sp: 90, iv: 1.6, err: 0.14, bank: 0.5, shield: 0.4, discs: 2 },
  { n: 'RINZLER', c: '#ff5b2a', sp: 105, iv: 1.25, err: 0.1, bank: 0.6, shield: 0.55, discs: 2 },
  { n: 'CLU', c: '#ffb04a', sp: 115, iv: 1.05, err: 0.08, bank: 0.65, shield: 0.65, discs: 2 }
];
function foeDef(level) { var f = FOES[Math.min(level - 1, FOES.length - 1)], extra = Math.max(0, level - FOES.length); return { n: f.n, c: f.c, sp: f.sp + extra * 6, iv: Math.max(0.8, f.iv - extra * 0.05), err: Math.max(0.05, f.err - extra * 0.01), bank: f.bank, shield: Math.min(0.8, f.shield + extra * 0.03), discs: f.discs }; }
function mkDisc(owner) { return { owner: owner, state: 'held', x: 0, y: 0, vx: 0, vy: 0, bounces: 0, t: 0, trail: [], defl: false }; }
function round(st) {
  var d = foeDef(st.level);
  st.p = { x: 120, y: 268, r: 6, alive: true, shieldT: 0, cool: 0, side: 'p', c: '#3cf0ff', dead: 0 };
  st.e = { x: 120, y: 66, r: 6, alive: true, shieldT: 0, cool: 0, side: 'e', c: d.c, def: d, throwT: 1.5, tx: 120, ty: 66, dead: 0 };
  st.discs = [mkDisc(st.p)]; for (var i = 0; i < d.discs; i++) st.discs.push(mkDisc(st.e));
  st.msg = 'LEVEL ' + st.level + ' · ' + d.n; st.msgT = 1.8; st.pause = 1.2;
}
function throwDisc(st, who, ang, api) {
  var d = st.discs.filter(function (x) { return x.owner === who && x.state === 'held'; })[0]; if (!d) return false;
  var sp = 225 + st.level * 5; d.state = 'fly'; d.x = who.x + Math.cos(ang) * 9; d.y = who.y + Math.sin(ang) * 9; d.vx = Math.cos(ang) * sp; d.vy = Math.sin(ang) * sp; d.bounces = 0; d.t = 0; d.defl = false; d.trail = [];
  api.tone(who === st.p ? 520 : 380, 0.1, 'sawtooth', 0.04, who === st.p ? 900 : 700); return true;
}
function aimAt(from, to, sp, err) { var dx = to.x - from.x, dy = to.y - from.y, t = Math.hypot(dx, dy) / sp; var ax = to.x + (to.vx || 0) * t, ay = to.y + (to.vy || 0) * t; return Math.atan2(ay - from.y, ax - from.x) + (Math.random() - 0.5) * err * 2; }
function bankAngle(from, to) { // über die Seitenwand spielen: Ziel an der Wand spiegeln
  var wallX = to.x < 120 ? X0 : X1, mx = 2 * wallX - to.x; if (Math.random() < 0.5) { wallX = from.x < 120 ? X0 : X1; mx = 2 * wallX - to.x; }
  return Math.atan2(to.y - from.y, mx - from.x);
}
function derez(st, who, api) {
  who.alive = false; who.dead = 1.6; api.burst(who.x, who.y, who.c, 40, 90, 1); api.burst(who.x, who.y, '#fff', 12, 50, 0.6); api.shake(0.7); api.noise(0.5, 0.3, 1200); api.tone(180, 0.5, 'square', 0.06, 40);
}

Automat.run({
  id: 'disc', title: 'DISC DUELL', sub: 'Zwei Plattformen, ein Abgrund. Wer zuerst getroffen wird, zerfällt in Pixel.',
  color: '#3cf0ff', color2: '#ff9a3c', res: [240, 320], touch: 'stick',
  buttons: [{ id: 'fire', label: 'WERFEN' }, { id: 'fire2', label: 'BLOCK' }],
  deck: [['WASD / ← →', 'Bewegen'], ['MAUS', 'Zielen + Klick'], ['LEER', 'Werfen'], ['X / RECHTSKLICK', 'Schild']],
  help: { desk: '<b>Bewegen</b> mit Pfeilen/WASD · <b>Klick</b> wirft zum Mauszeiger, <b>Leertaste</b> auf den Gegner (beim Seitwärtslaufen über die Bande) · <b>X</b> oder <b>Rechtsklick</b> Schild', touch: '<b>Stick</b> bewegen · <b>WERFEN</b> zielt auf den Gegner, beim Seitwärtslaufen über die Bande · oder direkt auf das Ziel tippen · <b>BLOCK</b> schlägt Discs zurück' },
  music: { notes: [50, 0, 57, 0, 53, 0, 57, 0, 48, 0, 55, 0, 52, 0, 55, 0], bass: [26, 26, 24, 24], step: 0.14, vol: 0.022 },
  init: function (api) { var st = { level: 1, lives: 3, streak: 0 }; round(st); return st; },
  hud: function (st) { return 'L' + st.level + ' ' + '◆'.repeat(Math.max(0, st.lives)); },
  meta: function (st) { return { level: st.level }; },
  ai: function (st, api) { // Demo: der Spieler spielt selbst wie ein mittlerer Gegner
    var p = st.p, e = st.e, inc = st.discs.filter(function (d) { return d.state !== 'held' && d.owner === e && !d.defl; })[0];
    var x = 0; if (inc) x = inc.x > p.x ? -1 : 1; else x = Math.sin(api.t * 0.9) > 0 ? 1 : -1;
    return { x: x, fire: Math.random() < 0.02, fire2: !!(inc && Math.hypot(inc.x - p.x, inc.y - p.y) < 30 && Math.random() < 0.4) };
  },
  update: function (st, dt, api) {
    var I = api.input, p = st.p, e = st.e;
    if (st.msgT > 0) st.msgT -= dt;
    if (st.pause > 0) { st.pause -= dt; return; }
    // Spieler
    if (p.alive) {
      var mx = I.x, my = I.y, m = Math.hypot(mx, my); if (m > 1) { mx /= m; my /= m; }
      p.vx = mx * 120; p.vy = my * 120; p.x = api.clamp(p.x + p.vx * dt, X0 + 8, X1 - 8); p.y = api.clamp(p.y + p.vy * dt, PP[0] + 8, PP[1] - 4);
      if (p.cool > 0) p.cool -= dt; if (p.shieldT > 0) p.shieldT -= dt;
      if (api.pressed.fire2 && p.cool <= 0) { p.shieldT = 0.32; p.cool = 0.85; api.tone(260, 0.12, 'square', 0.04, 520); }
      var tap = api.taps.filter(function (t) { return t.y < PP[0] + 20; })[0];
      if (tap) throwDisc(st, p, Math.atan2(tap.y - p.y, tap.x - p.x), api);
      else if (api.pressed.fire) {
        var ang = I.ptr.active && !api.touch && I.ptr.y < p.y - 10 ? Math.atan2(I.ptr.y - p.y, I.ptr.x - p.x) : aimAt(p, e, 230, 0.03);
        if (!(I.ptr.active && !api.touch) && Math.abs(I.x) > 0.5) ang = bankAngle(p, e);
        throwDisc(st, p, ang, api);
      }
    } else { p.dead -= dt; if (p.dead <= 0) { if (st.lives <= 0) { api.over({ level: st.level, text: 'Besiegt von ' + e.def.n + ' · Level ' + st.level }); st.pause = 1e9; return; } round(st); return; } }
    // Gegner
    var D = e.def;
    if (e.alive) {
      if (e.cool > 0) e.cool -= dt; if (e.shieldT > 0) e.shieldT -= dt;
      var threat = st.discs.filter(function (d) { return d.state !== 'held' && (d.owner === p || d.defl) && d.vy < 0; })[0];
      if (threat) { // ausweichen: wo wird die Disc auf Höhe des Gegners sein?
        var tt = (e.y - threat.y) / (threat.vy || -1), hx = threat.x + threat.vx * Math.max(0, tt);
        if (Math.abs(hx - e.x) < 22) e.tx = hx > e.x ? e.x - 40 : e.x + 40;
        if (Math.hypot(threat.x - e.x, threat.y - e.y) < 28 && e.cool <= 0 && Math.random() < D.shield) { e.shieldT = 0.32; e.cool = 1.1; }
      } else if (Math.abs(e.tx - e.x) < 3 || Math.random() < 0.004) { e.tx = X0 + 20 + Math.random() * (X1 - X0 - 40); e.ty = EP[0] + 14 + Math.random() * (EP[1] - EP[0] - 24); }
      e.tx = api.clamp(e.tx, X0 + 8, X1 - 8);
      var dx = e.tx - e.x, dy = e.ty - e.y, dd = Math.hypot(dx, dy) || 1, sp = Math.min(D.sp, dd / dt);
      e.vx = dx / dd * sp; e.vy = dy / dd * sp; e.x += e.vx * dt; e.y = api.clamp(e.y + e.vy * dt, EP[0] + 6, EP[1] - 8);
      e.throwT -= dt;
      if (e.throwT <= 0 && p.alive) { e.throwT = D.iv * (0.7 + Math.random() * 0.6); throwDisc(st, e, Math.random() < D.bank ? bankAngle(e, p) : aimAt(e, p, 230, D.err), api); }
    } else { e.dead -= dt; if (e.dead <= 0) { st.level++; if (st.level % 4 === 0 && st.lives < 5) { st.lives++; api.float('EXTRALEBEN', 120, 160, '#5dff8a'); } round(st); return; } }
    // Discs
    st.discs.forEach(function (d) {
      var o = d.owner;
      if (d.state === 'held') { d.x = o.x + 8; d.y = o.y + (o === p ? -2 : 2); return; }
      d.t += dt;
      if (d.state === 'fly') {
        d.x += d.vx * dt; d.y += d.vy * dt;
        var b = false; if (d.x < X0 + 3) { d.x = X0 + 3; d.vx = Math.abs(d.vx); b = true; } if (d.x > X1 - 3) { d.x = X1 - 3; d.vx = -Math.abs(d.vx); b = true; }
        if (d.y < Y0 + 3) { d.y = Y0 + 3; d.vy = Math.abs(d.vy); b = true; } if (d.y > Y1 - 3) { d.y = Y1 - 3; d.vy = -Math.abs(d.vy); b = true; }
        if (b) { d.bounces++; api.tone(900, 0.03, 'square', 0.025); api.burst(d.x, d.y, o.c, 4, 30, 0.25); }
        if (d.bounces > 2 || d.t > 1.9) d.state = 'ret';
      } else { // Rückflug
        var rx = o.x - d.x, ry = o.y - d.y, rd = Math.hypot(rx, ry) || 1, rs = 270;
        d.vx += (rx / rd * rs - d.vx) * Math.min(1, dt * 6); d.vy += (ry / rd * rs - d.vy) * Math.min(1, dt * 6); d.x += d.vx * dt; d.y += d.vy * dt;
        if (rd < 9 || !o.alive) { d.state = 'held'; d.defl = false; }
      }
      d.trail.push(d.x, d.y); if (d.trail.length > 20) d.trail.splice(0, 2);
      // Treffer und Schild
      [p, e].forEach(function (t) {
        if (!t.alive || d.state === 'held') return;
        var hostile = d.defl ? t === o : t !== o; if (!hostile) return;
        var dist = Math.hypot(d.x - t.x, d.y - t.y);
        if (t.shieldT > 0 && dist < 19) { // zurückschlagen
          var back = Math.atan2(o.y - d.y, o.x - d.x) + (Math.random() - 0.5) * 0.3, s = Math.hypot(d.vx, d.vy) * 1.15;
          if (t === o) back = Math.atan2((t === p ? e : p).y - d.y, (t === p ? e : p).x - d.x);
          d.vx = Math.cos(back) * s; d.vy = Math.sin(back) * s; d.state = 'fly'; d.bounces = 1; d.t = 0.4; d.defl = t !== o; t.shieldT = 0;
          api.tone(1200, 0.08, 'square', 0.05, 600); api.burst(d.x, d.y, '#fff', 10, 60, 0.3); if (t === p) api.add(100, p.x, p.y - 16, '#3cf0ff');
          return;
        }
        if (dist < t.r + 3) {
          derez(st, t, api); d.state = 'ret';
          if (t === e) { var pts = 500 * st.level * (d.bounces > 0 ? 2 : 1) * (d.defl ? 2 : 1); api.add(pts, e.x, e.y - 14, '#ffd23f'); api.flash('#ffd23f', 0.12); if (d.bounces > 0) api.float('BANDE ×2', 120, 150, '#3cf0ff'); }
          else st.lives--;
        }
      });
    });
  },
  draw: function (st, g, api) {
    // Abgrund
    for (var i = 0; i < 9; i++) { var y = EP[1] + 8 + i * 9, a = 0.25 - i * 0.025; g.strokeStyle = 'rgba(60,240,255,' + Math.max(0.02, a) + ')'; g.beginPath(); g.moveTo(X0 + i * 6, y); g.lineTo(X1 - i * 6, y); g.stroke(); }
    // Plattformen
    [[EP, st.e.c], [PP, '#3cf0ff']].forEach(function (pl) {
      var r = pl[0], c = pl[1];
      g.strokeStyle = 'rgba(255,255,255,.05)'; for (var x = X0; x <= X1; x += 22) { g.beginPath(); g.moveTo(x, r[0]); g.lineTo(x, r[1]); g.stroke(); }
      for (var yy = r[0]; yy <= r[1]; yy += 22) { g.beginPath(); g.moveTo(X0, yy); g.lineTo(X1, yy); g.stroke(); }
      api.neon(c, 1.2, function (cx) { cx.rect(X0, r[0], X1 - X0, r[1] - r[0]); });
    });
    api.neon('rgba(60,240,255,.5)', 1, function (cx) { cx.moveTo(X0, Y0); cx.lineTo(X0, Y1); cx.moveTo(X1, Y0); cx.lineTo(X1, Y1); });
    // Krieger (von oben)
    [st.e, st.p].forEach(function (w) {
      if (!w.alive) return;
      var dir = w === st.p ? -1 : 1;
      if (w.shieldT > 0) { g.strokeStyle = '#fff'; g.globalAlpha = 0.8; g.lineWidth = 1.5; g.beginPath(); g.arc(w.x, w.y, 17, 0, api.TAU); g.stroke(); g.globalAlpha = 1; }
      api.neon(w.c, 1.4, function (c) { c.arc(w.x, w.y, w.r, 0, api.TAU); });
      api.neon(w.c, 1.4, function (c) { c.moveTo(w.x - 5, w.y + dir * -1); c.lineTo(w.x, w.y + dir * 7); c.lineTo(w.x + 5, w.y + dir * -1); });
      g.fillStyle = '#fff'; g.fillRect(w.x - 1, w.y - 1, 2, 2);
    });
    // Discs
    st.discs.forEach(function (d) {
      var c = d.defl ? '#fff' : d.owner.c;
      for (var k = 0; k < d.trail.length; k += 2) { g.globalAlpha = k / d.trail.length * 0.6; g.fillStyle = c; g.fillRect(d.trail[k] - 1, d.trail[k + 1] - 1, 2, 2); }
      g.globalAlpha = 1; if (d.state === 'held' && !d.owner.alive) return;
      api.neon(c, 1.3, function (cx) { cx.arc(d.x, d.y, d.state === 'held' ? 2.5 : 3.5, 0, api.TAU); });
    });
    if (st.msgT > 0 && !api.demo) { api.text(st.msg, 120, 156, 8, '#fff', 'center'); }
  }
});
})();
