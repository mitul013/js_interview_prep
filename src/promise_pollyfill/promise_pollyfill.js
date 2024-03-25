/**
 * normal promise expect two callback fn, resolve and reject
 * and it has two methods as properties
 *
 * imp point --> in below implementation,
 * we are calling resolveCb/onResolve in both places at resolve and then
 * because if we have asyn operation (setTimeout) then it will take time to
 * assign value and invoke resolveCb/onResolve, and if we have sync operation or normal operation
 * then it will resolve function ececuted immediately
 */

function PromisePollyFill(executor) {
  let onResolve, onReject, value;
  let isFullFilled = false;
  let isRejected = false;

  this.then = (resolveCb) => {
    onResolve = resolveCb;
    if (isFullFilled) {
      // this condition is for, if we have async operation then when we call .then that time we dont have have value which we have passed in resolve(val) thats why we have to check that isFullfilled is true or not
      onResolve(value);
    }
    return this;
  };
  this.catch = (rejectCb) => {
    onReject = rejectCb;
    if (isRejected) {
      onReject(value);
    }
    return this;
  };

  function resolve(val) {
    value = val;
    isFullFilled = true;
    if (onResolve) {
      onResolve(value);
    }
  }

  function reject(val) {
    value = val;
    isRejected = true;
    if (onReject) {
      onReject(value);
    }
  }
  console.log("initiated..");

  try {
    executor(resolve, reject);
  } catch (error) {
    console.error(error);
  }
}

// const demoPromise = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("mitul");
//   }, 100);
// });

// demoPromise.then((val) => {
//   console.log({ val });
// });

const customPromise = new PromisePollyFill((resolve, reject) => {
  reject(123);
});

customPromise
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.error(err);
  });
