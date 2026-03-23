const CACHE_NAME = 'pomodoro-pro-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/32x32.png',
  './icons/128x128.png',
  './icons/icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
