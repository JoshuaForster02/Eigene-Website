# joshuaforster.de

Persönliche Website von Joshua Forster. Statisch, ohne Build, über GitHub Pages (`main`, Ordner `/`).

## Aufbau

| Pfad | Inhalt |
|---|---|
| `index.html` | Startseite mit allen Abschnitten, Texten (DE/EN) und Scripts |
| `fechten.html`, `datenschutz.html` | Unterseiten |
| `about.html`, `contact.html`, `projects.html`, … | alte Adressen, leiten auf die Startseite um |
| `data/strava.json` | Laufwerte, täglich per GitHub Action (`.github/workflows/strava.yml`, `scripts/strava-sync.mjs`) |
| `scripts/piano.js` | Klavier im Abschnitt „Ausgleich“ |
| `visite/`, `kitteltasche/`, `notizen/` | eigenständige Web-Apps |
| `site.css`, `site.js`, `fonts/` | Gemeinsames Layout, Theme-Schalter und lokal gehostete Schriften für Startseite, Fechten und Datenschutz |
| `spiele/` | Easter Egg (7× aufs Logo klicken): Flynn's Arcade, Spielhalle mit Weltbestenliste. `shared/automat.js` ist der gemeinsame Automaten-Rahmen, `shared/pad.js` übersetzt Gamepads in Tastendrücke |
| `encom/` | ENCOM OS |
| `study/` | Weiterleitung zu Study OS / Hybrid OS (Login) |

## Hinweise

- **Sprache:** Deutsch ist Standard, Englisch per Knopf oder Browsersprache. Englische Texte stehen im `EN`-Objekt in `index.html` (Schlüssel = `data-i`).
- **Kontakt:** Formspree (`https://formspree.io/f/xqeajnve`). Die E-Mail-Adresse wird erst im Browser zusammengesetzt. Lebenslauf nur auf Anfrage.
- **Gerade-Hinweis im Hero:** kommt automatisch aus der Station mit der Klasse `now`.
- **Strava:** Secrets `STRAVA_CLIENT_ID`, `STRAVA_CLIENT_SECRET`, `STRAVA_REFRESH_TOKEN` im Repo hinterlegt. Liefert Jahreskilometer, längsten Lauf und schnellste 5 km.
- **Bestenliste der Spiele:** Backend im Repo `hybrid-os` (`/api/games`).
