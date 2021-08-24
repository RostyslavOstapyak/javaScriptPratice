export default (array) => {
  if (!Array.isArray(array) || !array[0]) {
    return null;
  }
  let minNumber = Infinity;
  array.forEach((el) => {
    if (el * el < minNumber) {
      minNumber = el * el;
    }
  });
  return minNumber;
};
