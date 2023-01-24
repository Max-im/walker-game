import { Game } from '../Game';
import { Sprite } from '../Sprite';

export abstract class Enemy extends Sprite {
    game: Game;
    abstract x: number;
    abstract y: number;
    abstract image: HTMLImageElement;
    abstract width: number;
    abstract height: number;
    abstract maxFrame: number;
    abstract lives: number;
    abstract speed: number;
    frameX = 0;
    frameY = 0;
    speedY = 0;
    speedX = 0;
    gravity = 0.8;
    markDeleted = false;

    constructor(game: Game) {
        super();
        this.game = game;
    }

    update() {
        this.x += this.speedX - this.speed;
        this.y += this.speedY;
        if (this.y + this.height + this.speedY <= this.game.canvas.height) this.speedY += this.gravity;
        this.updateSprite();
    }

    kill() {
        this.markDeleted = true;
    }
}
