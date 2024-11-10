import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/core/global-services/users.service';
import { oneAdminAsyncValidator } from 'src/app/core/utils/custom-validator/one-admin-validator';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {


  @Input() authFormTitle: string = '';

  public authForm: FormGroup;

  constructor( 
              private readonly formBuilder: FormBuilder,
              private readonly userService: UsersService
            ) {
    this.authForm = this.formBuilder.group({
      user: ['',[Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z]+$')], oneAdminAsyncValidator], // formControl
      password: ['', [Validators.required, Validators.minLength(8)]], // formControl
      confirmPassword: [''] // formControl
    })
   }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((users) => {
      console.log('users: ', users);
    })
  }

  public onSubmit(): void {
    console.log('AuthForm: ', this.authForm.value);
  }

}
