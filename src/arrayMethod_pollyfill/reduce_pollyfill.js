/**
 * while checking accumulator is present or not we should check as undefined or not as sometimes use pass 0 or any falsy value also
 *
 */

Array.prototype.myReduce = function (cb, initialValue) {
  const array = this;
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    if (accumulator != undefined) {
      accumulator = cb(accumulator, array[i], i, array);
    } else {
      accumulator = array[i];
    }
  }
  return accumulator;
};

const arr = [1, 2, 3, 4];
console.log(
  arr.myReduce((acc, el) => {
    return acc * el;
  }, 0)
);
