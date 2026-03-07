# Eigene-Website — Joshua Forster

Kurzbeschreibung

Diese statische Website ist ein persönliches Portfolio für Bewerbungen und Präsentationen. Sie enthält Seiten für Home, Über mich, Projekte, Forschung und Kontakt.

Schnellstart (GitHub Pages)

Die Website wird automatisch auf GitHub Pages bereitgestellt:

1. **Automatisches Deployment**: Bei jedem Push auf den `main` Branch wird die Website automatisch über GitHub Actions deployed.
2. **GitHub Pages aktivieren**: 
   - Gehe zu den Repository-Einstellungen → Pages
   - Unter "Build and deployment" wähle "GitHub Actions" als Source
3. **Custom Domain**: Die `CNAME`-Datei ist bereits konfiguriert für `joshuaforster.de`
   - Stelle sicher, dass deine Domain-DNS-Einstellungen korrekt auf GitHub Pages zeigen
   - Bei GitHub: Settings → Pages → Custom domain → `joshuaforster.de`

Das Deployment erfolgt über den Workflow `.github/workflows/deploy.yml`.

Wichtige Hinweise

- CV: Die Website stellt den CV nicht öffentlich als PDF bereit. Interessierte können den CV über das Kontaktformular anfordern (Checkbox "Ich möchte den CV per E-Mail erhalten").
- Kontaktformular: Das Formular in `contact.html` ist so konfiguriert, dass es Formspree verwendet. Aktuell ist der Formspree-Endpunkt auf `https://formspree.io/f/xqeajnve` gesetzt — du kannst das im Quelltext anpassen, falls du ein anderes Projekt verwenden möchtest.
- Bilder: Ersetze Platzhalter-Bilder (via.placeholder.com) durch eigene Portraits und Projektbilder.
- Favicon & Social: Für Bewerbungen lohnt sich ein passendes Favicon und Open Graph Image (meta og:image).
	Bilddateien (wo ablegen und wie nennen)

	- Hero / Stimmungsbild (allgemein, nicht persönlich): kopiere deine Datei nach `images/hero.jpg` (empfohlen 1200×1200 oder 900×900, JPEG/WebP, <300KB). Wird im Hero verwendet.
	- Projekt-Screenshot (Medicus): kopiere nach `images/medicus-1.jpg` (1200×675 oder 900×600, JPEG/WebP, <300KB). Wird in `projects.html` angezeigt.
	- Dateinamen: nur Kleinbuchstaben, Bindestriche, keine Leerzeichen (z.B. `medicus-1.jpg`).
	- Alt‑Texte: Verwende beschreibende Alt‑Attribute wie "Stimmungsbild: Berglandschaft" oder "Screenshot Medicus Plattform".

Verbesserungsvorschläge / nächste Schritte

- SEO: Metadaten, strukturierte Daten (JSON-LD) ergänzen.
- Performance: Bilder optimieren, lazy-loading einbauen.
- Analytics: Google Analytics / Plausible wenn gewünscht.
- Mehr Projekte: Detailseiten für Projekte mit Screenshots und Links.

Kontakt

Bei Fragen sende eine E-Mail an joshuaforster02@gmail.com
