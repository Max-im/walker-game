import { Boom } from '../Boom';
import { Enemy } from '../Enemies/Enemy';
import { Worm } from '../Enemies/Worm';
import { Game } from '../Game';
import { Platform } from '../Platform';
import { Portal } from '../Portal';
import { Level } from './Level';

const platformImg = <HTMLImageElement>document.getElementById('platform');

export class Level1 extends Level {
    portal: Portal;
    game: Game;
    platforms: Platform[] = [];
    enemies: Enemy[] = [];
    booms: Boom[] = [];
    endX = 5900;
    message = 'Level 2';
    enemiesToAdd = {
        1200: [
            new Worm(this.game, { x: 1200, y: 300 }),
            new Worm(this.game, { x: 1300, y: 300 }),
            new Worm(this.game, { x: 1400, y: 300 }),
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
        5000: [
            new Worm(this.game, { x: 900, y: 0 }),
            new Worm(this.game, { x: 1100, y: 0 }),
            new Worm(this.game, { x: 1200, y: 0 }),
        ],
    };

    constructor(game: Game) {
        super(game);
        this.game = game;
        this.portal = new Portal(this.game, { x: 6500, y: 276 });

        this.platforms = [
            new Platform(this.game, platformImg, { x: 2500, y: 200 }),
            new Platform(this.game, platformImg, { x: 3000, y: 100 }),
            new Platform(this.game, platformImg, { x: 3500, y: 50 }),
            new Platform(this.game, platformImg, { x: -110, y: 500 }),
            new Platform(this.game, platformImg, { x: 389, y: 500 }),
            new Platform(this.game, platformImg, { x: 1500, y: 500 }),
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
