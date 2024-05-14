export class Goblin {
    constructor(grid) {
        this.grid = grid;
        this.lastCell = null;
    }

    placeGoblin() {
        if (this.lastCell) {
            this.lastCell.classList.remove('active');
        }

        const newCell = this.grid.getRandomCell(this.lastCell);
        newCell.classList.add('active');
        this.lastCell = newCell;
    }

    moveGoblin() {
        this.placeGoblin();
    }
}
