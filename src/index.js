import './styles/style.css';
import { Game } from './game';

document.addEventListener('DOMContentLoaded', function() {
    const gridElement = document.getElementById('grid');
    const messageElement = document.getElementById('message');
    const game = new Game(gridElement, messageElement);
    game.startGame();
});
