import { Control } from './Control';
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
    gravity = 0;
    maxFrame = 0;
    control = new Control(this);

    constructor(game: Game) {
        super();
        this.game = game;
        this.turnRight();
    }

    update() {
        this.updateSprite();
        this.speedY += this.gravity;
        this.x += this.speedX;
        this.y += this.speedY;
    }

    turnRight() {
        this.maxFrame = 59;
        this.width = 177;
        this.image = <HTMLImageElement>document.getElementById('idleRight');
    }

    turnLeft() {
        this.maxFrame = 59;
        this.width = 177;
        this.image = <HTMLImageElement>document.getElementById('idleLeft');
    }

    walkRight() {
        this.width = 341;
        this.maxFrame = 29;
        this.image = <HTMLImageElement>document.getElementById('walkRight');
        this.speedX = 15;
    }

    walkLeft() {
        this.width = 341;
        this.maxFrame = 29;
        this.image = <HTMLImageElement>document.getElementById('walkLeft');
        this.speedX = -15;
    }

    stop(direction: 'right' | 'left') {
        if (direction === 'right') this.turnRight();
        else if (direction === 'left') this.turnLeft();
        this.speedX = 0;
    }

    jump() {
        // this.speedY -= 30;
    }
}
