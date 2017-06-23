require('../../sass/main.scss');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./js/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}

console.log("rock'n'roll!");