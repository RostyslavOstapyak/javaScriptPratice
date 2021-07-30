function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let resultArr = [];
  arr.forEach((item) => {
    resultArr.push(item*item)
  });
  return resultArr;
}
console.log(squareArray([1,2,3,4,]))
