Object.prototype[Symbol.iterator] = function () {
  let keys = Object.keys(this);
  let obj = this;
  let idx = 0;
  return {
    next() {
      if (idx >= keys.length) {
        return {
          done: true,
          value: obj[keys[idx++]],
        };
      } else {
        return {
          done: false,
          value: obj[keys[idx++]],
        };
      }
    },
  };
};

const obj2 = {
  a: 1,
  b: 2,
  c: 3,
};

for (const i of obj2) {
  console.log(i);
}
