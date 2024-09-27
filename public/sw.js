const CACHE_NAME = "SW";

importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js");

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
// Имеются шаблонные файлы для кэширования
const URLS_TO_CACHE = [
  'client/*',
  'server/*'
  // Добавьте другие необходимые ресурсы
];

// Установка кэша
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Кэширование файлов');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});



// Удаление устаревшего кэша
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});