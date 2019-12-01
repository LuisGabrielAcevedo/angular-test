import { EventEmitter } from '@angular/core';


export class Player2 {
    hp: number;
    hpChange: EventEmitter<number> = new EventEmitter();
    constructor() {
        this.hp = 100;
    }

    setDanger(d: number) {
        if (d >= this.hp) {
            this.hp = 0;
        } else {
            this.hp = this.hp - d;
        }
        this.hpChange.emit(this.hp);
    }
}
