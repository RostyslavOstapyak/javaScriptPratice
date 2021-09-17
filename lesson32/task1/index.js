const getValueWithDelay = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNum1 = getValueWithDelay(11, 1000);
const asyncNum2 = getValueWithDelay(22, 1000);
const asyncNum3 = getValueWithDelay(33, 1000);
const asyncNum4 = getValueWithDelay(44, 1000);

//

const asyncSum = (...asyncNumbers) =>
  Promise.all(asyncNumbers)
    .then((numbers) =>
      numbers // [11,22,33,44]
        .filter((value) => !isNaN(value))
        .reduce((acc, num) => acc + Number(num))
    )
    .catch(() => Promise.reject(new Error("Can't calculate")));

asyncSum(asyncNum1, asyncNum2, asyncNum3, asyncNum4).then((result) => {
  console.log(result);
});
