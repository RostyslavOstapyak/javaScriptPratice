function getAdults(obj) {
  let resultArr = [];
  let objKeys = Object.keys(obj);
  let objValues = Object.values(obj);
  objValues.map((item, index) => {
    if (item >= 18) {
      resultArr.push(objKeys[index]);
    }
  });
  console.log(resultArr);
  return resultArr;
}

getAdults({ John: 19, Tom: 17, Bob: 18 });
