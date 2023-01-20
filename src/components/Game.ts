import { Control } from './Control';
import { Platform } from './Platform';
import { Player } from './Player';

export class Game {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d');
    player = new Player(this);
    control = new Control();
    platforms: Platform[] = [new Platform(this)];
    speed = 15;

    constructor() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    update() {
        this.ctx.fillStyle = '#4d79bc';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.update();

        this.platforms.forEach(platform => {
            platform.update();

            if (this.checkTopCollistions(this.player, platform)) {
                this.player.speedY = 0;
            }
        });

        // player control
        if (this.control.keys.right.pressed) {
            this.player.setWalkRightSkin();
            if (this.player.x < 400) this.player.speedX = this.speed;
            else {
                this.player.speedX = 0;
                this.platforms.forEach(platform => platform.speedX = -this.speed);
            }
        } else if (this.control.keys.left.pressed) {
            this.player.setWalkLeftSkin();
            if (this.player.x > 100) this.player.speedX = -this.speed;
            else {
                this.player.speedX = 0;
                this.platforms.forEach(platform => platform.speedX = this.speed);
            }
        } else if (this.control.keys.up.pressed) {
            this.player.jump();
        } else {
            this.player.stop();
            this.platforms.forEach(platform => platform.speedX = 0);
        }
    }

    draw() {
        this.player.draw();
        this.platforms.forEach(platform => platform.draw());
    }

    private checkCollistions(rect1: any, rect2: any): boolean {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
        );
    }

    private checkTopCollistions(topRrect: any, bottomRect: any): boolean {
        return (
            topRrect.y + topRrect.height <= bottomRect.y &&
            topRrect.y + topRrect.height + topRrect.speedY >= bottomRect.y &&
            topRrect.x + topRrect.width >= bottomRect.x &&
            topRrect.x <= bottomRect.x + bottomRect.width
        );
    }
}
