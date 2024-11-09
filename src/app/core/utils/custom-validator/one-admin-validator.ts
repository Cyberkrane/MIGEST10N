import { AbstractControl, ValidationErrors, AsyncValidatorFn } from "@angular/forms";
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export const oneAdminAsyncValidator: AsyncValidatorFn = (control: AbstractControl): Observable<ValidationErrors | null> => {
  return of(control.value).pipe(
    delay(500), // Simula una operación asincrónica con un retraso de 500 ms
    map(value => {
      if (typeof value === 'string' && value.toLocaleLowerCase().includes('onelegion')) {
        return { oneAdminValidator: 'Este nombre de usuario ya existe' };
      }
      return null;
    })
  );
};
