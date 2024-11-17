import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthHomeComponent } from './auth/components/auth-home/auth-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeTempComponent } from './home-temp/home-temp.component';
import { AuthGuard } from './core/guards/auth.guard';

// lazy loading confirmado
const routes: Routes = [

 {
    path: 'auth',
    component: AuthHomeComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'homeTEMP',
    canActivate: [AuthGuard], 
    component: HomeTempComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
