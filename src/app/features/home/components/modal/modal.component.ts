import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProject } from '../../interfaces/iproject.interface';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  formData: IProject = {
    id: '',
    name: '',
    budget: 0,
    priority: 0,
    createdAt: new Date()
  };
  titleForm: string = '';

  constructor(public activeModal: NgbActiveModal,
    private readonly formService: FormService
  ) {
    // Suscribirse a los datos del formulario
    this.formService.formData$.subscribe(data => {
      this.formData = data;
    });
  }

  // Enviar los datos
  submitForm() {
    console.log('Datos del formulario:', this.formData);
    this.activeModal.close(this.formData);
  }
}