import { Player2 } from './event-emitter';

describe('Player2 Emit pruebas', () => {
    const player = new Player2();
    xit('Debe emitir un evento cuando recibe d', () => {
        let newHp = 0;
        player.hpChange.subscribe(hp => {
            newHp = hp;
        });

        player.setDanger(1000);
        expect(newHp).toBe(0);
    });

    xit('Debe emitir un evento cuando recibe d y sobrevivir si es menor a 100', () => {
        let newHp = 0;
        player.hpChange.subscribe(hp => {
            newHp = hp;
        });

        player.setDanger(50);
        expect(newHp).toBe(50);
    });
});
