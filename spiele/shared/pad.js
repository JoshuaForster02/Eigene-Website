/* Gamepad → Tastatur: übersetzt Controller-Eingaben in normale Tastendrücke,
   damit Spiele mit reiner Tastatursteuerung ohne Umbau mit Pad laufen.
   Einbinden: <script src="../shared/pad.js" data-map='{"0":"Space","axes":["KeyA","KeyD","KeyW","KeyS"]}'></script>
   Tasten-Indizes nach Standard-Mapping: 0 A · 1 B · 2 X · 3 Y · 6 LT · 7 RT · 8 Select · 9 Start · 12–15 Steuerkreuz */
(function () {
  'use strict';
  var me = document.currentScript, over = {};
  try { over = JSON.parse((me && me.dataset.map) || '{}'); } catch (e) { }
  var MAP = { 0: 'Space', 1: 'ShiftLeft', 2: 'KeyX', 3: 'KeyC', 8: 'KeyP', 9: 'Enter', 12: 'ArrowUp', 13: 'ArrowDown', 14: 'ArrowLeft', 15: 'ArrowRight' };
  for (var k in over) if (k !== 'axes') MAP[k] = over[k];
  // Stick: links, rechts, hoch, runter
  var AX = over.axes || ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'];
  var KEY = { Space: ' ', Enter: 'Enter', Escape: 'Escape', ShiftLeft: 'Shift', ShiftRight: 'Shift', ArrowUp: 'ArrowUp', ArrowDown: 'ArrowDown', ArrowLeft: 'ArrowLeft', ArrowRight: 'ArrowRight' };
  var held = {}, raf = 0;

  function send(type, code) {
    var key = KEY[code] || (code.indexOf('Key') === 0 ? code.slice(3).toLowerCase() : code);
    (document.activeElement || document.body || document).dispatchEvent(new KeyboardEvent(type, { code: code, key: key, bubbles: true, cancelable: true }));
  }
  function set(code, on) {
    if (!code) return;
    held[code] = held[code] || 0;
    var was = held[code] > 0;
    held[code] += on ? 1 : -1;
    if (held[code] < 0) held[code] = 0;
    var now = held[code] > 0;
    if (now && !was) send('keydown', code); else if (!now && was) send('keyup', code);
  }
  var prev = {};
  function poll() {
    raf = 0;
    var pads = navigator.getGamepads ? navigator.getGamepads() : [], any = false;
    for (var i = 0; i < pads.length; i++) {
      var gp = pads[i]; if (!gp) continue; any = true;
      var st = {};
      for (var b in MAP) { var bt = gp.buttons[b]; if (bt && (bt.pressed || bt.value > .5)) st['b' + b] = MAP[b]; }
      var x = gp.axes[0] || 0, y = gp.axes[1] || 0;
      if (x < -.5) st.al = AX[0]; if (x > .5) st.ar = AX[1]; if (y < -.5) st.au = AX[2]; if (y > .5) st.ad = AX[3];
      var p = prev[i] || {};
      for (var s in st) if (!p[s]) set(st[s], true);
      for (var q in p) if (!st[q]) set(p[q], false);
      prev[i] = st;
    }
    if (any) raf = requestAnimationFrame(poll);
  }
  function toast() {
    var t = document.createElement('div');
    t.textContent = 'Controller verbunden';
    t.style.cssText = 'position:fixed;left:50%;bottom:calc(env(safe-area-inset-bottom,0px) + 22px);transform:translateX(-50%);z-index:9999;pointer-events:none;' +
      'font:600 12px/1 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:#3cf0ff;background:rgba(0,0,0,.8);border:1px solid #3cf0ff;border-radius:6px;padding:9px 12px;box-shadow:0 0 18px rgba(60,240,255,.4);transition:opacity .5s';
    document.body.appendChild(t);
    setTimeout(function () { t.style.opacity = '0'; }, 1800); setTimeout(function () { t.remove(); }, 2400);
  }
  addEventListener('gamepadconnected', function () { toast(); if (!raf) raf = requestAnimationFrame(poll); });
  addEventListener('gamepaddisconnected', function (e) { var p = prev[e.gamepad.index] || {}; for (var q in p) set(p[q], false); delete prev[e.gamepad.index]; });
  // Pad war schon vor dem Laden verbunden (Chrome meldet es erst nach einem Tastendruck)
  if (navigator.getGamepads) setTimeout(function () { var g = navigator.getGamepads(); for (var i = 0; i < g.length; i++) if (g[i]) { if (!raf) raf = requestAnimationFrame(poll); break; } }, 500);
})();
