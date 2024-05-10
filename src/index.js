import './styles/style.css';

const grid = document.getElementById('grid');
const message = document.getElementById('message');
let lastCell;
let timeout;

function randomGridCell() {
    const cells = Array.from(document.querySelectorAll('.grid-cell'));
    const index = Math.floor(Math.random() * cells.length);
    const cell = cells[index];

    if (cell === lastCell) {
        return randomGridCell();
    }

    lastCell = cell;
    return cell;
}

function activateGoblin() {
    const cell = randomGridCell();
    cell.classList.add('active');

    cell.addEventListener('click', () => {
        clearTimeout(timeout);
        resetGame();
        activateGoblin();
    }, { once: true });

    timeout = setTimeout(() => {
        if (cell.classList.contains('active')) {
            message.textContent = 'YOU LOST';
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    document.querySelectorAll('.grid-cell').forEach(cell => {
        cell.classList.remove('active');
    });
    message.textContent = '';
}

function createGrid() {
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        grid.appendChild(cell);
    }
    activateGoblin();
}

document.addEventListener('DOMContentLoaded', createGrid);
