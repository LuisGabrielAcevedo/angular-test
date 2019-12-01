import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, throwError } from 'rxjs';


describe('MedicosComponent', () => {
    let componente: MedicosComponent;
    const service = new MedicosService(null);

    beforeEach(() => {
        componente = new MedicosComponent(service);
    });


    it('Init: Debe cargar los medicos', () => {
        const medicos = ['Luis', 'Gabriel'];
        spyOn(service, 'getMedicos').and.callFake(() => {
            return from([medicos]);
        });
        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThan(0);
    });

    it('Agregar medicos en el servicio debe ser llamado', () => {
        const spy = spyOn(service, 'agregarMedico').and.callFake(() => {
            return from([]);
        });
        componente.agregarMedico();
        expect(spy).toHaveBeenCalled();
    });

    it('Debe agregar un nuevo medico al arreglo', () => {
        const medico = { id: 1, name: 'Luis' };
        spyOn(service, 'agregarMedico').and.returnValue(from([medico]));
        componente.agregarMedico();
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
    });

    it('Si falla la adicion la propiedad mensajeError debe ser igual al error del servicio', () => {
        const myError = 'No se pudo agregar el medico';
        spyOn(service, 'agregarMedico').and.returnValue(throwError(myError));
        componente.agregarMedico();
        expect(componente.mensajeError).toBe(myError);
    });

    it('Debe de llamar al servidor para borrar un medico', () => {
        spyOn(window, 'confirm').and.returnValue(true);
        const spy = spyOn(service, 'borrarMedico').and.returnValue(from([]));
        componente.borrarMedico('1');
        expect(spy).toHaveBeenCalledWith('1');
    });
});
