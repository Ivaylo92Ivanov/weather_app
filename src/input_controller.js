import getWeatherData from "./weather_data_getter";

export default function setInputListener() {
  const searchBtn = document.querySelector('.search-btn');
  searchBtn.addEventListener("click", () => getWeatherData(getLocationInput()))
}

function getLocationInput() {
  const inputField = document.querySelector('#location-input');
  const inputValue = inputField.value;
  clearInputField();
  return inputValue;
}

function clearInputField() {
  const inputField = document.querySelector('#location-input');
  inputField.value = "";
}