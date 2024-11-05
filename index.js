const gridContainer = document.querySelector(".grid-container");
const scoreDisplay = document.querySelector(".score");
const gameOverDisplay = document.querySelector(".game-over");
const restartButton = document.querySelector(".restart-btn");

let board = [];
let score = 0;

const startGame = () => {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    score = 0;
    gameOverDisplay.style.display = "none";
    scoreDisplay.textContent = `Score: ${score}`;
    updateBoard();
    generateNewTile();
    generateNewTile();
};

const generateNewTile = () => {
    let emptyCells = [];
    for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
            if (board[r][c] === 0) {
                emptyCells.push({ row: r, col: c });
            }
        }
    }

    if (emptyCells.length > 0) {
        const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
        board[randomCell.row][randomCell.col] = Math.random() > 0.1 ? 2 : 4;
        updateBoard();
    }
};

const updateBoard = () => {
    gridContainer.innerHTML = '';
    board.forEach(row => {
        row.forEach(cell => {
            const div = document.createElement('div');
            div.classList.add('grid-cell');
            div.textContent = cell !== 0 ? cell : '';
            div.style.backgroundColor = getTileColor(cell);
            gridContainer.appendChild(div);
        });
    });
    scoreDisplay.textContent = `Score: ${score}`;
};

const getTileColor = (value) => {
    switch (value) {
        case 2: return '#eee4da';
        case 4: return '#ede0c8';
        case 8: return '#f2b179';
        case 16: return '#f59563';
        case 32: return '#f67c5f';
        case 64: return '#f65e3b';
        case 128: return '#edcf72';
        case 256: return '#edcc61';
        case 512: return '#edc850';
        case 1024: return '#edc53f';
        case 2048: return '#edc22e';
        default: return '#cdc1b4';
    }
};

// Add event listeners for user input
document.addEventListener('keydown', (e) => {
    if (gameOverDisplay.style.display === "none") {
        if (e.key === "ArrowUp") moveUp();
        if (e.key === "ArrowDown") moveDown();
        if (e.key === "ArrowLeft") moveLeft();
        if (e.key === "ArrowRight") moveRight();
    }
});

const moveUp = () => { /* Add logic for moving tiles up */ };
const moveDown = () => { /* Add logic for moving tiles down */ };
const moveLeft = () => { /* Add logic for moving tiles left */ };
const moveRight = () => { /* Add logic for moving tiles right */ };

restartButton.addEventListener("click", startGame);

startGame();
