/* eslint-disable no-restricted-syntax */
export const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const resultArr = arr.slice();
  return resultArr.reverse();
};

export const withdraw = (clients, balances, names, amount) => {
  let result = 0;
  clients.forEach((client, index) => {
    if (client.includes(names) && balances[index] >= amount) {
      result = balances[index] - amount;
    } else if (client.includes(names) && balances[index] < amount) {
      result = -1;
    }
  });
  return result;
};

export const getAdults = (obj) => {
  const resultObj = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      if (element >= 18) {
        resultObj[key] = element;
      }
    }
  }
  console.log(resultObj);
  return resultObj;
};
