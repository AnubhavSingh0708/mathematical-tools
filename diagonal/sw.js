self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
     '/mathematical-tools/diagonal/',
      '/mathematical-tools/diagonal/index.html',
      '/mathematical-tools/diagonal/index.js',
      '/mathematical-tools/diagonal/grid.svg',
      '/mathematical-tools/diagonal/grid2.svg',
      '/mathematical-tools/diagonal/diagonal.svg',
      '/mathematical-tools/diagonal/download.svg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
