import { getRobots } from './array';

describe('Preba array', () => {
    it('Debe obtener 2 robots', () => {
        const resp = getRobots();
        expect(resp.length).toBeGreaterThanOrEqual(2);
    });

    it('Debe existir Megaman', () => {
        const resp = getRobots();
        expect(resp).toContain('Megaman');
    });
});
