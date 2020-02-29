self.addEventListener('install', (event) => {
    alert('Установлен');
});

self.addEventListener('activate', (event) => {
    alert('Активирован');
});

self.addEventListener('fetch', (event) => {
    alert('Происходит запрос на сервер');
});