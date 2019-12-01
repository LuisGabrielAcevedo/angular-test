import { Player } from './class';

describe('Class pruebas', () => {
    let player = new Player();

    beforeAll(() => {
        // console.log('beforeAll');
    });
    beforeEach(() => {
        player = new Player();
        // console.log('beforeEach');
    });
    afterAll(() => {
        // console.log('afterAll');
    });
    afterEach(() => {
        // console.log('afterEach');
    });

    it('Debe retornar 80 de hp si recibe 20 de d', () => {
        const resp = player.setDanger(20);
        expect(resp).toBe(80);
    });

    it('Debe retornar 0 de hp si recibe 100 de d', () => {
        const resp = player.setDanger(100);
        expect(resp).toBe(0);
    });
});
