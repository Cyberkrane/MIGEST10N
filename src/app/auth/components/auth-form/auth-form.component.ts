import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/global-services/auth.service';
import { oneAdminAsyncValidator } from 'src/app/core/utils/custom-validator/one-admin-validator';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent {


  @Input() authFormTitle: string = '';

  public authForm: FormGroup;
  public hide: 'password' | 'text' = 'password';

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    if (this.authFormTitle === 'Register') {
      this.authForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')], oneAdminAsyncValidator], // formControl
        password: ['', [Validators.required, Validators.minLength(8)]], // formControl
        confirmPassword: [''] // formControl
      })
    }else {
      this.authForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')]], // formControl
        password: ['', [Validators.required, Validators.minLength(8)]], // formControl
      })
    }

  }

  public onSubmit(): void {
    this.authService.login(this.authForm.value).subscribe({
      next: (user) => {
        console.log('Te has logueado exitosamente!!  😊', user);
        this.router.navigate(['/homeTEMP']);
      },
      error: (error) => {
        console.log('error: ', error);
      }
    })
  }

  togglePasswordType(): void {
    if (this.hide === 'password') {
      this.hide = 'text';
    } else {
      this.hide = 'password';
    }
  }

}
