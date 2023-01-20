import { Game } from './Game';

export class Platform {
    game: Game;
    x: number;
    y: number;
    width = 200;
    height = 20;
    speedX = 0;
    speedY = 0;

    constructor(game: Game, coord: {x: number, y: number}) {
        this.game = game;
        this.x = coord.x;
        this.y = coord.y;
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
