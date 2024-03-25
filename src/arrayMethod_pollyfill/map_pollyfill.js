/**
 * note --> should not use arrow nfunction as it does not ahve this context
 */
Array.prototype.myMap = function (cb) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }
  return result;
};

const arr = [1, 2, 3, 4];

console.log(
  arr.myMap((el) => {
    return el * 2;
  })
);
