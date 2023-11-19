import addInputListener from "./input_controller";
import createUserForm from "./user_form";

export default function createPage() {
  const userForm = createUserForm();
  const locationHeader = createLocationHeader();
  const locationInfoDiv = createLocationInfoDiv();
  const currentWeatherDiv = createCurrentWeatherDiv();
  const forecastDiv = createForecastDiv();

  const mainDiv = document.createElement('div');
  mainDiv.className = 'main-div';

  mainDiv.appendChild(userForm);
  mainDiv.appendChild(locationHeader);
  mainDiv.appendChild(locationInfoDiv);
  mainDiv.appendChild(currentWeatherDiv);
  mainDiv.appendChild(forecastDiv);

  const body = document.querySelector('body');
  body.appendChild(mainDiv);

  addInputListener();
}






function createLocationHeader() {
  let locationNameEl = document.createElement('h1');
  locationNameEl.className = 'location-h1';
  locationNameEl.innerText = 'Use the search bar to find location';
  return locationNameEl;
}

function createLocationInfoDiv() { 
  const locationHeader = document.createElement('h3');
  const nameEl = document.createElement('p');
  const regionEl = document.createElement('p');
  const countryEl = document.createElement('p');
  const dateEl = document.createElement('p');
  const timeEl = document.createElement('p'); 
  const timeZoneEl = document.createElement('p');

  nameEl.className = "name-el";
  regionEl.className = "region-el";
  countryEl.className = "country-el";
  timeZoneEl.className = "timezone-el";
  dateEl.className = "date-el";
  timeEl.className = "time-el";

  locationHeader.innerText = 'Location';
  nameEl.innerText = 'City: ';
  regionEl.innerText = 'Region: ';
  countryEl.innerText = 'Country: ';
  timeZoneEl.innerText = 'Timezone: ';
  dateEl.innerText = 'Date: ';
  timeEl.innerText = 'Time: ';

  const locationInfoEl = document.createElement('div');
  locationInfoEl.className = 'location-data';
  locationInfoEl.appendChild(locationHeader);
  locationInfoEl.appendChild(nameEl);
  locationInfoEl.appendChild(regionEl);
  locationInfoEl.appendChild(countryEl);
  locationInfoEl.appendChild(dateEl);
  locationInfoEl.appendChild(timeEl);
  locationInfoEl.appendChild(timeZoneEl);

  return locationInfoEl;
}

function createCurrentWeatherDiv() {
  const tempHeader = document.createElement('h3');
  const icon = new Image();
  const conditionEl = document.createElement('p');
  const tempEl = document.createElement('p');
  const feelsLikeEl = document.createElement('p');
  const humidityEl = document.createElement('p');
  const windSpeedEl = document.createElement('p');
  const windDirectionEl = document.createElement('p');
  const visibilityEl = document.createElement('p');

  tempHeader.className = 'temp-h3';
  icon.className = 'current-icon';
  conditionEl.className = 'condition-el';
  tempEl.className = 'temp-el';
  feelsLikeEl.className = 'feels-like-el';
  humidityEl.className = 'humidity-el';
  windSpeedEl.className = 'wind-speed-el';
  windDirectionEl.className = 'wind-dir-el';
  visibilityEl.className = 'visibility-el';
  
  tempHeader.innerText = 'Weather at the moment '; 
  conditionEl.innerText = '';
  tempEl.innerText = 'Temperature: 25C';
  feelsLikeEl.innerText = 'Feels like: ';
  humidityEl.innerText = 'Humidity: ';
  windSpeedEl.innerText = 'Wind speed: ';
  windDirectionEl.innerText = 'Wind direction: ';
  visibilityEl.innerText = 'Visibility: ';

  const currentWeatherEl = document.createElement('div');
  currentWeatherEl.className = 'current-weather-div';

  currentWeatherEl.appendChild(tempHeader);
  currentWeatherEl.appendChild(icon);
  currentWeatherEl.appendChild(conditionEl);
  currentWeatherEl.appendChild(tempEl);
  currentWeatherEl.appendChild(feelsLikeEl);
  currentWeatherEl.appendChild(humidityEl);
  currentWeatherEl.appendChild(windSpeedEl);
  currentWeatherEl.appendChild(windDirectionEl);
  currentWeatherEl.appendChild(visibilityEl);

  return currentWeatherEl
}

function createForecastDiv() {
  const forecastEl = document.createElement('div');
  const forecastHeader = document.createElement('h3');
  const forecastWrapper = document.createElement('div');

  forecastEl.className = 'forecast-el';
  forecastHeader.className = 'forecast-h3'
  forecastWrapper.className = 'forecast-wrapper'

  forecastHeader.textContent = "Forecast";
  // forecast.forecastday.forEach(day => {
  //   const dayEl = (createForecastDayEl(day))
  //   forecastWrapper.appendChild(dayEl);
  // });

  forecastEl.appendChild(forecastHeader);
  forecastEl.appendChild(forecastWrapper);

  return forecastEl
}


function convertForecastToDomEls (day) {
  const date = day.date;
  const condition = day.day.condition.text;
  const maxTempC = day.day.maxtemp_c;
  const minTempC = day.day.mintemp_c;
  const dailyChanceOfRain = day.day.daily_chance_of_rain;
  const dailyChanceOfSnow = day.day.daily_chance_of_snow;
  const sunrise = day.astro.sunrise;
  const sunset = day.astro.sunset;

  const maxTempF = day.day.maxtemp_f;
  const minTempF = day.day.mintemp_f;

  const dateEl = document.createElement('p');
  const conditionEl = document.createElement('p');
  const maxTempEl = document.createElement('p');
  const minTempEl = document.createElement('p');
  const dailyChanceOfRainEl = document.createElement('p');
  const dailyChanceOfSnowEl = document.createElement('p');
  const sunriseEl = document.createElement('p');
  const sunsetEl = document.createElement('p');

  const icon = new Image();
  icon.src = day.day.condition.icon;
  console.log(icon)

  dateEl.innerText = date;
  conditionEl.innerText = condition;
  maxTempEl.innerText = 'Max temp: ' + maxTempC + '°C';
  minTempEl.innerText = 'Min temp: ' + minTempC + '°C';
  dailyChanceOfRainEl.innerText = 'Chance of rain: ' + dailyChanceOfRain + '%';
  dailyChanceOfSnowEl.innerText = 'Chance of snow: ' + dailyChanceOfSnow + '%';
  sunriseEl.innerText = 'Sunrise: ' + sunrise;
  sunsetEl.innerText = 'Sunset: ' + sunset;

  return {
    icon,
    dateEl,
    conditionEl,
    maxTempEl,
    minTempEl,
    dailyChanceOfRainEl,
    dailyChanceOfSnowEl,
    sunriseEl,
    sunsetEl,
  }
}

export function updateForecastEl(forecast) {
  const forecastWrapper = document.querySelector('.forecast-wrapper');
  forecastWrapper.innerHTML = "";
  forecast.forecastday.forEach(day => {
      const dayForecast = convertForecastToDomEls(day);
      const dayEl = document.createElement('div');
      dayEl.className = 'day-' + forecast.forecastday.indexOf(day);

      for (const [key, domEl] of Object.entries(dayForecast)) {
          dayEl.appendChild(domEl); 
      }

      forecastWrapper.appendChild(dayEl);
    }
  );
}


