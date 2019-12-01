import { RegisterForm } from './forms';
import { FormBuilder, AbstractControl } from '@angular/forms';


describe('Forms pruebas', () => {
    let component: RegisterForm;
    beforeEach(() => {
        component = new RegisterForm(new FormBuilder());
    });

    it('El form tiene que tener email y password', () => {
        expect(component.form.contains('email')).toBeTruthy();
        expect(component.form.contains('password')).toBeTruthy();
    });

    it('El email debe ser obligatorio', () => {
        const control: AbstractControl = component.form.get('email');
        control.setValue('');
        expect(control.valid).toBeFalsy();
    });

    it('El email debe ser un correo valido', () => {
        const control: AbstractControl = component.form.get('email');
        control.setValue('fernando@hotmail.com');
        expect(control.valid).toBeTruthy();
    });
});

