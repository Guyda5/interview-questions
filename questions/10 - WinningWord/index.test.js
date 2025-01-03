import { winningWord } from ".";

xtest("winningWord", () => {
  const exampleSentence = "hello my name is guy";
  const exampleSentence2 = "happy new year";

  expect(winningWord(exampleSentence)).toBe("guy");
  expect(winningWord(exampleSentence2)).toBe("happy");
});
