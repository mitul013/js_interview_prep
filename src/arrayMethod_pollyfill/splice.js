Array.prototype.mySplice = function (start, count, ...items) {
  let arr = this;
  let length = arr.length;
  if (start == undefined) return arr;
  let sIdx = start;
  if (start < 0) {
    sIdx = Math.min(0, length - start);
  }
  let deleteCount = count;
  if (count == undefined) {
    deleteCount = Math.min(length - sIdx, length);
  }

  let removedItems = [];
  for (let i = 0; i < deleteCount; i++) {
    removedItems.push(arr[sIdx + i]);
  }

  console.log({
    removedItems,
  });

  for (let i = 0; i < length - sIdx - deleteCount; i++) {
    arr[sIdx + i] = arr[sIdx + deleteCount + i];
    console.log(arr);
  }

  arr.length = length - deleteCount;

  console.log("After delete", arr);

  if (items && items.length > 0) {
    for (let i = arr.length - 1; i >= sIdx; i--) {
      arr[i + items.length] = arr[i];
    }
    console.log("After move to right", arr);
    for (let i = 0; i < items.length; i++) {
      arr[i + sIdx] = items[i];
    }
    console.log("After insert items", arr);
  }

  return removedItems;
};

let a = [1, 2, 3, 4, 5, 6];
a.mySplice(1, 1, 12);
