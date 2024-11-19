import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: '**',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
