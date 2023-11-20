export default function createCurrentWeatherDiv() {
  const tempHeader = document.createElement('h3');
  const icon = new Image();
  const conditionEl = document.createElement('p');
  const tempCelEl = document.createElement('p');
  const tempFahrEl = document.createElement('p');
  const feelsLikeCelEl = document.createElement('p');
  const feelsLikeFahrEl = document.createElement('p');
  const humidityEl = document.createElement('p');
  const windSpeedKmEl = document.createElement('p');
  const windSpeedMilEl = document.createElement('p');
  const windDirectionEl = document.createElement('p');
  const visibilityKmEl = document.createElement('p');
  const visibilityMilEl = document.createElement('p');

  tempHeader.className = 'temp-h3';
  icon.className = 'current-icon';
  conditionEl.className = 'condition-el';
  tempCelEl.className = 'temp-cel-el';
  tempFahrEl.className = 'temp-fahr-el';
  feelsLikeCelEl.className = 'feels-like-cel-el';
  feelsLikeFahrEl.className = 'feels-like-fahr-el';
  humidityEl.className = 'humidity-el';
  windSpeedKmEl.className = 'wind-speed-km-el';
  windSpeedMilEl.className = 'wind-speed-mil-el';
  windDirectionEl.className = 'wind-dir-el';
  visibilityKmEl.className = 'visibility-km-el';
  visibilityMilEl.className = 'visibility-mil-el';

  tempHeader.innerText = 'Weather at the moment '; 
  conditionEl.innerText = '';
  tempCelEl.innerText = 'Temperature: ';
  tempFahrEl.innerText = 'Temperature: ';
  feelsLikeCelEl.innerText = 'Feels like: ';
  feelsLikeFahrEl.innerText = 'Feels like: ';
  humidityEl.innerText = 'Humidity: ';
  windSpeedKmEl.innerText = 'Wind speed: ';
  windSpeedMilEl.innerText = 'Wind speed: ';
  windDirectionEl.innerText = 'Wind direction: ';
  visibilityKmEl.innerText = 'Visibility: ';
  visibilityMilEl.innerText = 'Visibility: ';

  // makes fahrenheit and miles elements invisible at launch
  tempFahrEl.style.display = 'none';
  visibilityMilEl.style.display = 'none';
  windSpeedMilEl.style.display = 'none';
  feelsLikeFahrEl.style.display = 'none';

  const currentWeatherEl = document.createElement('div');
  currentWeatherEl.className = 'current-weather-div';

  currentWeatherEl.appendChild(tempHeader);
  currentWeatherEl.appendChild(icon);
  currentWeatherEl.appendChild(conditionEl);
  currentWeatherEl.appendChild(tempCelEl);
  currentWeatherEl.appendChild(tempFahrEl);
  currentWeatherEl.appendChild(feelsLikeCelEl);
  currentWeatherEl.appendChild(feelsLikeFahrEl);
  currentWeatherEl.appendChild(humidityEl);
  currentWeatherEl.appendChild(windSpeedKmEl);
  currentWeatherEl.appendChild(windSpeedMilEl);
  currentWeatherEl.appendChild(windDirectionEl);
  currentWeatherEl.appendChild(visibilityKmEl);
  currentWeatherEl.appendChild(visibilityMilEl);

  return currentWeatherEl
}

export function updateCurrentWeather(currentWeather) {
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
  const tempCelEl = document.querySelector('.temp-cel-el');
  const tempFahrEl = document.querySelector('.temp-fahr-el');
  const feelsLikeCelEl = document.querySelector('.feels-like-cel-el');
  const feelsLikeFahrEl = document.querySelector('.feels-like-fahr-el');
  const humidityEl = document.querySelector('.humidity-el');
  const windSpeedKmEl = document.querySelector('.wind-speed-km-el');
  const windSpeedMilEl = document.querySelector('.wind-speed-mil-el');
  const windDirectionEl = document.querySelector('.wind-dir-el');
  const visibilityKmEl = document.querySelector('.visibility-km-el');
  const visibilityMilEl = document.querySelector('.visibility-mil-el');

  icon.src = iconUrl;
  conditionEl.innerText = condition;
  tempCelEl.innerText = 'Temperature: ' + tempC + '°C';
  tempFahrEl.innerText = 'Temperature: ' + tempF + '°F';
  feelsLikeCelEl.innerText = 'Feels like: ' + feelsTempC + '°C';
  feelsLikeFahrEl.innerText = 'Feels like: ' + feelsTempF + '°F';
  humidityEl.innerText = 'Humidity: '+ humidity +'%';
  windSpeedKmEl.innerText = 'Wind speed: ' + windKPH + 'km/h';
  windSpeedMilEl.innerText = 'Wind speed: ' + windMPH + 'mi/h';
  windDirectionEl.innerText = 'Wind direction: ' + windDirection;
  visibilityKmEl.innerText = 'Visibility: ' + visibilityKPH + 'km';
  visibilityMilEl.innerText = 'Visibility: ' + visibilityMPH + 'mi';
}