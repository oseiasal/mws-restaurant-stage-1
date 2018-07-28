let nameCache = 'mws-v1';
let cachesFiles = [
    './',
    './index.html',
    './data/restaurants.json',
    './css/styles.css',
    './js/main.js',
    './js/dbhelper.js',
    './js/restaurant_info.js',
    './restaurant.html?id=1'
];
for (let i = 1; i <= 10; i++) {
    cachesFiles.push(`./img/${i}.jpg`);
}

self.addEventListener('install', (event) => {

    event.waitUntil(
        caches.open(nameCache).then(function(cache) {
            return cache.addAll(cachesFiles);
        }))
});

self.addEventListener('activate', (event) => {
    event.waitUntil(

        caches.keys().then((cacheName) => {
            return cacheName.startsWith('mws-') &&
                cacheName != cachesFiles;
        }).map((cacheName) => {
            return cache.delete(cacheName);

        }));
});

self.addEventListener('fetch', function(event) {

    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) return response;
            return fetch(event.request);
        })
    );
});
