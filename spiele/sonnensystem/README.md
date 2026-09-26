# Kosmos

Expedition durch ein prozedurales Sonnensystem (Browser, WebGL).

- `src/kosmos.js` – lesbare Quelle (three.js ist mitgebündelt, daher die kurzen Namen wie `F` = Vector3).
  Die Expedition (Relikte, Navigation, Aufgaben, Sound, Karte) steht gesammelt unter `createExpedition`.
- `tex/` – Texturen (Detail, Normalen, Rumpf, Wasser, Sternenhimmel).
- `kosmos.min.js` – ausgeliefertes Bundle, gebaut mit `./build.sh`.
- Test-Modus: `?test` stellt `window.__game` bereit (`settle`, `step`, `snap`, `exp`, …), `?q=niedrig|mittel|hoch` setzt die Grafikstufe.
