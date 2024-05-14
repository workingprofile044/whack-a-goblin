export class Grid {
    constructor(gridElement) {
        this.gridElement = gridElement;
        this.cells = [];
        this.createGrid();
    }

    createGrid() {
        this.gridElement.innerHTML = '';
        for (let i = 0; i < 16; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            this.gridElement.appendChild(cell);
            this.cells.push(cell);
        }
    }

    getRandomCell(excludeCell) {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.cells.length);
        } while (this.cells[newIndex] === excludeCell);
        return this.cells[newIndex];
    }

    getCells() {
        return this.cells;
    }
}
