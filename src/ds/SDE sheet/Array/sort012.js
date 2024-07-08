function zot(arr) {
  let p = 0;
  let q = arr.length - 1;
  let i = 0;
  while (i <= q) {
    if (arr[i] == 2) {
      while (arr[q] == 2) {
        q--;
      }
      if (q >= 0 && q >= i) [arr[i], arr[q]] = [arr[q], arr[i]];
    }
    if (arr[i] == 0) {
      while (arr[p] == 0) {
        p++;
      }

      if (p > i) {
        i = p;
      } else {
        [arr[i], arr[p]] = [arr[p], arr[i]];
      }
    } else {
      i++;
    }
    console.log(arr);
  }
}

zot([2, 0, 2, 1, 1, 0]); // [0, 0, 1, 1, 2, 2]
