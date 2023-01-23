import { Game } from '../Game';
import { Platform } from '../Platform';

export interface ILevel {
    game: Game;
    platforms: Platform[];
    endX: number;
}
