import { updateForecastEl } from "./dom_initializer"

export default function distributeData(weatherData) {
  const locationData = weatherData.location;
  const currentWeatherData = weatherData.current;
  const forecastData = weatherData.forecast;
  
  updateLocationInfo(locationData);
  updateCurrentWeather(currentWeatherData);
  updateForecast(forecastData);
  
}

function updateLocationInfo (locationData) {
  const name = locationData.name;
  const region = locationData.region;
  const country = locationData.country;
  const [date, time] = locationData.localtime.split(" ");
  const timeZone = locationData.tz_id;

  const locationHeaderEl = document.querySelector('.location-h1');
  const nameEl = document.querySelector('.name-el');
  const regionEl = document.querySelector('.region-el');
  const countryEl = document.querySelector('.country-el');
  const dateEl = document.querySelector('.date-el');
  const timeEl = document.querySelector('.time-el'); 
  const timeZoneEl = document.querySelector('.timezone-el');

  locationHeaderEl.innerText = name;
  nameEl.innerText = 'City: ' + name;
  regionEl.innerText = 'Region: ' + region;
  countryEl.innerText = 'Country: ' + country;
  timeZoneEl.innerText = 'Timezone: ' + timeZone;
  dateEl.innerText = 'Date: ' + date;
  timeEl.innerText = 'Time: ' + time;
} 

// think about mph and fahrenheit
function updateCurrentWeather(currentWeather) {
  const iconUrl = currentWeather.condition.icon;
  const condition = currentWeather.condition.text;
  const tempC = currentWeather.temp_c;
  const feelsTempC = currentWeather.feelslike_c;
  const humidity = currentWeather.humidity;
  const windKPH = currentWeather.wind_kph;
  const windDirection = currentWeather.wind_dir;
  const visibilityKPH = currentWeather.vis_km;

  const tempF = currentWeather.temp_f;
  const feelsTempF = currentWeather.feelslike_f;
  const windMPH = currentWeather.wind_mph;
  const visibilityMPH = currentWeather.vis_miles;

  const icon = document.querySelector('.current-icon');
  const conditionEl = document.querySelector('.condition-el');
  const tempEl = document.querySelector('.temp-el');
  const feelsLikeEl = document.querySelector('.feels-like-el');
  const humidityEl = document.querySelector('.humidity-el');
  const windSpeedEl = document.querySelector('.wind-speed-el');
  const windDirectionEl = document.querySelector('.wind-dir-el');
  const visibilityEl = document.querySelector('.visibility-el');

  icon.src = iconUrl;
  conditionEl.innerText = condition;
  tempEl.innerText = 'Temperature: ' + tempC + '°C';
  feelsLikeEl.innerText = 'Feels like: ' + feelsTempC + '°C';
  humidityEl.innerText = 'Humidity: '+ humidity +'%';
  windSpeedEl.innerText = 'Wind speed: ' + windKPH + 'km/h';
  windDirectionEl.innerText = 'Wind direction: ' + windDirection;
  visibilityEl.innerText = 'Visibility: ' + visibilityKPH + 'km';
}

function updateForecast(forecast) {
  updateForecastEl(forecast);

}