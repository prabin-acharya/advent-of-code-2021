const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.join(__dirname, "input.txt"), "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(String);

function part_1(input) {
  let zero_count = [];

  input.forEach((binary_num) => {
    binary_num.split("").forEach((bit, i) => {
      if (!zero_count[i]) {
        zero_count[i] = 0;
      }
      bit == 0 && zero_count[i]++;
    });
  });

  let gamma = "";
  let epsilon = "";

  zero_count.forEach((count) => {
    if (count > input.length / 2) {
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
}

function part_2(input) {
  let data = input;
  for (let i = 0; i < input[0].length; i++) {
    let zero_count = 0;
    data.forEach((binary_num) => {
      binary_num[i] == 0 && zero_count++;
    });

    if (zero_count > data.length / 2) {
      data = data.filter((binary_num) => binary_num[i] == 0);
    } else {
      data = data.filter((binary_num) => binary_num[i] == 1);
    }

    if (data.length === 1) {
      break;
    }
  }
  const oxygen_generator_rating_decimal = parseInt(data, 2);

  data = input;
  for (let i = 0; i < input[0].length; i++) {
    let zero_count = 0;
    data.forEach((binary) => {
      binary[i] == 0 && zero_count++;
    });

    if (zero_count > data.length / 2) {
      data = data.filter((binary_num) => binary_num[i] == 1);
    } else {
      data = data.filter((binary_num) => binary_num[i] == 0);
    }

    if (data.length == 1) {
      break;
    }
  }

  const CO2_scrubber_rating_decimal = parseInt(data, 2);

  console.log(oxygen_generator_rating_decimal * CO2_scrubber_rating_decimal);
}

part_1(input);
part_2(input);
