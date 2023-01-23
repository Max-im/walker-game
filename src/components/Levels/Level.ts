import { Boom } from '../Boom';
import { Enemy } from '../Enemies/Enemy';
import { Game } from '../Game';
import { Platform } from '../Platform';
import { Portal } from '../Portal';

export abstract class Level {
    abstract platforms: Platform[];
    abstract portal: Portal;
    abstract game: Game;
    abstract endX: number;
    abstract message: null | string;
    abstract enemies: Enemy[];
    abstract booms: Boom[];

    constructor() {
        setTimeout(() => this.message = null, 1000);
    }

    draw() {
        this.platforms.forEach(platform => platform.draw());
        this.enemies.forEach(enemy => enemy.draw());
        this.booms.forEach(boom => boom.draw());
        this.portal.draw();
    }

    update() {
        this.portal.update();
        this.enemies.forEach(enemy => enemy.update());
        this.booms.forEach(boom => boom.update());

        this.enemies = this.enemies.filter(enemy => !enemy.markDeleted);
        this.booms = this.booms.filter(boom => !boom.markDeleted);
    }
}
