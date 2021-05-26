self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pcd-store').then((cache) => cache.addAll([
      '/mathematical-tools/pcd/',
      '/mathematical-tools/pcd/index.html',
      '/mathematical-tools/pcd/index.js',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
