
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("bk-v1").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "assets/style.css",
        "assets/diagram.svg",
        "assets/placeholder-diagram.png",
        "assets/icon-192.png",
        "assets/icon-512.png",
        "pages/abstraction.html",
        "pages/decomposition.html",
        "pages/algorithm.html",
        "pages/pattern.html",
        "pages/searching.html",
        "pages/sorting.html",
        "pages/stack-queue.html",
        "pages/latihan.html",
        "pages/simulasi.html",
        "scripts/quiz.js"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
