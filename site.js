/* Unterseiten: Hell/Dunkel-Schalter, Kopfzeilen-Linie, E-Mail-Adresse */
(function () {
  var root = document.documentElement, tg = document.getElementById('tgl'), hd = document.getElementById('hd');
  function dark() { return root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; }
  if (tg) tg.addEventListener('click', function () { var n = dark() ? 'light' : 'dark'; root.dataset.theme = n; try { localStorage.setItem('jf-theme', n); } catch (e) { } });
  if (hd) { var sc = function () { hd.classList.toggle('sc', scrollY > 8); }; addEventListener('scroll', sc, { passive: true }); sc(); }
  document.querySelectorAll('[data-u][data-d]').forEach(function (m) { var a = m.dataset.u + '@' + m.dataset.d; m.textContent = a; m.href = 'mailto:' + a; });
})();
