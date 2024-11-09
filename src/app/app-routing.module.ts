import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from './auth/components/auth-home/auth-home.component';

// lazy loading confirmado
const routes: Routes = [

 {
    path: 'auth',
    component: AuthHomeComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
