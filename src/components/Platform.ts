import { Game } from './Game';

export class Platform {
    game: Game;
    x = 300;
    y = 300;
    width = 200;
    height = 20;
    speedX = 0;
    speedY = 0;

    constructor(game: Game) {
        this.game = game;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        this.game.ctx.fillStyle = 'blue';
        this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
