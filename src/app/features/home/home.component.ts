import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  public toggle: string = 'arrow_forward_ios';

  toggleMenu(): void {
    this.toggle = this.toggle === 'arrow_back_ios' ? 'arrow_forward_ios' : 'arrow_back_ios';
  }

}
