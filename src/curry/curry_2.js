const sumx = curryFn();
console.log(sumx(1));
console.log(sumx(2));
console.log(sumx(3));
console.log(sumx(4));
console.log(sumx());

function curryFn() {
  let sum = 0;
  return function (b) {
    if (b == undefined) {
      return sum;
    } else {
      sum += b;
      return sum;
    }
  };
}
