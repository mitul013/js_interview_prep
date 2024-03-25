/**
 * Need to keep in mind that in Promise.all we can pass non promise also
 * so we have to use Promise.resolve to make it promise.
 * and we have to use counter to track no of promises execution
 */

const promise1 = Promise.resolve("1");
const promise2 = Promise.resolve("2");

const arr = [promise1, promise2, 2];

function allCustom(arr) {
  const result = [];
  let counter = 0;
  return new Promise((res, rej) => {
    arr.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((data) => {
          result[idx] = data;
          counter++;
          if (arr.length == counter) {
            res(result);
          }
        })
        .catch((err) => {
          rej(err);
          return;
        });
    });
  });
}

Promise.all(arr)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

allCustom(arr)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
