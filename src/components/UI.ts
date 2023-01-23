import { Game } from './Game';

export class UI {
    game: Game;
    heartImg = <HTMLImageElement>document.getElementById('heart');

    constructor(game: Game) {
        this.game = game;
    }

    // update() {

    // }

    draw() {
        const ctx = this.game.ctx;
        for (let i = 1; i <= this.game.player.lives; i++) {
            ctx.drawImage(this.heartImg, 20 * i + 20 * i, 20, 20, 20);
        }

        if (this.game.gameOver) {
            ctx.textAlign = 'center';
            ctx.fillStyle = 'white';
            ctx.font = '58px Tahoma';
            this.game.ctx.fillText('Game Over', this.game.canvas.width / 2, this.game.canvas.height / 2);
        }
    }
}
