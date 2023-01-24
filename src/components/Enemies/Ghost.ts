import { Game } from '../Game';
import { Enemy } from './Enemy';

export class Ghost extends Enemy {
    game: Game;
    x: number;
    y: number;
    image = <HTMLImageElement>document.getElementById('ghost');
    width = 130.5;
    height = 104.5;
    frameX = 0;
    frameY = 0;
    speedX = 0;
    speedY = 0;
    maxFrame = 5;
    lives = 1;
    speed = 4;
    gravity = 0;

    constructor(game: Game, coord: {x: number, y: number}) {
        super(game);
        this.game = game;
        this.x = coord.x;
        this.y = coord.y;
    }
}
