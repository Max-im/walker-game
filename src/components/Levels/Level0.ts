import { Boom } from '../Boom';
import { Enemy } from '../Enemies/Enemy';
import { Worm } from '../Enemies/Worm';
import { Game } from '../Game';
import { Platform } from '../Platform';
import { Portal } from '../Portal';
import { Level } from './Level';

const platformImg = <HTMLImageElement>document.getElementById('platform');

export class Level0 extends Level {
    game: Game;
    platforms: Platform[] = [];
    enemies: Enemy[] = [];
    booms: Boom[] = [];
    endX = 5900;
    portal: Portal;
    message = 'Level 1';
    enemiesToAdd = {
        1200: [
            new Worm(this.game, { x: 1000, y: 300 }),
            new Worm(this.game, { x: 1200, y: 300 }),
            new Worm(this.game, { x: 1350, y: 300 }),
            new Worm(this.game, { x: 1500, y: 300 }),
        ],
        1600: [
            new Worm(this.game, { x: 1600, y: 100 }),
        ],
        3300: [
            new Worm(this.game, { x: 900, y: 0 }),
            new Worm(this.game, { x: 1100, y: 0 }),
        ],
        4500: [
            new Worm(this.game, { x: 900, y: 0 }),
        ],
    };

    constructor(game: Game) {
        super(game);
        this.game = game;
        this.portal = new Portal(this.game, { x: 5500, y: 276 });

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

        this.enemies = [
            new Worm(this.game, { x: 400, y: 300 }),
            new Worm(this.game, { x: 550, y: 300 }),
            new Worm(this.game, { x: 700, y: 300 }),
        ];
    }
}
