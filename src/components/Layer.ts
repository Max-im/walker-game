import { Game } from './Game';

export class Layer {
    game: Game;
    image: HTMLImageElement;
    height: number;
    width: number;
    x = -1;
    y = -1;
    speed: number;

    constructor(game: Game, image: HTMLImageElement, speed: number) {
        this.game = game;
        this.image = image;
        this.width = image.width;
        this.height = image.height;
        this.speed = speed;
    }

    update(speed: number) {
        if (this.x <= -this.width) this.x = 0;
        else this.x -= speed * this.speed;
    }

    draw() {
        this.game.ctx.drawImage(this.image, this.x, this.y);
        this.game.ctx.drawImage(this.image, this.x + this.width, this.y);
    }
}
