import { isArrayUnique } from ".";

xtest("isArrayUnique", () => {
  expect(isArrayUnique(["a", "b", "c"])).toBeTruthy();
  expect(isArrayUnique(["a", "a", "b", "c"])).toBeFalsy();
  expect(isArrayUnique([1, 2, 3, 4, 3])).toBeFalsy();
});
