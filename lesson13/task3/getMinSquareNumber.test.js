import getMinSquareNumber from "./getMinSquareNumber";

it("should return null if array is empty", () => {
  const result = getMinSquareNumber([]);

  expect(result).toBe(null);
});

it("should return null if array is not array", () => {
  const result = getMinSquareNumber("test");

  expect(result).toBe(null);
});

it("should return smallest squared number ", () => {
  const result = getMinSquareNumber([-2, -1, 0, 1, 2]);

  expect(result).toEqual(0);
});
