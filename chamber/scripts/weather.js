const temp = document.querySelector('#current-temp');
const desc = document.querySelector('#weather-desc');
const forecastList = document.querySelector('#forecast-list');

// Set your API key and coordinates for Trier or desired location
const apiKey = 'a7507b8eab41aa3f1c38838911d285d0';
const lat =-1.00; // Trier latitude
const lon = 34.09;  // Trier longitude

// URLs
const currentWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function fetchWeather() {
  try {
    // Current weather
    const currentRes = await fetch(currentWeatherURL);
    const currentData = await currentRes.json();
    temp.innerHTML = `${currentData.main.temp.toFixed(1)}°C`;
    desc.textContent = currentData.weather[0].description;

    // 3-day forecast (filter one per day at 12:00)
    const forecastRes = await fetch(forecastURL);
    const forecastData = await forecastRes.json();
    const dailyForecasts = forecastData.list.filter(f => f.dt_txt.includes('12:00:00')).slice(0, 3);

    forecastList.innerHTML = ''; // Clear old list
    dailyForecasts.forEach(day => {
      const li = document.createElement('li');
      const date = new Date(day.dt_txt);
      li.innerHTML = `
        <strong>${date.toLocaleDateString('en-US', { weekday: 'short' })}</strong>: 
        ${day.main.temp.toFixed(1)}°C, ${day.weather[0].description}
      `;
      forecastList.appendChild(li);
    });

  } catch (err) {
    console.error('Weather API error:', err);
  }
}

fetchWeather();
