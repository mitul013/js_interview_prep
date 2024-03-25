Array.prototype.myFilter = function (cb) {
  const result = [];
  const array = this;
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
};

const arr = [1, 2, 3, 4];

console.log(arr.myFilter((el) => !(el % 2)));
