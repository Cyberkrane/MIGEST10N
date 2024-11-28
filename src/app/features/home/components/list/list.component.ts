import { Component, OnInit } from '@angular/core';
import { IProject } from '../../interfaces/iproject.interface';
import { ProjectService } from 'src/app/core/global-services/project.service';

@Component({
  selector: 'projects-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'budget', 'priority', 'createdAt', 'actions'];
  dataSource: IProject[] = [];

  constructor(private readonly productService: ProjectService) { }

  ngOnInit(): void {
    this.loadAllProjects();
  }

  loadAllProjects() {
    this.productService.getAllProjects().subscribe(data => {
      this.dataSource = data;
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
