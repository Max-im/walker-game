import { Game } from './Game';
import { Sprite } from './Sprite';

export class Player extends Sprite {
    game: Game;
    x = 0;
    y = 0;
    image = <HTMLImageElement>document.getElementById('idleRight');
    width = 0;
    height = 200;
    frameX = 0;
    frameY = 0;
    speedX = 0;
    speedY = 0;
    gravity = 0.8;
    maxFrame = 0;

    constructor(game: Game) {
        super();
        this.game = game;
        this.turnRight();
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.onGravity();
        this.updateSprite();
    }

    private onGravity() {
        if (this.y + this.height + this.speedY <= this.game.canvas.height) this.speedY += this.gravity;
        else this.speedY = 0;
    }

    private turnRight() {
        this.image = <HTMLImageElement>document.getElementById('idleRight');
        this.maxFrame = 59;
        this.width = 88.5;
    }

    private turnLeft() {
        this.image = <HTMLImageElement>document.getElementById('idleLeft');
        this.maxFrame = 59;
        this.width = 88.5;
    }

    setWalkRightSkin() {
        this.image = <HTMLImageElement>document.getElementById('walkRight');
        this.width = 170.5;
        this.maxFrame = 29;
    }

    setWalkLeftSkin() {
        this.image = <HTMLImageElement>document.getElementById('walkLeft');
        this.width = 170.5;
        this.maxFrame = 29;
    }

    stop() {
        this.turnRight();
        this.speedX = 0;
    }

    jump() {
        if (this.speedY === 0) this.speedY = -22;
    }
}
