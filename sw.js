const myCache = "sw-cache-v6";
const cacheFiles = [
    "./manifest.json",
    "./sass/main.min.css",
    "./js/main.v2.js",
    
    // recent (non-draft) and popular posts for quick load:
    "./crowd/",
    "./complexity/",
    "./resilient-ui/"
];
//const offlinePage = "./offline/";

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(myCache).then(function (cache) {
            return cache.addAll(cacheFiles);
        })
    );
});



self.addEventListener("fetch", (event) => {
    console.log("[ServiceWorker] Serving the asset");
    event.respondWith(
        caches.open(myCache).then((cache) => {
            return cache.match(event.request).then(function (matching) {
                return matching || fetch(event.request).then(function (response) {
                    cache.put(event.request, response.clone());
                    return response;
                });
            });
        })
    );
});