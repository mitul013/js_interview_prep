// need to keep in mind, put console.log before sumation other wise it will start print 20 and it will end at 60

function createTimer(initialValue, step, seconds = 1) {
  let counter = initialValue;
  let intervalId = null;
  function startTimer() {
    intervalId = setInterval(() => {
      if (intervalId) {
        console.log({ counter });
        counter += step;
      }
    }, 1000 * seconds);
  }
  function stopTimer() {
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
  }
  return {
    startTimer,
    stopTimer,
  };
}

const { startTimer, stopTimer } = createTimer(10, 10, 1);
startTimer();
setTimeout(() => {
  stopTimer();
}, 5000);
