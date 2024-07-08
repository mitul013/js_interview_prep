function pascalTriangle(r) {
  let first = [1];
  let second = [1, 1];

  if (r == 1) return [first];
  if (r == 2) return [first, second];

  let result = [first, second];
  for (let i = 2; i < r; i++) {
    let row = [];

    for (let j = 0; j <= i; j++) {
      let prev = result[i - 1][j - 1] || 0;
      let next = result[i - 1][j] || 0;
      row.push(prev + next);
    }
    result.push(row);
  }
  console.log(result);
}

pascalTriangle(5);
