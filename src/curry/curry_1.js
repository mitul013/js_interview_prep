function sum1(a, b, c) {
  console.log(a, b, c);
}
const sum2 = curry(sum1);
sum2(1)(2, 3);
sum2(1)(2)(3);
sum2(1, 2, 3);

function curry(fn) {
  const len = fn.length;
  return function curriedFn() {
    const arr = [...arguments];
    if (len <= arr.length) {
      return fn(...arr);
    } else {
      return curriedFn.bind(this, ...arr);
    }
  };
}
