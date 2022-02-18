let gameRunning = true;
  let currentPlayer = "X";
  let gameState = ["", "", "", "", "", "", "", "", ""];

  const statusOfGame = document.getElementsByClassName('gamestatus');
  const winningMessage = () => `Player ${currentPlayer} has won`;
  const drawMessage = () => `Game ended in a draw!`;
  const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

  statusOfGame.innerHTML = currentPlayerTurn();
   function cellPlayed() {  
}
   function playerChange() {
}
   function results() {
}
   function cellClick() {
}
   function resetGame() {
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', cellClick));
document.querySelector('.gamereset').addEventListener('click', resetGame);

function cellClick(clickedCellEvent) {
   
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(
      clickedCell.getAttribute('data-cell-index')
    );

    if (gameState[clickedCellIndex] !== "" || !gameRunning) {
        return;
    }
    
    cellPlayed(clickedCell, clickedCellIndex);
    results();
}

 function cellPlayed(clickedCell, clickedCellIndex) {

    gameState[clickedCellIndex] = currentPlayer;
     clickedCell.innerHTML = currentPlayer;
 }


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function results() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
if (roundWon) {
        
        gameRunning = false;
        return;
    }
}

const winningConditions2 = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function results() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition2 = winningConditions2[i];
        let a = gameState[winCondition2[0]];
        let b = gameState[winCondition2[1]];
        let c = gameState[winCondition2[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
if (roundWon) {
       
        gameRunning = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusOfGame.innerHTML = drawMessage();
        gameRunning = false;
        return;
    }

    playerChange();
}


function playerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusOfGame.innerHTML = currentPlayerTurn();
}

function resetGame() {
    gameRunning = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusOfGame.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
               .forEach(cell => cell.innerHTML = "");
} 
