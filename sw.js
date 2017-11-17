
var cacheName = 'simple-cache'
var cacheFiles = [
  '/',
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
  console.log('[ServiceWorker] Fetch', event.request.url)
  event.respondWith(
    // try network first, than cache, than offline page
    fetch(event.request).catch(function() {
      return caches.match(event.request).then(function (response) {
        return response || caches.match(offlinePage)
      })
    })
  )
})