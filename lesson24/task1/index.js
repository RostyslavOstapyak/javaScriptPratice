const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "St"];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  //   const resultDate = new Date(dateInFuture).toDateString();
  //   const result = resultDate.split("")[0] + resultDate.split("")[1];

  return weekDays[new Date(dateInFuture).getDay()];
};
