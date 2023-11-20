import {switchTempSystem} from './temp_system_controller';
import { switchMetricsSystem } from './metrics_system_controller';

export default function createUserForm() {
  const locationFormWrapper = document.createElement('div');
  locationFormWrapper.classList.add('user-form-wrapper');

  const searchLocationForm = createSearchLocationForm();
  const metricSystemForm = createMetricSystemForm();
  const tempSystemForm = createTempSystemForm();

  locationFormWrapper.appendChild(searchLocationForm)
  locationFormWrapper.appendChild(metricSystemForm);
  locationFormWrapper.appendChild(tempSystemForm);

  return locationFormWrapper;
}

function createSearchLocationForm(){
  const locationInputLabel = document.createElement('label');
  const inputDiv = document.createElement('div'); 
  const locationInput = document.createElement('input');
  const searchBtn = document.createElement('button');
  const errorField = document.createElement("p");
  const searchLocationForm = document.createElement('div');

  locationInputLabel.htmlFor = 'location-input';

  locationInputLabel.className = 'location-input-label'
  inputDiv.className = "input-div"
  searchBtn.className = 'search-btn';
  errorField.className = "error";
  searchLocationForm.className = 'search-location-form';

  locationInput.id =  'location-input';

  locationInputLabel.innerText = 'Search location:';
  searchBtn.innerText = 'Search';
  errorField.innerText = "Test error";
  
  inputDiv.appendChild(locationInput);
  inputDiv.appendChild(searchBtn);
  
  searchLocationForm.appendChild(locationInputLabel);
  searchLocationForm.appendChild(inputDiv);
  searchLocationForm.appendChild(errorField);

  return searchLocationForm
};

function createMetricSystemForm() {
  const metricsForm = document.createElement('li');
  const questionP  = document.createElement('p');
  const kmLabel = document.createElement('label');
  const milLabel = document.createElement('label');
  const kmButton = document.createElement('input');
  const milButton = document.createElement('input');

  kmLabel.htmlFor = 'km-btn';
  milLabel.htmlFor = 'mil-btn';

  kmButton.id = 'km-btn';
  milButton.id = 'mil-btn';

  kmButton.checked = 'true';

  kmButton.name = 'metric-question';
  milButton.name = 'metric-question';

  kmButton.type = 'radio';
  milButton.type = 'radio';

  questionP.innerText = 'Metric system: ';
  kmLabel.innerText = 'km/h';
  milLabel.innerText = 'm/h'; 
  
  kmButton.addEventListener('click', () => switchMetricsSystem());
  milButton.addEventListener('click', () => switchMetricsSystem());

  metricsForm.className = 'radio-question';

  metricsForm.appendChild(questionP);
  metricsForm.appendChild(kmButton);
  metricsForm.appendChild(kmLabel);
  metricsForm.appendChild(milButton);
  metricsForm.appendChild(milLabel);

  return metricsForm
}

function createTempSystemForm() {
  const tempForm = document.createElement('li');
  const questionP  = document.createElement('p');
  const celLabel = document.createElement('label');
  const fahLabel = document.createElement('label');
  const celButton = document.createElement('input');
  const fahButton = document.createElement('input');

  celLabel.htmlFor = 'km-btn';
  fahLabel.htmlFor = 'mil-btn';

  celButton.checked = 'true';

  celButton.id = 'km-btn';
  fahButton.id = 'mil-btn';

  celButton.name = 'temp-question';
  fahButton.name = 'temp-question';

  celButton.type = 'radio';
  fahButton.type = 'radio';

  questionP.innerText = 'Temp system: ';
  celLabel.innerText = '°C';
  fahLabel.innerText = '°F'; 
  
  tempForm.className = 'radio-question';

  celButton.addEventListener('click', () => switchTempSystem());
  fahButton.addEventListener('click', () => switchTempSystem());

  tempForm.appendChild(questionP);
  tempForm.appendChild(celButton);
  tempForm.appendChild(celLabel);
  tempForm.appendChild(fahButton);
  tempForm.appendChild(fahLabel);
  return tempForm
}

