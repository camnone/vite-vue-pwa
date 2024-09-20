const CACHE_NAME = "SW";
const toCache = [];
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js");
importScripts("https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js");
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
