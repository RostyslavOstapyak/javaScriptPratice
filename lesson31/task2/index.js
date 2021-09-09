const asyncCalculator = (num) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 500);
  })
    .then(
      (value) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(`Squared value: ${value * value}`);
            resolve(value * value);
          }, 500);
        })
    )
    .then((value) => {
      console.log(`Doubled value: ${value * 2}`);
      return value * 2;
    });

asyncCalculator(5);
