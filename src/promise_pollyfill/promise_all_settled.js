const promise1 = Promise.resolve("1");
const promise2 = Promise.reject("2");

const arr = [promise1, promise2, 2];

function allSettledCustom(arr) {
  const result = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    arr.forEach((promise, idx) => {
      Promise.resolve(promise)
        .then((res) => {
          result[idx] = { status: "fulfilled", value: res };
          counter++;
          if (arr.length == counter) {
            resolve(result);
          }
        })
        .catch((err) => {
          result[idx] = { status: "rejected", reason: err };
          counter++;
          if (arr.length == counter) {
            resolve(result);
          }
        });
    });
  });
}

Promise.allSettled(arr)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

allSettledCustom(arr)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
