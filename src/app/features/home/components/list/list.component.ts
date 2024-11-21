import { Component } from '@angular/core';
import { IProject } from '../../interfaces/iproject.interface';

const PROJECT_DATA: IProject[] = [
  { id: '1',name: 'Proyecto 1', budget: 100000, priority: 1, createdAt: new Date() },
  { id: '2',name: 'Proyecto 2', budget: 200000, priority: 2, createdAt: new Date() },
  { id: '3',name: 'Proyecto 3', budget: 300000, priority: 3, createdAt: new Date() },
  { id: '4',name: 'Proyecto 4', budget: 400000, priority: 4, createdAt: new Date() },
];


@Component({
  selector: 'projects-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  displayedColumns: string[] = ['name', 'budget', 'priority', 'createdAt'];
  dataSource: IProject[] = PROJECT_DATA;

  


}
