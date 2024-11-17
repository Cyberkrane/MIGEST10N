import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { AuthService } from 'src/app/core/global-services/auth.service';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input() title: string = 'revisa el origen del titulo';

  @Output() titleChange = new EventEmitter<string>();




  constructor(private readonly router: Router,
    private readonly authService: AuthService
  ) {
   
  }

  ngOnInit(): void {

    timer(5000).subscribe(() => {
      this.title = 'MI GESTION';
      this.titleChange.emit(this.title);
    });


  }
}
