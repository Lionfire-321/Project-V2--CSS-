var map = L.map('map').setView([35.8291,14.4786], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var address = "Malta"
addresses.forEach(function(address) {
    var username = 'JacquesX';
    var url = `https://api.geonames.org/searchJSON?q=${encodeURIComponent(address)}&maxRows=1&username=${username}`;
    var proxyUrl = `https://cors-anywhere.herokuapp.com/${url}`;
            
    fetch(proxyUrl).then(response => response.json()).then(data => {
        var geoname = data.geonames[0];
        if (geoname) {
            var lat = geoname.lat;
            var lng = geoname.lng;
            L.marker([lat, lng]).addTo(map).bindPopup(address).openPopup();
        }
    })
    
    .catch(error => { console.log('Error:', error);  });
});