/* Weltbestenliste für alle Spiele unter /spiele/.
   Nutzung:  Bestenliste.mount(element, { game: 'arena', score: 12345, meta: { wave: 7 } })
             Bestenliste.mount(element, { game: 'arena' })            // nur anzeigen
   Backend:  hybrid-os (Vercel + Upstash), Endpunkte /api/games/scores */
(function () {
  var API = window.BESTENLISTE_API || 'https://hybrid-os-blush.vercel.app/api/games';
  var NAME_KEY = 'spiele.name';

  var css = '' +
    '.bl{font:14px/1.45 ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:inherit;text-align:left}' +
    '.bl-h{display:flex;justify-content:space-between;align-items:baseline;gap:10px;font-size:11px;letter-spacing:.2em;text-transform:uppercase;opacity:.75;margin:0 0 8px}' +
    '.bl-h b{letter-spacing:.05em;text-transform:none;font-weight:600;opacity:1;color:var(--bl-acc,#8fd0ff)}' +
    '.bl-f{display:flex;gap:8px;margin:0 0 10px}' +
    '.bl-f input{flex:1;min-width:0;font:inherit;color:inherit;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.22);border-radius:9px;padding:9px 11px;outline:none}' +
    '.bl-f input:focus{border-color:var(--bl-acc,#8fd0ff)}' +
    '.bl-f button{font:inherit;font-weight:600;cursor:pointer;color:#071018;background:var(--bl-acc,#8fd0ff);border:0;border-radius:9px;padding:9px 14px;white-space:nowrap}' +
    '.bl-f button[disabled]{opacity:.5;cursor:default}' +
    '.bl-l{list-style:none;margin:0;padding:0;max-height:260px;overflow:auto}' +
    '.bl-l li{display:grid;grid-template-columns:28px 1fr auto;gap:8px;align-items:baseline;padding:5px 2px;border-bottom:1px solid rgba(255,255,255,.08);font-variant-numeric:tabular-nums}' +
    '.bl-l li .r{opacity:.55;font-size:12px}' +
    '.bl-l li .n{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}' +
    '.bl-l li .n small{opacity:.55;margin-left:6px;font-size:11px}' +
    '.bl-l li .s{font-weight:600}' +
    '.bl-l li.me{color:var(--bl-acc,#8fd0ff)}' +
    '.bl-l li:nth-child(1) .r{color:#ffd36a;opacity:1}' +
    '.bl-m{font-size:12.5px;opacity:.7;margin-top:8px;min-height:18px}';
  function injectCss() {
    if (document.getElementById('bl-css')) return;
    var s = document.createElement('style'); s.id = 'bl-css'; s.textContent = css; document.head.appendChild(s);
  }
  function esc(t) { return String(t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function getName() { try { return localStorage.getItem(NAME_KEY) || ''; } catch (e) { return ''; } }
  function setName(n) { try { localStorage.setItem(NAME_KEY, n); } catch (e) {} }
  function fmt(n) { return Number(n).toLocaleString('de-DE'); }
  function metaText(m) {
    if (!m) return '';
    var p = [];
    if (m.wave) p.push('Welle ' + m.wave);
    if (m.level) p.push('Level ' + m.level);
    if (m.facts) p.push(m.facts + ' Fragmente');
    if (m.acc) p.push(m.acc + ' %');
    if (m.mode) p.push(String(m.mode));
    return p.join(' · ');
  }

  function load(game, limit) {
    return fetch(API + '/scores?game=' + encodeURIComponent(game) + '&limit=' + (limit || 10), { cache: 'no-store' })
      .then(function (r) { return r.json(); });
  }
  function submit(game, name, score, meta) {
    return fetch(API + '/scores', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ game: game, name: name, score: score, meta: meta || {} }) })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok) throw new Error(j.error || 'Fehler'); return j; }); });
  }

  function mount(el, opt) {
    injectCss();
    opt = opt || {};
    var game = opt.game, score = opt.score, meta = opt.meta, mine = null;
    el.innerHTML = '<div class="bl"><div class="bl-h"><span>' + esc(opt.title || 'Weltbestenliste') + '</span><b class="bl-you"></b></div>' +
      (score > 0 ? '<form class="bl-f"><input maxlength="16" placeholder="Dein Name" autocomplete="nickname" aria-label="Name für die Bestenliste"><button type="submit">Eintragen</button></form>' : '') +
      '<ol class="bl-l"><li><span class="r"></span><span class="n">Lade …</span><span class="s"></span></li></ol><div class="bl-m"></div></div>';
    var list = el.querySelector('.bl-l'), msg = el.querySelector('.bl-m'), form = el.querySelector('.bl-f');
    if (score > 0) el.querySelector('.bl-you').textContent = 'Deine Punkte: ' + fmt(score);
    function render(items) {
      if (!items || !items.length) { list.innerHTML = '<li><span class="r"></span><span class="n">Noch keine Einträge – sei die oder der Erste.</span><span class="s"></span></li>'; return; }
      list.innerHTML = items.map(function (it) {
        var me = mine && String(it.name).toLowerCase() === mine.name;
        var mt = metaText(it.meta);
        return '<li' + (me ? ' class="me"' : '') + '><span class="r">' + it.rank + '.</span><span class="n">' + esc(it.name) + (mt ? '<small>' + esc(mt) + '</small>' : '') + '</span><span class="s">' + fmt(it.score) + '</span></li>';
      }).join('');
    }
    function refresh() {
      return load(game, opt.limit || 10).then(function (j) { render(j.items); }).catch(function () {
        list.innerHTML = '<li><span class="r"></span><span class="n">Bestenliste gerade nicht erreichbar.</span><span class="s"></span></li>';
      });
    }
    if (form) {
      var inp = form.querySelector('input'), btn = form.querySelector('button');
      inp.value = getName();
      // Tastatureingaben nicht ans Spiel weiterreichen
      ['keydown', 'keyup', 'keypress'].forEach(function (t) { inp.addEventListener(t, function (e) { e.stopPropagation(); }); });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var n = inp.value.trim();
        if (n.length < 2) { msg.textContent = 'Name: mindestens 2 Zeichen.'; inp.focus(); return; }
        btn.disabled = true; inp.disabled = true; msg.textContent = 'Wird eingetragen …';
        submit(game, n, score, meta).then(function (j) {
          setName(n); mine = { name: n.toLowerCase() };
          msg.textContent = j.improved === false ? 'Dein Bestwert (' + fmt(j.best) + ') bleibt stehen – Platz ' + j.rank + '.' : 'Eingetragen – Platz ' + j.rank + '.';
          if (opt.onSubmit) opt.onSubmit(j);
          return refresh();
        }).catch(function (err) {
          btn.disabled = false; inp.disabled = false; msg.textContent = err.message || 'Hat nicht geklappt.';
        });
      });
    }
    refresh();
    return { refresh: refresh };
  }

  window.Bestenliste = { mount: mount, load: load, submit: submit, api: API };
})();
