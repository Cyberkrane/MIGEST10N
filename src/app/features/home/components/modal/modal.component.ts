import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProject } from '../../interfaces/iproject.interface';
import { FormService } from '../../services/form.service';
import { ProjectService } from 'src/app/core/global-services/project.service';

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
  titleForm: string = 'Create new project';

  constructor(public activeModal: NgbActiveModal,
              private readonly modalService: NgbModal,
              private readonly formService: FormService,
              private readonly projectService: ProjectService

  ) {
    // Suscribirse a los datos del formulario
    this.formService.formData$.subscribe(data => {
      this.formData = data;
    });
  }

  // Enviar los datos
  submitForm() {
    // console.log('Datos del formulario:', this.formData);
    this.projectService.addProject(this.formData).subscribe((project) => {
      console.log('Proyecto creado:', project);
    })

  //  this.openModal();
  this.closeModal();
  }

  openModal() {
    this.modalService.open(ModalComponent);
  }

  closeModal() {
    this.activeModal.close();
  }
}
