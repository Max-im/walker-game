export class Game {
    canvas = <HTMLCanvasElement>document.getElementById('canvas');
    ctx = <CanvasRenderingContext2D> this.canvas.getContext('2d');
    width = 1024;
    height = 567;

    constructor() {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    }

    update(deltaTime: number) {
        console.log(deltaTime, 'update');
    }

    draw() {
        console.log('draw');
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
