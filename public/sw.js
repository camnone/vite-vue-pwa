const CACHE_NAME = "SW";
const toCache = [
 
];

importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js");
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");


self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(toCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => {
      return ;
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Обработка push уведомлений
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : {};
  const title = data.title;
  const options = {
    body: data.body || 'You have received a new notification!',
    icon: 'https://sun1-99.userapi.com/s/v1/ig2/5yrxHJVBMhMUCdpZ248AcpfeoMBdpYGgeR7B9ZIAQuxplpZuUZ0_4zSEugNBKElzhTmfSRdcc4a_NOEh8-4krCVj.jpg?size=512x512&quality=95&crop=0,0,512,512&ava=1', // Замените на иконку уведомления
    badge: 'https://sun1-99.userapi.com/s/v1/ig2/5yrxHJVBMhMUCdpZ248AcpfeoMBdpYGgeR7B9ZIAQuxplpZuUZ0_4zSEugNBKElzhTmfSRdcc4a_NOEh8-4krCVj.jpg?size=512x512&quality=95&crop=0,0,512,512&ava=1' // Замените на бэйдж уведомления
  };
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
