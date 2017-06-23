require('../../sass/main.scss');

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('./sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}

console.log("rock'n'roll!");