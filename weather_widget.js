const apiUrl = `https://api.openweathermap.org/data/2.5/weather?id=2562250&appid=f86a53cd8089737ed2d3e4dbe3c9465a&units=metric`;
        
fetch(apiUrl).then(response => response.json()).then(data => {const weatherInfo = document.getElementById('weatherInfo');
const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        
weatherInfo.innerHTML = `
    <img src="${iconUrl}" alt="${data.weather[0].description}" class="weather-icon"> 
    <p1>${data.main.temp}°C</p1> <br>
    <p2>Feels Like: ${data.main.feels_like}°C</p2> <br>
    <p2>Description: ${data.weather[0].description}</p2> <br>
    <p2>Humidity: ${data.main.humidity}%</p2> <br>
    <p2>Wind Speed: ${data.wind.speed} m/s</p2>`;
})
      
.catch(error => {
    console.error('There was a problem fetching the weather data:', error);
    const weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `<p>Failed to fetch weather data. Please try again.</p>`;
});