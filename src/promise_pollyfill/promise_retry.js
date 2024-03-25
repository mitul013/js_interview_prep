function wait(time) {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, time * 1000);
  });
}

async function retryPromisewithDelay(promiseFn, delay, reTryCount) {
  console.log({ reTryCount });
  return new Promise((resolve, reject) => {
    Promise.resolve(promiseFn())
      .then((value) => {
        resolve(value);
      })
      .catch((error) => {
        if (reTryCount <= 0) {
          return reject(error);
        }
        return wait(delay).then(() =>
          retryPromisewithDelay(promiseFn, delay, reTryCount - 1).then(
            resolve,
            reject
          )
        );
      });
  });
}

// const getTestFunc = () => {
//   let callCounter = 0;
//   return async () => {
//     callCounter += 1;
//     // if called less than 5 times
//     // throw error
//     if (callCounter < 5) {
//       throw new Error("Not yet....");
//     }
//   };
// };

// // Test the code
// const test = async () => {
//   console.log("enter");
//   const x = await retryPromisewithDelay(getTestFunc(), 0, 10);
//   console.log(x);
//   console.log("success");
//   await retryPromisewithDelay(getTestFunc(), 0, 3);
//   console.log("will fail before getting here");
// };
// Print the result
// test()
//   .then((value) => comnsole.log("value", value))
//   .catch(console.error);

function getPromise() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const value = Math.random();
      console.log("this time value is ", value);
      if (value < 0.1) {
        res("res" + value);
      } else {
        rej("rej" + value);
      }
    }, 300);
  });
}

retryPromisewithDelay(getPromise, 1, 3)
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
