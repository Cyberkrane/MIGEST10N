import { Component, OnInit } from '@angular/core';
import { IProject } from '../../interfaces/iproject.interface';
import { ProjectService } from 'src/app/core/global-services/project.service';

@Component({
  selector: 'projects-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent  implements OnInit {

  displayedColumns: string[] = ['name', 'budget', 'priority', 'createdAt'];
  dataSource: IProject[] = [];

  constructor(private readonly productService: ProjectService) { }

  ngOnInit(): void {
    this.productService.getAllProjects().subscribe(data => {
      this.dataSource = data;
    });
  }


}
