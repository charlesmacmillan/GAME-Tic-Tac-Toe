/*----- constants -----*/
const lookup = {
  "1": "tick",
  "-1": "toe",
  null: "oh",
};

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/*----- app's state (variables) -----*/
let board, turn, winner;

/*----- cached element references -----*/
const squares = document.querySelectorAll("div");
const message = document.querySelector("p");

/*----- event listeners -----*/
document.querySelector("section").addEventListener("click", clickPlay);
document.querySelector("button").addEventListener("click", init);

/*----- functions -----*/

init();

function clickPlay(e) {
  if (e.target.id === "container") return;
  const idx = parseInt(e.target.id.replace("cell", ""));
  if (board[idx] || winner) return;
  board[idx] = turn;
  turn *= -1;
  winner = getWinner();
  render();
}
//determines if there is a winning scenario, tie, or if the game needs to continue
function getWinner() {
  for (let i = 0; i < winningCombos.length; i++) {
    if (
      Math.abs(
        board[winningCombos[i][0]] +
          board[winningCombos[i][1]] +
          board[winningCombos[i][2]]
      ) === 3
    )
      return board[winningCombos[i][0]];
  }
  if (board.includes(null)) return null;
  return "T";
}
//updates all state variables
function render() {
  board.forEach(function (a, i) {
    squares[i].removeAttribute("class");
    squares[i].classList.add(`${lookup[a]}`);
  });
  if (winner === "T") {
    message.innerHTML = "CATS GAME! Its a tie";
  } else if (winner) {
    message.innerHTML = `Congrats ${lookup[winner].toUpperCase()}, you win!`;
  } else {
    message.innerHTML = `${lookup[turn].toUpperCase()}'s Turn`;
  }
}
//initiates the start of a game
function init() {
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
}
