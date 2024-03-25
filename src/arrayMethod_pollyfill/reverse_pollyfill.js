/**
 * Read FAQs section on the left for more information on how to use the editor
 **/
/**
 * DO NOT CHANGE FUNCTION NAME
 */

function customReverse() {
  // DO NOT REMOVE
  "use strict";

  // write your code below
  const arr = this;
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let aj = arr[j];
    let jset = false;
    const isi = this.hasOwnProperty(i);
    const isj = this.hasOwnProperty(j);
    if (isi) {
      arr[j] = arr[i];
      jset = true;
      delete arr[i];
    }
    if (isj) {
      arr[i] = aj;
      if (!jset) delete arr[j];
    }
    i++;
    j--;
  }
  return arr;
}

Array.prototype.customReverse = customReverse;
console.log([1, 2, 3].customReverse());
console.log([1, 2, undefined].customReverse());
console.log(
  Array.prototype.customReverse.call({
    0: 1,
    1: 2,
    2: 3,
    abc: "asd",
    length: 3
  })
);
console.log(
  Array.prototype.customReverse.call({ 2: 4, abc: "asd", length: 3 })
);
console.log(
  Array.prototype.customReverse.call({ "0": "4", unrelated: "foo", length: 3 })
);
