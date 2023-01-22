import { Game } from './Game';
import { Layer } from './Layer';

export class Background {
    game: Game;
    layers: Layer[] = [];

    constructor(game: Game) {
        this.game = game;

        this.layers = [
            new Layer(game, <HTMLImageElement>document.getElementById('bg'), 0),
            new Layer(game, <HTMLImageElement>document.getElementById('hills'), 0.5),
        ];
    }

    update(speed: number) {
        this.layers.forEach(layer => layer.update(speed));
    }

    draw() {
        this.layers.forEach(layer => layer.draw());
    }
}
