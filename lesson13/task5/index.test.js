import { reverseArray, withdraw, getAdults } from "./index";

it("should reverse array", () => {
  const result = reverseArray([1, 2, 3, 4]);

  expect(result).toEqual([4, 3, 2, 1]);
});

it("should return null if getting not array", () => {
  const result = reverseArray(1);

  expect(result).toEqual(null);
});

it("should return null if getting not array", () => {
  const result = reverseArray("string");

  expect(result).toEqual(null);
});

it("should return -1 if amount is less than number in array", () => {
  const result = withdraw(
    ["Name1", "Name2", "Name3"],
    [1000, 500, 0],
    "Name3",
    50
  );

  expect(result).toEqual(-1);
});
it("should return number from 2nd array if amount is more than that number", () => {
  const result = withdraw(
    ["Name1", "Name2", "Name3"],
    [1000, 500, 0],
    "Name1",
    50
  );

  expect(result).toEqual(950);
});
it("should return number from 2nd array if amount is more than that number", () => {
  const result = withdraw(
    ["Name1", "Name2", "Name3"],
    [1000, 500, 0],
    "Name2",
    50
  );

  expect(result).toEqual(450);
});

it("should return object with key+value where value >=18", () => {
  const result = getAdults({ Name1: 10, Name2: 18, Name3: 19 });

  expect(result).toEqual({ Name2: 18, Name3: 19 });
});

it("should return object with key+value where value >=18", () => {
  const result = getAdults({ Name1: 10, Name2: 18, Name3: 19 });

  expect(result).toEqual({ Name2: 18, Name3: 19 });
});
it("should return empty object if function get not object", () => {
  const result = getAdults("string");

  expect(result).toEqual({});
});
