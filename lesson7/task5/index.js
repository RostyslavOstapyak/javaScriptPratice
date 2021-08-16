// function squareArray(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const resultArr = [];
//   arr.forEach((item) => {
//     resultArr.push(item*item)
//   });
//   return resultArr;
// }

function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((item) => item * item);
}

const arr = [1, 2, 3, 4];
console.log(squareArray(arr));
