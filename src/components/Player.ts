import { Game } from './Game';
import { Sprite } from './Sprite';

export class Player extends Sprite {
    game: Game;
    x = 100;
    y = 100;
    width = 0;
    height = 400;
    image = <HTMLImageElement>document.getElementById('idleRight');
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
        this.updateSprite();
        this.x += this.speedX;
        this.y += this.speedY;
        this.onGravity();
    }

    private onGravity() {
        if (this.y + this.height + this.speedY <= this.game.canvas.height) this.speedY += this.gravity;
        else this.speedY = 0;
    }

    private turnRight() {
        this.maxFrame = 59;
        this.width = 177;
        this.image = <HTMLImageElement>document.getElementById('idleRight');
    }

    private turnLeft() {
        this.maxFrame = 59;
        this.width = 177;
        this.image = <HTMLImageElement>document.getElementById('idleLeft');
    }

    setWalkRightSkin() {
        this.width = 341;
        this.maxFrame = 29;
        this.image = <HTMLImageElement>document.getElementById('walkRight');
    }

    setWalkLeftSkin() {
        this.width = 341;
        this.maxFrame = 29;
        this.image = <HTMLImageElement>document.getElementById('walkLeft');
    }

    stop() {
        this.turnRight();
        this.speedX = 0;
    }

    jump() {
        this.speedY -= 5;
    }
}
