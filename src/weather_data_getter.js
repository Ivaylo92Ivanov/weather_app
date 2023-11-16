export default async function getWeatherData(city) {
  hideError();
  const requestUrl = 'https://api.weatherapi.com/v1/forecast.json?key=21552e7e4da643bfb9392353233010&days=3&q=' + city
  try {
    const weatherData = await fetch(requestUrl);   
    const weatherDataJson = await weatherData.json();
    if (!weatherData.ok) throw new Error (weatherDataJson.error.message);
    console.log(weatherDataJson.location)
    return weatherDataJson
  } catch (err) {
    displayError(err);
  }
}

function displayError(error_msg) {
  const errorField = document.querySelector('.error');
  if (error_msg == 'Error: Parameter q is missing.') error_msg = "Error: Enter a location.";
  errorField.innerText = error_msg;
  errorField.style.visibility = "visible";
}

function hideError() {
  const errorField = document.querySelector('.error');
  if (errorField) errorField.style.visibility = "hidden";
}

