if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/pinger_deploy/sw.js', { scope: '/pinger_deploy/' })})}