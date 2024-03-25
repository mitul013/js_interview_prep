const asyncTask = function (i) {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => resolve(`Completing ${i}`), 1000 * i);
    });
};
const promises = [asyncTask(2), asyncTask(1), asyncTask(3)];

const asyncTaskExecutor = async function (arr) {
  for (const promise of arr) {
    try {
      const res = await promise();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
};
asyncTaskExecutor(promises);
