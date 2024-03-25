function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  console.log(value);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

const asyncArray = [createAsyncTask(), createAsyncTask(), createAsyncTask()];

const asyncTaskParallelExecutor = async function (arr, resultCallback) {
  let counter = 0;
  let result = [];
  arr.forEach((asyncFn, index) => {
    asyncFn((value) => {
      result[index] = value;
      counter++;
      if (counter === arr.length) {
        resultCallback(result);
      }
    });
  });
};

asyncTaskParallelExecutor(asyncArray, (result) => {
  console.log("results", result);
});
