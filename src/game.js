import { Grid } from './grid';
import { Goblin } from './goblin';

export class Game {
    constructor(gridElement, messageElement) {
        this.grid = new Grid(gridElement);
        this.goblin = new Goblin(this.grid);
        this.messageElement = messageElement;
        this.score = 0;
        this.misses = 0;
        this.maxMisses = 5;
        this.setupEventListeners();
    }

    startGame() {
        this.goblin.placeGoblin();
        this.gameInterval = setInterval(() => {
            this.goblin.moveGoblin();
        }, 1000);
    }

    setupEventListeners() {
        this.grid.getCells().forEach(cell => {
            cell.addEventListener('click', (e) => {
                if (e.target.classList.contains('active')) {
                    this.score++;
                } else {
                    this.misses++;
                }
                this.updateScoreBoard();
                this.goblin.moveGoblin();
                if (this.misses >= this.maxMisses) {
                    this.endGame();
                }
            });
        });
    }

    updateScoreBoard() {
        this.messageElement.textContent = `Score: ${this.score}, Misses: ${this.misses}`;
    }

    endGame() {
        clearInterval(this.gameInterval);
        alert('GAME OVER');
        setTimeout(() => {
            location.reload();
        }, 1000);
    }
}
