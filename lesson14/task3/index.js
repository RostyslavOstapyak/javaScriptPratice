let result = 0;
export const add = (number) => (result = number + result);
export const decrease = (number) => (result = result - number);
export const reset = () => (result = 0);
export const getMemo = () => result;
