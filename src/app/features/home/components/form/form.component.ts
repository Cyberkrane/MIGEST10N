import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {

  public projectForm: FormGroup;
  @Input() public titleForm: string = '';

  constructor(private readonly fb: FormBuilder, 
    private readonly formService: FormService
  ) {
    this.projectForm = this.fb.group({
      id: [''],
      name: [''],
      budget: [''],
      priority: [''],
      createdAt: ['']
    })
   }


  // Método que se ejecuta cuando hay un cambio en el formulario
  onFormChange() {
    this.formService.updateFormData(this.projectForm.value);
  }

   onSubmit() {
    console.log('Form value: ',this.projectForm.value);
  }
}
