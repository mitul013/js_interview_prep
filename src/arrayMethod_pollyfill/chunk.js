// const arr = [1,2,3,4,5,6,7]; n=2;
// result : [[1,2],[2,4],[5,6],[7]]
function chunk(arr, chunkSize) {
  const result = [];
  let subArr = [];
  let i = 0;
  let j = arr.length;
  while (i < j) {
    subArr.push(arr[i]);
    i++;
    if (subArr.length == chunkSize) {
      result.push(subArr);
      subArr = [];
    }
  }
  if (subArr.length > 0) {
    result.push(subArr);
  }
  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6], 3));
