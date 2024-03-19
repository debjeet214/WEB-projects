const cells = document.querySelectorAll('.cell');
const singlePlayerBtn = document.getElementById('single-player-btn');
const multiPlayerBtn = document.getElementById('multi-player-btn');
const resetBtn = document.getElementById('reset-btn');
let currentPlayer = 'X';
let gameMode = null;

function startSinglePlayerGame() {
  gameMode = 'single-player';
  cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
  });
}

function startMultiPlayerGame() {
  gameMode = 'multi-player';
  cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
  });
}

function handleCellClick(event) {
  if (event.target.textContent !== '') return;
  event.target.textContent = currentPlayer;
  if (checkWin(currentPlayer)) {
    setTimeout(() => {
      alert(`${currentPlayer} wins!`);
      resetGame();
    }, 100);
  } else if (checkDraw()) {
    setTimeout(() => {
      alert('It\'s a draw!');
      resetGame();
    }, 100);
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (gameMode === 'single-player') {
      computerTurn();
    }
  }
}

function checkWin(player) {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  return winningCombos.some(combo => {
    return combo.every(index => {
      return cells[index].textContent === player;
    });
  });
}

function checkDraw() {
  return [...cells].every(cell => {
    return cell.textContent !== '';
  });
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  gameMode = null;
}

function computerTurn() {
  let bestScore = -Infinity;
  let move;
  cells.forEach(cell => {
    if (cell.textContent === '') {
      cell.textContent = 'O';
      let score = minimax(cells, 0, false);
      cell.textContent = '';
      if (score > bestScore) {
        bestScore = score;
        move = cell.id;
      }
    }
  });
  document.getElementById(move).textContent = 'O';
  if (checkWin('O')) {
    setTimeout(() => {
      alert('Computer wins!');
      resetGame();
    }, 100);
  } else if (checkDraw()) {
    setTimeout(() => {
      alert('It\'s a draw!');
      resetGame();
    }, 100);
  } else {
    currentPlayer = 'X';
  }
}

function minimax(cells, depth, isMaximizing) {
  if (checkWin('X')) return -1;
  if (checkWin('O')) return 1;
  if (checkDraw()) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    cells.forEach(cell => {
      if (cell.textContent === '') {
        cell.textContent = 'O';
        let score = minimax(cells, depth + 1, false);
        cell.textContent = '';
        bestScore = Math.max(score, bestScore);
      }
    });
    return bestScore;
  } else {
    let bestScore = Infinity;
    cells.forEach(cell => {
      if (cell.textContent === '') {
        cell.textContent = 'X';
        let score = minimax(cells, depth + 1, true);
        cell.textContent = '';
        bestScore = Math.min(score, bestScore);
      }
    });
    return bestScore;
  }
}

singlePlayerBtn.addEventListener('click', startSinglePlayerGame);
multiPlayerBtn.addEventListener('click', startMultiPlayerGame);
resetBtn.addEventListener('click', resetGame);
