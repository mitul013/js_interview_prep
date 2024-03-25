const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("resolve");
  }, 100);
});
const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("reject");
  }, 200);
});

const arr = [promise1, promise2];

function raceCustom(arr) {
  return new Promise((res, rej) => {
    arr.forEach((promise) => {
      Promise.resolve(promise).then(res).catch(rej);
    });
  });
}

// Promise.race(arr)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

raceCustom(arr)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
