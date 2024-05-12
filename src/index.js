import './styles/style.css';

const grid = document.getElementById('grid');
const message = document.getElementById('message');
let lastCell = null;

document.addEventListener('DOMContentLoaded', function() {
    createGrid();
    placeGoblin();
});

function createGrid() {
    grid.innerHTML = ''; 
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        grid.appendChild(cell);
    }
}

function placeGoblin() {
    if (lastCell) {
        lastCell.classList.remove('active');
    }

    const cells = Array.from(document.querySelectorAll('.grid-cell'));
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * cells.length);
    } while (cells[newIndex] === lastCell);

    cells[newIndex].classList.add('active');
    lastCell = cells[newIndex];

    cells.forEach(cell => {
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handleCellClick);
    });
}

function moveGoblin() {
    if (lastCell) {
        lastCell.classList.remove('active');
    }

    const cells = Array.from(document.querySelectorAll('.grid-cell'));
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * cells.length);
    } while (cells[newIndex] === lastCell);

    cells[newIndex].classList.add('active');
    lastCell = cells[newIndex];

    }


function handleCellClick() {
    if (!this.classList.contains('active')) {
        alert('YOU LOSE');
        setTimeout(function() {
            location.reload();
        }, 1000);
    } else {
        moveGoblin();
    }
}




function resetGame() {
    message.textContent = '';
    placeGoblin();
}
