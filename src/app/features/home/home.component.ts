import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  public toggle: string = 'arrow_forward_ios';

    
    constructor(private readonly modalService: NgbModal) { }

    openModal() {
      const modalRef = this.modalService.open(ModalComponent);
      modalRef.result.then((result) => {
        console.log('Resultado del formulario:', result);
      }).catch((error) => {
        console.log('Modal cerrado sin enviar datos');
      });
    }
  toggleMenu(): void {
    this.toggle = this.toggle === 'arrow_back_ios' ? 'arrow_forward_ios' : 'arrow_back_ios';
  }

}
