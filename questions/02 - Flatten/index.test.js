import { flatten } from ".";

xtest("flatten", () => {
  const arr1 = [1, 2, 3, 4, [5, 6]];
  const arr2 = ["a", "b", "c", ["a", "b", ["c", "d"]]];
  expect(flatten(arr1)).toEqual([1, 2, 3, 4, 5, 6]);
  expect(flatten(arr2)).toEqual(["a", "b", "c", "a", "b", "c", "d"]);
});
