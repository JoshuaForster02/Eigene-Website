/* Klavier-Sektion: Klaviatur mit fallenden Noten + synthetisierte Wiedergabe.
 * Stück: Erik Satie, Gymnopédie No. 1 (1888, gemeinfrei), Takte 1–13.
 * Klang: additive Synthese (Obertöne mit leichter Inharmonizität, zweistufiger
 * Abklingverlauf, Hammer-Geräusch), Faltungshall, Dämpfer beim Pedalwechsel.
 * Nichts startet automatisch; Audio erst nach Klick/Tipp.
 */
(() => {
  'use strict';
  const root = document.getElementById('pno');
  if (!root) return;
  const cv = root.querySelector('canvas'), ctx = cv.getContext('2d');
  const btn = root.querySelector('.pno-play'), prog = root.querySelector('.pno-prog i');
  const T = window.JF_LANG === 'en'
    ? { play: 'Listen', stop: 'Stop', again: 'Again' }
    : { play: 'Hören', stop: 'Stopp', again: 'Nochmal' };
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── Klaviatur D2 (38) … A5 (81) ─────────────────────────────────────── */
  const LO = 38, HI = 81;
  const isB = m => [1, 3, 6, 8, 10].includes(m % 12);
  const wIdx = {};
  let nW = 0;
  for (let m = LO; m <= HI; m++) if (!isB(m)) wIdx[m] = nW++;

  /* ── Stück: [Startschlag, Dauer in Schlägen, MIDI, Anschlag, Melodie?] ── */
  const BEAT = 0.84, N = [];
  for (let b = 0; b < 13; b++) {
    const s = b * 3, g = b % 2 === 0, last = b === 12;
    N.push([s, last ? 6 : 3, g ? 43 : 38, 0.5, 0]);                           // Bass G2 / D2
    (g ? [59, 62, 66] : [57, 61, 66]).forEach(m => N.push([s + 1, last ? 5 : 2, m, 0.28, 0])); // Gmaj7 / Dmaj7
  }
  [[13, 1, 78], [14, 1, 81], [15, 1, 79], [16, 1, 78], [17, 1, 73],
   [18, 1, 71], [19, 1, 73], [20, 1, 74], [21, 3, 69], [24, 12, 66]]
    .forEach(([s, d, m]) => N.push([s, d, m, 0.8, 1]));
  N.sort((a, b) => a[0] - b[0]);
  // Melodie klingt mit Pedal bis zum Taktende weiter
  const EV = N.map(([s, d, m, v, mel]) => ({
    t: s * BEAT,
    vis: (s + d) * BEAT,
    end: (mel ? Math.max(s + d, Math.ceil((s + 0.001) / 3) * 3) : s + d) * BEAT,
    m, v, mel,
  }));
  const TOTAL = Math.max(...EV.map(e => e.end)) + 2.5;

  /* ── Audio ───────────────────────────────────────────────────────────── */
  let ac = null, master = null, noise = null, sess = null;
  let t0 = 0, playing = false, finished = false, next = 0, timer = 0;
  const taps = [];

  function audio() {
    if (ac) return ac;
    const A = window.AudioContext || window.webkitAudioContext;
    if (!A) return null;
    ac = new A();
    const comp = ac.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 3;
    comp.connect(ac.destination);
    master = ac.createGain(); master.gain.value = 1.3;
    const lp = ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 7000;
    master.connect(lp); lp.connect(comp);
    // Faltungshall aus abklingendem Rauschen
    const len = ac.sampleRate * 3, ir = ac.createBuffer(2, len, ac.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) { const x = i / len; d[i] = (Math.random() * 2 - 1) * Math.pow(1 - x, 2.6) * (x < 0.004 ? x / 0.004 : 1); }
    }
    const verb = ac.createConvolver(); verb.buffer = ir;
    const wet = ac.createGain(); wet.gain.value = 0.32;
    master.connect(verb); verb.connect(wet); wet.connect(comp);
    // kurzes Rauschen für den Hammeranschlag
    noise = ac.createBuffer(1, (ac.sampleRate * 0.05) | 0, ac.sampleRate);
    const nd = noise.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = (Math.random() * 2 - 1) * (1 - i / nd.length);
    return ac;
  }

  function note(m, v, t, end, out) {
    const f = 440 * Math.pow(2, (m - 69) / 12);
    const k = Math.min(1, Math.max(0, (m - 36) / 48));
    const tc = 1.5 - 1.05 * k;                    // tiefe Töne klingen länger
    const bus = ac.createGain();
    if (ac.createStereoPanner) {
      const pan = ac.createStereoPanner();
      pan.pan.value = Math.max(-0.35, Math.min(0.35, (m - 60) / 40));
      bus.connect(pan); pan.connect(out);
    } else bus.connect(out);
    for (let n = 1; n <= 5; n++) {
      const fn = n * f * Math.sqrt(1 + 0.00035 * n * n);   // leichte Saiten-Inharmonizität
      if (fn > 16000) break;
      const o = ac.createOscillator(), a = ac.createGain();
      const amp = v * 0.22 / Math.pow(n, 1.5) * (n === 2 ? 1.2 : 1);
      o.frequency.value = fn;
      a.gain.setValueAtTime(0, t);
      a.gain.linearRampToValueAtTime(amp, t + 0.005);
      a.gain.setTargetAtTime(amp * 0.45, t + 0.005, 0.09);     // schneller Erstabfall
      a.gain.setTargetAtTime(0, t + 0.3, tc / (1 + 0.7 * (n - 1))); // langsamer Nachklang
      a.gain.setTargetAtTime(0, end, 0.14);                     // Dämpfer
      o.connect(a); a.connect(bus);
      o.start(t); o.stop(end + 1.2);
    }
    const src = ac.createBufferSource(), bp = ac.createBiquadFilter(), hg = ac.createGain();
    src.buffer = noise; bp.type = 'bandpass'; bp.frequency.value = Math.min(9000, f * 3); bp.Q.value = 1.2;
    hg.gain.value = v * 0.05;
    src.connect(bp); bp.connect(hg); hg.connect(bus); src.start(t);
  }

  function schedule() {
    if (!playing) return;
    const now = ac.currentTime - t0;
    while (next < EV.length && EV[next].t < now + 0.8) {
      const e = EV[next++];
      note(e.m, e.v, t0 + e.t, t0 + e.end, sess);
    }
    if (now > TOTAL) stop(true);
  }

  function play() {
    if (!audio()) return;
    ac.resume();
    sess = ac.createGain(); sess.connect(master);
    t0 = ac.currentTime + 0.3; next = 0; playing = true; finished = false;
    timer = setInterval(schedule, 60); schedule();
    setBtn(); loop();
  }

  function stop(done) {
    playing = false; finished = !!done;
    clearInterval(timer);
    if (sess) {
      const s = sess;
      s.gain.setTargetAtTime(0, ac.currentTime, 0.08);
      setTimeout(() => s.disconnect(), 700);
      sess = null;
    }
    setBtn(); draw();
  }

  function setBtn() {
    btn.setAttribute('aria-pressed', String(playing));
    btn.querySelector('.t').textContent = playing ? T.stop : finished ? T.again : T.play;
    btn.querySelector('svg').innerHTML = playing
      ? '<rect x="3.5" y="3.5" width="9" height="9"/>'
      : '<path d="M4 2.5v11l9-5.5z"/>';
  }

  /* ── Zeichnen ────────────────────────────────────────────────────────── */
  let W = 0, H = 0, KB = 56, ST = 0, ww = 0, C = colors(), raf = 0;

  function colors() {
    const cs = getComputedStyle(document.documentElement);
    const light = document.documentElement.getAttribute('data-theme') === 'light';
    return {
      light,
      crim: cs.getPropertyValue('--crim').trim() || '#8FB1FF',
      line: cs.getPropertyValue('--line').trim() || 'rgba(234,240,248,.12)',
      white: light ? '#FFFFFF' : 'rgba(234,240,248,.07)',
      black: light ? '#1B2740' : '#050A14',
    };
  }

  function size() {
    const r = cv.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    cv.width = (W * dpr) | 0; cv.height = (H * dpr) | 0;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    KB = H < 165 ? 48 : 56; ST = H - KB; ww = W / nW;
    draw();
  }

  const centerX = m => isB(m) ? (wIdx[m - 1] + 1) * ww : (wIdx[m] + 0.5) * ww;
  function rrect(x, y, w, h, r) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h);
  }

  function draw() {
    if (!W) return;
    ctx.clearRect(0, 0, W, H);
    const now = playing ? ac.currentTime - t0 : -0.5;   // im Ruhezustand: Vorschau der ersten Noten
    const PPS = ST / 2.4;                                // 2,4 s sichtbarer Vorlauf
    const lit = new Map();
    const light = (m, x) => lit.set(m, Math.max(lit.get(m) || 0, x));

    // fallende Noten
    if (!(RM && playing)) {
      ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, ST); ctx.clip();
      ctx.fillStyle = C.crim;
      for (const e of EV) {
        const y0 = ST - (e.t - now) * PPS, y1 = ST - (e.vis - now) * PPS;
        if (y0 < 0 || y1 > ST) continue;
        const top = Math.max(0, y1), bot = Math.min(ST, y0);
        if (bot - top < 1) continue;
        const bw = (isB(e.m) ? 0.5 : 0.62) * ww;
        ctx.globalAlpha = (playing ? 1 : 0.55) * (e.mel ? 0.95 : 0.3);
        ctx.shadowColor = C.crim; ctx.shadowBlur = e.mel && !C.light ? 10 : 0;
        rrect(centerX(e.m) - bw / 2, top, bw, bot - top, Math.min(3, bw / 2)); ctx.fill();
      }
      // selbst gespielte Töne steigen als Lichtpunkt auf
      if (!RM && ac) for (const tp of taps) {
        const dt = ac.currentTime - tp.t; if (dt < 0 || dt > 1) continue;
        const bw = (isB(tp.m) ? 0.5 : 0.62) * ww;
        ctx.globalAlpha = 0.8 * (1 - dt); ctx.shadowBlur = C.light ? 0 : 12;
        rrect(centerX(tp.m) - bw / 2, ST - 16 - dt * 90, bw, 16, Math.min(3, bw / 2)); ctx.fill();
      }
      ctx.restore();
    }

    // aktive Tasten
    if (playing) for (const e of EV) {
      if (e.t <= now && now <= e.end) light(e.m, (e.mel ? 1 : 0.55) * (0.45 + 0.55 * Math.exp(-(now - e.t) * 2.2)));
    }
    if (ac) for (const tp of taps) { const dt = ac.currentTime - tp.t; if (dt >= 0 && dt < 1.2) light(tp.m, Math.exp(-dt * 1.6)); }

    // Anschlagslinie
    ctx.globalAlpha = 0.45; ctx.fillStyle = C.crim; ctx.fillRect(0, ST - 1, W, 1);

    // weiße Tasten
    for (let m = LO; m <= HI; m++) {
      if (isB(m)) continue;
      const x = wIdx[m] * ww;
      ctx.globalAlpha = 1; ctx.fillStyle = C.white; ctx.fillRect(x, ST, ww, KB);
      const l = lit.get(m);
      if (l) { ctx.globalAlpha = l * (C.light ? 0.55 : 0.8); ctx.fillStyle = C.crim; ctx.fillRect(x, ST, ww, KB); }
      ctx.globalAlpha = 1; ctx.fillStyle = C.line; ctx.fillRect(x, ST, 1, KB);
    }
    ctx.fillStyle = C.line; ctx.fillRect(W - 1, ST, 1, KB); ctx.fillRect(0, H - 1, W, 1);

    // schwarze Tasten
    const bw = ww * 0.6, bh = KB * 0.6;
    for (let m = LO; m <= HI; m++) {
      if (!isB(m)) continue;
      const x = (wIdx[m - 1] + 1) * ww - bw / 2;
      ctx.globalAlpha = 1; ctx.fillStyle = C.black; rrect(x, ST, bw, bh, [0, 0, 2, 2]); ctx.fill();
      const l = lit.get(m);
      if (l) { ctx.globalAlpha = l * 0.9; ctx.fillStyle = C.crim; rrect(x, ST, bw, bh, [0, 0, 2, 2]); ctx.fill(); }
    }
    ctx.globalAlpha = 1;
    prog.style.width = playing ? Math.min(100, (now / TOTAL) * 100) + '%' : '0%';
  }

  function loop() {
    if (raf) return;
    const step = () => {
      draw();
      const tapsLive = ac && taps.some(tp => ac.currentTime - tp.t < 1.3);
      raf = (playing || tapsLive) ? requestAnimationFrame(step) : 0;
    };
    raf = requestAnimationFrame(step);
  }

  /* ── Selbst spielen (Tippen, auch Glissando) ─────────────────────────── */
  function keyAt(x, y) {
    if (y < 0) return null;
    if (y < KB * 0.6) for (let m = LO; m <= HI; m++) {
      if (isB(m) && Math.abs(x - (wIdx[m - 1] + 1) * ww) <= ww * 0.3) return m;
    }
    const i = Math.floor(x / ww);
    for (const k in wIdx) if (wIdx[k] === i) return +k;
    return null;
  }
  let dragKey = null;
  function strike(e) {
    const r = cv.getBoundingClientRect();
    const m = keyAt(e.clientX - r.left, e.clientY - r.top - ST);
    if (m == null || m === dragKey) return;
    dragKey = m;
    if (!audio()) return;
    ac.resume();
    const t = ac.currentTime + 0.01;
    note(m, 0.7, t, t + 1.6, master);
    taps.push({ m, t });
    while (taps.length > 40) taps.shift();
    loop();
  }
  cv.addEventListener('pointerdown', e => { dragKey = null; cv.setPointerCapture(e.pointerId); strike(e); });
  cv.addEventListener('pointermove', e => { if (e.buttons) strike(e); });
  cv.addEventListener('pointerup', () => { dragKey = null; });

  /* ── Verdrahtung ─────────────────────────────────────────────────────── */
  btn.addEventListener('click', () => (playing ? stop(false) : play()));
  document.addEventListener('visibilitychange', () => { if (document.hidden && playing) stop(false); });
  new MutationObserver(() => { C = colors(); draw(); })
    .observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  if (window.ResizeObserver) new ResizeObserver(size).observe(cv); else addEventListener('resize', size);
  setBtn(); size();
})();
