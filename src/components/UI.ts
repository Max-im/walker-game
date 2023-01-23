import { Game } from './Game';

export class UI {
    game: Game;
    heartImg = <HTMLImageElement>document.getElementById('heart');

    constructor(game: Game) {
        this.game = game;
    }

    draw() {
        const ctx = this.game.ctx;
        for (let i = 1; i <= this.game.player.lives; i++) {
            ctx.drawImage(this.heartImg, 20 * i + 20 * i, 20, 20, 20);
        }

        ctx.textAlign = 'center';
        ctx.fillStyle = 'white';
        ctx.font = '58px Tahoma';

        if (this.game.gameOver) {
            this.game.ctx.fillText('Game Over', this.game.canvas.width / 2, this.game.canvas.height / 2);
        }

        if (this.game.win) {
            this.game.ctx.fillText('You Win', this.game.canvas.width / 2, this.game.canvas.height / 2);
        }
    }
}
