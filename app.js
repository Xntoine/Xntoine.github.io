// carte sur le France (latitude et longitude) et niveau de zoom = 6
let carte = L.map('mapid').setView([47.6, 2.5], 6)

// gestion du fond de carte
L.tileLayer('https://serveur.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{x}/{y}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community',
}).addTo(carte);