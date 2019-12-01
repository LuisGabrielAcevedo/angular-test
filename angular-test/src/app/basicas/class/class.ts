

export class Player {
    hp: number;
    constructor() {
        this.hp = 100;
    }

    setDanger(d: number) {
        if (d >= this.hp) {
            this.hp = 0;
        } else {
            this.hp = this.hp - d;
        }
        return this.hp;
    }
}
