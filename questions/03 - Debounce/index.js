import { debounce } from "./debounce.js";

const input1 = document.querySelector(".input-value");

input1.addEventListener("input", (val) => {
  console.log("fetching search results! => value: ", input1.value);
});
