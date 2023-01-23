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
    touched = false;
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
        if (this.touched && this.frameX < this.maxFrame - 1) this.frameX++;
        else if (!this.touched) this.frameX = 0;
        else {
            this.frameX = this.maxFrame - 1;
            setTimeout(() => this.opened = true, 1000);
        }
    }

}
