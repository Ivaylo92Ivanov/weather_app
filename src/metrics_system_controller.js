export function switchMetricsSystem() {

  const windSpeedKmEl = document.querySelector('.wind-speed-km-el');
  const visibilityKmEl = document.querySelector('.visibility-km-el');
  const visibilityMilEl = document.querySelector('.visibility-mil-el');
  const windSpeedMilEl = document.querySelector('.wind-speed-mil-el');

  const listOfDomEl = [
    windSpeedKmEl,
    visibilityKmEl,
    visibilityMilEl,
    windSpeedMilEl
  ]

  listOfDomEl.forEach((el) => {
    el.style.display == 'none' ? el.style.display = 'block' : el.style.display = 'none';
  })
}