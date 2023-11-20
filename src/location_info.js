export default function createLocationInfoDiv() { 
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

export function updateLocationInfo (locationData) {
  const name = locationData.name;
  const region = locationData.region;
  const country = locationData.country;
  const [date, time] = locationData.localtime.split(" ");
  const timeZone = locationData.tz_id;

  const locationHeaderEl = document.querySelector('.location-h1');
  const nameEl = document.querySelector('.name-el');
  const regionEl = document.querySelector('.region-el');
  const countryEl = document.querySelector('.country-el');
  const dateEl = document.querySelector('.date-el');
  const timeEl = document.querySelector('.time-el'); 
  const timeZoneEl = document.querySelector('.timezone-el');

  locationHeaderEl.innerText = name;
  nameEl.innerText = 'City: ' + name;
  regionEl.innerText = 'Region: ' + region;
  countryEl.innerText = 'Country: ' + country;
  timeZoneEl.innerText = 'Timezone: ' + timeZone;
  dateEl.innerText = 'Date: ' + date;
  timeEl.innerText = 'Time: ' + time;
} 