export const createArrayOfFunctions = (number) => {
  const resultArr = [];

  if (number === undefined) {
    return resultArr;
  }
  if (typeof number !== "number") {
    return null;
  }
  for (let i = 0; i < number; i += 1) {
    resultArr[i] = function () {
      return i;
    };
  }
  return resultArr;
};

// console.log(createArrayOfFunctions(8)[2]);
console.log(createArrayOfFunctions());
