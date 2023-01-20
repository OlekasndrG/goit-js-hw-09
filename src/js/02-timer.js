import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';
// import 'notiflix/dist/notiflix-3.2.6.min.css';
const myInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

const days = document.querySelector('.timer span[data-days]');
const hours = document.querySelector('.timer span[data-hours]');
const minutes = document.querySelector('.timer span[data-minutes]');
const seconds = document.querySelector('.timer span[data-seconds]');
let deltaTime = null;
let dayX = null;
let dayY = null;
const currentDate = new Date();
let timerId = null;
startBtn.addEventListener('click', onTimerStart);
startBtn.disabled = true;
flatpickr(myInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() < currentDate.getTime()) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    startBtn.disabled = false;

    dayX = selectedDates[0].getTime();
    deltaTime = dayX - currentDate.getTime();

    const timeToEnd = convertMs(deltaTime);
    dayY = timeToEnd;
  },
});

function onTimerStart() {
  timerId = setInterval(() => {
    let convertedTime = convertMs(deltaTime);
    days.textContent = convertedTime.days;
    hours.textContent = convertedTime.hours;
    minutes.textContent = convertedTime.minutes;
    seconds.textContent = convertedTime.seconds;
    deltaTime -= 1000;
    stopCount();
  }, 1000);
  startBtn.disabled = true;
}

function stopCount() {
  if (deltaTime < 1000) clearInterval(timerId);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // if (ms > 31556952000) {
  //   const days = addLeadingZero(Math.floor(ms / day));
  // }
  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
// function add2LeadingZero(value) {
//   return String(value).padStart(3, '0');
// }

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

//  setInterval(({ days, hours, minutes, seconds }) => {
//    {
//      days, hours, minutes, seconds;
//    }
//  }, 1000);
