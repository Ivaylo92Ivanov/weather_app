import setInputListener from "./input_controller";


export default function createPage() {
  const body = document.querySelector('body');
  const searchLocationForm = initializeLocationForm();
  body.appendChild(searchLocationForm);
  setInputListener();
}

function initializeLocationForm() {
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
  
  inputDiv.appendChild(locationInput);
  inputDiv.appendChild(searchBtn);

  visitorFormWrapper.appendChild(locationInputLabel);
  visitorFormWrapper.appendChild(inputDiv);

  return visitorFormWrapper;
}