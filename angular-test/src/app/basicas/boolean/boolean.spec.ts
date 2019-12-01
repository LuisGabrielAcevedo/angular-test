import { isAuth } from './boolean';

describe('Prueba boolean', () => {
    it ('Debe regrear true', () => {
        const resp = isAuth();
        expect(resp).toBeTruthy();
    });
});
