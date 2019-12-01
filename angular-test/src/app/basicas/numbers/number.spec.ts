import { increment } from './number';

describe('Prueba number', () => {

    it('Debe retornar 100 si el numero incresado es mayor a 100', () => {
        const resp = increment(103);
        expect(resp).toBe(100);
    });

    it('Debe retornar el número ingresado mas 1 si no es mayor a 100', () => {
        const resp = increment(50);
        expect(resp).toBe(51);
    });
});
