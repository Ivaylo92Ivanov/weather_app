import addInputListener from "./input_controller";

export default function createPage() {
  const body = document.querySelector('body');

  const searchLocationForm = createLocationFormEl();
  const locationNameEl = createLocationHeaderEl();
  const locationInfoEl = createLocationInfoEl();
  const currentWeatherEl = createCurrentWeatherEl();

  body.appendChild(searchLocationForm);
  body.appendChild(locationNameEl);
  body.appendChild(locationInfoEl);
  body.appendChild(currentWeatherEl);

  addInputListener();
}

function createLocationFormEl() {
  const visitorFormWrapper = document.createElement('div');
  visitorFormWrapper.classList.add('visitor-form-wrapper');

  const locationInputLabel = document.createElement('label');
  locationInputLabel.className = 'location-input-label'
  locationInputLabel.htmlFor = 'location-input';
  locationInputLabel.innerText = 'Search location:';

  const inputDiv = document.createElement('div'); 
  inputDiv.className = "input-div"

  const locationInput = document.createElement('input');
  locationInput.id =  'location-input';
  
  const searchBtn = document.createElement('button');
  searchBtn.className = 'search-btn';
  searchBtn.innerText = 'Search';
  
  const errorField = document.createElement("p");
  errorField.className = "error";
  errorField.innerText = "Test error";

  inputDiv.appendChild(locationInput);
  inputDiv.appendChild(searchBtn);
  
  visitorFormWrapper.appendChild(locationInputLabel);
  visitorFormWrapper.appendChild(inputDiv);
  visitorFormWrapper.appendChild(errorField);
  return visitorFormWrapper;
}

function createLocationHeaderEl() {
  let locationNameEl = document.createElement('h1');
  locationNameEl.className = 'location-h1';
  locationNameEl.innerText = 'Use the search bar to find location';
  return locationNameEl;
}

function createLocationInfoEl() { 
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

function createCurrentWeatherEl() {
  const tempHeader = document.createElement('h3');
  const conditionEl = document.createElement('p');
  const tempEl = document.createElement('p');
  const feelsLikeEl = document.createElement('p');
  const humidityEl = document.createElement('p');
  const windSpeedEl = document.createElement('p');
  const windDirectionEl = document.createElement('p');
  const visibilityEl = document.createElement('p');

  tempHeader.className = 'temp-h3';
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
  currentWeatherEl.appendChild(conditionEl);
  currentWeatherEl.appendChild(tempEl);
  currentWeatherEl.appendChild(feelsLikeEl);
  currentWeatherEl.appendChild(humidityEl);
  currentWeatherEl.appendChild(windSpeedEl);
  currentWeatherEl.appendChild(windDirectionEl);
  currentWeatherEl.appendChild(visibilityEl);
  
  return currentWeatherEl
}

// good for testing 
// for (const [key, value] of Object.entries(locationData)) {
//   console.log(`${key}: ${value}`);
// }