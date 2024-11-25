import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProject } from '../../interfaces/iproject.interface';
import { FormService } from '../../services/form.service';
import { ProjectService } from 'src/app/core/global-services/project.service';
import { Router } from '@angular/router';

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
    private readonly projectService: ProjectService,
    private readonly router: Router

  ) {
    // Suscribirse a los datos del formulario
    this.formService.formData$.subscribe(data => {
      this.formData = data;
    });
  }

  // Enviar los datos
  // submitForm() {
  //   this.projectService.addProject(this.formData).subscribe((project) => {
  //     console.log('Proyecto creado:', project);
  //   })
  //   this.router.navigate(['/list']);

  //   this.closeModal();
  // }

  // Enviar los datos
submitForm() {
  this.projectService.addProject(this.formData).subscribe({
    next: (project) => {
      console.log('Proyecto creado:', project);
      // Redirigir solo si la creación fue exitosa
      this.router.navigate(['/home']);
      // Cerrar el modal después de redirigir
      this.closeModal();
    },
    error: (err) => {
      console.error('Error al crear el proyecto:', err);
      // Puedes manejar el error aquí si es necesario
    }
  });
}

  openModal() {
    this.modalService.open(ModalComponent);
  }

  closeModal() {
    this.activeModal.close();
  }
}
