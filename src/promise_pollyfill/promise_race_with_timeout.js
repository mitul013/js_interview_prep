const asyncTask = function (i) {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`Completing ${i}`), 1000 * i);
    });
};
const promises = [asyncTask(2), asyncTask(1), asyncTask(3)];

// write a promise which take list of promise and resolve with first fullfilled (either its resolve or reject)
// it accept one timeout also, so if none promise res/rej within that time line then we have to reject
function promiseRaceWithTimeOut(list, timeout = 2000) {
  return new Promise((res, rej) => {
    const timeId = setTimeout(() => {
      rej("No one is settled in give time " + timeout);
    }, timeout);

    list.forEach((promiseFn) => {
      promiseFn()
        .then((value) => {
          clearTimeout(timeId);
          res(value);
        })
        .catch((err) => {
          clearTimeout(timeId);
          res(err);
        });
    });
  });
}
