// Implement service worker so that users can use the app offline.
// The SW will need to cache static assets to display the app offline.
// The SW should cache transaction data, using the cached data as a fallback
// when the app is used offline. HINT: You should use two caches. One for the
// static assets such ass html, css, js, images, etc; and another cache for
// the dynamic data from requests to routes beginning with "/api".

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/styles.css",
  "/icons/icon-192x192.png",
  "/icons/icon-512x512.png",
  "/db.js",
  "/index.js",
  "manifest.json",
];

const CACHE_NAME = "static-cache-v1";
const DATA_CACHE_NAME = "data-cache-v1";

//   INSTALL
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Your files were pre-cached successfully!");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// // The ACTIVATE handler takes care of cleaning up old caches.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

//  FETCH **
self.addEventListener("fetch", (event) => {
  // non GET requests are not cached and requests to other origins are not cached
  if (event.request.url.includes("/api/")) {
    console.log("/api/");
    event.respondWith(
      caches.open(DATA_CACHE_NAME).then((cache) => {
        console.log(cache);
        return fetch(event.request).then((response) => {
          if (response.status === 200)
            cache.put(event.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    event.respondWith(
      fetch(event.request).catch(function () {
        return caches.match(event.request).then(function (response) {
          if (response) {
            return response;
          } else if (
            event.request.headers.get("accept").includes("text/html")
          ) {
            // return the cached home page for all requests for html pages
            return caches.match("/");
          }
        });
      })
    );
  }
});
