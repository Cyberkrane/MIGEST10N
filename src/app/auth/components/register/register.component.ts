import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  titleForm = 'Register';

  constructor() { }

  ngOnInit(): void {
  }

}
