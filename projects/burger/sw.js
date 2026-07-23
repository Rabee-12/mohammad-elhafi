/* 8one Burger — service worker
   Speeds up repeat visits on weak wifi and gives basic offline support.
   Strategy:
   - photos (img/…): cache-first  (admin uploads get NEW filenames, so this never goes stale)
   - admin.php / config.php:       bypass entirely (never cached)
   - everything else (html/css/js/menu.json/manifest): network-first, fall back to cache offline
   Bump CACHE to force clients onto a new version after a big change. */
const CACHE = "8one-v2";

self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./", "index.html", "styles.css", "app.js", "img/logo.png"]).catch(()=>{})));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;                 // never touch POSTs (admin save/upload)
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;       // let cross-origin (fonts) go to network
  if (/(admin\.(php|js|css)|config\.php)$/.test(url.pathname)) return; // never cache the admin

  // photos → cache-first
  if (/\.(jpg|jpeg|png|webp|gif|svg)$/i.test(url.pathname)) {
    e.respondWith(caches.open(CACHE).then(async c => {
      const hit = await c.match(req);
      if (hit) return hit;
      const res = await fetch(req);
      if (res && res.ok) c.put(req, res.clone());
      return res;
    }));
    return;
  }

  // html / css / js / menu.json / manifest → network-first, cache fallback (offline)
  e.respondWith(fetch(req).then(res => {
    if (res && res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(req, cp)); }
    return res;
  }).catch(() => caches.match(req)));
});
