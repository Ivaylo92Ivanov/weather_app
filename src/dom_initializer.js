import addListenerToInput from "./input_controller";
import createUserForm from "./user_form";
import createLocationInfoDiv from "./location_info";
import createCurrentWeatherDiv from "./current_weather";
import createForecastDiv from "./forecast";

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

  addListenerToInput();
}


function createLocationHeader() {
  let locationNameEl = document.createElement('h1');
  locationNameEl.className = 'location-h1';
  locationNameEl.innerText = 'Use the search bar to find location';
  return locationNameEl;
}









