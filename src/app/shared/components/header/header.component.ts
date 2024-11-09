import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'shared-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = 'revisa el origen del titulo';

  @Output() titleChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

    timer(5000).subscribe(() => {
      this.title = 'MI GESTION';
      this.titleChange.emit(this.title);
    });
  }

}
