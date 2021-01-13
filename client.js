

// On se connecte au serveur


connection.onopen = () => {
    console.log('connected');
};

connection.onclose = () => {
    console.error('disconnected');
};

connection.onerror = error => {
    console.error('failed to connect', error);
};


// Lorsque l'on clique sur le bouton envoyer
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    // On récupère la valeur entrée dans le formulaire
    let lettre = document.querySelector('#lettre').value;
    // On envoie la lettre au serveur
    connection.send(JSON.stringify(lettre));
    // On vide le formulaire
    document.querySelector('#lettre').value = '';
});