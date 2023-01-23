import { Game } from '../Game';
import { Platform } from '../Platform';
import { Portal } from '../Portal';

export abstract class Level {
    abstract platforms: Platform[];
    abstract portal: Portal;
    abstract game: Game;
    abstract endX: number;
    abstract message: null | string;

    constructor() {
        setTimeout(() => this.message = null, 1000);
    }

    draw() {
        this.platforms.forEach(platform => platform.draw());
        this.portal.draw();
    }

    update() {
        this.portal.update();
    }
}
