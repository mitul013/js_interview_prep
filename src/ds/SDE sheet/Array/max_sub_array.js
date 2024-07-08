function kadaneAlgo(arr) {
  let max = arr[0];
  let sum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (sum + arr[i] < arr[i]) {
      sum = arr[i];
    } else {
      sum += arr[i];
    }
    if (max < sum) {
      max = sum;
    }
  }
  console.log(max);
}

kadaneAlgo([5, 4, -1, 7, 8]); // 23
