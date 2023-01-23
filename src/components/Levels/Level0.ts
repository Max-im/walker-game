import { Game } from '../Game';
import { Platform } from '../Platform';
import { WinPortal } from '../WinPortal';
import { Level } from './Level';

const platformImg = <HTMLImageElement>document.getElementById('platform');

export class Level0 extends Level {
    game: Game;
    platforms: Platform[] = [];
    endX = 5900;
    portal: WinPortal;

    constructor(game: Game) {
        super();
        this.game = game;
        this.portal = new WinPortal(this.game, { x: 5500, y: 276 });

        this.platforms = [
            new Platform(this.game, platformImg, { x: 300, y: 200 }),
            new Platform(this.game, platformImg, { x: -110, y: 500 }),
            new Platform(this.game, platformImg, { x: 389, y: 500 }),
            new Platform(this.game, platformImg, { x: 888, y: 500 }),
            new Platform(this.game, platformImg, { x: 1900, y: 500 }),
            new Platform(this.game, platformImg, { x: 2400 - 1, y: 500 }),
            new Platform(this.game, platformImg, { x: 2900 - 2, y: 500 }),
            new Platform(this.game, platformImg, { x: 4000, y: 400 }),
            new Platform(this.game, platformImg, { x: 5000, y: 500 }),
            new Platform(this.game, platformImg, { x: 5500 - 1, y: 500 }),
            new Platform(this.game, platformImg, { x: 6000 - 2, y: 500 }),
            new Platform(this.game, platformImg, { x: 6500 - 3, y: 500 }),
        ];
    }

}
