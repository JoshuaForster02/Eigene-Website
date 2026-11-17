(() => {
  'use strict';
  const rows = [...document.querySelectorAll('.project')];
  const search = document.querySelector('#search');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#empty-state');
  let category = 'all';
  const apply = () => {
    const query = search.value.trim().toLocaleLowerCase('de');
    let visible = 0;
    for (const row of rows) {
      const matchesCategory = category === 'all' || row.dataset.category.split(' ').includes(category);
      const matchesQuery = !query || row.dataset.search.toLocaleLowerCase('de').includes(query);
      row.hidden = !(matchesCategory && matchesQuery);
      if (!row.hidden) visible++;
    }
    count.textContent = `${visible} ${visible === 1 ? 'Projekt' : 'Projekte'}`;
    empty.hidden = visible > 0;
  };
  search.addEventListener('input', apply);
  for (const button of filters) button.addEventListener('click', () => {
    category = button.dataset.filter;
    for (const option of filters) option.setAttribute('aria-pressed', String(option === button));
    apply();
  });
  document.addEventListener('keydown', event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); search.focus(); }
    if (event.key === 'Escape' && document.activeElement === search) { search.value = ''; apply(); search.blur(); }
  });
  const system = matchMedia('(prefers-reduced-motion: reduce)');
  const toggle = document.querySelector('#motion-toggle');
  let preference = null;
  try { preference = localStorage.getItem('jf-apps-motion'); } catch {}
  const enabled = () => preference === 'on' || (preference !== 'off' && !system.matches);
  const updateMotion = () => {
    const allowed = enabled();
    document.documentElement.classList.toggle('motion-off', !allowed);
    document.documentElement.classList.toggle('force-motion', preference === 'on');
    toggle.setAttribute('aria-pressed', String(allowed));
    toggle.textContent = `Animationen ${allowed ? 'an' : 'aus'}`;
    toggle.title = preference ? 'Eigene Einstellung für diese Seite' : 'Folgt der Systemeinstellung';
  };
  toggle.addEventListener('click', () => {
    preference = enabled() ? 'off' : 'on';
    try { localStorage.setItem('jf-apps-motion', preference); } catch {}
    updateMotion();
  });
  system.addEventListener('change', updateMotion);
  updateMotion();
  const orbital = document.querySelector('.orbital');
  let frame = 0;
  document.querySelector('.hero').addEventListener('pointermove', event => {
    if (!enabled() || event.pointerType !== 'mouse' || frame) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    frame = requestAnimationFrame(() => { orbital.style.setProperty('--px', `${x * 14}px`); orbital.style.setProperty('--py', `${y * 14}px`); frame = 0; });
  });
  document.addEventListener('visibilitychange', () => {
    for (const orbit of document.querySelectorAll('.orbit')) orbit.style.animationPlayState = document.hidden ? 'paused' : 'running';
  });
})();
