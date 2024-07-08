function setMatrixWithZero(mat) {
  let temp = 1;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] == 0) {
        mat[0][j] = 0;
        if (i == 0) {
          temp = 0;
        } else {
          mat[i][0] = 0;
        }
      }
    }
  }
  let z = JSON.stringify(mat);
  console.log(z);

  for (let i = 1; i < mat.length; i++) {
    if (mat[i][0] == 0) {
      for (let j = 0; j < mat[0].length; j++) {
        mat[i][j] = 0;
      }
    }
  }
  let p1 = JSON.stringify(mat);
  console.log(JSON.parse(p1));

  for (let j = 0; j < mat[0].length; j++) {
    if (mat[0][j] == 0) {
      for (let i = 0; i < mat.length; i++) {
        mat[i][j] = 0;
      }
    }
  }

  if (temp == 0) {
    for (let j = 0; j < mat[0].length; j++) {
      mat[0][j] = 0;
    }
  }

  let p = JSON.stringify(mat);
  console.log(JSON.parse(p));
}

setMatrixWithZero([
  [1, 1, 0],
  [1, 1, 1],
  [0, 1, 1],
]);
// output --> [[1,0,1],[0,0,0],[1,0,1]]
