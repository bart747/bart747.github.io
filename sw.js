var cacheName = 'simple-cache';
var cacheFiles =  [
        '/',
        '/index.html',
        '/offline/',
        '/resilient-ui/',
        '/research-decisions/',
        '/henry-ford-for-makers/',
        '/manifest.json',
        '/js/dist/bundle.js',
        '/css/bundle.css',
        '/icon152.png',
      ];
var offlinePage = './offline/';

self.addEventListener('install', function(event) {
  console.log('[ServiceWorker] Install');
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('[ServiceWorker] Fetch', event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }).catch(function() {
      // Can't access the network return an offline page from the cache
      return caches.match(offlinePage);
    })
  );
});

self.addEventListener('activate', function(event) {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});