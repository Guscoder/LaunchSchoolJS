/* eslint-disable max-lines-per-function */
/* 

Problem: detect saddle points in a matrix of any size (even non-square)
-be able to extract a row
-be able to extract a column

Input: matrix of unknown size
output: array of all saddle points (if any) in a matrix

algorithm:
create matrix
1. turn args into array of sub-arrays, separate by \n

get row
1. input which row
2. output the appropriate sub-array

get column
1. input which column
2. loop through array and get elements in that column
    -put elements in array
    -output array

find saddlepoints
1. create array to hold saddle points
2. loop through each element in array
    -check other nums in same row
    - if >= every elem in same row, then check column criteria
        -compare to every other elem in same column
        -if <= every elem, add element to array

*/
function Matrix(matrixPoints) {
  let matrix = createMatrix(matrixPoints);
  let rows = createMatrix(matrixPoints);
  let columns = createColumns(rows);
  let saddlePoints = getSaddlePoints(rows, columns);

  function createMatrix(stringInput) {
    let array = stringInput
      .split("\n")
      .map((str) => str.split(" ").map((elem) => Number(elem)));
    return array;
  }

  function createColumns(matrix) {
    let [row] = matrix;
    return row.map((value, column) => matrix.map((row) => row[column]));
  }

  function getSaddlePoints() {
    let saddlePoints = [];
    for (let rowIdx = 0; rowIdx < rows.length; rowIdx++) {
      for (let columnIdx = 0; columnIdx < columns.length; columnIdx++) {
        let currentElement = [rowIdx, columnIdx];
        let maxRow = Math.max(...rows[rowIdx]);
        let minColumn = Math.min(...columns[columnIdx]);
        if (maxRow === minColumn) {
          saddlePoints.push(currentElement);
        }
      }
    }
    return saddlePoints;
  }
  // let points = [];
  // for (let index = 0; index < rows.length; index++) {
  //   for (let j = 0; j < rows[index].length; j++) {
  //     if (rows[index].every((item) => item >= rows[index][j])) {
  //       if (columns[j].every((item) => item <= columns[j][index])) {
  //         points.push(rows[index][j]);
  //       }
  //     }
  //   }
  // }
  // return points;

  return {
    rows,
    columns,
    saddlePoints,
  };
}

module.exports = Matrix;
