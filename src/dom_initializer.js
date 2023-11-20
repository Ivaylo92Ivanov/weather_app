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
  const footer = createFooter();

  const mainDiv = document.createElement('div');
  mainDiv.className = 'main-div';

  mainDiv.appendChild(userForm);
  mainDiv.appendChild(locationHeader);
  mainDiv.appendChild(locationInfoDiv);
  mainDiv.appendChild(currentWeatherDiv);
  mainDiv.appendChild(forecastDiv);
  mainDiv.appendChild(footer);

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

function createFooter() {
  const footer = document.createElement('div');
  footer.className = 'footer';
  footer.innerHTML = 'Photo by <a href="https://unsplash.com/@grakozy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Greg Rakozy</a> on <a href="https://unsplash.com/photos/silhouette-photography-of-person-oMpAz-DN-9I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash" target="_blank">Unsplash</a>'
  
  return footer
}








