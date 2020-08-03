/*------CONSTANT VARIABLES------*/
const colors = {
  players: [null, 1, -1],
};
const MAX_TOTAL_MOVES = 9;
const WINNING_COMBOS = {
  horizontal: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  vertical: [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ],
  diagonal: [
    [1, 5, 9],
    [3, 5, 7],
  ],
};

/*------STATE VARIABLES------*/
let filledSpots = [];
let playsMade = 1;
let player1Moves = 0;
let compMoves = 1;
let compOptions = [
  "#cell-1",
  "#cell-2",
  "#cell-3",
  "#cell-4",
  "#cell-5",
  "#cell-6",
  "#cell-7",
  "#cell-8",
  "#cell-9",
];
/*------CACHED ELEMENT REFERENCES------*/
const cellEls = document.querySelectorAll(".cell");
const els = cellEls.forEach(function (n) {
  return n.classList;
});
let pEl = document.querySelector("p");
/*------EVENT LISTENERS------*/

document.querySelector(".container").addEventListener("click", handleClick);
document.querySelector("#reset").addEventListener("click", reset);
/*------FUNCTIONS------*/
//player moves
function handleClick(e) {
  console.log(e.target);
  filledSpots.push(`#${e.target.id}`);
  let hi = e.target;
  hi.innerHTML =
    '<img class="tick" src="https://i.imgur.com/OiNWUqV.png" alt="tick">';
  render();
}

function init() {
  compChoose();
}
init();

function render() {
  player1Moves += 1;
  compMoves += 1;
  playsMade += 1;
  if (filledSpots.length === MAX_TOTAL_MOVES) {
    return isCatsGame();
  }
  compChoose();
}

function compChoose() {
  const rndIdx = Math.floor(Math.random() * compOptions.length);
  console.log(rndIdx);
  let x = compOptions[rndIdx];
  if (filledSpots.includes(compOptions[rndIdx])) {
    compChoose();
  } else {
    let y = document.querySelector(x);
    filledSpots.push(compOptions[rndIdx]);
    y.innerHTML =
      '<img class="toe" src="https://i.imgur.com/qlleP3J.png" alt="toe">';
  }
}
function reset() {
  window.location.reload();
}

function isCatsGame() {
  pEl.innerText = "GAME OVER! It's a cat's game!";
}
