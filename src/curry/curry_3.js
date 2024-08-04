console.log(sum(1, 2)(3)(4, 5, 6)());
// return 21;

function sum(...a) {
  return function helper(...b) {
    console.log(a, b);
    if (b.length == 0) {
      return a[0];
    } else {
      const asum = a.reduce((acc, i) => acc + i, 0);
      const bsum = b.reduce((acc, i) => acc + i, 0);
      return sum(asum + bsum);
    }
  };
}

// another approach
function sum(...a) {
  let sum = a.reduce((acc, i) => acc + i, 0);
  return function helper(...b) {
    if (b.length == 0) {
      return sum;
    } else {
      let bsum = b.reduce((acc, i) => acc + i, 0);
      sum += bsum;
      return helper;
    }
  };
}
