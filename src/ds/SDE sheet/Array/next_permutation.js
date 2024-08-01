function nextPermutation(arr) {
  // find smallest
  let len = arr.length;
  let index = 0;
  for (let i = len - 1; i > 0; i--) {
    if (arr[i] > arr[i - 1]) {
      index = i;
      break;
    }
  }

  for (let i = len - 1; i >= index; i--) {
    if (arr[index - 1] < arr[i]) {
      [arr[i], arr[index - 1]] = [arr[index - 1], arr[i]];
      break;
    }
  }
  console.log(arr);
  let j = 0;
  for (let i = index; i < Math.floor((index + len) / 2); i++) {
    [arr[i], arr[len - 1 - j]] = [arr[len - 1 - j], arr[i]];
    j++;
  }
  console.log(arr);
}

nextPermutation([1, 2, 3, 7, 6, 5, 4, 3]); // [1, 2, 4, 3, 3, 5, 6, 7]
