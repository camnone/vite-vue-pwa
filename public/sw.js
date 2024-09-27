
const CACHE_NAME = 'my-pwa-cache-v1';
const toCache = [];
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js");
// Имеются шаблонные файлы для кэширования
const URLS_TO_CACHE = [
  'client/*',
  'server/*'
 
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

// Использование кэша при запросах
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Возврат кэшированного ответа, если он существует
        if (cachedResponse) {
          return cachedResponse;
        }
        // Запрос к сети, если кэш отсутствует
        return fetch(event.request).then((response) => {
          // Проверка или добавление в кэш нового ответа
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, response.clone());
            cache.post(event.request, response.clone());
            cache.get(event.request, response.clone());

            return response;
          });
        });
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