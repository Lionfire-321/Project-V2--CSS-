var map = L.map('map').setView([35.8291,14.4786], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var username = 'JacquesX'; // Replace with your GeoNames username
var latitude = 35.8291;
var longitude = 14.4786;
var radius = 20; // Radius in kilometers

// Make a GET request to GeoNames API
fetch(`https://secure.geonames.org/findNearbyJSON?lat=${latitude}&lng=${longitude}&radius=${radius}&username=${username}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => {
        // Process the JSON response and add markers to the map
        if (data && data.geonames && data.geonames.length > 0) {
            data.geonames.forEach(place => {
                var marker = L.marker([place.lat, place.lng]).addTo(map);
                marker.bindPopup(`<b>${place.name}</b><br>${place.countryName}`);
            });
        } else {
            console.error('No nearby places found or invalid data');
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });