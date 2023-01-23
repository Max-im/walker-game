import { Game } from './Game';
import { Sprite } from './Sprite';

export class Boom extends Sprite {
    frameX = 0;
    frameY = 0;
    maxFrame = 4;
    game: Game;
    width = 100;
    height = 90;
    image = <HTMLImageElement> document.getElementById('boom');
    x = 0;
    y: number;
    markDeleted = false;
    speedX = 0;

    constructor(game: Game, coord: {x: number, y: number}) {
        super();
        this.game = game;
        this.x = coord.x;
        this.y = coord.y;
    }

    update() {
        this.x += this.speedX;
        if (this.frameX < this.maxFrame) this.frameX++;
        else this.markDeleted = true;
    }
}
