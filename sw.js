const myCache = 'sw-cache-v2';
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

self.addEventListener("install", (event) => {
    console.log("[ServiceWorker] Install");
    event.waitUntil(precache());
});

self.addEventListener("activate", (event) => {
    console.log("[ServiceWorker] Activate");
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== myCache) {
                console.log("[ServiceWorker] Removing old cache", key)
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    console.log('[ServiceWorker] Serving the asset');
    event.respondWith(fromCache(event.request));
    event.waitUntil(update(event.request));
});

function precache() {
    return caches.open(myCache).then((cache) => {
        console.log("[ServiceWorker] Caching preselected assets");
        return cache.addAll(cacheFiles);
    });
};

function fromCache(request) {
    return caches.open(myCache).then((cache) => {
        return cache.match(request).then(function(matching) {
            return matching || Promise.reject('no-match');
        });
    });
};

function update(request) {
    return caches.open(myCache).then(function(cache) {
        return fetch(request).then(function(response) {
            return cache.put(request, response);
        });
    });
};