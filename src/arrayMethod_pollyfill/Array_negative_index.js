let arr = [1, 2, 3, 4, 5, 6];
let obj = new Proxy(arr, {
  get(target, handler) {
    let idx = parseInt(handler, 10);
    if (idx < 0) {
      idx += target.length;
    }
    return target[idx];
  },
});

console.log(obj[-2]);
