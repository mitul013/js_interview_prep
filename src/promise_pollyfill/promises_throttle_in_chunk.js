const promises = [
  () => fetch("https://jsonplaceholder.typicode.com/todos/1"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/2"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/3"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/4"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/5"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/6"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/7"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/8"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/9"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/10"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/11"),
  () => fetch("https://jsonplaceholder.typicode.com/todos/12"),
  // Add more promise functions as needed
];

const maxConcurrentCalls = 5;

const wait = () => {
  return new Promise((res) => {
    setTimeout(() => {
      res("asd");
    }, 3000);
  });
};

async function throttlePromises(promises, maxCount) {
  let count = 0;
  let chunk = [];
  for (let i = 0; i < promises.length; i++) {
    if (++count == maxCount) {
      // execute promises
      chunk.push(promises[i]);
      const result = await Promise.all(chunk.map((fn) => fn()));
      console.log({
        result,
      });
      chunk = [];
      count = 0;
      await wait();
      // empty chunk
    } else {
      chunk.push(promises[i]);
    }
  }

  if (chunk.length) {
    // execute promise
    const result = await Promise.all(chunk.map((fn) => fn()));
    console.log({
      result,
    });
    chunk = [];
  }
}

throttlePromises(promises, maxConcurrentCalls);
