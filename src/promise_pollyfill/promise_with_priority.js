function resolvePromisesWithPriority2(promises) {
  const resolveMap = {};
  const rejectMap = {};
  let mostPriority = 0;
  promises.sort((a, b) => a.priority - b.priority);
  return new Promise((resolve, reject) => {
    promises.forEach(({ task, priority }, i) => {
      task
        .then(() => {
          resolveMap[i] = priority;
          if (priority == promises[mostPriority].priority) {
            resolve("resolve " + priority);
          }
        })
        .catch(() => {
          rejectMap[i] = true;
          if (Object.keys(rejectMap) == promises.length) {
            reject("All failed");
          }
          if (priority == promises[mostPriority].priority) {
            mostPriority++;
            let j = i;
            while (j < promises.length) {
              if (resolveMap[j]) {
                resolve("resolve " + resolveMap[j]);
                break;
              } else if (rejectMap[j]) {
                j++;
              } else {
                break;
              }
            }
          }
        });
    });
  });
}

function createAsyncTask(value, isreject = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isreject) {
        reject();
      } else {
        resolve(value);
      }
    }, value * 100);
  });
}

const promises = [
  {
    task: createAsyncTask(3),
    priority: 1,
  },
  {
    task: createAsyncTask(4),
    priority: 2,
  },
  {
    task: createAsyncTask(1),
    priority: 3,
  },
  {
    task: createAsyncTask(2, false),
    priority: 4,
  },
];

resolvePromisesWithPriority2(promises).then(
  (result) => {
    console.log(result);
  },
  (error) => {
    console.log(error);
  },
);
