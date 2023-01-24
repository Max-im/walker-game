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
    gravity = 0.8;
    frameX = 0;
    frameY = 0;
    speedY = 0;
    speedX = 0;
    markDeleted = false;
    enemyTimer = 0;
    enemyInterval = 2000;

    constructor(game: Game) {
        super();
        this.game = game;
    }

    update(deltaTime: number) {
        this.x += this.speedX - this.speed;
        this.y += this.speedY;
        if (this.y + this.height + this.speedY <= this.game.canvas.height) this.speedY += this.gravity;
        this.updateSprite();

        if (this.enemyTimer > this.enemyInterval) {
            this.attack();
            this.enemyTimer = 0;
        } else {
            this.enemyTimer += deltaTime;
        }
    }

    kill() {
        this.markDeleted = true;
    }

    // eslint-disable-next-line
    protected attack() {}
}
