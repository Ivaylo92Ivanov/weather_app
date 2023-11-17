import getWeatherData from "./weather_data_getter";

export default function addInputListener() {
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener("click", () => getWeatherData(getLocationInput()))
}

function getLocationInput() {
  const inputField = document.querySelector('#location-input');
  const locationName = inputField.value;
  clearInputField();
  return locationName;
}

function clearInputField() {
  const inputField = document.querySelector('#location-input');
  inputField.value = "";
}