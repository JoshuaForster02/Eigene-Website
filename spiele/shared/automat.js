/* Flynn's Arcade · Automaten-Rahmen für die Retro-Spiele.
   Ein Spiel liefert nur Logik und Zeichnung. Der Rahmen baut das Gehäuse (Marquee, Bildschirm, Bedienfeld),
   kümmert sich um Titelbild mit Demo und Highscores, Eingabe (Tastatur, Maus, Touch, Gamepad), Ton,
   Pause, Partikel, Punkteanzeige und die Weltbestenliste.

   Automat.run({
     id, title, sub, color, color2, res: [w, h] | 'fill', fillH, minW, maxW,
     touch: 'stick' | 'pointer', buttons: [{ id: 'fire'|'fire2', label }], deck: [['← →', 'Bewegen'], …],
     help: { desk, touch }, music: { notes: [midi…], step, vol },
     init(api) → st, update(st, dt, api), draw(st, ctx, api), hud(st) → 'rechts', ai(st, api) → Eingabe, meta(st) → {}
   }) */
(function () {
'use strict';
var TAU = Math.PI * 2;
var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
var TOUCH = matchMedia('(pointer:coarse)').matches || 'ontouchstart' in window;
var RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
var PIX = '"Press Start 2P", ui-monospace, monospace';

function css(c) {
  return ':root{--c:' + c.color + ';--c2:' + (c.color2 || c.color) + ';--bg:#03040a;--ink:#eaf6ff;--dim:#8592ad;--pix:' + PIX + '}' +
  '*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}' +
  'html,body{height:100%;overflow:hidden;background:var(--bg);color:var(--ink);font-family:var(--pix);touch-action:none;-webkit-user-select:none;user-select:none;overscroll-behavior:none}' +
  'body{background:radial-gradient(ellipse 90% 55% at 50% -10%,color-mix(in srgb,var(--c) 22%,transparent),transparent 70%),' +
    'linear-gradient(transparent 62%,color-mix(in srgb,var(--c) 7%,transparent)),#03040a}' +
  'body:before{content:"";position:fixed;left:-50%;right:-50%;bottom:0;height:42%;pointer-events:none;opacity:.35;' +
    'background:linear-gradient(90deg,color-mix(in srgb,var(--c) 40%,transparent) 1px,transparent 1px) 0 0/48px 48px,' +
    'linear-gradient(color-mix(in srgb,var(--c) 40%,transparent) 1px,transparent 1px) 0 0/48px 48px;' +
    'transform:perspective(300px) rotateX(62deg);transform-origin:50% 100%;-webkit-mask-image:linear-gradient(transparent,#000 70%);mask-image:linear-gradient(transparent,#000 70%)}' +
  '#am{position:fixed;inset:0;display:flex;flex-direction:column;align-items:center}' +
  '.am-bar{width:100%;display:flex;gap:8px;padding:max(10px,env(safe-area-inset-top)) 12px 8px;align-items:center;z-index:30}' +
  '.am-bar a,.am-bar button{font:inherit;font-size:9px;letter-spacing:.08em;color:var(--dim);text-decoration:none;padding:8px 10px;border:1px solid rgba(255,255,255,.14);background:rgba(3,4,10,.65);border-radius:6px;cursor:pointer}' +
  '.am-bar a:hover,.am-bar button:hover{color:var(--ink);border-color:var(--c)}' +
  '.am-bar .sp{flex:1}.hide{display:none!important}' +
  '.am-cab{display:flex;flex-direction:column;align-items:center;position:relative}' +
  '.am-marq{display:flex;align-items:center;justify-content:center;margin-bottom:18px;border-radius:10px 10px 4px 4px;' +
    'background:linear-gradient(180deg,color-mix(in srgb,var(--c) 32%,#05060c),#05060c 78%);' +
    'box-shadow:0 0 0 1px color-mix(in srgb,var(--c) 65%,transparent),0 0 34px -4px var(--c),inset 0 0 26px color-mix(in srgb,var(--c) 30%,transparent)}' +
  '.am-marq span{font-size:clamp(14px,2.6vw,24px);letter-spacing:.14em;color:#fff;white-space:nowrap;text-shadow:0 0 6px var(--c),0 0 18px var(--c),0 0 40px var(--c)}' +
  (RM ? '' : '.am-marq span{animation:amFl 7s infinite}@keyframes amFl{0%,90%,100%{opacity:1}91%{opacity:.35}92%{opacity:1}95%{opacity:.6}96%{opacity:1}}') +
  '.am-scr{position:relative;background:#000;border-radius:12px;overflow:hidden;' +
    'box-shadow:0 0 0 12px #07090f,0 0 0 13px color-mix(in srgb,var(--c) 50%,transparent),0 0 60px -8px var(--c),0 30px 60px -20px #000}' +
  '.am-scr canvas{display:block;width:100%;height:100%;touch-action:none}' +
  '.am-crt{position:absolute;inset:0;pointer-events:none;z-index:4;' +
    'background:repeating-linear-gradient(0deg,rgba(0,0,0,.2) 0 1px,transparent 1px 3px),radial-gradient(ellipse at center,transparent 60%,rgba(0,0,0,.6) 100%)}' +
  'body.nocrt .am-crt{display:none}' +
  '.am-ov{position:absolute;inset:0;z-index:6;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:12px;padding:16px;background:rgba(2,3,8,.66);overflow:auto}' +
  '.am-ov h1{font-size:clamp(18px,4.6vmin,32px);line-height:1.35;color:#fff;font-weight:400;text-shadow:0 0 8px var(--c),0 0 24px var(--c),3px 3px 0 color-mix(in srgb,var(--c2) 70%,#000)}' +
  '.am-ov h2{font-size:clamp(14px,3.4vmin,22px);font-weight:400;color:#fff;text-shadow:0 0 12px var(--c)}' +
  '.am-ov p{font-size:8px;line-height:2;color:var(--dim);max-width:36ch}' +
  '.am-ov p b{color:var(--c);font-weight:400}' +
  '.am-blink{font-size:10px;color:var(--c2)}' + (RM ? '' : '.am-blink{animation:amBl 1.1s steps(2) infinite}@keyframes amBl{50%{opacity:0}}') +
  '.am-b{font:inherit;font-size:10px;letter-spacing:.06em;color:#05060c;background:var(--c);border:0;padding:12px 16px;min-width:190px;cursor:pointer;box-shadow:0 4px 0 color-mix(in srgb,var(--c) 45%,#000),0 0 22px color-mix(in srgb,var(--c) 50%,transparent)}' +
  '.am-b:active{transform:translateY(3px);box-shadow:0 1px 0 color-mix(in srgb,var(--c) 45%,#000)}' +
  '.am-b.g{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 2px color-mix(in srgb,var(--c) 45%,transparent)}' +
  '.am-hs{width:min(100%,300px);font-size:9px;line-height:2.1}' +
  '.am-hs h3{font-weight:400;font-size:11px;margin-bottom:8px;color:var(--c2);text-shadow:0 0 10px var(--c2)}' +
  '.am-hs div{display:grid;grid-template-columns:3em 1fr auto;gap:8px;text-align:left}' +
  '.am-hs div:nth-child(2){color:#ffd23f}.am-hs div:nth-child(3){color:#e8e8f0}.am-hs div:nth-child(4){color:#ff9a3c}.am-hs div:nth-child(n+5){color:var(--dim)}' +
  '.am-hs span:last-child{text-align:right}' +
  '.am-board{width:min(100%,320px);font-family:ui-sans-serif,system-ui,sans-serif;--bl-acc:var(--c)}' +
  '.am-deck{margin-top:22px;display:flex;gap:8px;flex-wrap:wrap;justify-content:center;font-size:8px;color:var(--dim);max-width:92vw}' +
  '.am-deck span{padding:7px 9px;border:1px solid rgba(255,255,255,.12);border-radius:5px;background:rgba(3,4,10,.6)}' +
  '.am-deck b{color:var(--c);font-weight:400;margin-right:6px}' +
  '.am-ctl{position:fixed;left:0;right:0;bottom:0;display:none;padding:0 16px max(16px,env(safe-area-inset-bottom));align-items:center;justify-content:space-between;gap:12px;z-index:20}' +
  'body.am-touch .am-ctl{display:flex}' +
  '.am-stick{position:relative;flex:0 0 auto;border-radius:50%;border:2px solid color-mix(in srgb,var(--c) 55%,transparent);background:radial-gradient(circle,color-mix(in srgb,var(--c) 12%,transparent),transparent 70%);touch-action:none}' +
  '.am-stick i{position:absolute;left:50%;top:50%;width:40%;height:40%;margin:-20% 0 0 -20%;border-radius:50%;background:color-mix(in srgb,var(--c) 45%,#000);box-shadow:0 0 18px var(--c);pointer-events:none}' +
  '.am-btns{display:flex;gap:14px;align-items:center;margin-left:auto}' +
  '.am-btn{width:82px;height:82px;border-radius:50%;border:2px solid var(--c2);color:var(--c2);background:color-mix(in srgb,var(--c2) 14%,transparent);font:inherit;font-size:8px;touch-action:none;-webkit-user-select:none;user-select:none}' +
  '.am-btn.on{background:color-mix(in srgb,var(--c2) 48%,transparent);color:#fff}' +
  '.am-btn.s2{width:66px;height:66px;border-color:var(--c);color:var(--c);background:color-mix(in srgb,var(--c) 12%,transparent)}' +
  '.am-btn.s2.on{background:color-mix(in srgb,var(--c) 45%,transparent)}';
}

function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function store(k, v) { try { if (v === undefined) { var x = localStorage.getItem('automat.' + k); return x == null ? null : JSON.parse(x); } localStorage.setItem('automat.' + k, JSON.stringify(v)); } catch (e) { return null; } }
function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

window.Automat = { run: function (cfg) {
  cfg.buttons = cfg.buttons || [];
  var TEST = new URLSearchParams(location.search).has('test');
  var stEl = document.createElement('style'); stEl.textContent = css(cfg); document.head.appendChild(stEl);
  if (TOUCH) document.body.classList.add('am-touch');
  if (store('crt') === false) document.body.classList.add('nocrt');

  /* ---------- Gehäuse ---------- */
  var root = el('div'); root.id = 'am';
  root.innerHTML =
    '<div class="am-bar"><a href="../">← Arcade</a><span class="sp"></span><button class="am-p hide" aria-label="Pause">II</button><button class="am-crtb" aria-label="Röhreneffekt">CRT</button><button class="am-snd" aria-label="Ton">♪</button></div>' +
    '<div class="am-cab"><div class="am-marq"><span>' + esc(cfg.title) + '</span></div>' +
    '<div class="am-scr"><canvas aria-label="' + esc(cfg.title) + '"></canvas><div class="am-crt"></div>' +
      '<div class="am-ov am-title"></div><div class="am-ov am-pause hide"><h2>PAUSE</h2><button class="am-b" data-a="resume">Weiter</button><button class="am-b g" data-a="quit">Aufgeben</button></div>' +
      '<div class="am-ov am-over hide"></div></div>' +
    '<div class="am-deck">' + (cfg.deck || []).map(function (d) { return '<span><b>' + d[0] + '</b>' + d[1] + '</span>'; }).join('') + '<span><b>P</b>Pause</span><span><b>M</b>Ton</span></div></div>' +
    '<div class="am-ctl">' + (cfg.touch === 'stick' ? '<div class="am-stick"><i></i></div>' : '') +
      '<div class="am-btns">' + cfg.buttons.slice().reverse().map(function (b, i) { return '<button class="am-btn' + (b.id === 'fire2' ? ' s2' : '') + '" data-btn="' + b.id + '">' + esc(b.label) + '</button>'; }).join('') + '</div></div>';
  document.body.appendChild(root);
  var $ = function (s) { return root.querySelector(s); };
  var cv = $('canvas'), ctx = cv.getContext('2d'), scr = $('.am-scr'), marq = $('.am-marq'), deck = $('.am-deck');
  var ovT = $('.am-title'), ovP = $('.am-pause'), ovO = $('.am-over');

  /* ---------- Größe ---------- */
  var api = { W: 240, H: 320, t: 0, demo: true, TAU: TAU, clamp: clamp, touch: TOUCH };
  var DPR = 1, S = 1;
  function layout() {
    DPR = Math.min(2, window.devicePixelRatio || 1);
    var vw = innerWidth, vh = innerHeight, big = !TOUCH && vh >= 600 && vw >= 560;
    marq.classList.toggle('hide', !big); deck.classList.toggle('hide', !big);
    var ctlH = 0;
    if (TOUCH) { ctlH = cfg.touch === 'stick' ? clamp(Math.min(vh * 0.27, vw * 0.48), 140, 210) : (cfg.buttons.length ? 104 : 0); }
    var topH = $('.am-bar').offsetHeight || 44;
    var availW = vw - (big ? 70 : 20), availH = vh - topH - ctlH - (big ? 58 + 18 + 22 + 34 + 30 : 22);
    var w, h;
    if (cfg.res === 'fill') { h = cfg.fillH || 300; w = clamp(Math.round(h * availW / availH), cfg.minW || 220, cfg.maxW || 540); }
    else { w = cfg.res[0]; h = cfg.res[1]; }
    api.W = w; api.H = h;
    S = Math.min(availW / w, availH / h);
    scr.style.width = Math.round(w * S) + 'px'; scr.style.height = Math.round(h * S) + 'px';
    marq.style.width = Math.round(w * S + 24) + 'px'; marq.style.height = '58px';
    cv.width = Math.round(w * S * DPR); cv.height = Math.round(h * S * DPR);
    if (TOUCH && cfg.touch === 'stick') { var sk = $('.am-stick'), d = Math.round(ctlH - 22); sk.style.width = sk.style.height = d + 'px'; }
  }
  addEventListener('resize', function () { layout(); });
  layout();

  /* ---------- Ton ---------- */
  var AC = null, master = null, muted = store('mute') === true;
  function audio() {
    if (AC) { if (AC.state === 'suspended') AC.resume(); return; }
    try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; }
    master = AC.createGain(); master.gain.value = muted ? 0 : 0.5; master.connect(AC.destination);
  }
  api.tone = function (f, d, type, vol, f2, delay) {
    if (!AC || muted) return; var t = AC.currentTime + (delay || 0), o = AC.createOscillator(), g = AC.createGain();
    o.type = type || 'square'; o.frequency.setValueAtTime(f, t); if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
    g.gain.setValueAtTime(vol == null ? 0.08 : vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + d + 0.03);
  };
  api.noise = function (d, vol, fc) {
    if (!AC || muted) return; var n = AC.createBufferSource(), b = AC.createBuffer(1, Math.max(1, AC.sampleRate * d | 0), AC.sampleRate), ch = b.getChannelData(0);
    for (var i = 0; i < ch.length; i++) ch[i] = (Math.random() * 2 - 1) * (1 - i / ch.length);
    n.buffer = b; var f = AC.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = fc || 2400; var g = AC.createGain(); g.gain.value = vol == null ? 0.25 : vol;
    n.connect(f); f.connect(g); g.connect(master); n.start();
  };
  function setMute(m) { muted = m; store('mute', m); if (master) master.gain.value = m ? 0 : 0.5; $('.am-snd').style.opacity = m ? 0.45 : 1; }
  setMute(muted);
  var mT = 0, mStep = 0;
  function music(dt) {
    if (!cfg.music || !AC || muted || mode !== 'play') return;
    mT -= dt; if (mT > 0) return; var M = cfg.music; mT += M.step || 0.14;
    var n = M.notes[mStep % M.notes.length]; if (n) api.tone(440 * Math.pow(2, (n - 69) / 12), (M.step || 0.14) * 0.9, M.wave || 'triangle', M.vol || 0.03);
    if (M.bass && mStep % 4 === 0) { var b = M.bass[(mStep / 4 | 0) % M.bass.length]; api.tone(440 * Math.pow(2, (b - 69) / 12), (M.step || 0.14) * 3.6, 'sawtooth', (M.vol || 0.03) * 1.3); }
    mStep++;
  }

  /* ---------- Eingabe ---------- */
  var K = {}, I = { x: 0, y: 0, fire: false, fire2: false, analog: false, ptr: { x: 0, y: 0, down: false, active: false } };
  var tch = { x: 0, y: 0, on: false, fire: false, fire2: false }, gp = { x: 0, y: 0, fire: false, fire2: false, on: false, analog: false, pstart: false, pa: false };
  var mouse2 = false, taps = [], lastFire = false, lastFire2 = false;
  api.input = I; api.pressed = { fire: false, fire2: false }; api.taps = [];
  var KM = { ArrowLeft: 'l', KeyA: 'l', ArrowRight: 'r', KeyD: 'r', ArrowUp: 'u', KeyW: 'u', ArrowDown: 'd', KeyS: 'd', Space: 'f', KeyZ: 'f', KeyJ: 'f', KeyX: 'g', KeyK: 'g', ShiftLeft: 'g', ShiftRight: 'g' };
  addEventListener('keydown', function (e) {
    if (e.target && /INPUT|TEXTAREA/.test(e.target.tagName)) return;
    audio();
    if (KM[e.code]) { K[KM[e.code]] = true; e.preventDefault(); }
    if (e.code === 'KeyP' || e.code === 'Escape') { mode === 'pause' ? resume() : pause(); }
    if (e.code === 'KeyM') setMute(!muted);
    if ((e.code === 'Enter' || e.code === 'Space') && (mode === 'title' || (mode === 'over' && overReady))) { e.preventDefault(); start(); }
  });
  addEventListener('keyup', function (e) { if (KM[e.code]) K[KM[e.code]] = false; });
  addEventListener('blur', function () { K = {}; tch.fire = tch.fire2 = false; mouse2 = false; I.ptr.down = false; });
  function toLogical(e) { var r = cv.getBoundingClientRect(); return { x: (e.clientX - r.left) / r.width * api.W, y: (e.clientY - r.top) / r.height * api.H }; }
  cv.addEventListener('pointerdown', function (e) {
    audio(); var p = toLogical(e); I.ptr.x = p.x; I.ptr.y = p.y; I.ptr.active = true;
    if (e.button === 2) { mouse2 = true; return; }
    I.ptr.down = true; taps.push(p); try { cv.setPointerCapture(e.pointerId); } catch (x) {}
  });
  cv.addEventListener('pointermove', function (e) { var p = toLogical(e); I.ptr.x = p.x; I.ptr.y = p.y; I.ptr.active = true; });
  var up = function (e) { if (e.button === 2) mouse2 = false; else I.ptr.down = false; };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  cv.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  // Touch-Stick
  var sk = $('.am-stick');
  if (sk) {
    var knob = sk.querySelector('i'), sid = null;
    var move = function (e) { var r = sk.getBoundingClientRect(), R = r.width / 2, dx = (e.clientX - r.left - R) / (R * 0.75), dy = (e.clientY - r.top - R) / (R * 0.75), m = Math.hypot(dx, dy);
      if (m > 1) { dx /= m; dy /= m; } tch.x = dx; tch.y = dy; tch.on = true; knob.style.transform = 'translate(' + dx * R * 0.6 + 'px,' + dy * R * 0.6 + 'px)'; };
    sk.addEventListener('pointerdown', function (e) { e.preventDefault(); audio(); sid = e.pointerId; try { sk.setPointerCapture(e.pointerId); } catch (x) {} move(e); });
    sk.addEventListener('pointermove', function (e) { if (e.pointerId === sid) move(e); });
    var rel = function (e) { if (e.pointerId !== sid) return; sid = null; tch.x = tch.y = 0; tch.on = false; knob.style.transform = ''; };
    sk.addEventListener('pointerup', rel); sk.addEventListener('pointercancel', rel);
  }
  root.querySelectorAll('[data-btn]').forEach(function (b) {
    var k = b.dataset.btn, on = function (e) { e.preventDefault(); audio(); tch[k] = true; b.classList.add('on'); if (mode === 'title') start(); };
    var off = function (e) { e.preventDefault(); tch[k] = false; b.classList.remove('on'); };
    b.addEventListener('pointerdown', on); b.addEventListener('pointerup', off); b.addEventListener('pointercancel', off); b.addEventListener('pointerleave', off);
  });
  function pollPad() {
    var pads = navigator.getGamepads ? navigator.getGamepads() : [], p = null;
    for (var i = 0; i < pads.length; i++) if (pads[i] && pads[i].connected) { p = pads[i]; break; }
    gp.on = false; if (!p) return;
    var ax = p.axes[0] || 0, ay = p.axes[1] || 0, bt = function (n) { return p.buttons[n] && p.buttons[n].pressed; };
    if (Math.hypot(ax, ay) < 0.22) { ax = 0; ay = 0; }
    gp.analog = !!(ax || ay);
    if (bt(14)) ax = -1; if (bt(15)) ax = 1; if (bt(12)) ay = -1; if (bt(13)) ay = 1;
    gp.x = ax; gp.y = ay; gp.fire = bt(0) || bt(5) || bt(7); gp.fire2 = bt(1) || bt(2) || bt(4) || bt(6);
    gp.on = !!(ax || ay || gp.fire || gp.fire2);
    var s = bt(9);
    if (s && !gp.pstart) { if (mode === 'play') pause(); else if (mode === 'pause') resume(); else if (mode === 'title' || (mode === 'over' && overReady)) start(); }
    gp.pstart = s;
    if (bt(0) && !gp.pa && (mode === 'title' || (mode === 'over' && overReady))) start();
    gp.pa = bt(0);
    if (gp.on) audio();
  }
  function gather() {
    var kx = (K.r ? 1 : 0) - (K.l ? 1 : 0), ky = (K.d ? 1 : 0) - (K.u ? 1 : 0);
    I.x = clamp(kx + gp.x + tch.x, -1, 1); I.y = clamp(ky + gp.y + tch.y, -1, 1);
    I.analog = tch.on || !!gp.analog;
    I.fire = !!(K.f || gp.fire || tch.fire); I.fire2 = !!(K.g || gp.fire2 || tch.fire2 || mouse2);
  }

  /* ---------- Effekte ---------- */
  var parts = [], floats = [], shakeA = 0, flashC = null, flashT = 0, flashMax = 1;
  api.burst = function (x, y, col, n, sp, life) { if (RM) n = Math.min(n || 18, 8); for (var i = 0; i < (n || 18); i++) { var a = Math.random() * TAU, v = (sp || 60) * (0.3 + Math.random() * 0.7); parts.push({ x: x, y: y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: (life || 0.6) * (0.5 + Math.random() * 0.5), max: life || 0.6, col: col || '#fff' }); } };
  api.float = function (t, x, y, col) { floats.push({ t: t, x: x, y: y, col: col || '#fff', life: 0.9 }); };
  api.shake = function (a) { if (!RM) shakeA = Math.max(shakeA, a); };
  api.flash = function (col, t) { if (RM) return; flashC = col; flashT = flashMax = t || 0.15; };
  api.rnd = function (a, b) { return a + Math.random() * (b - a); };
  api.text = function (s, x, y, size, col, align) { ctx.font = (size || 8) + 'px ' + PIX; ctx.textAlign = align || 'left'; ctx.textBaseline = 'top'; ctx.fillStyle = col || '#fff'; ctx.fillText(s, x, y); };
  api.neon = function (col, w, fn) { // Pfad zweimal ziehen: weicher Schein, dann heller Kern
    ctx.save(); ctx.globalCompositeOperation = 'lighter'; ctx.lineJoin = 'round'; ctx.lineCap = 'round';
    ctx.strokeStyle = col; ctx.globalAlpha = 0.28; ctx.lineWidth = (w || 1.5) * 3.2; ctx.beginPath(); fn(ctx); ctx.stroke();
    ctx.globalAlpha = 1; ctx.lineWidth = w || 1.5; ctx.beginPath(); fn(ctx); ctx.stroke(); ctx.restore();
  };

  /* ---------- Spielablauf ---------- */
  var mode = 'title', st = null, score = 0, best = store(cfg.id + '.best') || 0, overT = 0, overMeta = null, overReady = false, chase = null, demoT = 0;
  api.add = function (n, x, y, col) { if (api.demo) return; score += n; if (x != null) api.float('+' + n, x, y, col); };
  Object.defineProperty(api, 'score', { get: function () { return score; } });
  api.over = function (meta) { if (overMeta) return; overMeta = meta || {}; overT = 1.5; };
  function newGame(demo) { api.demo = demo; score = 0; overMeta = null; parts = []; floats = []; st = cfg.init(api); }
  function start() {
    audio(); layout(); newGame(false); mode = 'play'; overReady = false;
    ovT.classList.add('hide'); ovO.classList.add('hide'); ovP.classList.add('hide'); $('.am-p').classList.remove('hide');
    if (chase) chase.hide(); chase = window.Bestenliste && !TEST ? Bestenliste.chase(cfg.id) : null;
    api.tone(523, 0.08, 'square', 0.07); api.tone(784, 0.12, 'square', 0.07, null, 0.08);
  }
  function pause() { if (mode !== 'play') return; mode = 'pause'; ovP.classList.remove('hide'); }
  function resume() { if (mode !== 'pause') return; mode = 'play'; ovP.classList.add('hide'); }
  function finish() {
    mode = 'over'; overReady = false; $('.am-p').classList.add('hide'); if (chase) { chase.hide(); chase = null; }
    var rec = score > best; if (rec) { best = score; store(cfg.id + '.best', best); }
    ovO.innerHTML = '<h1>GAME<br>OVER</h1><h2>' + score.toLocaleString('de-DE') + '</h2>' +
      (overMeta && overMeta.text ? '<p>' + esc(overMeta.text) + '</p>' : '') +
      '<p>' + (rec && score > 0 ? '<b>NEUER REKORD!</b>' : 'Rekord ' + best.toLocaleString('de-DE')) + '</p>' +
      '<div class="am-board"></div><button class="am-b" data-a="again">Nochmal</button><a class="am-b g" href="../" style="text-decoration:none">Zur Arcade</a>';
    ovO.classList.remove('hide');
    var meta = {}; if (overMeta) for (var k in overMeta) if (k !== 'text') meta[k] = overMeta[k];
    if (window.Bestenliste && !TEST && score > 0) Bestenliste.mount(ovO.querySelector('.am-board'), { game: cfg.id, score: score, meta: meta, title: 'Weltbestenliste' });
    else ovO.querySelector('.am-board').remove();
    setTimeout(function () { overReady = true; }, 900);
    api.noise(0.5, 0.2, 900); api.tone(220, 0.6, 'sawtooth', 0.06, 55);
  }
  root.addEventListener('click', function (e) {
    var a = e.target.closest('[data-a]'); if (!a) return; audio();
    var act = a.dataset.a;
    if (act === 'start' || act === 'again') start();
    else if (act === 'resume') resume();
    else if (act === 'quit') { ovP.classList.add('hide'); mode = 'play'; api.over({}); overT = 0.01; }
    else if (act === 'board') showScores(true);
  });
  $('.am-p').onclick = function () { mode === 'pause' ? resume() : pause(); };
  $('.am-snd').onclick = function () { audio(); setMute(!muted); };
  $('.am-crtb').onclick = function () { var off = !document.body.classList.toggle('nocrt'); store('crt', off); };
  document.addEventListener('visibilitychange', function () { if (document.hidden) pause(); });

  // Titelbild mit Highscore-Wechsel wie am echten Automaten
  var hsCache = null, titleView = 0, titleT = 0;
  function titleHtml() {
    return '<h1>' + esc(cfg.title).replace(' ', '<br>') + '</h1>' + (cfg.sub ? '<p>' + esc(cfg.sub) + '</p>' : '') +
      '<div class="am-blink">' + (TOUCH ? 'TIPPEN ZUM START' : 'PRESS START') + '</div>' +
      '<button class="am-b" data-a="start">Start</button><button class="am-b g" data-a="board">Highscores</button>' +
      '<p>' + (TOUCH ? (cfg.help && cfg.help.touch) || '' : (cfg.help && cfg.help.desk) || '') + '</p>' +
      (best ? '<p>Dein Rekord <b>' + best.toLocaleString('de-DE') + '</b></p>' : '');
  }
  function scoresHtml() {
    var rows = (hsCache || []).slice(0, 5), pl = ['1ST', '2ND', '3RD', '4TH', '5TH'];
    return '<div class="am-hs"><h3>HIGH SCORES</h3>' + (rows.length ? rows.map(function (r, i) { return '<div><span>' + pl[i] + '</span><span>' + esc(String(r.name).toUpperCase().slice(0, 10)) + '</span><span>' + Number(r.score).toLocaleString('de-DE') + '</span></div>'; }).join('')
      : '<div><span></span><span>' + (hsCache ? 'NOCH FREI' : 'LADE …') + '</span><span></span></div>') + '</div>' +
      '<div class="am-blink">' + (TOUCH ? 'TIPPEN ZUM START' : 'PRESS START') + '</div><button class="am-b" data-a="start">Start</button>';
  }
  function showScores(force) { titleView = 1; titleT = force ? 10 : 6; ovT.innerHTML = scoresHtml(); }
  function loadScores() { if (!window.Bestenliste || TEST) { hsCache = []; return; } Bestenliste.load(cfg.id, 5).then(function (j) { hsCache = j.items || []; if (titleView === 1) ovT.innerHTML = scoresHtml(); }).catch(function () { hsCache = []; }); }
  ovT.innerHTML = titleHtml(); titleT = 8;

  /* ---------- Schleife ---------- */
  var STEP = 1 / 120, acc = 0, last = performance.now();
  function frame(now) {
    requestAnimationFrame(frame);
    var dt = Math.min(0.05, (now - last) / 1000); last = now; api.t += dt;
    pollPad(); gather(); music(dt);
    if (mode === 'title') {
      titleT -= dt; if (titleT <= 0) { if (titleView === 0) { if (!hsCache) loadScores(); showScores(); } else { titleView = 0; titleT = 8; ovT.innerHTML = titleHtml(); } }
      if (!st || !api.demo) newGame(true);
      if (cfg.ai) { var ai = cfg.ai(st, api) || {}; I.x = ai.x || 0; I.y = ai.y || 0; I.fire = !!ai.fire; I.fire2 = !!ai.fire2; I.analog = !!ai.analog; if (ai.ptr) { I.ptr.x = ai.ptr.x; I.ptr.y = ai.ptr.y; I.ptr.active = true; I.ptr.down = !!ai.ptr.down; } taps = ai.taps || []; }
      if (overMeta) { demoT += dt; if (demoT > 1.6) { demoT = 0; newGame(true); } }
    }
    var running = mode === 'play' || mode === 'title' || (mode === 'over' && overT > 0);
    api.pressed.fire = I.fire && !lastFire; api.pressed.fire2 = I.fire2 && !lastFire2; lastFire = I.fire; lastFire2 = I.fire2;
    api.taps = taps; taps = [];
    if (running && st) {
      if (overMeta && mode === 'play') { // Sterbeanimation noch zeigen, dann Game Over
        overT -= dt; I.x = I.y = 0; I.fire = I.fire2 = false; api.pressed.fire = api.pressed.fire2 = false;
        if (overT <= 0) finish();
      }
      acc += dt; var first = true;
      while (acc >= STEP) { cfg.update(st, STEP, api); if (first) { api.pressed.fire = api.pressed.fire2 = false; api.taps = []; first = false; } acc -= STEP;
        for (var i = parts.length - 1; i >= 0; i--) { var p = parts[i]; p.x += p.vx * STEP; p.y += p.vy * STEP; p.vx *= 0.985; p.vy *= 0.985; if ((p.life -= STEP) <= 0) parts.splice(i, 1); }
        for (i = floats.length - 1; i >= 0; i--) { floats[i].y -= 18 * STEP; if ((floats[i].life -= STEP) <= 0) floats.splice(i, 1); }
        shakeA = Math.max(0, shakeA - STEP * 2.2); if (flashT > 0) flashT -= STEP;
      }
      if (chase && mode === 'play') chase.update(score);
    }
    // Zeichnen in logischen Koordinaten
    var sc = cv.width / api.W;
    ctx.setTransform(sc, 0, 0, sc, 0, 0); ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = cfg.bg || '#000'; ctx.fillRect(0, 0, api.W, api.H);
    if (shakeA > 0) ctx.translate((Math.random() - 0.5) * shakeA * 6, (Math.random() - 0.5) * shakeA * 6);
    if (st) { ctx.save(); cfg.draw(st, ctx, api); ctx.restore(); }
    ctx.save(); ctx.globalCompositeOperation = 'lighter';
    for (var j = 0; j < parts.length; j++) { var q = parts[j]; ctx.globalAlpha = clamp(q.life / q.max, 0, 1); ctx.fillStyle = q.col; ctx.fillRect(q.x - 1, q.y - 1, 2, 2); }
    ctx.restore();
    for (j = 0; j < floats.length; j++) { var f = floats[j]; ctx.globalAlpha = clamp(f.life * 1.6, 0, 1); api.text(f.t, f.x, f.y, 7, f.col, 'center'); }
    ctx.globalAlpha = 1;
    if (flashT > 0 && flashC) { ctx.fillStyle = flashC; ctx.globalAlpha = flashT / flashMax * 0.5; ctx.fillRect(-10, -10, api.W + 20, api.H + 20); ctx.globalAlpha = 1; }
    // Punkteleiste
    if (mode !== 'title') {
      ctx.setTransform(sc, 0, 0, sc, 0, 0);
      api.text(String(score).padStart(7, '0'), 4, 4, 8, '#fff');
      api.text('HI ' + String(Math.max(best, score)).padStart(7, '0'), api.W / 2, 4, 8, cfg.color2 || cfg.color, 'center');
      if (cfg.hud && st) api.text(cfg.hud(st), api.W - 4, 4, 8, cfg.color, 'right');
    }
  }
  var go = function () { requestAnimationFrame(frame); };
  if (document.fonts && document.fonts.load) document.fonts.load('8px "Press Start 2P"').then(go, go); else go();
  window.__automat = { api: api, get st() { return st; }, get mode() { return mode; }, start: start, cfg: cfg, step: function (n, dt) { for (var i = 0; i < n; i++) cfg.update(st, dt || STEP, api); } };
} };
})();
