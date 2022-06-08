const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n")
  .map((num) => parseInt(num, 10));

function part_1(input) {
  let current = 0;
  let count = -1;
  // setting -1, as first element is counted to be big
  input.forEach((next) => {
    next > current && count++;
    current = next;
  });

  console.log(count);
}

function part_2(input) {
  let prev_window = 0;
  let count = -1;
  for (let i = 0; i < input.length - 2; i++) {
    let current_window = input[i] + input[i + 1] + input[i + 2];
    current_window > prev_window && count++;
    prev_window = current_window;
  }
  console.log(count);
}

part_1(input);
part_2(input);
