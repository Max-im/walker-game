import { Boom } from '../Boom';
import { Enemy } from '../Enemies/Enemy';
import { Game } from '../Game';
import { Platform } from '../Platform';
import { Portal } from '../Portal';

export abstract class Level {
    game: Game;
    abstract platforms: Platform[];
    abstract portal: Portal;
    abstract endX: number;
    abstract message: null | string;
    abstract enemies: Enemy[];
    abstract booms: Boom[];
    abstract enemiesToAdd: {[key: string]: Enemy[]};

    constructor(game: Game) {
        this.game = game;
        setTimeout(() => this.message = null, 1000);
    }

    draw() {
        this.platforms.forEach(platform => platform.draw());
        this.portal.draw();
        this.enemies.forEach(enemy => enemy.draw());
        this.booms.forEach(boom => boom.draw());
    }

    update(deltaTime: number) {
        this.portal.update();
        this.enemies.forEach(enemy => enemy.update(deltaTime));
        this.booms.forEach(boom => boom.update());

        this.enemies = this.enemies.filter(enemy => {
            if (enemy.markDeleted) return false;
            if (enemy.y > this.game.canvas.height) return false;
            if (enemy.x + 500 < 0) return false;
            return true;
        });
        this.booms = this.booms.filter(boom => !boom.markDeleted);

        for (const offset in this.enemiesToAdd) {
            const enemiesList = this.enemiesToAdd[offset];
            if (this.game.scrollOffset > Number(offset) && enemiesList && enemiesList.length) {
                this.enemies.push(...enemiesList);
                delete this.enemiesToAdd[offset];
            }
        }
    }
}
