/* Firewall · Missile Command im Raster. Viren fallen auf die Server, du sprengst sie mit Abfangpaketen aus drei Knoten. */
(function () {
'use strict';
var GY = 296, TOP = 18;
var SERVERS = [40, 66, 92, 148, 174, 200], BASES = [16, 120, 224];

function wave(st, api) {
  var w = st.wave;
  st.toSpawn = Math.min(42, 8 + w * 3); st.spawnT = 1.4; st.split = w >= 3; st.bomberT = w >= 2 ? 4 + Math.random() * 4 : 1e9;
  st.vSpeed = Math.min(62, 17 + w * 3.6); st.mult = Math.min(6, 1 + Math.floor((w - 1) / 2));
  st.bases.forEach(function (b) { b.alive = true; b.ammo = 10; });
  st.msg = 'WELLE ' + w + (st.mult > 1 ? '  ×' + st.mult : ''); st.msgT = 2; st.tally = 0;
}
function targets(st) { var t = []; st.servers.forEach(function (s) { if (s.alive) t.push({ x: s.x, y: GY - 6 }); }); st.bases.forEach(function (b) { if (b.alive && Math.random() < 0.6) t.push({ x: b.x, y: GY - 6 }); }); return t; }
function spawnVirus(st, x, y, tgt) {
  var ts = tgt ? [tgt] : targets(st); if (!ts.length) return;
  var t = ts[Math.floor(Math.random() * ts.length)], d = Math.hypot(t.x - x, t.y - y);
  st.viruses.push({ sx: x, sy: y, x: x, y: y, tx: t.x, ty: t.y, vx: (t.x - x) / d * st.vSpeed, vy: (t.y - y) / d * st.vSpeed, splitY: st.split && Math.random() < 0.3 ? 80 + Math.random() * 90 : -1 });
}
function shoot(st, x, y, api) {
  if (y > GY - 22) y = GY - 22; if (y < TOP + 4) y = TOP + 4;
  var best = null, bd = 1e9;
  st.bases.forEach(function (b, i) { if (!b.alive || b.ammo <= 0) return; var d = Math.abs(b.x - x) + (i === 1 ? -20 : 0); if (d < bd) { bd = d; best = b; } });
  if (!best) { api.tone(110, 0.08, 'square', 0.04); return; }
  best.ammo--; var sp = best === st.bases[1] ? 380 : 300, d = Math.hypot(x - best.x, y - (GY - 12));
  st.shots.push({ sx: best.x, sy: GY - 12, x: best.x, y: GY - 12, tx: x, ty: y, vx: (x - best.x) / d * sp, vy: (y - (GY - 12)) / d * sp });
  api.tone(900, 0.07, 'square', 0.04, 400);
}
function boom(st, x, y, r, chain) { st.booms.push({ x: x, y: y, r: 0, max: r || 21, t: 0, chain: !!chain }); }

Automat.run({
  id: 'firewall', title: 'FIREWALL', sub: 'Viren fallen auf die Server. Sprengen, bevor sie einschlagen.',
  color: '#ff3d7f', color2: '#3cf0ff', res: [240, 320], touch: 'pointer', buttons: [],
  deck: [['MAUS', 'Zielen'], ['KLICK', 'Abfangen'], ['← → ↑ ↓ + LEER', 'ohne Maus']],
  help: { desk: '<b>Klicken</b> sprengt an dieser Stelle · Kettenreaktionen bringen viel', touch: '<b>Tippen</b> sprengt an dieser Stelle · Kettenreaktionen bringen viel' },
  music: { notes: [57, 0, 60, 0, 57, 0, 64, 0, 57, 0, 60, 0, 62, 0, 59, 0], bass: [33, 33, 36, 31], step: 0.15, vol: 0.02 },
  init: function (api) {
    var st = { wave: 1, servers: SERVERS.map(function (x) { return { x: x, alive: true }; }), bases: BASES.map(function (x) { return { x: x, alive: true, ammo: 10 }; }),
      viruses: [], shots: [], booms: [], bombers: [], cx: 120, cy: 150, nextBonus: 10000, done: false };
    wave(st, api); return st;
  },
  hud: function (st) { return 'W' + st.wave; },
  ai: function (st, api) {
    st.aiT = (st.aiT || 0) - 1 / 60;
    if (st.aiT > 0) return {};
    var v = st.viruses.slice().sort(function (a, b) { return b.y - a.y; })[0]; if (!v) return {};
    st.aiT = 0.45 + Math.random() * 0.3;
    return { taps: [{ x: v.x + v.vx * 0.55, y: v.y + v.vy * 0.55 }] };
  },
  update: function (st, dt, api) {
    var I = api.input;
    if (st.msgT > 0) st.msgT -= dt;
    // Fadenkreuz
    if (I.x || I.y) { st.cx = api.clamp(st.cx + I.x * 190 * dt, 4, 236); st.cy = api.clamp(st.cy + I.y * 190 * dt, TOP + 4, GY - 22); if (!api.demo) I.ptr.active = false; }
    else if (I.ptr.active) { st.cx = I.ptr.x; st.cy = Math.min(I.ptr.y, GY - 22); }
    if (api.pressed.fire) shoot(st, st.cx, st.cy, api);
    api.taps.forEach(function (t) { st.cx = t.x; st.cy = Math.min(t.y, GY - 22); shoot(st, t.x, t.y, api); });
    if (st.done) return;
    // Nachschub
    if (st.toSpawn > 0) { st.spawnT -= dt; if (st.spawnT <= 0) { var n = Math.min(st.toSpawn, 1 + Math.floor(Math.random() * Math.min(4, 1 + st.wave / 2))); for (var i = 0; i < n; i++) spawnVirus(st, 8 + Math.random() * 224, TOP); st.toSpawn -= n; st.spawnT = Math.max(0.7, 2.6 - st.wave * 0.13) * (0.6 + Math.random() * 0.8); } }
    st.bomberT -= dt;
    if (st.bomberT <= 0 && st.toSpawn > 0) { st.bomberT = 9 + Math.random() * 6; var left = Math.random() < 0.5; st.bombers.push({ x: left ? -14 : 254, y: 60 + Math.random() * 50, vx: (left ? 1 : -1) * (22 + st.wave), dropT: 1.5 }); api.tone(140, 0.4, 'sawtooth', 0.05, 180); }
    st.bombers.forEach(function (b) { b.x += b.vx * dt; b.dropT -= dt; if (b.dropT <= 0 && b.x > 10 && b.x < 230) { b.dropT = 2.2; spawnVirus(st, b.x, b.y + 6); } });
    st.bombers = st.bombers.filter(function (b) { return b.x > -20 && b.x < 260 && !b.dead; });
    // Viren
    for (var k = st.viruses.length - 1; k >= 0; k--) {
      var v = st.viruses[k]; v.x += v.vx * dt; v.y += v.vy * dt;
      if (v.splitY > 0 && v.y >= v.splitY) { v.splitY = -1; var c = 1 + (Math.random() < 0.5 ? 1 : 0); for (var s = 0; s < c; s++) spawnVirus(st, v.x, v.y); }
      if (v.y >= v.ty) {
        st.viruses.splice(k, 1); boom(st, v.tx, v.ty, 16); api.shake(0.5); api.noise(0.4, 0.22, 900);
        st.servers.forEach(function (sv) { if (sv.alive && Math.abs(sv.x - v.tx) < 8) { sv.alive = false; api.burst(sv.x, GY - 6, '#ff3d7f', 24, 70, 0.8); api.flash('#ff3d7f', 0.15); } });
        st.bases.forEach(function (b) { if (b.alive && Math.abs(b.x - v.tx) < 8) { b.alive = false; b.ammo = 0; api.burst(b.x, GY - 6, '#3cf0ff', 20, 60, 0.7); } });
        if (!st.servers.some(function (x) { return x.alive; })) { st.done = true; api.over({ wave: st.wave, text: 'Bis Welle ' + st.wave + ' gehalten' }); return; }
      }
    }
    // Abfangpakete
    for (k = st.shots.length - 1; k >= 0; k--) { var sh = st.shots[k]; sh.x += sh.vx * dt; sh.y += sh.vy * dt; if ((sh.vy < 0 && sh.y <= sh.ty) || Math.hypot(sh.x - sh.tx, sh.y - sh.ty) < 4) { st.shots.splice(k, 1); boom(st, sh.tx, sh.ty, 21); api.noise(0.25, 0.14, 1800); } }
    // Explosionen (mit Kettenreaktion)
    for (k = st.booms.length - 1; k >= 0; k--) {
      var b = st.booms[k]; b.t += dt; var ph = b.t / 0.95;
      b.r = b.max * (ph < 0.35 ? ph / 0.35 : ph < 0.6 ? 1 : 1 - (ph - 0.6) / 0.4);
      if (ph >= 1) { st.booms.splice(k, 1); continue; }
      for (var j = st.viruses.length - 1; j >= 0; j--) { var vv = st.viruses[j]; if (Math.hypot(vv.x - b.x, vv.y - b.y) < b.r) {
        st.viruses.splice(j, 1); var pts = 25 * st.mult; api.add(pts, vv.x, vv.y - 6, b.chain ? '#ffd23f' : '#fff'); api.burst(vv.x, vv.y, '#ff3d7f', 10, 50, 0.4);
        boom(st, vv.x, vv.y, 11, true); api.tone(500 + Math.random() * 300, 0.05, 'square', 0.035); } }
      for (j = st.bombers.length - 1; j >= 0; j--) { var bm = st.bombers[j]; if (Math.hypot(bm.x - b.x, bm.y - b.y) < b.r + 6) { bm.dead = true; api.add(100 * st.mult, bm.x, bm.y - 8, '#ffd23f'); api.burst(bm.x, bm.y, '#ff9a3c', 24, 70, 0.6); boom(st, bm.x, bm.y, 16, true); } }
    }
    // Bonus-Server
    if (api.score >= st.nextBonus) { st.nextBonus += 10000; var dead = st.servers.filter(function (x) { return !x.alive; })[0]; if (dead) { dead.alive = true; api.float('SERVER +1', dead.x, GY - 24, '#5dff8a'); } }
    // Welle zu Ende → Abrechnung
    if (st.toSpawn <= 0 && !st.viruses.length && !st.bombers.length && !st.booms.length && !st.shots.length) {
      if (!st.tally) {
        st.tally = 1; var ammo = st.bases.reduce(function (a, x) { return a + (x.alive ? x.ammo : 0); }, 0), srv = st.servers.filter(function (x) { return x.alive; }).length;
        var bon = (ammo * 5 + srv * 100) * st.mult; api.add(bon, 120, 150, '#ffd23f'); st.msg = 'WELLE ' + st.wave + ' GEHALTEN'; st.msgT = 2.2;
        api.tone(523, 0.1, 'square', 0.06); api.tone(659, 0.1, 'square', 0.06, null, 0.1); api.tone(784, 0.2, 'square', 0.06, null, 0.2);
      } else if (st.msgT <= 0) { st.wave++; wave(st, api); }
    }
  },
  draw: function (st, g, api) {
    var sky = g.createLinearGradient(0, 0, 0, GY); sky.addColorStop(0, '#05020c'); sky.addColorStop(1, '#14061e'); g.fillStyle = sky; g.fillRect(0, 0, api.W, GY);
    g.strokeStyle = 'rgba(255,61,127,.07)'; for (var x = 0; x <= 240; x += 20) { g.beginPath(); g.moveTo(x, TOP); g.lineTo(x, GY); g.stroke(); }
    // Boden
    api.neon('#3cf0ff', 1.2, function (c) { c.moveTo(0, GY); c.lineTo(240, GY); });
    g.fillStyle = '#020610'; g.fillRect(0, GY + 1, 240, 30);
    // Server
    st.servers.forEach(function (s) {
      if (!s.alive) { g.fillStyle = 'rgba(255,61,127,.35)'; g.fillRect(s.x - 7, GY - 3, 14, 3); return; }
      g.fillStyle = '#081420'; g.fillRect(s.x - 7, GY - 15, 14, 15); g.strokeStyle = '#3cf0ff'; g.strokeRect(s.x - 6.5, GY - 14.5, 13, 14);
      for (var r = 0; r < 3; r++) { g.fillStyle = Math.sin(api.t * 5 + s.x + r * 2) > 0 ? '#5dff8a' : '#1b4a2c'; g.fillRect(s.x - 4, GY - 12 + r * 4, 2, 2); g.fillStyle = 'rgba(60,240,255,.5)'; g.fillRect(s.x - 1, GY - 12 + r * 4, 5, 1); }
    });
    // Knoten mit Munition
    st.bases.forEach(function (b) {
      var col = b.alive ? '#ff3d7f' : 'rgba(255,61,127,.25)';
      api.neon(col, 1.2, function (c) { c.moveTo(b.x - 11, GY); c.lineTo(b.x - 4, GY - 12); c.lineTo(b.x + 4, GY - 12); c.lineTo(b.x + 11, GY); });
      if (b.alive) for (var i = 0; i < b.ammo; i++) { g.fillStyle = '#ffd23f'; g.fillRect(b.x - 9 + (i % 5) * 4, GY + 5 + Math.floor(i / 5) * 4, 2, 2); }
    });
    // Viren-Spuren
    st.viruses.forEach(function (v) {
      g.strokeStyle = 'rgba(255,61,127,.55)'; g.lineWidth = 1; g.beginPath(); g.moveTo(v.sx, v.sy); g.lineTo(v.x, v.y); g.stroke();
      g.fillStyle = '#fff'; g.fillRect(v.x - 1, v.y - 1, 2, 2);
      g.strokeStyle = '#ff3d7f'; for (var a = 0; a < 4; a++) { var an = a * Math.PI / 2 + api.t * 4; g.beginPath(); g.moveTo(v.x + Math.cos(an) * 2, v.y + Math.sin(an) * 2); g.lineTo(v.x + Math.cos(an) * 4, v.y + Math.sin(an) * 4); g.stroke(); }
    });
    // Recognizer-Bomber
    st.bombers.forEach(function (b) { api.neon('#ff9a3c', 1.3, function (c) { c.moveTo(b.x - 9, b.y + 6); c.lineTo(b.x - 9, b.y - 3); c.lineTo(b.x + 9, b.y - 3); c.lineTo(b.x + 9, b.y + 6); c.moveTo(b.x - 9, b.y - 3); c.lineTo(b.x - 6, b.y - 6); c.lineTo(b.x + 6, b.y - 6); c.lineTo(b.x + 9, b.y - 3); }); });
    // Abfangpakete
    st.shots.forEach(function (s) {
      g.strokeStyle = 'rgba(60,240,255,.6)'; g.beginPath(); g.moveTo(s.sx, s.sy); g.lineTo(s.x, s.y); g.stroke();
      g.strokeStyle = '#3cf0ff'; g.beginPath(); g.moveTo(s.tx - 3, s.ty - 3); g.lineTo(s.tx + 3, s.ty + 3); g.moveTo(s.tx + 3, s.ty - 3); g.lineTo(s.tx - 3, s.ty + 3); g.stroke();
    });
    // Explosionen
    g.save(); g.globalCompositeOperation = 'lighter';
    st.booms.forEach(function (b) { var cols = ['#3cf0ff', '#ffd23f', '#ff3d7f', '#fff'], c = cols[Math.floor(api.t * 20 + b.x) % 4];
      g.globalAlpha = 0.25; g.fillStyle = c; g.beginPath(); g.arc(b.x, b.y, b.r, 0, api.TAU); g.fill(); g.globalAlpha = 1; g.strokeStyle = c; g.lineWidth = 1.5; g.beginPath(); g.arc(b.x, b.y, b.r, 0, api.TAU); g.stroke(); });
    g.restore();
    // Fadenkreuz
    if (!api.demo) { g.strokeStyle = '#3cf0ff'; g.lineWidth = 1; g.beginPath(); g.moveTo(st.cx - 6, st.cy); g.lineTo(st.cx - 2, st.cy); g.moveTo(st.cx + 2, st.cy); g.lineTo(st.cx + 6, st.cy); g.moveTo(st.cx, st.cy - 6); g.lineTo(st.cx, st.cy - 2); g.moveTo(st.cx, st.cy + 2); g.lineTo(st.cx, st.cy + 6); g.stroke(); }
    if (st.msgT > 0 && !api.demo) api.text(st.msg, 120, 140, 9, st.tally ? '#ffd23f' : '#fff', 'center');
  }
});
})();
