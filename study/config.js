// Adressen des Study OS.
// PI: deine Tailscale-Adresse vom Raspberry Pi (mit Funnel auch vom Bib-PC erreichbar),
//     z. B. "https://raspberrypi.tail1234.ts.net". Leer lassen, solange der Pi noch nicht läuft.
// FALLBACK: Vercel-Version (ohne Anki), wenn der Pi nicht erreichbar ist.
window.STUDY_OS = {
  PI: "",
  FALLBACK: "https://hybrid-os-blush.vercel.app"
};
