const WebSocket = require('ws');

// On créé notre Web Serveur qui écoute sur le port 8080
const wss = new WebSocket.Server({
    port: 8080
});


// Lorsqu'un client se connecte on reçoit un événement 'connection'
wss.on('connection', ws => {

    // Lorsqu'il nous envoie un message on reçoit un événement message ainsi que le message !
    ws.on('message', message => {
        console.log(`Received message => ${message}`);
    });

});