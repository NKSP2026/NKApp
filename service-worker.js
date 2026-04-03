const CACHE_NAME = "nksp-cache-v1";

const urlsToCache = [
  "/NKApp/",
  "/NKApp/index.html",
  "/NKApp/startseite.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
