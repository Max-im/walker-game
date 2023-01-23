import { Game } from '../Game';
import { Platform } from '../Platform';
import { WinPortal } from '../WinPortal';

export abstract class Level {
    abstract platforms: Platform[];
    abstract portal: WinPortal;
    abstract game: Game;
    abstract endX: number;

    draw() {
        this.platforms.forEach(platform => platform.draw());
        this.portal.draw();
    }

    update() {
        this.portal.update();
    }
}
