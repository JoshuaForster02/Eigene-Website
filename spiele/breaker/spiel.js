/* Grid Breaker · Breakout im Raster. Acht Level (Herz, EKG, Recognizer …), danach schneller von vorn. */
(function () {
'use strict';
var L = 6, R = 234, TOP = 20, PY = 298, BW = 20.6, BH = 8, GAP = 2, BY0 = 36;
var COL = { r: '#ff3b6b', o: '#ff8a1f', y: '#ffd23f', g: '#5dff8a', c: '#3cf0ff', b: '#4d8dff', p: '#c46bff', w: '#e8f4ff' };
var PTS = { r: 70, o: 60, y: 50, g: 40, c: 30, b: 20, p: 20, w: 10 };
var LEVELS = [
  { n: 'RASTER', m: ['..........', 'cccccccccc', 'bbbbbbbbbb', 'pppppppppp', 'rrrrrrrrrr', 'oooooooooo', 'yyyyyyyyyy'] },
  { n: 'HERZ', m: ['.rr....rr.', 'rrrr..rrrr', 'rrrrrrrrrr', 'rrrrBBrrrr', '.rrrrrrrr.', '..rrrrrr..', '...rrrr...', '....rr....'] },
  { n: 'EKG', m: ['.....r....', '....r.r...', '....r.r...', 'rrr.r..r.r', '...r....r.', '..........', 'SSSSSSSSSS', 'gggggggggg'] },
  { n: 'RECOGNIZER', m: ['oooooooooo', 'oSSSSSSSSo', 'oo......oo', 'oo..BB..oo', 'oo......oo', 'oo......oo', 'SS......SS'] },
  { n: 'DISC', m: ['...cccc...', '..cbbbbc..', '.cbbwwbbc.', '.cbwBBwbc.', '.cbbwwbbc.', '..cbbbbc..', '...cccc...'] },
  { n: 'LICHTRENNER', m: ['c.........', 'cc.......o', '.cc.....oo', '..cc...oo.', 'XX.cc.oo.X', '...BccB...', 'SSSSSSSSSS'] },
  { n: 'ENCOM', m: ['bSbSbSbSbS', 'SbSbSbSbSb', 'bSbSbSbSbS', '..........', 'XX..BB..XX', 'pppppppppp', 'cccccccccc'] },
  { n: 'FESTUNG', m: ['XXXX..XXXX', 'XyyX..XyyX', 'XyyyyyyyyX', 'XSSSBBSSSX', 'XooooooooX', 'X........X'] }
];
var PU = [['W', '#3cf0ff', 'BREIT'], ['M', '#ffd23f', 'MULTIBALL'], ['L', '#ff3b6b', 'LASER'], ['S', '#5dff8a', 'LANGSAM'], ['C', '#c46bff', 'KLEBEN']];

function build(st) {
  var lv = LEVELS[(st.level - 1) % LEVELS.length], loop = Math.floor((st.level - 1) / LEVELS.length);
  st.bricks = []; st.name = lv.n;
  lv.m.forEach(function (row, j) {
    for (var i = 0; i < 10; i++) {
      var ch = row[i]; if (!ch || ch === '.') continue;
      var b = { x: L + GAP + i * (BW + GAP), y: BY0 + j * (BH + GAP), w: BW, h: BH, t: ch, hp: 1, i: i, j: j, hit: 0 };
      if (ch === 'S') b.hp = 2 + loop; if (ch === 'X') b.hp = 1e9;
      st.bricks.push(b);
    }
  });
}
function speed(st) { return Math.min(300, 150 + st.level * 9) * (st.slow > 0 ? 0.7 : 1); }
function newBall(st) { st.balls = [{ x: st.px, y: PY - 6, vx: 0, vy: 0, stuck: true, off: 0, trail: [] }]; st.launchT = 4; }
function launch(st, b) { var a = (Math.random() - 0.5) * 0.6, v = speed(st); b.vx = Math.sin(a) * v; b.vy = -Math.cos(a) * v; b.stuck = false; }

Automat.run({
  id: 'breaker', title: 'GRID BREAKER', sub: 'Breakout im Raster. Fang die Extras, halt den Ball im Spiel.',
  color: '#3cf0ff', color2: '#ff3b6b', res: [240, 320], touch: 'pointer',
  buttons: [],
  deck: [['MAUS / ← →', 'Schläger'], ['LEER', 'Abschuss / Laser']],
  help: { desk: '<b>Maus</b> oder <b>← →</b> bewegen · <b>Leertaste</b> abschießen und Laser', touch: '<b>Finger ziehen</b> bewegt den Schläger · <b>Tippen</b> schießt ab · Finger halten feuert den Laser' },
  music: { notes: [64, 0, 67, 0, 71, 0, 67, 0, 62, 0, 66, 0, 69, 0, 66, 0], bass: [40, 38, 36, 38], step: 0.13, vol: 0.022 },
  init: function (api) {
    var st = { level: 1, lives: 3, px: 120, pw: 36, wide: 0, laser: 0, slow: 0, glue: 0, combo: 0, caps: [], bolts: [], msgT: 2, fireT: 0, clearT: 0 };
    build(st); newBall(st); return st;
  },
  hud: function (st) { return 'LV' + st.level; },
  meta: function (st) { return { level: st.level }; },
  ai: function (st) {
    var b = st.balls.slice().sort(function (a, c) { return c.y - a.y; })[0], tx = b ? b.x + Math.sin(b.y * 0.05) * 8 : 120;
    return { ptr: { x: tx, y: 300 }, fire: !!(b && b.stuck && Math.random() < 0.02) || st.laser > 0 };
  },
  update: function (st, dt, api) {
    var I = api.input;
    if (st.msgT > 0) st.msgT -= dt;
    // Schläger
    st.pw += ((st.wide > 0 ? 58 : 36) - st.pw) * Math.min(1, dt * 10);
    if (I.x) { st.px += I.x * 250 * dt; if (!api.demo) I.ptr.active = false; }
    else if (I.ptr.active) st.px += (I.ptr.x - st.px) * Math.min(1, dt * 30);
    st.px = api.clamp(st.px, L + st.pw / 2, R - st.pw / 2);
    ['wide', 'laser', 'slow', 'glue'].forEach(function (k) { if (st[k] > 0) st[k] -= dt; });
    if (st.clearT > 0) { st.clearT -= dt; if (st.clearT <= 0) { st.level++; build(st); newBall(st); st.msgT = 2; st.caps = []; st.bolts = []; } return; }
    var wantLaunch = api.pressed.fire || api.taps.length > 0;
    // Laser
    if (st.laser > 0 && (I.fire || (api.touch && I.ptr.down))) { st.fireT -= dt; if (st.fireT <= 0) { st.fireT = 0.28; st.bolts.push({ x: st.px - st.pw / 2 + 3, y: PY - 4 }, { x: st.px + st.pw / 2 - 3, y: PY - 4 }); api.tone(1200, 0.05, 'square', 0.03, 600); } }
    for (var k = st.bolts.length - 1; k >= 0; k--) {
      var bo = st.bolts[k]; bo.y -= 320 * dt; var gone = bo.y < TOP;
      for (var q = 0; q < st.bricks.length && !gone; q++) { var br = st.bricks[q]; if (bo.x > br.x && bo.x < br.x + br.w && bo.y > br.y && bo.y < br.y + br.h) { hitBrick(st, br, api); gone = true; } }
      if (gone) st.bolts.splice(k, 1);
    }
    // Bälle
    for (var n = st.balls.length - 1; n >= 0; n--) {
      var b = st.balls[n];
      if (b.stuck) { b.x = st.px + b.off; b.y = PY - 6; st.launchT -= dt; if (wantLaunch || st.launchT <= 0) { launch(st, b); api.tone(660, 0.06, 'square', 0.05); wantLaunch = false; } continue; }
      var v = Math.hypot(b.vx, b.vy), tv = speed(st); if (Math.abs(v - tv) > 1) { b.vx *= tv / v; b.vy *= tv / v; }
      b.x += b.vx * dt; b.y += b.vy * dt;
      b.trail.push(b.x, b.y); if (b.trail.length > 16) b.trail.splice(0, 2);
      if (b.x < L + 3) { b.x = L + 3; b.vx = Math.abs(b.vx); api.tone(300, 0.03, 'square', 0.025); }
      if (b.x > R - 3) { b.x = R - 3; b.vx = -Math.abs(b.vx); api.tone(300, 0.03, 'square', 0.025); }
      if (b.y < TOP + 3) { b.y = TOP + 3; b.vy = Math.abs(b.vy); api.tone(300, 0.03, 'square', 0.025); }
      // nie zu flach
      if (Math.abs(b.vy) < tv * 0.28) { b.vy = (b.vy < 0 ? -1 : 1) * tv * 0.28; b.vx = Math.sign(b.vx || 1) * Math.sqrt(tv * tv - b.vy * b.vy); }
      // Schläger
      if (b.vy > 0 && b.y > PY - 6 && b.y < PY + 4 && Math.abs(b.x - st.px) < st.pw / 2 + 3) {
        var rel = api.clamp((b.x - st.px) / (st.pw / 2), -1, 1), a = rel * 1.05;
        b.vx = Math.sin(a) * tv; b.vy = -Math.cos(a) * tv; b.y = PY - 6; st.combo = 0;
        if (st.glue > 0) { b.stuck = true; b.off = b.x - st.px; st.launchT = 2.5; }
        api.tone(440, 0.05, 'square', 0.05); api.burst(b.x, PY - 2, '#3cf0ff', 6, 40, 0.3);
      }
      // Steine
      for (var i = 0; i < st.bricks.length; i++) {
        var br2 = st.bricks[i], cx = api.clamp(b.x, br2.x, br2.x + br2.w), cy = api.clamp(b.y, br2.y, br2.y + br2.h), dx = b.x - cx, dy = b.y - cy;
        if (dx * dx + dy * dy > 9) continue;
        var ox = Math.min(b.x + 3 - br2.x, br2.x + br2.w - (b.x - 3)), oy = Math.min(b.y + 3 - br2.y, br2.y + br2.h - (b.y - 3));
        if (ox < oy) { b.vx = b.x < br2.x + br2.w / 2 ? -Math.abs(b.vx) : Math.abs(b.vx); } else { b.vy = b.y < br2.y + br2.h / 2 ? -Math.abs(b.vy) : Math.abs(b.vy); }
        hitBrick(st, br2, api); break;
      }
      if (b.y > api.H + 8) st.balls.splice(n, 1);
    }
    if (!st.balls.length) {
      st.lives--; api.shake(0.6); api.tone(200, 0.5, 'sawtooth', 0.07, 50); st.caps = []; st.bolts = []; st.wide = st.laser = st.slow = st.glue = 0;
      if (st.lives <= 0) { api.over({ level: st.level, text: 'Level ' + st.level + ' · ' + st.name }); st.balls = []; st.lives = 0; return; }
      newBall(st);
    }
    // Extras
    for (var c = st.caps.length - 1; c >= 0; c--) {
      var cp = st.caps[c]; cp.y += 62 * dt;
      if (cp.y > PY - 6 && cp.y < PY + 6 && Math.abs(cp.x - st.px) < st.pw / 2 + 7) { power(st, cp.t, api); st.caps.splice(c, 1); continue; }
      if (cp.y > api.H) st.caps.splice(c, 1);
    }
    if (!st.bricks.some(function (x) { return x.t !== 'X'; }) && st.clearT <= 0) {
      var bon = 1000 * st.level; api.add(bon, 120, 170, '#ffd23f'); st.clearT = 1.8; st.balls.forEach(function (x) { x.vx = x.vy = 0; });
      api.tone(523, 0.1, 'square', 0.06); api.tone(659, 0.1, 'square', 0.06, null, 0.1); api.tone(784, 0.25, 'square', 0.06, null, 0.2);
    }
  },
  draw: function (st, g, api) {
    // Raster und Wände
    g.strokeStyle = 'rgba(60,240,255,.06)'; g.lineWidth = 1;
    for (var x = L; x <= R; x += 19) { g.beginPath(); g.moveTo(x, TOP); g.lineTo(x, api.H); g.stroke(); }
    for (var y = TOP; y <= api.H; y += 19) { g.beginPath(); g.moveTo(L, y); g.lineTo(R, y); g.stroke(); }
    api.neon('#3cf0ff', 1.2, function (c) { c.moveTo(L, api.H); c.lineTo(L, TOP); c.lineTo(R, TOP); c.lineTo(R, api.H); });
    // Steine
    for (var i = 0; i < st.bricks.length; i++) {
      var b = st.bricks[i], col = COL[b.t] || '#ccc';
      if (b.t === 'S') col = '#cfd8e6'; else if (b.t === 'X') col = '#5b6680'; else if (b.t === 'B') col = Math.sin(api.t * 8) > 0 ? '#ff3b3b' : '#ff9a3c';
      g.fillStyle = col; g.globalAlpha = b.t === 'X' ? 0.35 : 0.42; g.fillRect(b.x, b.y, b.w, b.h);
      g.globalAlpha = 1; g.strokeStyle = col; g.lineWidth = 1; g.strokeRect(b.x + 0.5, b.y + 0.5, b.w - 1, b.h - 1);
      if (b.hit > 0) { g.fillStyle = '#fff'; g.globalAlpha = b.hit * 4; g.fillRect(b.x, b.y, b.w, b.h); g.globalAlpha = 1; b.hit -= 1 / 60; }
      if (b.t === 'S') { g.fillStyle = '#fff'; g.fillRect(b.x + 3, b.y + 3, b.w - 6, 1); }
      if (b.t === 'X') { g.strokeStyle = '#8a95b0'; g.beginPath(); g.moveTo(b.x + 2, b.y + b.h - 2); g.lineTo(b.x + b.w - 2, b.y + 2); g.stroke(); }
      if (b.t === 'B') { g.fillStyle = '#fff'; g.fillRect(b.x + b.w / 2 - 2, b.y + 2, 4, 4); }
    }
    // Extras
    st.caps.forEach(function (c) { var p = PU.filter(function (x) { return x[0] === c.t; })[0] || ['+', '#fff'];
      g.fillStyle = p[1]; g.globalAlpha = 0.3; g.fillRect(c.x - 8, c.y - 4, 16, 8); g.globalAlpha = 1; g.strokeStyle = p[1]; g.strokeRect(c.x - 7.5, c.y - 3.5, 15, 7);
      api.text(c.t, c.x, c.y - 3, 6, '#fff', 'center'); });
    // Laser
    g.fillStyle = '#ff3b6b'; st.bolts.forEach(function (b) { g.fillRect(b.x - 0.5, b.y, 1.5, 6); });
    // Schläger
    var pw = st.pw, px = st.px, pc = st.laser > 0 ? '#ff3b6b' : st.glue > 0 ? '#c46bff' : '#3cf0ff';
    api.neon(pc, 3.2, function (c) { c.moveTo(px - pw / 2 + 2, PY); c.lineTo(px + pw / 2 - 2, PY); });
    g.fillStyle = '#fff'; g.fillRect(px - pw / 2 + 4, PY - 0.5, pw - 8, 1);
    if (st.laser > 0) { g.fillStyle = '#ff3b6b'; g.fillRect(px - pw / 2 + 2, PY - 5, 2, 4); g.fillRect(px + pw / 2 - 4, PY - 5, 2, 4); }
    // Bälle mit Spur
    st.balls.forEach(function (b) {
      for (var k = 0; k < b.trail.length; k += 2) { g.globalAlpha = k / b.trail.length * 0.5; g.fillStyle = '#3cf0ff'; g.fillRect(b.trail[k] - 1.5, b.trail[k + 1] - 1.5, 3, 3); }
      g.globalAlpha = 1; g.fillStyle = '#fff'; g.shadowColor = '#3cf0ff'; g.shadowBlur = 8; g.beginPath(); g.arc(b.x, b.y, 3, 0, api.TAU); g.fill(); g.shadowBlur = 0;
    });
    // Leben
    for (var l = 0; l < st.lives - 1; l++) { g.fillStyle = '#3cf0ff'; g.fillRect(L + 4 + l * 14, api.H - 8, 10, 2); }
    if (st.msgT > 0 && !api.demo) { api.text('LEVEL ' + st.level, 120, 190, 10, '#fff', 'center'); api.text(st.name, 120, 206, 8, '#3cf0ff', 'center'); }
    if (st.clearT > 0) api.text('LEVEL GESCHAFFT', 120, 190, 9, '#ffd23f', 'center');
    if (st.balls[0] && st.balls[0].stuck && !api.demo && st.msgT <= 0) api.text(api.touch ? 'TIPPEN' : 'LEERTASTE', 120, 270, 7, 'rgba(255,255,255,.6)', 'center');
  }
});

function hitBrick(st, b, api) {
  if (b.t === 'X') { b.hit = 0.15; api.tone(180, 0.04, 'square', 0.03); return; }
  b.hp--; b.hit = 0.12;
  if (b.hp > 0) { api.tone(520, 0.04, 'square', 0.04); api.add(10); return; }
  st.combo++;
  var mult = Math.min(3, 1 + st.combo * 0.1), base = b.t === 'S' ? 50 * st.level : b.t === 'B' ? 30 : (PTS[b.t] || 10);
  var pts = Math.round(base * mult);
  api.add(pts, b.x + b.w / 2, b.y, st.combo > 4 ? '#ffd23f' : '#fff');
  api.burst(b.x + b.w / 2, b.y + b.h / 2, b.t === 'S' ? '#cfd8e6' : (COL[b.t] || '#ff3b3b'), 12, 70, 0.5);
  api.tone(700 + Math.min(st.combo, 12) * 40, 0.05, 'square', 0.05);
  st.bricks.splice(st.bricks.indexOf(b), 1);
  if (b.t === 'B') { // Kettenreaktion
    api.shake(0.5); api.noise(0.25, 0.2, 1500); api.flash('#ff9a3c', 0.12);
    st.bricks.filter(function (o) { return o.t !== 'X' && Math.abs(o.i - b.i) <= 1 && Math.abs(o.j - b.j) <= 1; }).forEach(function (o) { o.hp = 1; setTimeout(function () { if (st.bricks.indexOf(o) >= 0) hitBrick(st, o, api); }, 60); });
  }
  if (b.t !== 'B' && Math.random() < 0.15) { var r = Math.random(), t = r < 0.04 ? '+' : PU[Math.floor(Math.random() * PU.length)][0]; st.caps.push({ x: b.x + b.w / 2, y: b.y + b.h / 2, t: t }); }
}
function power(st, t, api) {
  api.tone(880, 0.08, 'triangle', 0.07); api.tone(1320, 0.12, 'triangle', 0.07, null, 0.08);
  var name = (PU.filter(function (x) { return x[0] === t; })[0] || [0, 0, 'EXTRALEBEN'])[2];
  api.float(name, st.px, 280, '#ffd23f'); api.add(100);
  if (t === 'W') st.wide = 15; else if (t === 'L') st.laser = 12; else if (t === 'S') st.slow = 10; else if (t === 'C') st.glue = 15;
  else if (t === '+') st.lives = Math.min(6, st.lives + 1);
  else if (t === 'M') { var add = []; st.balls.forEach(function (b) { if (b.stuck) return; [-0.4, 0.4].forEach(function (d) { var c = Math.cos(d), s = Math.sin(d); add.push({ x: b.x, y: b.y, vx: b.vx * c - b.vy * s, vy: b.vx * s + b.vy * c, stuck: false, off: 0, trail: [] }); }); }); st.balls = st.balls.concat(add).slice(0, 12); }
}
})();
