const successPromise = new Promise((resolve) => {
  resolve(32);
});
successPromise
  .then((number) => {
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then((number) => number * number)
  .then((result) => {
    console.log(result); // 256
    return result;
  });

successPromise
  .then((number) => {
    console.log("x" + number);
    return number * 10; // i don't know what you want me to do to get 320 in next case
  })
  .then((result) => {
    console.log(result); // 320
  });

console.log(
  "!!! Обрати внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!"
);
