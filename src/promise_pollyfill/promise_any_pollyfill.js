const promise1 = Promise.reject("1");
const promise2 = Promise.reject("2");

const arr = [promise1, promise2];

const anyCustom = function (promiseArray) {
  const errorList = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promiseArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((err) => {
          errorList[index] = err;
          counter++;
          if (promiseArray.length == counter) {
            reject(errorList);
          }
        });
    });
  });
};

Promise.any(arr)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// anyCustom(arr)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
