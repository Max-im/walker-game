import { Player } from './Player';

export class Control {
    player: Player;
    keys: string[] = [];

    private controlKeys = ['ArrowRight', 'ArrowLeft', 'ArrowUp'];

    constructor(player: Player) {
        this.player = player;
        this.addDesktopControl();
    }

    addDesktopControl() {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if (!this.controlKeys.includes(e.key)) return;

            if (e.key === 'ArrowRight') this.player.walkRight();
            if (e.key === 'ArrowLeft') this.player.walkLeft();
            if (e.key === 'ArrowUp') this.player.jump();
        });

        window.addEventListener('keyup', (e: KeyboardEvent) => {
            if (!this.controlKeys.includes(e.key)) return;

            if (e.key === 'ArrowRight') this.player.stop('right');
            if (e.key === 'ArrowLeft') this.player.stop('left');
            if (e.key === 'ArrowUp') this.player.stop('left');
        });
    }
}
