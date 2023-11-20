export function switchTempSystem () {
  const tempCelEl = document.querySelector('.temp-cel-el');
  const tempFahrEl = document.querySelector('.temp-fahr-el');
  const feelsLikeCelEl = document.querySelector('.feels-like-cel-el');
  const feelsLikeFahrEl = document.querySelector('.feels-like-fahr-el');

  const listOfMaxTempEl =document.querySelectorAll('.max-temp-el');
  const listOfMinTempEl =document.querySelectorAll('.min-temp-el')

  let listOfDomEl = [
    tempCelEl,
    tempFahrEl,
    feelsLikeCelEl,
    feelsLikeFahrEl
  ];

  listOfMaxTempEl.forEach((el) => listOfDomEl.push(el));
  listOfMinTempEl.forEach((el) => listOfDomEl.push(el));

  //if el invisible, make visible and vice versa
  listOfDomEl.forEach((el) => {
    el.style.display == 'none' ? el.style.display = 'block' : el.style.display = 'none';
  })
}