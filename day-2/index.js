const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf8")
  .toString()
  .trim()
  .split("\n");

function part_1(input) {
  let horizontal_position = 0;
  let depth = 0;

  input.forEach((command) => {
    let [direction, units] = command.split(" ");
    units = parseInt(units, 10);

    switch (direction) {
      case "up":
        depth -= units;
        break;

      case "down":
        depth += units;
        break;

      case "forward":
        horizontal_position += units;
        break;

      case "backward":
        horizontal_position -= units;
        break;
    }
  });

  console.log(horizontal_position * depth);
}

function part_2(input) {
  let horizontal_position = 0;
  let depth = 0;
  let aim = 0;

  input.forEach((command) => {
    let [direction, units] = command.split(" ");
    units = parseInt(units, 10);

    switch (direction) {
      case "up":
        aim -= units;
        break;

      case "down":
        aim += units;
        break;

      case "forward":
        horizontal_position += units;
        depth += aim * units;
        break;
    }
  });
  console.log(horizontal_position * depth);
}

part_1(input);
part_2(input);
