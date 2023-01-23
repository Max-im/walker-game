import { Game } from './Game';
import { Sprite } from './Sprite';

export class WinPortal extends Sprite {
    image = <HTMLImageElement>document.getElementById('door');
    frameX = 0;
    frameY = 0;
    maxFrame = 5;
    x: number;
    y: number;
    game: Game;
    opened = false;
    height = 224;
    width = 184;
    speedX = 0;

    constructor(game: Game, coord: {x: number, y: number}) {
        super();
        this.game = game;
        this.x = coord.x;
        this.y = coord.y;
    }

    update() {
        this.x += this.speedX;
        if (this.opened && this.frameX < this.maxFrame - 1) this.frameX++;
        else if (!this.opened) this.frameX = 0;
        else this.frameX = this.maxFrame - 1;
    }

}
