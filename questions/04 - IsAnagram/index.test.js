import { isAnagram } from ".";

xtest("isAnagram", () => {
  expect(isAnagram("sub", "ubs")).toBeTruthy();
  expect(isAnagram("like", "keil")).toBeTruthy();
  expect(isAnagram("cat", "taca")).toBeFalsy();
});
