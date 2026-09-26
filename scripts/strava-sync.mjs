// Holt öffentliche Lauf-Kennzahlen aus Strava und schreibt data/strava.json.
// Es werden nur Summen gespeichert: keine Routen, keine Orte, keine Zeitstempel einzelner Aktivitäten außer Datum des längsten Laufs.
import { writeFileSync, mkdirSync } from 'node:fs';

const { STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN } = process.env;
if (!STRAVA_CLIENT_ID || !STRAVA_CLIENT_SECRET || !STRAVA_REFRESH_TOKEN) {
  console.error('Strava-Secrets fehlen (STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, STRAVA_REFRESH_TOKEN).');
  process.exit(1);
}

const tokenRes = await fetch('https://www.strava.com/oauth/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ client_id: STRAVA_CLIENT_ID, client_secret: STRAVA_CLIENT_SECRET, grant_type: 'refresh_token', refresh_token: STRAVA_REFRESH_TOKEN })
});
if (!tokenRes.ok) { console.error('Token-Fehler', tokenRes.status, await tokenRes.text()); process.exit(1); }
const tok = await tokenRes.json();
if (tok.refresh_token && tok.refresh_token !== STRAVA_REFRESH_TOKEN) {
  console.warn('Hinweis: Strava hat einen neuen Refresh-Token ausgegeben. Bitte das Secret STRAVA_REFRESH_TOKEN aktualisieren.');
}
const api = async (path) => {
  const r = await fetch('https://www.strava.com/api/v3' + path, { headers: { Authorization: 'Bearer ' + tok.access_token } });
  if (!r.ok) throw new Error(path + ' ' + r.status);
  return r.json();
};

const athlete = await api('/athlete');
const stats = await api(`/athletes/${athlete.id}/stats`);

// Längster Lauf: alle Aktivitäten seitenweise durchgehen
let longest = { distance: 0, date: null };
for (let page = 1; page <= 30; page++) {
  const acts = await api(`/athlete/activities?per_page=200&page=${page}`);
  if (!acts.length) break;
  for (const a of acts) {
    const isRun = a.sport_type ? /Run$/.test(a.sport_type) : a.type === 'Run';
    if (isRun && a.distance > longest.distance) longest = { distance: a.distance, date: (a.start_date_local || '').slice(0, 10) };
  }
}

const km = (m) => Math.round((m / 1000) * 10) / 10;
const out = {
  updated: new Date().toISOString(),
  year: new Date().getFullYear(),
  athlete_url: `https://www.strava.com/athletes/${athlete.id}`,
  ytd_run_km: Math.round(stats.ytd_run_totals.distance / 1000),
  ytd_runs: stats.ytd_run_totals.count,
  all_run_km: Math.round(stats.all_run_totals.distance / 1000),
  all_runs: stats.all_run_totals.count,
  ytd_ride_km: Math.round(stats.ytd_ride_totals.distance / 1000),
  ytd_swim_km: km(stats.ytd_swim_totals.distance),
  longest_run_km: km(longest.distance),
  longest_run_date: longest.date
};
mkdirSync('data', { recursive: true });
writeFileSync('data/strava.json', JSON.stringify(out, null, 2) + '\n');
console.log('OK', out);
