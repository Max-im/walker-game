import { Background } from './Background';
import { Control } from './Control';
import { ILevel } from './Levels/LevelType';
import { Platform } from './Platform';
import { Player } from './Player';
import { levels } from './Levels';
import { UI } from './UI';

export class Game {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d');
    player = new Player(this, 3);
    control = new Control();
    background = new Background(this);
    platforms: Platform[] = [];
    ui = new UI(this);
    levelIndex = 0;
    level: ILevel;
    speed = 10;
    scrollOffset = 0;
    gameOver = false;

    constructor() {
        this.canvas.width = 1024;
        this.canvas.height = 576;
        const Level = levels[this.levelIndex];
        this.level = new Level(this);
        this.platforms = this.level.platforms;
    }

    update() {
        this.ctx.fillStyle = '#999';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.update();
        this.level.update();

        this.platforms.forEach(platform => {
            platform.update();
            if (this.platformCollistions(this.player, platform)) {
                this.player.speedY = 0;
            }
        });

        // player control
        if (this.control.keys.right.pressed) {
            this.player.setWalkRightSkin();
            if (this.player.x < 500) this.player.speedX = this.speed;
            else {
                this.player.speedX = 0;
                if (this.scrollOffset < this.level.endX) {
                    this.scrollOffset += this.speed;
                    this.platforms.forEach(platform => platform.speedX = -this.speed);
                    this.background.update(this.speed);
                } else {
                    this.scrollOffset = this.level.endX;
                    this.player.speedX = this.speed;
                    this.platforms.forEach(platform => platform.speedX = 0);
                }
            }
        } else if (this.control.keys.left.pressed) {
            this.player.setWalkLeftSkin();
            if (this.player.x > 100) this.player.speedX = -this.speed;
            else {
                this.player.speedX = 0;
                const startBorder = -100;
                if (this.scrollOffset > startBorder) {
                    this.scrollOffset -= this.speed;
                    this.platforms.forEach(platform => platform.speedX = this.speed);
                    this.background.update(-this.speed);
                } else {
                    this.scrollOffset = startBorder;
                    this.platforms.forEach(platform => platform.speedX = 0);
                }
            }
        } else {
            this.player.stop();
            this.platforms.forEach(platform => platform.speedX = 0);
        }
        if (this.control.keys.up.pressed) {
            this.player.jump();
        }

        // win condition
        // const winnigOffset = 2000;
        // if (this.scrollOffset > winnigOffset) {
        //     console.log('you win');
        // }

        // lose condition
        if (this.player.y > this.canvas.height) {
            this.player.lives--;
            if (this.player.lives > 0) this.init();
            else this.gameOver = true;
        }
    }

    draw() {
        this.background.draw();
        this.platforms.forEach(platform => platform.draw());
        this.player.draw();
        this.ui.draw();
        this.level.draw();
    }

    private init() {
        this.scrollOffset = 0;
        this.player = new Player(this, this.player.lives);
        this.background = new Background(this);
        const Level = levels[this.levelIndex];
        this.level = new Level(this);
        this.platforms = this.level.platforms;
    }

    private checkCollistions(rect1: any, rect2: any): boolean {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
        );
    }

    private platformCollistions(topRrect: any, bottomRect: any): boolean {
        return (
            topRrect.y + topRrect.height <= bottomRect.y &&
            topRrect.y + topRrect.height + topRrect.speedY >= bottomRect.y &&
            topRrect.x + topRrect.width >= bottomRect.x &&
            topRrect.x <= bottomRect.x + bottomRect.width
        );
    }
}
