const CACHE_NAME = 'my-site-images-v1';
const IMAGE_URLS = [
  // optional
];

// Beim Install schadet es nicht, ein paar wichtige Dateien vorzucachen
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([
        '/',               // optional: start‑Seite
        ...IMAGE_URLS
      ]))
  );
});

// Für jeden Fetch: prüfe, ob’s ein Bild ist, und liefere es aus dem Cache
self.addEventListener('fetch', event => {
  const req = event.request;
  // nur Bild‑Requests behandeln
  if (req.destination === 'image') {
    event.respondWith(
      caches.match(req)
        .then(cachedResp => {
          if (cachedResp) {
            // erst Cache, dann im Hintergrund nach neuer Version checken
            fetch(req).then(newResp => {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(req, newResp.clone());
              });
            });
            return cachedResp;
          }
          // wenn nicht im Cache, normal laden und dann cachen
          return fetch(req).then(networkResp => {
            caches.open(CACHE_NAME)
              .then(cache => cache.put(req, networkResp.clone()));
            return networkResp;
          });
        })
    );
  }
  // alle anderen Requests normal weiterleiten
});
