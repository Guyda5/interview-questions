import { curry } from ".";

xit("should currify a function", () => {
  const exmapleFunction = (a, b) => a + b;
  const endlessSum = (...args) => {
    return args.reduce((acc, val) => (acc += val), 0);
  };
  const currifiedExampleFunction = curry(exmapleFunction);
  const currifiedEndlessSum = curry(endlessSum);

  expect(currifiedExampleFunction(1)(2) === exmapleFunction(1, 2));
  expect(currifiedExampleFunction(1, 2) === exmapleFunction(1, 2));
  expect(
    currifiedEndlessSum(1, 2, 3, 4, 5, 6) === endlessSum(1, 2, 3, 4, 5, 6)
  );
});
