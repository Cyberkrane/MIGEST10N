import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public toggle: string = 'arrow_forward_ios';

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.toggle = this.toggle === 'arrow_back_ios' ? 'arrow_forward_ios' : 'arrow_back_ios';
  }

}
