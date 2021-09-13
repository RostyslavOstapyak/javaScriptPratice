/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = (element) =>
  new Promise((resolve, reject) => {
    resolve(element);
  });

/*
 * пример использования
 */
makePromise(17).then((number) => {
  console.log(number); // 17
});
