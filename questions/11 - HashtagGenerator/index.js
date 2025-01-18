const btn = document.querySelector(".btn");
const input = document.querySelector("input");
const outputBox = document.querySelector(".output-box");

btn.addEventListener("click", () => {
  const hashtag = generateHashtag(input.value);
  outputBox.innerHTML = hashtag;
});

const generateHashtag = (input) => {
  return "";
};
