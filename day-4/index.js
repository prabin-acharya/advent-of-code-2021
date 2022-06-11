const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.join(__dirname, "./input.txt"), "utf-8")
  .toString()
  .trim()
  .split("\n\n");

const random_order = input.shift().split(",").map(Number);

const boards = input.reduce((acc, board_str, i) => {
  let board = [];

  let rows = board_str.split("\n");
  rows.forEach((row) =>
    board.push(
      row
        .split(" ")
        .filter((a) => a != "")
        .map((b) => parseInt(b, 10))
    )
  );
  acc.push(board);
  return acc;
}, []);

function checkBoard(board, nums) {
  const size = board[0].length;
  const hits = new Array(size * 2).fill(0);

  let Bingo = false;
  let sum_unmarked = 0;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (nums.includes(board[i][j])) {
        if (++hits[i] === size || ++hits[size + j] === size) {
          Bingo = true;
        }
      } else {
        sum_unmarked += board[i][j];
      }
    }
  }

  return [Bingo, sum_unmarked];
}

function part_1(random_order, boards) {
  for (let i = 0; i < random_order.length; i++) {
    let Bingo;
    for (let j = 0; j < boards.length; j++) {
      if (!boards[j]) {
        continue;
      }
      [Bingo, sum_unmarked] = checkBoard(boards[j], random_order.slice(0, i));
      if (Bingo) {
        console.log(sum_unmarked * random_order[i - 1]);
        break;
      }
    }
    if (Bingo) {
      break;
    }
  }
}

function part_2(random_order, boards) {
  for (let i = 0; i < random_order.length; i++) {
    let Bingo;
    for (let j = 0; j < boards.length; j++) {
      if (!boards[j]) {
        continue;
      }
      [Bingo, sum_unmarked] = checkBoard(boards[j], random_order.slice(0, i));
      if (Bingo) {
        console.log(sum_unmarked * random_order[i - 1]);
        boards[j] = null;
      }
    }
  }
}

part_1(random_order, boards);
console.log("==========================");
part_2(random_order, boards);
