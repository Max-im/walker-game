import { Game } from '../Game';
import { Enemy } from './Enemy';

export class Spider extends Enemy {
    game: Game;
    x: number;
    y: number;
    image = <HTMLImageElement>document.getElementById('spider');
    width = 155;
    height = 88;
    frameX = 0;
    frameY = 0;
    speedX = 0;
    speedY = 0;
    maxFrame = 5;
    lives = 1;
    speed = 1.5;

    constructor(game: Game, coord: {x: number, y: number}) {
        super(game);
        this.game = game;
        this.x = coord.x;
        this.y = coord.y;
    }

    attack() {
        this.speedY = -Math.floor(Math.random() * (15 - 5 + 1) + 15);
    }
}
