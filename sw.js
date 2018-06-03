
const cacheName = "simple-cache";
const cacheFiles = [
  "/offline/",
  "/resilient-ui/",
  "/research-decision/",
  "/henry-ford-for-makers/",
  "/manifest.json",
  "/dist/bundle.css",
  "/dist/bundle.js"

];
const offlinePage = "./offline/";

self.addEventListener("install", (event) => {
  // console.log("[ServiceWorker] Install");
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      // console.log("[ServiceWorker] Caching preselected assets");
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener("activate", (event) => {
  // console.log("[ServiceWorker] Activate");
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== cacheName) {
          // console.log("[ServiceWorker] Removing old cache", key)
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // console.log("[ServiceWorker] Fetch", event.request.url);
  event.respondWith(
    // try network first, than cache, than offline page
    fetch(event.request).catch(() => {
      return caches.match(event.request).then((response) => {
        return response || caches.match(offlinePage);
      });
    })
  );
});
