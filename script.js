function getNextNewYear() {
  const now = new Date();
  const year = now.getFullYear() + 1;
  return new Date(year, 0, 1, 0, 0, 0).getTime(); // Jan 1, 00:00:00
}

let newYearDate = getNextNewYear();

function updateCountdown() {
  const now = Date.now();
  let difference = newYearDate - now;

  // If we somehow pass New Year, recalculate for the next one
  if (difference <= 0) {
    newYearDate = getNextNewYear();
    difference = newYearDate - now;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.querySelector('.day').textContent = days;
  document.querySelector('.hours').textContent = hours;
  document.querySelector('.minutes').textContent = minutes;
  document.querySelector('.seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
