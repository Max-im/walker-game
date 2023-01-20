import { Player } from './Player';

export class Control {
    keys: {[action: string]: {key: string, pressed: boolean}} = {
        right: { key: 'd', pressed: false },
        left: { key: 'a', pressed: false },
        up: { key: 'w',  pressed: false }
    };


    constructor() {
        this.addDesktopControl();
    }

    addDesktopControl() {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            for (const action in this.keys) {
                if (e.key === this.keys[action].key) {
                    this.keys[action].pressed = true;
                }
            }
        });

        window.addEventListener('keyup', (e: KeyboardEvent) => {
            for (const action in this.keys) {
                if (e.key === this.keys[action].key) {
                    this.keys[action].pressed = false;
                }
            }
        });
    }
}
