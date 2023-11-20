export default function createForecastDiv() {
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
  const maxTempF = day.day.maxtemp_f;
  const minTempF = day.day.mintemp_f;
  const dailyChanceOfRain = day.day.daily_chance_of_rain;
  const dailyChanceOfSnow = day.day.daily_chance_of_snow;
  const sunrise = day.astro.sunrise;
  const sunset = day.astro.sunset;

  const dateEl = document.createElement('p');
  const conditionEl = document.createElement('p');
  const maxTempCelEl = document.createElement('p');
  const minTempCelEl = document.createElement('p');
  const maxFahrCelEl = document.createElement('p');
  const minFahrCelEl = document.createElement('p');
  const dailyChanceOfRainEl = document.createElement('p');
  const dailyChanceOfSnowEl = document.createElement('p');
  const sunriseEl = document.createElement('p');
  const sunsetEl = document.createElement('p');

  maxTempCelEl.className = 'max-temp-el';
  minTempCelEl.className = 'min-temp-el';
  maxFahrCelEl.className = 'max-temp-el';
  minFahrCelEl.className = 'min-temp-el';

  // make fahr temp elements invisible on launch
  maxFahrCelEl.style.display = 'none';
  minFahrCelEl.style.display = 'none';

  const icon = new Image();
  icon.src = day.day.condition.icon;
  console.log(icon)

  dateEl.innerText = date;
  conditionEl.innerText = condition;
  maxTempCelEl.innerText = 'Max temp: ' + maxTempC + '°C';
  minTempCelEl.innerText = 'Min temp: ' + minTempC + '°C';
  maxFahrCelEl.innerText = 'Max temp: ' + maxTempF + '°F';
  minFahrCelEl.innerText = 'Min temp: ' + minTempF + '°F';

  dailyChanceOfRainEl.innerText = 'Chance of rain: ' + dailyChanceOfRain + '%';
  dailyChanceOfSnowEl.innerText = 'Chance of snow: ' + dailyChanceOfSnow + '%';
  sunriseEl.innerText = 'Sunrise: ' + sunrise;
  sunsetEl.innerText = 'Sunset: ' + sunset;

  return {
    icon,
    dateEl,
    conditionEl,
    maxTempCelEl,
    minTempCelEl,
    maxFahrCelEl,
    minFahrCelEl,
    dailyChanceOfRainEl,
    dailyChanceOfSnowEl,
    sunriseEl,
    sunsetEl,
  }
}

export function updateForecast(forecast) {
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