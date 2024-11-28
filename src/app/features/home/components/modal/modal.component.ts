import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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

  @Output() projectAdded = new EventEmitter<IProject>();

  constructor(public activeModal: NgbActiveModal,
    private readonly formService: FormService,
    private readonly projectService: ProjectService,
  ) {
    // Suscribirse a los datos del formulario
    this.formService.formData$.subscribe(data => {
      this.formData = data;
    });
  }

  // Enviar los datos
  submitForm() {
    this.projectService.addProject(this.formData).subscribe({
      next: (project) => {
        console.log('Proyecto creado:', project);
        this.projectAdded.emit(project); // Emitir el evento con el proyecto creado
        this.closeModal();
      },
      error: (err) => {
        console.error('Error al crear el proyecto:', err);
      }
    });
  }

  closeModal() {
    this.activeModal.close();
  }
}
