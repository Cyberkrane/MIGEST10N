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
    private readonly formService: FormService,
  ) {
    this.projectForm = this.fb.group({
      id: this.idAlfanumericGenerator(),
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

  idAlfanumericGenerator() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      id += characters.charAt(randomIndex);
    }
    return id;
  }

   onSubmit() {
    this.projectForm.value.id = this.idAlfanumericGenerator();
    console.log('Form value: ',this.projectForm.value);
   }
}
