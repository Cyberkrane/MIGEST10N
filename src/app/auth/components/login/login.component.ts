import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  titleForm = 'Login';

  constructor() { }

  ngOnInit(): void {
    localStorage.removeItem('token');
  }

}
