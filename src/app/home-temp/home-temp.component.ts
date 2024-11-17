import { Component } from '@angular/core';
import { AuthService } from '../core/global-services/auth.service';
import { Observable } from 'rxjs';
import { IUser } from '../core/global-interfaces/users.interface';

@Component({
  selector: 'app-home-temp',
  templateUrl: './home-temp.component.html',
  styleUrls: ['./home-temp.component.scss']
})
export class HomeTempComponent  {

  authenticatedUser$: Observable<IUser | null>;

  constructor(private readonly authService: AuthService) {
    this.authenticatedUser$ = this.authService.authUserLogged$
   }

   logout(): void {
    this.authService.logout();
    localStorage.removeItem('token');
  }

}
