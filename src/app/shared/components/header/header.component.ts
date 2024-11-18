import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { IUser } from 'src/app/core/global-interfaces/users.interface';
import { AuthService } from 'src/app/core/global-services/auth.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = 'revisa el origen del titulo';

  public authenticatedUser$: Observable<IUser | null>;

  constructor(private readonly authService: AuthService, private readonly router: Router) {
    this.authenticatedUser$ = this.authService.authUserLogged$
   }

  ngOnInit(): void {

    timer(1000).subscribe(() => {
      this.title = 'MI GESTION';
    });
  }

  login(): void {
    this.router.navigate(['/auth/login']);
  }

  logout(): void {
    this.authService.logout();
    localStorage.removeItem('token');
  }
}
