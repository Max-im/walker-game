import { Game } from '../Game';
import { Enemy } from './Enemy';

export class Worm extends Enemy {
    game: Game;
    x: number;
    y: number;
    image = <HTMLImageElement>document.getElementById('worm');
    width = 114.5;
    height = 85.5;
    frameX = 0;
    frameY = 0;
    speedX = 0;
    speedY = 0;
    maxFrame = 5;
    lives = 1;
    speed = 1;

    constructor(game: Game, coord: {x: number, y: number}) {
        super();
        this.game = game;
        this.x = coord.x;
        this.y = coord.y;
    }
}
