import { twoSum } from ".";

xtest("TwoSum", () => {
  expect(twoSum([1, 2, 3, 9], 5)).toEqual([1, 2]);
  expect(twoSum([3, 5, 6], 11)).toEqual([1, 2]);
  expect(twoSum([1, 2, 3, 4], 30)).toEqual([]);
});
