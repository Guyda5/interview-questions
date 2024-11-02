import { uniqueArray } from ".";

xtest("isArrayUnique", () => {
  expect(uniqueArray(["a", "b", "c"])).toBeTruthy();
  expect(uniqueArray(["a", "a", "b", "c"])).toBeFalsy();
  expect(uniqueArray([1, 2, 3, 4, 3])).toBeFalsy();
});
