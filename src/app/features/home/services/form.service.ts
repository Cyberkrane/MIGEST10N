import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProject } from '../interfaces/iproject.interface';

@Injectable({
  providedIn: 'root'
})
export class FormService {

 // BehaviorSubject para mantener los datos del formulario
 private readonly formDataSource = new BehaviorSubject<any>({});

 formData$ = this.formDataSource.asObservable();

 // Método para actualizar los datos
 updateFormData(data: IProject) {
   this.formDataSource.next(data);
 }
}
