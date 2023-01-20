import Notiflix from 'notiflix';
const startBtn = document.querySelector('form button');
const delay = document.querySelector('input[name=delay]');
const step = document.querySelector('input[name=step]');
const amount = document.querySelector('input[name=amount]');
let delayCounter = 0;

startBtn.addEventListener('click', onBtnclick);

function onBtnclick(event) {
  event.preventDefault();
  const initDelay = +delay.value;
  console.log(initDelay);
  for (let i = 1; i <= amount.value; i += 1) {
    if (i === 1) {
      delayCounter = initDelay - Number(step.value);
    }
    delayCounter += +step.value;

    createPromise(i, delayCounter)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }

  // createPromise(step.value, delay.value)
  //   .then(({ position, delay }) => {
  //     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //   })
  //   .catch(({ position, delay }) => {
  //     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  //   });
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      }

      reject({ position, delay });
    }, delay);
  });
}

// function run(horse) {
//   return new Promise(resolve => {
//     const time = getRandomTime(2000, 3500);

//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);
//   });
// }
