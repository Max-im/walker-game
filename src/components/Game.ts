import { Background } from './Background';
import { Control } from './Control';
import { Player } from './Player';
import { levels } from './Levels';
import { UI } from './UI';
import { Platform } from './Platform';
import { Level } from './Levels/Level';
import { Enemy } from './Enemies/Enemy';
import { Boom } from './Boom';

export class Game {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d');
    player = new Player(this, 3);
    control = new Control();
    background = new Background(this);
    ui = new UI(this);
    levelIndex = 0;
    level: Level;
    speed = 10;
    scrollOffset = 0;
    gameOver = false;
    win = false;

    constructor() {
        this.canvas.width = 1024;
        this.canvas.height = 576;
        const Level = levels[this.levelIndex];
        this.level = new Level(this);
    }

    update(deltaTime: number) {
        this.ctx.fillStyle = '#999';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.update();
        this.level.update(deltaTime);

        this.level.platforms.forEach((platform: Platform) => {
            platform.update();
            if (this.platformCollistions(this.player, platform)) {
                this.player.speedY = 0;
            }
            this.level.enemies.forEach(enemy => {
                if (this.platformCollistions(enemy, platform)) {
                    enemy.speedY = 0;
                }
            });
        });

        if (this.gameOver || this.win) {
            this.stopMoving();
            return;
        }
        // player control
        if (this.control.keys.right.pressed && this.control.keys.left.pressed) {
            this.player.stop();
            this.stopMoving();
        } else if (this.control.keys.right.pressed) {
            this.player.setWalkRightSkin();
            if (this.player.x < 500) this.player.speedX = this.speed;
            else {
                this.player.speedX = 0;
                if (this.scrollOffset < this.level.endX) {
                    this.scrollOffset += this.speed;
                    this.background.update(this.speed);
                    this.level.portal.speedX = -this.speed;
                    this.level.platforms.forEach(platform => platform.speedX = -this.speed);
                    this.level.enemies.forEach(enemy => enemy.speedX = -this.speed + enemy.speed);
                } else {
                    this.scrollOffset = this.level.endX;
                    this.stopMoving();
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
                    this.level.portal.speedX = this.speed;
                    this.level.platforms.forEach(platform => platform.speedX = this.speed);
                    this.level.enemies.forEach(enemy => enemy.speedX = this.speed - enemy.speed);
                    this.background.update(-this.speed);
                } else {
                    this.scrollOffset = startBorder;
                    this.stopMoving();
                }
            }
        } else {
            this.player.stop();
            this.stopMoving();
        }

        if (this.control.keys.up.pressed) {
            this.player.jump();
        }

        // enemy touch
        this.level.enemies.forEach(enemy => {
            if (enemy.markDeleted) return;
            if (this.checkCollistions(enemy, this.player)) {
                if (this.enemyKillCollistions(this.player, enemy)) {
                    enemy.kill();
                    this.level.booms.push(new Boom(this, { x: enemy.x, y: enemy.y + enemy.height / 2 }));
                    this.player.speedY = -10;
                } else {
                    this.loose();
                }
            }
        });

        // winning
        if (this.checkCollistions(this.level.portal, this.player)) {
            this.level.portal.touched = true;
        }

        if (this.level.portal.opened) {
            if (levels[this.levelIndex + 1]) {
                this.levelIndex++;
                this.init();
            } else this.win = true;
        }

        // lose condition
        if (this.player.y > this.canvas.height) {
            this.loose();
        }
    }

    draw() {
        this.background.draw();
        this.level.draw();
        this.player.draw();
        this.ui.draw();
    }

    private loose() {
        this.player.lives--;
        if (this.player.lives > 0) this.init();
        else this.gameOver = true;
    }

    private init() {
        this.scrollOffset = 0;
        this.player = new Player(this, this.player.lives);
        this.background = new Background(this);
        const Level = levels[this.levelIndex];
        this.level = new Level(this);
    }

    private stopMoving() {
        this.level.platforms.forEach(platform => platform.speedX = 0);
        this.level.enemies.forEach(enemy => enemy.speedX = 0);
        this.level.portal.speedX = 0;
    }

    private checkCollistions(rect1: any, rect2: any): boolean {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
        );
    }

    private platformCollistions(topRrect: any, platform: Platform): boolean {
        return (
            topRrect.y + topRrect.height <= platform.y &&
            topRrect.y + topRrect.height + topRrect.speedY >= platform.y &&
            topRrect.x + topRrect.width >= platform.x &&
            topRrect.x <= platform.x + platform.width
        );
    }

    private enemyKillCollistions(player: Player, enemy: Enemy): boolean {
        return (
            player.y + player.height - 10 <= enemy.y &&
            player.y + player.height + player.speedY >= enemy.y &&
            player.x + player.width >= enemy.x &&
            player.x <= enemy.x + enemy.width
        );
    }
}
