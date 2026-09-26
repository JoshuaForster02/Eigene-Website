/* ENCOM OS — web edition. Framework-free window manager + apps.
 * All network apps use CORS-enabled, legal, public endpoints only.
 */
(() => {
'use strict';
const $ = (s, r = document) => r.querySelector(s);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
const esc = s => (s == null ? '' : String(s)).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad2 = n => String(n).padStart(2, '0');

/* ── Icons ───────────────────────────────────────────────────────────────── */
const I = {
  grid: '<path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"/>',
  term: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/>',
  net: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  code: '<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12"/>',
  cipher: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
  key: '<circle cx="8" cy="12" r="4"/><path d="M12 12h9M18 12v4M15 12v3"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>',
  chip: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7.6v.01"/>',
  hash: '<path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>',
  bolt: '<path d="M13 2L4 14h7l-2 8 9-12h-7z"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  subnet: '<path d="M12 3v6M6 21v-5a3 3 0 013-3h6a3 3 0 013 3v5"/><circle cx="12" cy="3" r="0"/><rect x="9" y="1" width="6" height="4" rx="1"/><rect x="3" y="17" width="6" height="4" rx="1"/><rect x="15" y="17" width="6" height="4" rx="1"/>',
};
const svg = k => `<svg viewBox="0 0 24 24">${I[k] || ''}</svg>`;

/* ── Window manager ──────────────────────────────────────────────────────── */
const desk = $('#desk');
let z = 10, wins = [], focused = null;

function focus(w) {
  if (focused === w) return;
  wins.forEach(x => x.node.classList.toggle('focus', x === w));
  if (w) { w.node.style.zIndex = ++z; focused = w; syncDock(); }
}
function makeWindow(app) {
  const existing = wins.find(w => w.app.id === app.id && app.single);
  if (existing) { existing.node.classList.remove('min'); focus(existing); return existing; }

  const node = el('div', 'win');
  const mobile = innerWidth < 720;
  const w = mobile ? innerWidth - 16 : (app.w || 460);
  const h = mobile ? Math.min(innerHeight - 120, app.h || 480) : (app.h || 480);
  const ox = mobile ? 8 : Math.min(desk.clientWidth - w - 20, 60 + wins.length * 26);
  const oy = mobile ? 8 : 40 + wins.length * 22;
  Object.assign(node.style, { left: ox + 'px', top: oy + 'px', width: w + 'px', height: h + 'px' });

  node.innerHTML =
    `<div class="titlebar"><div class="tt"><span class="ti">${svg(app.icon)}</span>${esc(app.title)}</div>
       <div class="dots"><span class="dot-btn m" title="Minimieren"></span><span class="dot-btn f" title="Vollbild"></span><span class="dot-btn c" title="Schließen"></span></div>
     </div>
     <div class="winbody"></div><div class="resize"></div>`;
  desk.appendChild(node);
  const win = { app, node, body: $('.winbody', node), maxed: false, rect: null };
  wins.push(win);

  const build = app.build(win);
  if (build) win.body.appendChild(build);

  // controls
  $('.dot-btn.c', node).onclick = e => { e.stopPropagation(); closeWindow(win); };
  $('.dot-btn.m', node).onclick = e => { e.stopPropagation(); node.classList.add('min'); syncDock(); if (focused === win) focused = null; };
  $('.dot-btn.f', node).onclick = e => { e.stopPropagation(); toggleMax(win); };
  node.addEventListener('pointerdown', () => focus(win), true);
  dragify(win);
  resizify(win);
  focus(win);
  syncDock();
  if (app.onShow) app.onShow(win);
  return win;
}
function closeWindow(win) {
  if (win.app.onClose) win.app.onClose(win);
  win.node.classList.add('closing');
  setTimeout(() => { win.node.remove(); wins = wins.filter(w => w !== win); if (focused === win) focused = null; syncDock(); }, 180);
}
function toggleMax(win) {
  const n = win.node;
  if (win.maxed) { Object.assign(n.style, win.rect); n.classList.remove('max'); win.maxed = false; }
  else {
    win.rect = { left: n.style.left, top: n.style.top, width: n.style.width, height: n.style.height };
    Object.assign(n.style, { left: '0', top: '0', width: '100%', height: '100%' }); n.classList.add('max'); win.maxed = true;
  }
  if (win.app.onResize) win.app.onResize(win);
}
function dragify(win) {
  const bar = $('.titlebar', win.node);
  bar.addEventListener('pointerdown', e => {
    if (e.target.closest('.dot-btn') || win.maxed) return;
    focus(win); const sx = e.clientX, sy = e.clientY, r = win.node.getBoundingClientRect(), dr = desk.getBoundingClientRect();
    const move = ev => {
      let x = r.left - dr.left + ev.clientX - sx, y = r.top - dr.top + ev.clientY - sy;
      x = Math.max(-r.width + 90, Math.min(desk.clientWidth - 60, x));
      y = Math.max(0, Math.min(desk.clientHeight - 40, y));
      win.node.style.left = x + 'px'; win.node.style.top = y + 'px';
    };
    const up = () => { removeEventListener('pointermove', move); removeEventListener('pointerup', up); };
    addEventListener('pointermove', move); addEventListener('pointerup', up);
  });
}
function resizify(win) {
  const h = $('.resize', win.node);
  h.addEventListener('pointerdown', e => {
    e.stopPropagation(); focus(win);
    const sx = e.clientX, sy = e.clientY, r = win.node.getBoundingClientRect();
    const move = ev => {
      win.node.style.width = Math.max(260, r.width + ev.clientX - sx) + 'px';
      win.node.style.height = Math.max(160, r.height + ev.clientY - sy) + 'px';
      if (win.app.onResize) win.app.onResize(win);
    };
    const up = () => { removeEventListener('pointermove', move); removeEventListener('pointerup', up); };
    addEventListener('pointermove', move); addEventListener('pointerup', up);
  });
}

/* ── Dock & desktop ──────────────────────────────────────────────────────── */
const APPS = {};
function register(app) { APPS[app.id] = app; }
function launch(id) { const a = APPS[id]; if (a) return makeWindow(a); }
function syncDock() {
  const hint = document.querySelector('.hint'); if (hint) hint.style.opacity = wins.some(w => !w.node.classList.contains('min')) ? 0 : 1;
  document.querySelectorAll('.dock button[data-app]').forEach(b => {
    const open = wins.some(w => w.app.id === b.dataset.app && !w.node.classList.contains('min'));
    b.classList.toggle('on', open);
  });
}
function buildChrome() {
  const dock = $('#dock');
  DOCK_ORDER.forEach(id => {
    const a = APPS[id]; if (!a) return;
    const b = el('button', '', svg(a.icon) + `<span class="tip">${esc(a.title)}</span>`);
    b.dataset.app = id; b.onclick = () => launch(id);
    dock.appendChild(b);
  });
  const icons = $('#deskicons');
  DESK_ORDER.forEach(id => {
    const a = APPS[id]; if (!a) return;
    const d = el('div', 'di', `<div class="ic">${svg(a.icon)}</div><span>${esc(a.title)}</span>`);
    d.onclick = () => launch(id);
    icons.appendChild(d);
  });
}

/* ── Background grid animation ───────────────────────────────────────────── */
function startBg() {
  const cv = $('#bgcanvas'), ctx = cv.getContext('2d');
  let W, H, dpr;
  const resize = () => { dpr = Math.min(devicePixelRatio || 1, 1.5); W = cv.width = innerWidth * dpr; H = cv.height = innerHeight * dpr; };
  addEventListener('resize', resize); resize();
  let t = 0, prev = 0;
  (function frame(now) {
    requestAnimationFrame(frame);
    if (now - prev < 33) return; prev = now;
    t += 1; ctx.clearRect(0, 0, W, H);
    const hz = H * 0.52, cx = W / 2, spd = (t % 60) / 60;
    ctx.lineWidth = dpr;
    for (let k = 0; k < 22; k++) {
      const zk = 22 - (k + spd), yy = hz + (H - hz) * 1.6 / zk;
      if (yy < hz || yy > H) continue;
      const a = Math.min(0.5, (yy - hz) / (H - hz) * 0.6);
      ctx.strokeStyle = `rgba(31,179,217,${a})`;
      ctx.beginPath(); ctx.moveTo(0, yy); ctx.lineTo(W, yy); ctx.stroke();
    }
    for (let i = -20; i <= 20; i++) {
      ctx.strokeStyle = 'rgba(31,179,217,0.14)';
      ctx.beginPath(); ctx.moveTo(cx + i * 26 * dpr, hz); ctx.lineTo(cx + i * (W / 12), H); ctx.stroke();
    }
    ctx.strokeStyle = 'rgba(56,232,255,0.5)'; ctx.beginPath(); ctx.moveTo(0, hz); ctx.lineTo(W, hz); ctx.stroke();
  })(0);
}

/* ── Clock ───────────────────────────────────────────────────────────────── */
function startClock() {
  const c = $('#clock');
  const tick = () => { const d = new Date(); c.textContent = `${pad2(d.getHours())}:${pad2(d.getMinutes())}:${pad2(d.getSeconds())}`; };
  tick(); setInterval(tick, 1000);
}

/* ── Boot sequence ───────────────────────────────────────────────────────── */
function boot(done) {
  const bar = $('#bootbar'), lines = $('#bootlines');
  const seq = [
    'ENCOM SYSTEMS  ·  web runtime v1',
    'checking host  ................ ' + (navigator.hardwareConcurrency || '?') + ' cores',
    'crypto subsystem  ............. <b>SubtleCrypto OK</b>',
    'network layer  ................ <b>DoH / HIBP ready</b>',
    'wasm engine  .................. <b>v86 available</b>',
    'window manager  .............. <b>ONLINE</b>',
    'entering the grid ...',
  ];
  let i = 0;
  const step = () => {
    if (i < seq.length) {
      lines.innerHTML += seq[i] + '\n'; lines.scrollTop = lines.scrollHeight;
      bar.style.width = ((i + 1) / seq.length * 100) + '%';
      i++; setTimeout(step, 210 + Math.random() * 120);
    } else setTimeout(done, 450);
  };
  setTimeout(step, 350);
}

/* ════════════════════════════════════════════════════════════════════════ */
/*  APPS                                                                      */
/* ════════════════════════════════════════════════════════════════════════ */

/* helper: labelled section */
function section(title) { const s = el('div'); if (title) s.appendChild(el('div', 'app-h', esc(title))); return s; }
async function sha(algo, str) {
  const buf = await crypto.subtle.digest(algo, new TextEncoder().encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

/* ── TERMINAL ────────────────────────────────────────────────────────────── */
register({
  id: 'terminal', title: 'Terminal', icon: 'term', w: 560, h: 420, single: true,
  build(win) {
    const wrap = el('div', 'term');
    wrap.innerHTML = `<div class="out"></div><div class="inp"><span class="ps">flynn@encom:~$</span><input autocomplete="off" spellcheck="false"></div>`;
    const out = $('.out', wrap), inp = $('input', wrap);
    const print = (s, cls) => { const d = el('div', cls || ''); d.innerHTML = s; out.appendChild(d); out.scrollTop = out.scrollHeight; };
    win._termPrint = print;
    print('<span class="c-cyan">ENCOM OS</span> — web edition. Type <span class="c-green">help</span>.', '');
    const hist = []; let hi = 0;
    const run = async cmd => {
      cmd = cmd.trim(); if (!cmd) return;
      print('<span class="c-dim">flynn@encom:~$</span> ' + esc(cmd));
      hist.push(cmd); hi = hist.length;
      const [c, ...a] = cmd.split(/\s+/), arg = a.join(' ');
      switch (c) {
        case 'help': print('commands: <span class="c-green">help clear apps open echo date whoami dns hash b64 rot13 pw calc neofetch</span>'); break;
        case 'clear': out.innerHTML = ''; break;
        case 'apps': print(Object.values(APPS).map(x => x.id).join('  ')); break;
        case 'open': if (APPS[a[0]]) { launch(a[0]); print('opening <span class="c-cyan">' + esc(a[0]) + '</span>'); } else print('<span class="c-red">no such app</span>: ' + esc(a[0] || '')); break;
        case 'echo': print(esc(arg)); break;
        case 'date': print(new Date().toString()); break;
        case 'whoami': print('flynn'); break;
        case 'neofetch': print(`<span class="c-cyan">ENCOM OS-12</span>  web runtime
<span class="c-dim">host</span>    ${esc(navigator.userAgent.split(') ')[0].split('(')[1] || 'browser')}
<span class="c-dim">cores</span>   ${navigator.hardwareConcurrency || '?'}
<span class="c-dim">mem</span>     ${navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'n/a'}
<span class="c-dim">screen</span>  ${screen.width}x${screen.height}
<span class="c-dim">lang</span>    ${navigator.language}`); break;
        case 'dns': if (!a[0]) { print('usage: dns &lt;host&gt; [type]'); break; }
          try { print('<span class="c-dim">resolving…</span>'); const r = await doh(a[0], a[1] || 'A');
            print(r.length ? r.map(x => x.data).join('\n') : '<span class="c-dim">no records</span>'); } catch (e) { print('<span class="c-red">' + esc(e.message) + '</span>'); } break;
        case 'hash': if (!arg) { print('usage: hash &lt;text&gt;'); break; } print('sha256 ' + await sha('SHA-256', arg)); break;
        case 'b64': if (!arg) { print('usage: b64 &lt;text&gt;'); break; } try { print(btoa(unescape(encodeURIComponent(arg)))); } catch { print('<span class="c-red">err</span>'); } break;
        case 'rot13': print(esc(arg.replace(/[a-z]/gi, ch => String.fromCharCode((ch <= 'Z' ? 90 : 122) >= (ch.charCodeAt(0) + 13) ? ch.charCodeAt(0) + 13 : ch.charCodeAt(0) - 13)))); break;
        case 'pw': if (!arg) { print('usage: pw &lt;password&gt;  — checks HaveIBeenPwned (k-anonymity)'); break; }
          try { print('<span class="c-dim">checking…</span>'); const n = await pwned(arg);
            print(n ? `<span class="c-red">⚠ found in ${n.toLocaleString()} breaches</span>` : '<span class="c-green">✓ not in any known breach</span>'); } catch (e) { print('<span class="c-red">' + esc(e.message) + '</span>'); } break;
        case 'calc': try { print(esc(String(Function('"use strict";return(' + arg.replace(/[^-+*/%.()0-9\s]/g, '') + ')')()))); } catch { print('<span class="c-red">bad expression</span>'); } break;
        default: print('<span class="c-red">command not found:</span> ' + esc(c) + '  <span class="c-dim">(help)</span>');
      }
    };
    inp.addEventListener('keydown', e => {
      if (e.key === 'Enter') { const v = inp.value; inp.value = ''; run(v); }
      else if (e.key === 'ArrowUp') { if (hi > 0) inp.value = hist[--hi] || ''; e.preventDefault(); }
      else if (e.key === 'ArrowDown') { if (hi < hist.length) inp.value = hist[++hi] || ''; }
    });
    setTimeout(() => inp.focus(), 60);
    win.node.addEventListener('pointerdown', () => setTimeout(() => inp.focus(), 0));
    return wrap;
  },
});

/* ── NETWORK RECON (DNS-over-HTTPS + your IP) ────────────────────────────── */
async function doh(name, type) {
  const r = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`, { headers: { accept: 'application/dns-json' } });
  if (!r.ok) throw new Error('DNS ' + r.status);
  const j = await r.json();
  return (j.Answer || []).map(a => ({ ...a, type: DNS_TYPE[a.type] || a.type }));
}
const DNS_TYPE = { 1: 'A', 28: 'AAAA', 5: 'CNAME', 15: 'MX', 16: 'TXT', 2: 'NS', 6: 'SOA', 33: 'SRV', 257: 'CAA' };
register({
  id: 'recon', title: 'Network Recon', icon: 'net', w: 480, h: 520, single: true,
  build() {
    const wrap = el('div', 'pad'); wrap.style.display = 'flex'; wrap.style.flexDirection = 'column'; wrap.style.gap = '12px';
    wrap.innerHTML = `
      <div class="app-h">DNS-Lookup · über verschlüsseltes DNS (Cloudflare)</div>
      <div class="row"><input class="field" id="rc-host" placeholder="domain, z.B. joshuaforster.de" value="joshuaforster.de">
        <select class="field" id="rc-type" style="width:96px"><option>A</option><option>AAAA</option><option>MX</option><option>TXT</option><option>NS</option><option>CNAME</option><option>CAA</option></select></div>
      <div class="row"><button class="btn solid" id="rc-go">Auflösen</button><button class="btn ghost" id="rc-all">Alle Typen</button></div>
      <div id="rc-out"></div>
      <div class="app-h" style="margin-top:6px">Deine Verbindung</div>
      <div class="card" id="rc-ip"><div class="row"><span class="spin"></span><span class="dim">lade…</span></div></div>
      <div class="note">Nur öffentliche, CORS-freigegebene Dienste. Reine Lese-Abfragen (OSINT), keine Angriffe.</div>`;
    const out = $('#rc-out', wrap);
    const render = rows => {
      if (!rows.length) { out.innerHTML = '<div class="card dim">Keine Einträge.</div>'; return; }
      out.innerHTML = '<div class="card">' + rows.map(r => `<div class="kv"><span class="k"><span class="tag">${esc(r.type)}</span></span><span class="v">${esc(r.data)}</span></div>`).join('') + '</div>';
    };
    const go = async (types) => {
      const host = $('#rc-host', wrap).value.trim(); if (!host) return;
      out.innerHTML = '<div class="card"><div class="row"><span class="spin"></span><span class="dim">frage DNS…</span></div></div>';
      try {
        let rows = [];
        for (const t of types) rows = rows.concat(await doh(host, t));
        render(rows);
      } catch (e) { out.innerHTML = `<div class="card"><span class="tag err">Fehler</span> <span class="dim">${esc(e.message)}</span></div>`; }
    };
    $('#rc-go', wrap).onclick = () => go([$('#rc-type', wrap).value]);
    $('#rc-all', wrap).onclick = () => go(['A', 'AAAA', 'MX', 'TXT', 'NS']);
    $('#rc-host', wrap).addEventListener('keydown', e => { if (e.key === 'Enter') go([$('#rc-type', wrap).value]); });
    // your IP
    (async () => {
      const box = $('#rc-ip', wrap);
      try {
        const j = await (await fetch('https://ipapi.co/json/')).json();
        box.innerHTML = `<div class="kv"><span class="k">IP</span><span class="v">${esc(j.ip || '?')}</span></div>
          <div class="kv"><span class="k">Ort</span><span class="v">${esc([j.city, j.region, j.country_name].filter(Boolean).join(', ') || '?')}</span></div>
          <div class="kv"><span class="k">Provider</span><span class="v">${esc(j.org || '?')}</span></div>
          <div class="kv"><span class="k">Zeitzone</span><span class="v">${esc(j.timezone || '?')}</span></div>`;
      } catch { box.innerHTML = '<span class="dim">IP-Dienst nicht erreichbar (offline oder blockiert).</span>'; }
    })();
    setTimeout(() => go(['A']), 100);
    return wrap;
  },
});

/* ── BREACH CHECK (HIBP Pwned Passwords, k-anonymity) ────────────────────── */
async function pwned(pw) {
  const h = (await sha('SHA-1', pw)).toUpperCase();
  const r = await fetch('https://api.pwnedpasswords.com/range/' + h.slice(0, 5), { headers: { 'Add-Padding': 'true' } });
  if (!r.ok) throw new Error('HIBP ' + r.status);
  const suffix = h.slice(5);
  for (const line of (await r.text()).split('\n')) {
    const [suf, cnt] = line.trim().split(':');
    if (suf === suffix) return parseInt(cnt, 10);
  }
  return 0;
}
function entropyBits(pw) {
  let pool = 0;
  if (/[a-z]/.test(pw)) pool += 26; if (/[A-Z]/.test(pw)) pool += 26;
  if (/[0-9]/.test(pw)) pool += 10; if (/[^a-zA-Z0-9]/.test(pw)) pool += 33;
  return pw.length * Math.log2(pool || 1);
}
register({
  id: 'breach', title: 'Passwort-Check', icon: 'shield', w: 460, h: 440, single: true,
  build() {
    const wrap = el('div', 'pad'); wrap.style.cssText = 'display:flex;flex-direction:column;gap:12px';
    wrap.innerHTML = `
      <div class="app-h">Wurde dein Passwort schon geleakt?</div>
      <div class="note">Es wird nur der SHA-1-<b>Anfang (5 Zeichen)</b> gesendet (k-Anonymität) — dein Passwort verlässt den Browser nie. Prüf ruhig deine echten.</div>
      <div class="row"><input class="field" id="bc-pw" type="password" placeholder="Passwort eingeben"><button class="btn ghost" id="bc-eye" style="width:44px">👁</button></div>
      <div class="row"><button class="btn solid" id="bc-go">Prüfen</button></div>
      <div id="bc-out"></div>
      <div class="card" id="bc-str" style="display:none"></div>`;
    const pw = $('#bc-pw', wrap), out = $('#bc-out', wrap), str = $('#bc-str', wrap);
    $('#bc-eye', wrap).onclick = () => pw.type = pw.type === 'password' ? 'text' : 'password';
    const strength = v => {
      if (!v) { str.style.display = 'none'; return; }
      str.style.display = 'block';
      const b = entropyBits(v), lvl = b < 40 ? ['err', 'schwach'] : b < 60 ? ['warn', 'okay'] : b < 80 ? ['ok', 'stark'] : ['ok', 'sehr stark'];
      const crackYears = Math.pow(2, b) / 1e10 / (60 * 60 * 24 * 365);
      const cr = crackYears < 1 / 365 ? 'Sekunden bis Minuten' : crackYears < 1 ? Math.round(crackYears * 365) + ' Tage' : crackYears > 1e6 ? 'Millionen Jahre' : Math.round(crackYears).toLocaleString() + ' Jahre';
      str.innerHTML = `<div class="kv"><span class="k">Entropie</span><span class="v">${b.toFixed(0)} bit <span class="tag ${lvl[0]}">${lvl[1]}</span></span></div>
        <div class="kv"><span class="k">Länge</span><span class="v">${v.length}</span></div>
        <div class="kv"><span class="k">Offline-Bruteforce ≈</span><span class="v">${cr}</span></div>`;
    };
    pw.addEventListener('input', () => strength(pw.value));
    const go = async () => {
      const v = pw.value; if (!v) return;
      out.innerHTML = '<div class="card"><div class="row"><span class="spin"></span><span class="dim">frage HaveIBeenPwned…</span></div></div>';
      try {
        const n = await pwned(v);
        out.innerHTML = n
          ? `<div class="card"><span class="tag err">⚠ Kompromittiert</span><div style="margin-top:8px;font-size:14px">In <b>${n.toLocaleString()}</b> bekannten Leaks gefunden.</div><div class="note" style="margin-top:6px">Nirgends mehr verwenden.</div></div>`
          : `<div class="card"><span class="tag ok">✓ Sauber</span><div style="margin-top:8px;font-size:14px">In keinem bekannten Leak gefunden.</div></div>`;
      } catch (e) { out.innerHTML = `<div class="card"><span class="tag err">Fehler</span> <span class="dim">${esc(e.message)}</span></div>`; }
    };
    $('#bc-go', wrap).onclick = go;
    pw.addEventListener('keydown', e => { if (e.key === 'Enter') go(); });
    return wrap;
  },
});

/* ── ENCODER / DECODER ───────────────────────────────────────────────────── */
register({
  id: 'encoder', title: 'Encoder', icon: 'code', w: 480, h: 500, single: true,
  build() {
    const ops = {
      'Base64 encode': s => btoa(unescape(encodeURIComponent(s))),
      'Base64 decode': s => decodeURIComponent(escape(atob(s.trim()))),
      'URL encode': s => encodeURIComponent(s),
      'URL decode': s => decodeURIComponent(s),
      'Hex encode': s => [...new TextEncoder().encode(s)].map(b => b.toString(16).padStart(2, '0')).join(''),
      'Hex decode': s => new TextDecoder().decode(new Uint8Array(s.replace(/[^0-9a-f]/gi, '').match(/../g).map(h => parseInt(h, 16)))),
      'Binary encode': s => [...new TextEncoder().encode(s)].map(b => b.toString(2).padStart(8, '0')).join(' '),
      'JWT decode': s => { const [h, p] = s.split('.'); const d = x => JSON.stringify(JSON.parse(decodeURIComponent(escape(atob(x.replace(/-/g, '+').replace(/_/g, '/'))))), null, 2); return 'HEADER\n' + d(h) + '\n\nPAYLOAD\n' + d(p); },
      'SHA-256': async s => await sha('SHA-256', s),
      'SHA-1': async s => await sha('SHA-1', s),
    };
    const wrap = el('div', 'pad'); wrap.style.cssText = 'display:flex;flex-direction:column;gap:10px;height:100%';
    wrap.innerHTML = `<div class="app-h">Text ↔ Encoding</div>
      <select class="field" id="en-op">${Object.keys(ops).map(k => `<option>${k}</option>`).join('')}</select>
      <textarea class="field" id="en-in" placeholder="Eingabe" style="flex:1">Hallo Grid</textarea>
      <div class="row"><button class="btn solid" id="en-go">Umwandeln</button><button class="btn ghost" id="en-copy">Kopieren</button><button class="btn ghost" id="en-swap">Ergebnis ↑</button></div>
      <textarea class="field result" id="en-out" readonly style="flex:1"></textarea>`;
    const inp = $('#en-in', wrap), o = $('#en-out', wrap);
    const go = async () => { try { const f = ops[$('#en-op', wrap).value]; const r = await f(inp.value); o.value = r; } catch (e) { o.value = '⚠ ' + e.message; } };
    $('#en-go', wrap).onclick = go;
    $('#en-copy', wrap).onclick = () => { navigator.clipboard && navigator.clipboard.writeText(o.value); };
    $('#en-swap', wrap).onclick = () => { inp.value = o.value; go(); };
    inp.addEventListener('input', go); $('#en-op', wrap).onchange = go;
    go();
    return wrap;
  },
});

/* ── CIPHER LAB (CTF) ────────────────────────────────────────────────────── */
register({
  id: 'cipher', title: 'Cipher Lab', icon: 'cipher', w: 480, h: 520, single: true,
  build() {
    const caesar = (s, k) => s.replace(/[a-z]/gi, c => { const b = c <= 'Z' ? 65 : 97; return String.fromCharCode((c.charCodeAt(0) - b + k + 26) % 26 + b); });
    const xorHex = (s, key) => { const k = new TextEncoder().encode(key); return [...new TextEncoder().encode(s)].map((b, i) => (b ^ k[i % k.length]).toString(16).padStart(2, '0')).join(''); };
    const vigenere = (s, key, dec) => { let j = 0; return s.replace(/[a-z]/gi, c => { const b = c <= 'Z' ? 65 : 97, k = key.toLowerCase().charCodeAt(j++ % key.length) - 97; return String.fromCharCode((c.charCodeAt(0) - b + (dec ? 26 - k : k)) % 26 + b); }); };
    const morse = { A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..', 0: '-----', 1: '.----', 2: '..---', 3: '...--', 4: '....-', 5: '.....', 6: '-....', 7: '--...', 8: '---..', 9: '----.' };
    const wrap = el('div', 'pad'); wrap.style.cssText = 'display:flex;flex-direction:column;gap:10px;height:100%';
    wrap.innerHTML = `<div class="app-h">Ciphers · für CTFs & Rätsel</div>
      <textarea class="field" id="cl-in" style="min-height:64px">FLAG{welcome_to_the_grid}</textarea>
      <div class="row"><select class="field" id="cl-op"><option value="caesar">Caesar / ROT-N</option><option value="atbash">Atbash</option><option value="vig">Vigenère</option><option value="vigd">Vigenère (decode)</option><option value="xor">XOR → hex</option><option value="morse">Morse</option><option value="rev">Umkehren</option></select>
        <input class="field" id="cl-key" placeholder="Key / N" value="13" style="width:110px"></div>
      <div class="row"><button class="btn solid" id="cl-go">Anwenden</button><button class="btn ghost" id="cl-brute">Caesar brute-force</button></div>
      <textarea class="field result" id="cl-out" readonly style="flex:1"></textarea>`;
    const inp = $('#cl-in', wrap), key = $('#cl-key', wrap), o = $('#cl-out', wrap);
    const go = () => {
      const s = inp.value, op = $('#cl-op', wrap).value;
      try {
        o.value = op === 'caesar' ? caesar(s, parseInt(key.value) || 0)
          : op === 'atbash' ? s.replace(/[a-z]/gi, c => { const b = c <= 'Z' ? 65 : 97; return String.fromCharCode(b + 25 - (c.charCodeAt(0) - b)); })
          : op === 'vig' ? vigenere(s, key.value || 'key', false)
          : op === 'vigd' ? vigenere(s, key.value || 'key', true)
          : op === 'xor' ? xorHex(s, key.value || 'key')
          : op === 'morse' ? s.toUpperCase().split('').map(c => c === ' ' ? '/' : morse[c] || c).join(' ')
          : s.split('').reverse().join('');
      } catch (e) { o.value = '⚠ ' + e.message; }
    };
    $('#cl-go', wrap).onclick = go;
    $('#cl-brute', wrap).onclick = () => { o.value = Array.from({ length: 25 }, (_, i) => `ROT${(i + 1).toString().padStart(2, ' ')}  ${caesar(inp.value, i + 1)}`).join('\n'); };
    inp.addEventListener('input', go); $('#cl-op', wrap).onchange = go; key.addEventListener('input', go);
    go();
    return wrap;
  },
});

/* ── TOKEN / KEY GENERATOR ───────────────────────────────────────────────── */
register({
  id: 'keygen', title: 'Token Forge', icon: 'key', w: 440, h: 430, single: true,
  build() {
    const wrap = el('div', 'pad'); wrap.style.cssText = 'display:flex;flex-direction:column;gap:12px';
    const rand = n => { const a = new Uint8Array(n); crypto.getRandomValues(a); return a; };
    const hex = a => [...a].map(b => b.toString(16).padStart(2, '0')).join('');
    const uuid = () => crypto.randomUUID();
    const pw = (len, sets) => { let pool = ''; if (sets.l) pool += 'abcdefghijkmnopqrstuvwxyz'; if (sets.u) pool += 'ABCDEFGHJKLMNPQRSTUVWXYZ'; if (sets.d) pool += '23456789'; if (sets.s) pool += '!@#$%^&*-_=+?'; const a = rand(len); return [...a].map(b => pool[b % pool.length]).join(''); };
    wrap.innerHTML = `<div class="app-h">Kryptografisch sichere Zufallswerte</div>
      <div class="card" id="kg-out" style="font-family:var(--mono);font-size:14px;word-break:break-all;min-height:52px;display:flex;align-items:center"></div>
      <div class="row"><button class="btn" id="kg-uuid">UUID v4</button><button class="btn" id="kg-hex">256-bit hex</button><button class="btn" id="kg-b64">API-Key</button></div>
      <div class="app-h" style="margin-top:6px">Passwort</div>
      <div class="row" style="flex-wrap:wrap;gap:6px">
        <label class="tag"><input type="checkbox" id="s-l" checked> a-z</label>
        <label class="tag"><input type="checkbox" id="s-u" checked> A-Z</label>
        <label class="tag"><input type="checkbox" id="s-d" checked> 0-9</label>
        <label class="tag"><input type="checkbox" id="s-s" checked> !@#</label>
        <input class="field" id="kg-len" type="number" value="20" min="6" max="128" style="width:80px">
        <button class="btn solid" id="kg-pw">Erzeugen</button></div>
      <button class="btn ghost" id="kg-copy">Kopieren</button>`;
    const out = $('#kg-out', wrap);
    const set = v => out.textContent = v;
    $('#kg-uuid', wrap).onclick = () => set(uuid());
    $('#kg-hex', wrap).onclick = () => set(hex(rand(32)));
    $('#kg-b64', wrap).onclick = () => set(btoa(String.fromCharCode(...rand(24))).replace(/[+/=]/g, ''));
    $('#kg-pw', wrap).onclick = () => set(pw(Math.max(6, Math.min(128, +$('#kg-len', wrap).value || 20)), { l: $('#s-l', wrap).checked, u: $('#s-u', wrap).checked, d: $('#s-d', wrap).checked, s: $('#s-s', wrap).checked }));
    $('#kg-copy', wrap).onclick = () => navigator.clipboard && navigator.clipboard.writeText(out.textContent);
    set(uuid());
    return wrap;
  },
});

/* ── SUBNET CALCULATOR ───────────────────────────────────────────────────── */
register({
  id: 'subnet', title: 'Subnet Calc', icon: 'subnet', w: 440, h: 400, single: true,
  build() {
    const wrap = el('div', 'pad'); wrap.style.cssText = 'display:flex;flex-direction:column;gap:12px';
    wrap.innerHTML = `<div class="app-h">IPv4-Subnetz</div>
      <input class="field" id="sn-in" placeholder="10.0.0.0/24" value="192.168.1.0/24">
      <div id="sn-out"></div>`;
    const out = $('#sn-out', wrap), inp = $('#sn-in', wrap);
    const toInt = ip => ip.split('.').reduce((a, o) => (a << 8 | (+o & 255)) >>> 0, 0);
    const toIp = n => [24, 16, 8, 0].map(s => (n >>> s) & 255).join('.');
    const go = () => {
      const m = inp.value.trim().match(/^(\d+\.\d+\.\d+\.\d+)\/(\d+)$/);
      if (!m || +m[2] > 32) { out.innerHTML = '<div class="card dim">Format: 10.0.0.0/24</div>'; return; }
      const ip = toInt(m[1]), bits = +m[2], mask = bits === 0 ? 0 : (0xFFFFFFFF << (32 - bits)) >>> 0;
      const net = (ip & mask) >>> 0, bc = (net | (~mask >>> 0)) >>> 0, hosts = bits >= 31 ? 0 : (bc - net - 1);
      out.innerHTML = `<div class="card">
        <div class="kv"><span class="k">Netz</span><span class="v">${toIp(net)}</span></div>
        <div class="kv"><span class="k">Broadcast</span><span class="v">${toIp(bc)}</span></div>
        <div class="kv"><span class="k">Maske</span><span class="v">${toIp(mask)}</span></div>
        <div class="kv"><span class="k">Erste Host</span><span class="v">${hosts > 0 ? toIp(net + 1) : '—'}</span></div>
        <div class="kv"><span class="k">Letzte Host</span><span class="v">${hosts > 0 ? toIp(bc - 1) : '—'}</span></div>
        <div class="kv"><span class="k">Nutzbare Hosts</span><span class="v">${Math.max(0, hosts).toLocaleString()}</span></div></div>`;
    };
    inp.addEventListener('input', go); go();
    return wrap;
  },
});

/* ── SYSTEM ──────────────────────────────────────────────────────────────── */
register({
  id: 'system', title: 'System', icon: 'cpu', w: 460, h: 480, single: true,
  build(win) {
    const wrap = el('div', 'pad'); wrap.style.cssText = 'display:flex;flex-direction:column;gap:12px';
    const g = navigator.userAgentData ? navigator.userAgentData.brands.map(b => b.brand + ' ' + b.version).join(', ') : navigator.userAgent;
    wrap.innerHTML = `<div class="app-h">Host</div>
      <div class="card">
        <div class="kv"><span class="k">Engine</span><span class="v">${esc(g).slice(0, 60)}</span></div>
        <div class="kv"><span class="k">Plattform</span><span class="v">${esc(navigator.platform || '?')}</span></div>
        <div class="kv"><span class="k">CPU-Kerne</span><span class="v">${navigator.hardwareConcurrency || '?'}</span></div>
        <div class="kv"><span class="k">RAM</span><span class="v">${navigator.deviceMemory ? '≈ ' + navigator.deviceMemory + ' GB' : 'n/a'}</span></div>
        <div class="kv"><span class="k">Bildschirm</span><span class="v">${screen.width}×${screen.height} @${window.devicePixelRatio}x</span></div>
        <div class="kv"><span class="k">Sprache</span><span class="v">${esc(navigator.language)}</span></div>
        <div class="kv"><span class="k">Online</span><span class="v">${navigator.onLine ? 'ja' : 'nein'}</span></div>
      </div>
      <div class="app-h">Render</div>
      <div class="card"><div class="kv"><span class="k">FPS</span><span class="v" id="sy-fps">—</span></div>
        <div class="kv"><span class="k">Fenster offen</span><span class="v" id="sy-win">—</span></div>
        <div class="kv"><span class="k">Laufzeit</span><span class="v" id="sy-up">—</span></div></div>`;
    let frames = 0, last = performance.now(), start = Date.now();
    const loop = () => { frames++; const now = performance.now(); if (now - last >= 1000) {
      const f = $('#sy-fps', wrap); if (f) f.textContent = frames + ' fps'; frames = 0; last = now;
      const w = $('#sy-win', wrap); if (w) w.textContent = wins.length;
      const u = $('#sy-up', wrap); if (u) { const s = Math.floor((Date.now() - start) / 1000); u.textContent = `${pad2(s / 60 | 0)}:${pad2(s % 60)}`; }
    } if (win.node.isConnected) requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
    return wrap;
  },
});

/* ── METAL: boot the real kernel in v86 ──────────────────────────────────── */
register({
  id: 'metal', title: 'METAL — echter Kernel', icon: 'chip', w: 760, h: 620, single: true,
  build(win) {
    const wrap = el('div', 'metal');
    wrap.innerHTML = `<div class="bar"><span class="tag ok">v86 · WebAssembly</span>
        <span class="dim" id="mt-st" style="font-size:12px">bereit</span><div style="flex:1"></div>
        <button class="btn" id="mt-boot">Kernel booten</button><button class="btn ghost" id="mt-restart" disabled>Neustart</button></div>
      <div class="scr" id="mt-scr"><div class="dim" style="text-align:center;padding:20px;font-size:13px">
        Bootet <b>encom-kernel.bin</b> — deinen echten, in C und Assembly geschriebenen ENCOM-Kernel — direkt hier im Browser (x86-Emulation).<br><br>
        Lädt ~2,5 MB. Klick auf <b>Kernel booten</b>.<br><span style="font-size:11px">F1–F4 wechseln Apps · Tab wechselt Fenster · Maus zieht Fenster.</span></div></div>`;
    const scr = $('#mt-scr', wrap), st = $('#mt-st', wrap);
    let emu = null;
    const bootBtn = $('#mt-boot', wrap), restart = $('#mt-restart', wrap);
    const start = () => {
      if (emu || !window.V86) { if (!window.V86) st.textContent = 'v86 nicht geladen'; return; }
      bootBtn.disabled = true; st.textContent = 'lade WebAssembly…';
      scr.innerHTML = '<div class="row" style="padding:20px"><span class="spin"></span><span class="dim">initialisiere Emulator…</span></div>';
      const cont = el('div'); cont.style.cssText = 'width:100%;height:100%;display:grid;place-items:center';
      const canvas = el('canvas'); const txt = el('div', 'txt');
      cont.appendChild(txt); cont.appendChild(canvas); scr.innerHTML = ''; scr.appendChild(cont);
      emu = new V86({
        wasm_path: 'vendor/v86.wasm', memory_size: 128 * 1024 * 1024, vga_memory_size: 16 * 1024 * 1024,
        bios: { url: 'vendor/seabios.bin' }, vga_bios: { url: 'vendor/vgabios.bin' },
        screen_container: cont, multiboot: { url: 'vendor/encom-kernel.bin' }, autostart: true,
      });
      win._emu = emu;
      emu.add_listener('emulator-ready', () => st.textContent = 'läuft');
      emu.add_listener('serial0-output-byte', () => {});
      restart.disabled = false;
      // keep keyboard going to the emulator when the window is focused
      cont.tabIndex = 0; cont.style.outline = 'none';
      setTimeout(() => cont.focus(), 500);
    };
    bootBtn.onclick = start;
    restart.onclick = () => { if (emu) { try { emu.restart(); st.textContent = 'neu gestartet'; } catch {} } };
    win.app.onClose = () => { if (emu) { try { emu.destroy(); } catch {} emu = null; } };
    return wrap;
  },
});

/* ── ABOUT ───────────────────────────────────────────────────────────────── */
register({
  id: 'about', title: 'ENCOM OS', icon: 'info', w: 480, h: 400, single: true,
  build() {
    const wrap = el('div', 'pad'); wrap.style.cssText = 'display:flex;flex-direction:column;gap:14px';
    wrap.innerHTML = `<div style="font-family:var(--font);font-weight:200;font-size:44px;letter-spacing:.2em;color:var(--ink);text-shadow:0 0 24px var(--cyan-glow);padding-left:.2em">ENC<b style="font-weight:600;color:var(--cyan)">OM</b></div>
      <div class="dim" style="font-size:13.5px;line-height:1.7">Ein Betriebssystem-Konzept im TRON/ENCOM-Stil, das komplett im Browser läuft — auf PC und Handy. Der Fenster-Manager, die Animationen und die Apps sind reines HTML/JS ohne Framework.</div>
      <div class="card"><div class="kv"><span class="k">METAL</span><span class="v">echter x86-Kernel via v86</span></div>
        <div class="kv"><span class="k">Tools</span><span class="v">DNS · Leak-Check · Crypto · CTF</span></div>
        <div class="kv"><span class="k">Netzwerk</span><span class="v">nur legale, öffentliche APIs</span></div></div>
      <div class="note">Der native Kernel und die Linux-Distribution liegen auf GitHub:<br>
        <a href="https://github.com/JoshuaForster02/antigravity-kernel" target="_blank" rel="noopener">antigravity-kernel</a> ·
        <a href="https://github.com/JoshuaForster02/antigravity-linux" target="_blank" rel="noopener">antigravity-linux</a></div>
      <div class="note">Gebaut von Joshua Forster · <a href="/">joshuaforster.de</a></div>`;
    return wrap;
  },
});

/* ── Global keys: F1-F4 launch, Tab cycle ────────────────────────────────── */
const F_APPS = ['terminal', 'recon', 'breach', 'cipher'];
addEventListener('keydown', e => {
  if (e.key >= 'F1' && e.key <= 'F4') { const i = +e.key[1] - 1; if (F_APPS[i]) { e.preventDefault(); launch(F_APPS[i]); } }
});

/* ── Layout order ────────────────────────────────────────────────────────── */
const DOCK_ORDER = ['terminal', 'recon', 'breach', 'encoder', 'cipher', 'keygen', 'subnet', 'system', 'metal', 'about'];
const DESK_ORDER = ['metal', 'terminal', 'recon', 'breach', 'cipher'];

/* ── Boot ────────────────────────────────────────────────────────────────── */
function main() {
  startBg(); startClock(); buildChrome();
  boot(() => { $('#boot').classList.add('done'); $('#os').classList.add('up');
    setTimeout(() => { $('#boot').remove(); if (innerWidth > 720) launch('metal'); launch('terminal'); }, 500); });
}
if (document.readyState !== 'loading') main(); else addEventListener('DOMContentLoaded', main);
})();
