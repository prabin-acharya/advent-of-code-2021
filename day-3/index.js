const { count } = require("console");
const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(String);

let zero_count = [];

input.forEach((binary) => {
  binary.split("").forEach((bit, i) => {
    if (!zero_count[i]) {
      zero_count[i] = 0;
    }
    bit == 0 && zero_count[i]++;
  });
});

let gamma = "";
let epsilon = "";

zero_count.forEach((count) => {
  if (count > 500) {
    gamma += 0;
    epsilon += 1;
  } else {
    gamma += 1;
    epsilon += 0;
  }
});

const gammaDecimal = parseInt(gamma, 2);
const epsilonDecimal = parseInt(epsilon, 2);

console.log(gammaDecimal * epsilonDecimal);
