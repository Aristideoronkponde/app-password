import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  formValid =new FormGroup({
    name :new FormControl(''),
    password:new FormControl('',[Validators.required,Validators.min(8)])
  })

  onSubmit(){
    console.log(this.formValid.value.name);
    
  }
}
