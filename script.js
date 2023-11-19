function updateCountdown() {
  const newYearDate = new Date("January 1, 2024 00:00:00").getTime(); 
  const currentDate = new Date().getTime();
  const difference = newYearDate - currentDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.querySelector('.day').innerText = days;
  document.querySelector('.hours').innerText = hours;
  document.querySelector('.minutes').innerText = minutes;
  document.querySelector('.seconds').innerText = seconds;
}

setInterval(updateCountdown, 1000);

updateCountdown();