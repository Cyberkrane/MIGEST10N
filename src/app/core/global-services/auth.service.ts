import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { AuthData } from 'src/app/auth/models';
import { IUser } from '../global-interfaces/users.interface';
import { Router } from '@angular/router';

const FAKE_USER: IUser = {
  id: "1",
  username: "onelegion",
  password: "legion212",
  email: "oneLegion@example.com",
  token: "asd5678re78fd64fe487fsd4s5fd4s",
  roleAdmin: true
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _authUserLogged$: BehaviorSubject<null | IUser> = new BehaviorSubject<null | IUser>(null);
  public authUserLogged$ = this._authUserLogged$.asObservable();

  constructor(private readonly router: Router) { }

  login(data: AuthData): Observable<IUser> {

    // Verificación de usuario y contraseña
    if (data.username != FAKE_USER.username || data.password != FAKE_USER.password) {
      return throwError(() => new Error('❗❗❗ Datos de acceso incorrectos. ❗❗❗'));
    }

    this._authUserLogged$.next(FAKE_USER);
        // localStorage.setItem('token', JSON.stringify(FAKE_USER.token));// esta forma causa errores porque le agrega comillas dobles
        localStorage.setItem('token', FAKE_USER.token);

    return of(FAKE_USER);
  }

  logout(): void {
    this._authUserLogged$.next(null);
    this.router.navigate(['/auth/login']);
  }

  verifyToken(): Observable<boolean> {
    const isValid = localStorage.getItem('token') === FAKE_USER.token;
    if (isValid) {
      console.log('if: ', isValid);
      this._authUserLogged$.next(FAKE_USER);
    } else {
      this._authUserLogged$.next(null);
    }
    
    return of(isValid);
  }

}
