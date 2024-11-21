import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MIGEST10N';

 constructor(private readonly router: Router) {}
    
  ngOnInit(): void {
    const userLogged = localStorage.getItem('token');
    console.log('userLogged: ', userLogged);
    if (userLogged) {
      this.router.navigate(['/home']);
    }
  }
}
