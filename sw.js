
var cacheName = 'simple-cache'
var cacheFiles = [
  '/',
  '/index.html',
  '/howiwork/',
  '/offline/',
  '/resilient-ui/',
  '/research-decision/',
  '/henry-ford-for-makers/',
  '/manifest.json',
  '/dist/bundle.js',
  '/dist/bundle.css',
  '/icon320.png'
]
var offlinePage = './offline/'

self.addEventListener('install', function (event) {
  console.log('[ServiceWorker] Install')
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching preselected assets')
      return cache.addAll(cacheFiles)
    })
  )
})

self.addEventListener('activate', function (event) {
  console.log('[ServiceWorker] Activate')
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key)
          return caches.delete(key)
        }
      }))
    })
  )
  return self.clients.claim()
})

self.addEventListener('fetch', function (event) {
  if (event.request.mode === 'navigate') {
    console.log('[ServiceWorker] Fetch', event.request.url)
    event.respondWith(
      caches.match(event.request).then(function (response) {
        return response || fetch(event.request)
      }).catch(function () {
        // When can't access the network return an offline page from the cache
        return caches.match(offlinePage)
      })
    )
  }
})
