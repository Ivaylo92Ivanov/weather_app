import { updateForecast } from "./forecast"
import { updateLocationInfo } from "./location_info";
import { updateCurrentWeather } from "./current_weather";

export default function populateData(weatherData) {
  const locationData = weatherData.location;
  const currentWeatherData = weatherData.current;
  const forecastData = weatherData.forecast;
  
  updateLocationInfo(locationData);
  updateCurrentWeather(currentWeatherData);
  updateForecast(forecastData);
  
}

