var map = L.map('map').setView([48.855822, 2.282682], 13); // Centre la carte sur 43 Quai de Grenelle, 75015 Paris

// Ajouter une couche de tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Ajouter un marqueur à une position spécifique
L.marker([48.855822, 2.282682]).addTo(map)
    .bindPopup('43 Quai de Grenelle, 75015 Paris')
    .openPopup();