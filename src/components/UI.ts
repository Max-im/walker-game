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
        const width = this.game.canvas.width / 2;
        const height = this.game.canvas.height / 2;

        if (this.game.gameOver) this.game.ctx.fillText('Game Over', width, height);
        if (this.game.win) this.game.ctx.fillText('You Win', width, height);
        if (this.game.level.message) this.game.ctx.fillText(this.game.level.message, width, height);
    }
}
