function swap(arr) {
  let resultArr = arr.slice();

 resultArr.push(resultArr[0]);
 resultArr.splice(0,1);
 return resultArr
}
console.log(  swap([1,2,3,4,5]))