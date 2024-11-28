import { Component, OnInit } from '@angular/core';
import { IProject } from '../../interfaces/iproject.interface';
import { ProjectService } from 'src/app/core/global-services/project.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'projects-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'budget', 'priority', 'createdAt', 'actions'];
  dataSource: IProject[] = [];

  constructor(private readonly productService: ProjectService, private readonly modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadAllProjects();
  }

  loadAllProjects() {
    this.productService.getAllProjects().subscribe(data => {
      this.dataSource = data;
    });
  }

  
  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.result.then((result) => {
      this.loadAllProjects();
    }).catch((error) => {
      console.log('Modal cerrado sin enviar datos');
    });
  }

  editProject(project: IProject) {
   this.productService.updateProject(project).subscribe(data => {
     project = data;
     this.loadAllProjects();
   })
  }

  deleteProject(id: string) {
   this.productService.deleteProject(id).subscribe(data => {
    console.log('data: ', data); 
    this.loadAllProjects();
   })
  }

}
