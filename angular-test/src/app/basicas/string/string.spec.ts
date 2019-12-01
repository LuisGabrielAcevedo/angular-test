import { message } from './string';

describe('Prueba string', () => {
    it('La funcion message() debe regresar un string', () => {
        const resp = message('Fernando');
        expect(typeof resp).toBe('string');
    });

    it('Debe retornar un saludo con el nombre enviado', () => {
        const name = 'Fernando';
        const resp = message(name);
        expect(resp).toContain(name);
    });
});
