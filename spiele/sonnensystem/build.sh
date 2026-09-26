#!/bin/sh
# Baut kosmos.min.js aus der lesbaren Quelle src/kosmos.js (esbuild, sonst keine Abhängigkeiten).
set -e
cd "$(dirname "$0")"
npx --yes esbuild@0.24.0 src/kosmos.js --minify --target=es2020 --outfile=kosmos.min.js
