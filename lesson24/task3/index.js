// const getDiff = (startDate, endDate) => {
//   let itemOne;
//   let itemTwo;
//   if (startDate > endDate) {
//     itemOne = new Date(startDate);
//     itemTwo = new Date(endDate);
//   } else {
//     itemOne = new Date(endDate);
//     itemTwo = new Date(startDate);
//   }

//   const daysInYear = () => {
//     //
//   };

//   const daysInMonth = () => {
//     //
//   };

//   const resultSeconds = itemOne.getSeconds() - itemTwo.getSeconds();
//   const resultMinutes = itemOne.getMinutes() - itemTwo.getMinutes();
//   const resultHours = itemOne.getHours() - itemTwo.getHours();
//   const resultDay = itemOne.getDate() - itemTwo.getDate();
//   const resultMonth = itemOne.getMonth() - itemTwo.getMonth();

//   const resultYear = itemOne.getFullYear() - itemTwo.getFullYear();

//   console.log(
//     `${
//       resultYear * 365 + resultDay + resultMonth * 30
//     }d ${resultHours}h ${resultMinutes}m ${resultSeconds}s`
//   );
//   return `${
//     resultYear * 365 + resultDay + resultMonth
//   }d ${resultHours}h ${resultMinutes}m ${resultSeconds}s`;
// };

const getDiff = (startDate, endDate) => {
  let resultSeconds = 0;
  if (startDate > endDate) {
    resultSeconds = new Date(startDate - endDate) / 1000;
  } else {
    resultSeconds = new Date(endDate - startDate) / 1000;
  }

  console.log(
    `${Math.floor(resultSeconds / 3600 / 24)}d ${
      Math.floor(resultSeconds / 3600) % 24
    }h ${Math.floor(resultSeconds / 60) % 60}m ${
      Math.floor(resultSeconds) % 60
    }s`
  );
  return `${Math.floor(resultSeconds / 3600 / 24)}d ${
    Math.floor(resultSeconds / 3600) % 24
  }h ${Math.floor(resultSeconds / 60) % 60}m ${
    Math.floor(resultSeconds) % 60
  }s`;
};

//              mont
//          year ↓ day hour minutes
//          ↓    ↓  ↓   ↓   ↓
getDiff(
  new Date(2001, 32, 5, 22, 33, 33, 0),
  new Date(2001, 33, 5, 33, 33, 33, 0)
);
