import { Player } from './Player';

export class Game {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d');
    player = new Player(this);

    constructor() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    update() {
        this.ctx.fillStyle = '#4d79bc';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.update();
    }

    draw() {
        this.player.draw();
    }

    private checkCollistions(rect1: any, rect2: any): boolean {
        return (
            rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.y + rect1.height > rect2.y
        );
    }
}
