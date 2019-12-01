import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  getMedicos()  {
    return from([]);
  }

  agregarMedico( medico: any ) {
    return this.http.post('...', medico );
  }

  borrarMedico( id: string ) {
    return this.http.delete('...' );
  }
}
