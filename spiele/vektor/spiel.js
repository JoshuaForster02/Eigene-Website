/* Vektor · Asteroids in Leuchtlinien. Datenblöcke zerlegen, dem Recognizer ausweichen. */
(function () {
'use strict';
var TOP = 16;
function rockShape(r) { var n = 9 + (Math.random() * 4 | 0), pts = []; for (var i = 0; i < n; i++) { var a = i / n * Math.PI * 2, d = r * (0.72 + Math.random() * 0.36); pts.push([Math.cos(a) * d, Math.sin(a) * d]); } return pts; }
function rock(st, x, y, size, api) {
  var r = [0, 7, 14, 25][size], a = Math.random() * api.TAU, v = (16 + Math.random() * 30) * (4 - size) * 0.62 + st.wave * 2;
  st.rocks.push({ x: x, y: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, r: r, size: size, rot: 0, vr: (Math.random() - 0.5) * 1.6, pts: rockShape(r), col: ['#3cf0ff', '#c46bff', '#5dff8a'][size - 1] });
}
function newWave(st, api) {
  var n = Math.min(11, 3 + st.wave);
  for (var i = 0; i < n; i++) { var x, y; do { x = Math.random() * api.W; y = TOP + Math.random() * (api.H - TOP); } while (Math.hypot(x - st.ship.x, y - st.ship.y) < 90); rock(st, x, y, 3, api); }
  st.msg = 'SEKTOR ' + st.wave; st.msgT = 1.6; st.ufoT = 14 + Math.random() * 8;
}
function spawnShip(st, api) { st.ship = { x: api.W / 2, y: (api.H + TOP) / 2, vx: 0, vy: 0, a: -Math.PI / 2, inv: 2.5, dead: 0, thrust: false }; }
function wrap(o, api) { if (o.x < -10) o.x += api.W + 20; if (o.x > api.W + 10) o.x -= api.W + 20; if (o.y < TOP - 10) o.y += api.H - TOP + 20; if (o.y > api.H + 10) o.y -= api.H - TOP + 20; }

Automat.run({
  id: 'vektor', title: 'VEKTOR', sub: 'Datenblöcke treiben durchs Raster. Zerleg sie, bevor sie dich zerlegen.',
  color: '#5dff8a', color2: '#3cf0ff', res: 'fill', fillH: 300, minW: 225, maxW: 520, touch: 'stick',
  buttons: [{ id: 'fire', label: 'FEUER' }, { id: 'fire2', label: 'SPRUNG' }],
  deck: [['← →', 'Drehen'], ['↑', 'Schub'], ['LEER', 'Feuer'], ['X', 'Hypersprung']],
  help: { desk: '<b>← →</b> drehen · <b>↑</b> Schub · <b>Leertaste</b> feuern · <b>X</b> Hypersprung', touch: '<b>Stick</b> lenkt und gibt Schub · <b>FEUER</b> halten · <b>SPRUNG</b> teleportiert' },
  music: { notes: [45, 0, 0, 0, 44, 0, 0, 0], step: 0.32, vol: 0.05 },
  init: function (api) {
    var st = { wave: 1, lives: 3, rocks: [], shots: [], eshots: [], ufo: null, fireT: 0, hypT: 0, nextLife: 10000, beat: 0 };
    spawnShip(st, api); newWave(st, api); return st;
  },
  hud: function (st) { return 'S' + st.wave + ' ' + '▲'.repeat(Math.max(0, st.lives)); },
  meta: function (st) { return { level: st.wave }; },
  ai: function (st, api) {
    var s = st.ship, best = null, bd = 1e9;
    st.rocks.forEach(function (r) { var d = Math.hypot(r.x - s.x, r.y - s.y); if (d < bd) { bd = d; best = r; } });
    if (!best) return {};
    var want = Math.atan2(best.y + best.vy * 0.3 - s.y, best.x + best.vx * 0.3 - s.x), da = Math.atan2(Math.sin(want - s.a), Math.cos(want - s.a));
    return { x: da > 0.08 ? 1 : da < -0.08 ? -1 : 0, y: bd > 140 ? -1 : 0, fire: Math.abs(da) < 0.25, fire2: bd < best.r + 10 && Math.random() < 0.02 };
  },
  update: function (st, dt, api) {
    var I = api.input, s = st.ship;
    if (st.msgT > 0) st.msgT -= dt;
    // Herzschlag-Bass wird schneller, je weniger Blöcke übrig sind
    st.beat -= dt; if (st.beat <= 0 && !api.demo) { st.beat = Math.max(0.25, 0.4 + st.rocks.length * 0.035); api.tone(st.beatHi ? 62 : 55, 0.1, 'triangle', 0.08); st.beatHi = !st.beatHi; }
    if (s.dead > 0) {
      s.dead -= dt;
      if (s.dead <= 0) { if (st.lives <= 0) { api.over({ wave: st.wave, text: 'Bis Sektor ' + st.wave }); s.dead = 1e9; return; } spawnShip(st, api); }
    } else {
      if (I.analog && (Math.abs(I.x) + Math.abs(I.y) > 0.25)) { // Stick: Richtung direkt, Ausschlag = Schub
        var want = Math.atan2(I.y, I.x), da = Math.atan2(Math.sin(want - s.a), Math.cos(want - s.a)); s.a += api.clamp(da, -9 * dt, 9 * dt);
        s.thrust = Math.hypot(I.x, I.y) > 0.6;
      } else { s.a += I.x * 4.6 * dt; s.thrust = I.y < -0.3; }
      if (s.thrust) { s.vx += Math.cos(s.a) * 230 * dt; s.vy += Math.sin(s.a) * 230 * dt; if (Math.random() < 0.6) api.burst(s.x - Math.cos(s.a) * 7, s.y - Math.sin(s.a) * 7, '#ff9a3c', 1, 30, 0.25); }
      var drag = Math.pow(0.55, dt); s.vx *= drag; s.vy *= drag;
      var sp = Math.hypot(s.vx, s.vy); if (sp > 250) { s.vx *= 250 / sp; s.vy *= 250 / sp; }
      s.x += s.vx * dt; s.y += s.vy * dt; wrap(s, api); if (s.inv > 0) s.inv -= dt;
      st.fireT -= dt;
      if (I.fire && st.fireT <= 0 && st.shots.length < 6) { st.fireT = 0.17; st.shots.push({ x: s.x + Math.cos(s.a) * 8, y: s.y + Math.sin(s.a) * 8, vx: s.vx + Math.cos(s.a) * 360, vy: s.vy + Math.sin(s.a) * 360, life: 0.85 }); api.tone(1400, 0.06, 'square', 0.035, 500); }
      st.hypT -= dt;
      if (api.pressed.fire2 && st.hypT <= 0) { st.hypT = 1.8; api.burst(s.x, s.y, '#5dff8a', 14, 60, 0.4); s.x = 20 + Math.random() * (api.W - 40); s.y = TOP + 20 + Math.random() * (api.H - TOP - 40); s.vx = s.vy = 0; s.inv = 0.6; api.tone(200, 0.25, 'sine', 0.06, 1200); }
    }
    // Schüsse
    [st.shots, st.eshots].forEach(function (arr) { for (var i = arr.length - 1; i >= 0; i--) { var b = arr[i]; b.x += b.vx * dt; b.y += b.vy * dt; wrap(b, api); if ((b.life -= dt) <= 0) arr.splice(i, 1); } });
    // Blöcke
    for (var i = st.rocks.length - 1; i >= 0; i--) {
      var r = st.rocks[i]; r.x += r.vx * dt; r.y += r.vy * dt; r.rot += r.vr * dt; wrap(r, api);
      var hit = false;
      for (var j = st.shots.length - 1; j >= 0; j--) { var b = st.shots[j]; if (Math.hypot(b.x - r.x, b.y - r.y) < r.r) { st.shots.splice(j, 1); hit = true; break; } }
      if (!hit && s.dead <= 0 && s.inv <= 0 && Math.hypot(s.x - r.x, s.y - r.y) < r.r + 5) { hit = true; die(st, api); }
      if (hit) {
        st.rocks.splice(i, 1); api.add([0, 100, 50, 20][r.size], r.x, r.y - r.r, r.size === 1 ? '#ffd23f' : '#fff');
        api.burst(r.x, r.y, r.col, 8 + (4 - r.size) * 4, 60, 0.5); api.noise(0.12 + r.size * 0.06, 0.12 + r.size * 0.04, 600 + r.size * 400);
        if (r.size > 1) { rock(st, r.x, r.y, r.size - 1, api); rock(st, r.x, r.y, r.size - 1, api); }
      }
    }
    // Recognizer
    st.ufoT -= dt;
    if (!st.ufo && st.ufoT <= 0 && st.wave >= 2) { var left = Math.random() < 0.5, small = api.score > 25000 && Math.random() < 0.6; st.ufo = { x: left ? -12 : api.W + 12, y: TOP + 30 + Math.random() * (api.H - TOP - 60), vx: (left ? 1 : -1) * (small ? 70 : 50), small: small, t: 0, shotT: 1 }; st.ufoT = 18 + Math.random() * 10; }
    var u = st.ufo;
    if (u) {
      u.t += dt; u.x += u.vx * dt; u.y += Math.sin(u.t * 1.6) * 24 * dt; u.shotT -= dt;
      if (u.shotT <= 0 && s.dead <= 0) { u.shotT = u.small ? 0.9 : 1.4; var err = u.small ? 0.12 : 0.6, aa = Math.atan2(s.y - u.y, s.x - u.x) + (Math.random() - 0.5) * err; st.eshots.push({ x: u.x, y: u.y, vx: Math.cos(aa) * 170, vy: Math.sin(aa) * 170, life: 1.6 }); api.tone(300, 0.08, 'sawtooth', 0.03, 150); }
      var ur = u.small ? 6 : 10;
      for (j = st.shots.length - 1; j >= 0; j--) { b = st.shots[j]; if (Math.abs(b.x - u.x) < ur && Math.abs(b.y - u.y) < ur * 0.7) { st.shots.splice(j, 1); api.add(u.small ? 1000 : 200, u.x, u.y - 10, '#ffd23f'); api.burst(u.x, u.y, '#ff3b3b', 30, 80, 0.7); api.shake(0.4); st.ufo = u = null; break; } }
      if (u && (u.x < -20 || u.x > api.W + 20)) st.ufo = u = null;
      if (u && s.dead <= 0 && s.inv <= 0 && Math.hypot(u.x - s.x, u.y - s.y) < ur + 5) { st.ufo = null; die(st, api); }
    }
    for (j = st.eshots.length - 1; j >= 0; j--) { b = st.eshots[j]; if (s.dead <= 0 && s.inv <= 0 && Math.hypot(b.x - s.x, b.y - s.y) < 6) { st.eshots.splice(j, 1); die(st, api); } }
    if (api.score >= st.nextLife) { st.nextLife += 10000; st.lives++; api.float('EXTRALEBEN', s.x, s.y - 14, '#5dff8a'); api.tone(880, 0.1, 'square', 0.06); api.tone(1320, 0.15, 'square', 0.06, null, 0.1); }
    if (!st.rocks.length && !st.ufo && s.dead <= 0) { st.wave++; newWave(st, api); }
  },
  draw: function (st, g, api) {
    // ruhiges Sternenraster
    g.fillStyle = 'rgba(93,255,138,.18)'; for (var y = TOP + 12; y < api.H; y += 24) for (var x = 12; x < api.W; x += 24) g.fillRect(x, y, 1, 1);
    st.rocks.forEach(function (r) { var c = Math.cos(r.rot), s = Math.sin(r.rot);
      api.neon(r.col, 1.1, function (cx) { r.pts.forEach(function (p, i) { var px = r.x + p[0] * c - p[1] * s, py = r.y + p[0] * s + p[1] * c; i ? cx.lineTo(px, py) : cx.moveTo(px, py); }); cx.closePath(); }); });
    g.fillStyle = '#fff'; st.shots.forEach(function (b) { g.fillRect(b.x - 1, b.y - 1, 2, 2); });
    g.fillStyle = '#ff3b3b'; st.eshots.forEach(function (b) { g.fillRect(b.x - 1.5, b.y - 1.5, 3, 3); });
    var u = st.ufo;
    if (u) { var k = u.small ? 0.6 : 1; api.neon('#ff3b3b', 1.2, function (c) { c.moveTo(u.x - 10 * k, u.y + 5 * k); c.lineTo(u.x - 10 * k, u.y - 3 * k); c.lineTo(u.x + 10 * k, u.y - 3 * k); c.lineTo(u.x + 10 * k, u.y + 5 * k); c.moveTo(u.x - 10 * k, u.y - 3 * k); c.lineTo(u.x - 6 * k, u.y - 7 * k); c.lineTo(u.x + 6 * k, u.y - 7 * k); c.lineTo(u.x + 10 * k, u.y - 3 * k); }); }
    var s = st.ship;
    if (s.dead <= 0 && !(s.inv > 0 && Math.floor(api.t * 12) % 2)) {
      var ca = Math.cos(s.a), sa = Math.sin(s.a), P = function (x, y) { return [s.x + x * ca - y * sa, s.y + x * sa + y * ca]; };
      api.neon('#5dff8a', 1.3, function (c) { var a = P(9, 0), b = P(-6, -5.5), d = P(-3.5, 0), e = P(-6, 5.5); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.lineTo(d[0], d[1]); c.lineTo(e[0], e[1]); c.closePath(); });
      if (s.thrust && Math.floor(api.t * 30) % 2) api.neon('#ff9a3c', 1, function (c) { var a = P(-4.5, -2.5), b = P(-10, 0), d = P(-4.5, 2.5); c.moveTo(a[0], a[1]); c.lineTo(b[0], b[1]); c.lineTo(d[0], d[1]); });
    }
    if (st.msgT > 0 && !api.demo) api.text(st.msg, api.W / 2, api.H / 2 - 30, 9, '#5dff8a', 'center');
  }
});
function die(st, api) {
  var s = st.ship; st.lives--; s.dead = 2.2; api.burst(s.x, s.y, '#5dff8a', 34, 90, 1); api.shake(0.7); api.flash('#5dff8a', 0.15); api.noise(0.6, 0.3, 800); api.tone(160, 0.5, 'sawtooth', 0.06, 40);
}
})();
